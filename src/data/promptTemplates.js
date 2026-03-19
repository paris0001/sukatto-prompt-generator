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
function stripDialogue(text) {
  return text
    .replace(/\n?\[.*?\](?:,\s*[^:]*)?:\s*「[^」]*」/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ===== BUILD DIALOGUE BLOCK (Sora2 End-to-End Diffusion optimized) =====
// Sora2 can't reliably map speaker IDs to visual characters.
// Instead, we describe each speaker by their VISUAL APPEARANCE directly,
// and state who is NOT speaking (mouth closed).
function buildDialogueBlock(lines, characters) {
  // Build a mapping: for each unique speaker name, assign a character
  // Use order-based heuristic: first unique speaker → first character, etc.
  const speakerToChar = {};
  const usedChars = new Set();
  const uniqueSpeakers = [...new Set(lines.map(l => l.speaker))];

  for (const sp of uniqueSpeakers) {
    // Try to find an unused character
    for (const char of characters) {
      if (!usedChars.has(char.id)) {
        speakerToChar[sp] = char;
        usedChars.add(char.id);
        break;
      }
    }
  }

  return lines.map((line, idx) => {
    const char = speakerToChar[line.speaker];

    // Extract short visual descriptors from appearance
    let visualDesc = line.speaker;
    if (char) {
      const app = char.appearance;
      // Get the first sentence of appearance as the most descriptive part
      const shortDesc = app.split('.').slice(0, 2).join('.').trim();
      visualDesc = shortDesc.slice(0, 100);
    }

    // Build list of who is NOT speaking
    const silentChars = characters
      .filter(c => c !== char)
      .map(c => {
        const shortApp = c.appearance.split(',').slice(0, 2).join(',').trim();
        return `${c.id} (${shortApp}) — MOUTH CLOSED, silent`;
      })
      .join('\n    ');

    return `LINE ${idx + 1}: 「${line.text}」 (${line.text.length}字)
  WHO IS SPEAKING (mouth OPEN, lips moving): ${visualDesc}
  WHO IS NOT SPEAKING (mouth CLOSED, no lip movement):
    ${silentChars}`;
  }).join('\n\n');
}

// ===== MAIN GENERATION =====
export function generatePrompts(theme) {
  const setting = settingDescriptions[theme.setting] || settingDescriptions["オフィス"];
  const charBlock = theme.characters.map(c => `${c.id}: ${c.appearance}`).join('\n');

  // Use lines1/lines2 if available, otherwise fall back to splitting lines[]
  const lines1 = theme.lines1 || theme.lines.slice(0, Math.ceil(theme.lines.length / 2));
  const lines2 = theme.lines2 || theme.lines.slice(Math.ceil(theme.lines.length / 2));

  const dialogue1 = buildDialogueBlock(lines1, theme.characters);
  const dialogue2 = buildDialogueBlock(lines2, theme.characters);
  const chars1 = lines1.reduce((s, l) => s + l.text.length, 0);
  const chars2 = lines2.reduce((s, l) => s + l.text.length, 0);

  const timings = [[0, 4], [4, 8], [8, 11]];
  const scene1Lines = theme.scene1.map((s, i) => {
    const [ts, te] = timings[i];
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${stripDialogue(s)}`;
  }).join('\n\n');
  const scene2Lines = theme.scene2.map((s, i) => {
    const [ts, te] = timings[i];
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${stripDialogue(s)}`;
  }).join('\n\n');

  const header = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. Emotional dramatic twist story.
No text on screen. No subtitles. No background music. Only dialogue and ambient sound.`;

  const consistencyNote = `#CHARACTER CONSISTENCY (CRITICAL)
All characters must have IDENTICAL face, hair, skin tone, body type, and clothing between Part 1 and Part 2.

#SPEAKER-TO-VISUAL MAPPING (CRITICAL FOR VIDEO GENERATION)
This is for an end-to-end diffusion video model. The model must visually show the CORRECT person's mouth moving for each line.
Rules:
1. ONLY the character described as "MOUTH IS MOVING" should have lip movement.
2. ALL other characters listed as "mouths CLOSED" must have STILL, CLOSED lips — no mouth movement at all.
3. Match the speaker by their VISUAL APPEARANCE (gender, hair, clothing) — not by name.
4. If two characters look similar (e.g., both female, similar age), use CLOTHING as the primary differentiator.
5. When in doubt: the character whose CLOTHING matches the speaker description is the one talking.`;

  const part1 = `${header}

#TIMING: 12 seconds total. Dialogue: 0:00-0:11. FINAL 1s (0:11-0:12): NO DIALOGUE.
Part 1 dialogue: ${chars1} chars / ~${(chars1/7).toFixed(1)}s. Target: 60-80 chars.

${consistencyNote}

#CHARACTERS (IDENTICAL in Part 1 and Part 2)
${charBlock}

#SETTING
${setting}

#SCENE
${scene1Lines}
(0:11-0:12) NO DIALOGUE. Silent hold.

#DIALOGUE FOR PART 1 (${chars1} chars, ${lines1.length} lines)
${dialogue1}`;

  const part2 = `${header}
Continuing directly from Part 1.

#TIMING: 12 seconds total. Dialogue: 0:00-0:11. FINAL 1s (0:11-0:12): NO DIALOGUE.
Part 2 dialogue: ${chars2} chars / ~${(chars2/7).toFixed(1)}s. Target: 60-80 chars.

${consistencyNote}

#CHARACTERS (IDENTICAL to Part 1 — same face, same hair, same clothes)
${charBlock}

#SETTING
${setting}

#SCENE
${scene2Lines}
(0:11-0:12) NO DIALOGUE. Slow fade to black.
Text fades in center of screen: 「${theme.endText}」

#DIALOGUE FOR PART 2 (${chars2} chars, ${lines2.length} lines)
${dialogue2}`;

  const allLines = [...lines1, ...lines2];
  const scriptText = allLines.map(l => `${l.speaker}「${l.text}」`).join('\n');

  return {
    part1, part2,
    script: scriptText,
    lines: allLines,
    lines1, lines2,
    endText: theme.endText,
    meta: {
      lineCount: allLines.length,
      totalChars: chars1 + chars2,
      part1Chars: chars1,
      part2Chars: chars2,
    },
  };
}
