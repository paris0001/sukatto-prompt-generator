// ===== SETTING DESCRIPTIONS =====
const settingDescriptions = {
  "電車": "Crowded Japanese commuter train interior. Silver poles, blue priority seats, afternoon light through windows. The train sways gently.",
  "新幹線": "Japanese Shinkansen bullet train interior. Green car, comfortable seats, large windows showing countryside blur past. Quiet atmosphere.",
  "カフェ": "A cozy neighborhood cafe. Warm lighting, wooden tables, plants by the window. Afternoon sun streams through windows. A peaceful atmosphere.",
  "レストラン": "Upscale Japanese restaurant interior. Warm indirect lighting, clean wooden counter, private dining area. Evening setting.",
  "コンビニ": "Japanese convenience store interior. Bright fluorescent lighting, organized shelves, clean floor. Late afternoon.",
  "オフィス": "Modern Japanese office. Open plan workspace, fluorescent ceiling lights, desks with computers. Business hours.",
  "会議室": "Corporate meeting room. Long table, projector screen, glass walls looking out to the office floor. Tense atmosphere.",
  "病院": "Japanese hospital corridor and waiting area. Clean white walls, blue chairs, soft lighting. Quiet, hushed tones.",
  "学校": "Japanese school hallway or classroom. Wooden desks, blackboard, afternoon light through large windows. After school hours.",
  "駐車場": "Large shopping mall outdoor parking lot. Bright afternoon sun. Marked parking spaces near the entrance.",
  "スーパー": "Japanese supermarket interior. Wide aisles, product displays, checkout counters. Afternoon shopping hours.",
  "公園": "Japanese neighborhood park. Benches, trees, playground equipment. Warm afternoon sunlight filtering through leaves.",
  "住宅街": "Quiet Japanese residential neighborhood. Narrow streets, low houses, evening light. Calm atmosphere.",
  "マンション": "Modern Japanese apartment building entrance hall and corridor. Clean, well-maintained, automatic doors.",
  "結婚式場": "Japanese wedding venue interior. Elegant decorations, round tables, chandelier lighting. Guests in formal attire.",
  "役所": "Japanese municipal government office. Counter windows, waiting area with number tickets, bureaucratic atmosphere.",
  "銀行": "Japanese bank interior. Polished floors, teller windows, waiting area with numbered tickets. Business hours.",
  "美容院": "Japanese hair salon. Mirrors, styling chairs, warm lighting. Magazines on the counter.",
  "ファミレス": "Japanese family restaurant. Booth seating, menu tablets, warm interior lighting. Casual dining atmosphere.",
  "居酒屋": "Japanese izakaya interior. Warm wood tones, paper lanterns, small dishes on the counter. Evening atmosphere.",
  "タクシー": "Inside a Japanese taxi. Clean interior, white seat covers, meter running. City streets visible through windows.",
  "面接室": "Japanese job interview room. Simple desk, two chairs facing each other, company logo on the wall. Formal atmosphere.",
};

// ===== DISTRIBUTE LINES INTO 3 TIMING BLOCKS =====
// Block 1: 0:00-0:04 (4s, ~28 chars max)
// Block 2: 0:04-0:08 (4s, ~28 chars max)
// Block 3: 0:08-0:11 (3s, ~21 chars max)
function distributeLines(lines, speakerMap) {
  const blocks = [[], [], []];
  const maxChars = [28, 28, 21]; // max chars per block based on duration
  const blockChars = [0, 0, 0];
  let currentBlock = 0;

  for (const line of lines) {
    const len = line.text.length;
    // If current block would overflow, move to next
    if (currentBlock < 2 && blockChars[currentBlock] + len > maxChars[currentBlock]) {
      currentBlock++;
    }
    // If block 2 also overflows, force into block 2 (last speaking block)
    if (currentBlock > 2) currentBlock = 2;
    blocks[currentBlock].push(line);
    blockChars[currentBlock] += len;
  }

  return blocks.map((blockLines, i) => {
    const chars = blockLines.reduce((s, l) => s + l.text.length, 0);
    const sec = (chars / 7).toFixed(1);
    const dialogueStr = blockLines.map(l => {
      const label = speakerMap?.[l.speaker] || l.speaker;
      return `[SPEAKER: ${label}]: 「${l.text}」`;
    }).join('\n');
    return { lines: blockLines, chars, sec, dialogue: dialogueStr };
  });
}

