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

// ===== BUILD SPEAKER TAG =====
function buildSpeakerTag(char) {
  const genderMatch = char.appearance.match(/\b(Japanese\s+)?(male|female|man|woman|boy|girl)\b/i);
  const ageMatch = char.appearance.match(/\b(early|mid|late)\s+(\d+)s?\b/i);
  const clothesMatch = char.appearance.match(/wearing\s+([^,.]+)/i);
  const gender = genderMatch ? genderMatch[0].replace(/Japanese\s+/i, '') : '';
  const age = ageMatch ? `${ageMatch[1]} ${ageMatch[2]}s` : '';
  const clothes = clothesMatch ? clothesMatch[1].trim().slice(0, 35) : '';
  return [gender, age, clothes].filter(Boolean).join(', ');
}

// ===== STRIP ALL DIALOGUE FROM SCENE TEXT =====
// Remove lines like [SPEAKER]: 「...」 or [SPEAKER, modifier]: 「...」
function stripDialogue(text) {
  return text
    .replace(/\n?\[.*?\](?:,\s*[^:]*)?:\s*「[^」]*」/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ===== BUILD DIALOGUE BLOCK FROM LINES =====
function buildDialogueBlock(lines, characters) {
  // Map speaker names to characters for detailed tags
  const charMap = {};
  for (const char of characters) {
    charMap[char.id] = char;
  }

  return lines.map(line => {
    // Find matching character
    let matchedChar = null;
    for (const char of characters) {
      const id = char.id.toLowerCase();
      const sp = line.speaker;
      if (id.includes(sp) || sp.includes(id)) {
        matchedChar = char;
        break;
      }
    }
    const tag = matchedChar
      ? `${matchedChar.id} — ${buildSpeakerTag(matchedChar)}`
      : line.speaker;
    return `[SPEAKER: ${tag}]: 「${line.text}」 (${line.text.length}字)`;
  }).join('\n');
}

// ===== MAIN GENERATION =====
export function generatePrompts(theme) {
  const setting = settingDescriptions[theme.setting] || settingDescriptions["オフィス"];

  // Build character descriptions
  const charBlock = theme.characters.map(c => `${c.id}: ${c.appearance}`).join('\n');

  // Strip ALL dialogue from scene descriptions — dialogue comes ONLY from lines[]
  const timings = [[0, 4], [4, 8], [8, 11]];

  const scene1Lines = theme.scene1.map((s, i) => {
    const [ts, te] = timings[i];
    const clean = stripDialogue(s);
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${clean}`;
  }).join('\n\n');

  const scene2Lines = theme.scene2.map((s, i) => {
    const [ts, te] = timings[i];
    const clean = stripDialogue(s);
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${clean}`;
  }).join('\n\n');

  // Split lines into Part 1 and Part 2
  const allLines = theme.lines;
  const splitPoint = Math.ceil(allLines.length / 2);
  const lines1 = allLines.slice(0, splitPoint);
  const lines2 = allLines.slice(splitPoint);

  const dialogue1 = buildDialogueBlock(lines1, theme.characters);
  const dialogue2 = buildDialogueBlock(lines2, theme.characters);
  const chars1 = lines1.reduce((s, l) => s + l.text.length, 0);
  const chars2 = lines2.reduce((s, l) => s + l.text.length, 0);
  const totalChars = chars1 + chars2;
  const speech1 = (chars1 / 7).toFixed(1);
  const speech2 = (chars2 / 7).toFixed(1);

  const header = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. Emotional dramatic twist story.
No text on screen. No subtitles. No background music. Only dialogue and ambient sound.`;

  const consistencyNote = `#CHARACTER CONSISTENCY (CRITICAL)
All characters must have IDENTICAL face, hair, skin tone, body type, and clothing between Part 1 and Part 2.

#SPEAKER IDENTIFICATION (CRITICAL)
Each dialogue line is tagged [SPEAKER: ID — gender, age, clothing].
The person shown speaking on screen MUST match the gender and clothing in the tag.
Do NOT swap speakers. GROOM ≠ BRIDE. FATHER ≠ MOTHER. Check the tag carefully.`;

  const part1 = `${header}

#TIMING (CRITICAL)
Total duration: 12 seconds.
Dialogue window: 0:00-0:11 (11 seconds). Distribute dialogue naturally across the scene.
FINAL 1 SECOND (0:11-0:12): ABSOLUTELY NO DIALOGUE. Silent hold only.
Part 1 dialogue: ${chars1} chars / ~${speech1}s.

${consistencyNote}

#CHARACTERS (IDENTICAL in Part 1 and Part 2)
${charBlock}

#SETTING
${setting}

#SCENE (visual action + dialogue together)

${scene1Lines}

(0:11-0:12) NO DIALOGUE. Silent hold. Character's expression only.

#DIALOGUE FOR THIS PART (${chars1} chars, ${lines1.length} lines — say these lines during the scene above)
${dialogue1}`;

  const part2 = `${header}
Continuing directly from Part 1.

#TIMING (CRITICAL)
Total duration: 12 seconds.
Dialogue window: 0:00-0:11 (11 seconds). Distribute dialogue naturally across the scene.
FINAL 1 SECOND (0:11-0:12): ABSOLUTELY NO DIALOGUE. Silent hold only.
Part 2 dialogue: ${chars2} chars / ~${speech2}s.

${consistencyNote}

#CHARACTERS (IDENTICAL to Part 1 — same face, same hair, same clothes)
${charBlock}

#SETTING
${setting}

#SCENE (visual action + dialogue together)

${scene2Lines}

(0:11-0:12) NO DIALOGUE. Slow fade to black.
Text fades in center of screen: 「${theme.endText}」

#DIALOGUE FOR THIS PART (${chars2} chars, ${lines2.length} lines — say these lines during the scene above)
${dialogue2}`;

  // Build script text for copy
  const scriptText = theme.lines.map(l => `${l.speaker}「${l.text}」`).join('\n');

  return {
    part1,
    part2,
    script: scriptText,
    lines: theme.lines,
    endText: theme.endText,
    meta: {
      lineCount: theme.lines.length,
      totalChars,
      part1Chars: chars1,
      part2Chars: chars2,
    },
  };
}