// ===== SPEAKER LABEL BUILDER =====
// Creates unambiguous speaker labels so the AI never confuses who is talking
function buildSpeakerMap(characters, lines) {
  // Map Japanese speaker names to character IDs with distinguishing traits
  const map = {};
  for (const line of lines) {
    if (map[line.speaker]) continue;
    // Find matching character by checking if speaker name relates to character ID
    const char = characters.find(c => {
      const id = c.id.toLowerCase();
      const sp = line.speaker.toLowerCase();
      // Match common patterns
      return id.includes(sp) || sp.includes(id) ||
        (sp.includes('新郎') && id.includes('GROOM')) ||
        (sp.includes('新婦') && id.includes('BRIDE')) ||
        (sp.includes('父') && (id.includes('FATHER') || id.includes('DAD'))) ||
        (sp.includes('母') && (id.includes('MOTHER') || id.includes('MOM'))) ||
        (sp.includes('娘') && (id.includes('DAUGHTER') || id.includes('GIRL'))) ||
        (sp.includes('息子') && id.includes('SON')) ||
        (sp.includes('妻') && (id.includes('WIFE') || id.includes('WOMAN'))) ||
        (sp.includes('夫') && (id.includes('HUSBAND') || id.includes('MAN')));
    });
    if (char) {
      // Extract key identifying features from appearance
      const genderMatch = char.appearance.match(/\b(male|female|man|woman|boy|girl)\b/i);
      const ageMatch = char.appearance.match(/\b(early|mid|late)\s+(\d+)s?\b/i);
      const clothesMatch = char.appearance.match(/wearing\s+([^,.]+)/i);
      const gender = genderMatch ? genderMatch[0] : '';
      const age = ageMatch ? `${ageMatch[1]} ${ageMatch[2]}s` : '';
      const clothes = clothesMatch ? clothesMatch[1].trim().slice(0, 30) : '';
      map[line.speaker] = `${char.id} (${[gender, age, clothes].filter(Boolean).join(', ')})`;
    } else {
      map[line.speaker] = line.speaker;
    }
  }
  return map;
}

// ===== MAIN GENERATION =====
export function generatePrompts(theme) {
  const setting = settingDescriptions[theme.setting] || settingDescriptions["オフィス"];

  // Build character descriptions
  const charBlock = theme.characters.map((c, i) =>
    `${c.id}: ${c.appearance}`
  ).join('\n');

  // Build speaker map for unambiguous dialogue attribution
  const speakerMap = buildSpeakerMap(theme.characters, theme.lines);

  // Distribute dialogue lines into 3 timing blocks
  const lineBlocks = distributeLines(theme.lines, speakerMap);

  // Build scene descriptions with distributed dialogue
  const timings = [[0, 4], [4, 8], [8, 11]];
  const scene1Lines = theme.scene1.map((s, i) => {
    const [ts, te] = timings[i];
    const block = lineBlocks[i];
    const dialogueSection = block && block.dialogue
      ? `\n${block.dialogue}\n(${block.chars}字 / ~${block.sec}s)`
      : '';
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${s}${dialogueSection}`;
  }).join('\n\n');

  const scene2Lines = theme.scene2.map((s, i) => {
    const [ts, te] = timings[i];
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${s}`;
  }).join('\n\n');

  const consistencyNote = `#CHARACTER CONSISTENCY (CRITICAL)
All characters must have IDENTICAL face, hair, skin tone, body type, and clothing between Part 1 and Part 2.
Copy the exact character descriptions below into both parts. Do NOT alter any physical detail.

#SPEAKER IDENTIFICATION (CRITICAL)
Each dialogue line is tagged with [SPEAKER: CHARACTER_ID (gender, age, clothing)].
ALWAYS match the spoken line to the EXACT character described. Do NOT swap speakers.
Pay special attention to similar roles (e.g., GROOM vs BRIDE, FATHER vs MOTHER).
The character's GENDER and CLOTHING in the tag must match who is shown speaking on screen.`;

  const totalChars = theme.lines.reduce((sum, l) => sum + l.text.length, 0);
  const speechTime = (totalChars / 7).toFixed(1);

  const timingNote = `#TIMING (CRITICAL)
Total duration: 12 seconds per part.
Dialogue blocks:
  Block 1 (0:00-0:04): up to ~28 chars / 4s
  Block 2 (0:04-0:08): up to ~28 chars / 4s
  Block 3 (0:08-0:11): up to ~21 chars / 3s
FINAL 1 SECOND (0:11-0:12): ABSOLUTELY NO DIALOGUE. Silent hold only.
Dialogue total: ${totalChars} chars / ~${speechTime}s across ${theme.lines.length} lines.`;

  const part1 = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. Emotional dramatic twist story.
No text on screen. No subtitles. No background music. Only dialogue and ambient sound.

${timingNote}

${consistencyNote}

#CHARACTERS (IDENTICAL in Part 1 and Part 2)
${charBlock}

#SETTING
${setting}

#SCENE

${scene1Lines}

(0:11-0:12) NO DIALOGUE. Silent hold. Character's expression only. Ambient sound.`;

  const part2 = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. Emotional dramatic twist story. Continuing directly from Part 1.
No text on screen except final message. No subtitles. No background music.

${timingNote}

${consistencyNote}

#CHARACTERS (IDENTICAL to Part 1 — same face, same hair, same clothes)
${charBlock}

#SETTING
${setting}

#SCENE

${scene2Lines}

(0:11-0:12) NO DIALOGUE. Complete silence. Slow fade to black.
Text fades in center of screen: 「${theme.endText}」`;

  // Build script text
  const scriptText = theme.lines.map(l => `${l.speaker}「${l.text}」`).join('\n');

  // Build block info for UI display
  const blockInfo = lineBlocks.map((b, i) => ({
    blockNum: i + 1,
    timeLabel: `${timings[i][0]}-${timings[i][1]}s`,
    maxChars: [28, 28, 21][i],
    chars: b.chars,
    lines: b.lines,
  }));

  return {
    part1,
    part2,
    script: scriptText,
    lines: theme.lines,
    endText: theme.endText,
    meta: {
      lineCount: theme.lines.length,
      totalChars,
      blocks: blockInfo,
    },
  };
}
