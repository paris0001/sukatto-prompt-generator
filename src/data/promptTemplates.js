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

// ===== ENHANCE DIALOGUE IN SCENE TEXT =====
// Replace simple [SPEAKER]: format with detailed speaker identification
function enhanceDialogue(sceneText, characters) {
  let enhanced = sceneText;
  for (const char of characters) {
    // Extract key traits for speaker tag
    const genderMatch = char.appearance.match(/\b(Japanese\s+)?(male|female|man|woman|boy|girl)\b/i);
    const ageMatch = char.appearance.match(/\b(early|mid|late)\s+(\d+)s?\b/i);
    const clothesMatch = char.appearance.match(/wearing\s+([^,.]+)/i);
    const gender = genderMatch ? genderMatch[0].replace(/Japanese\s+/i, '') : '';
    const age = ageMatch ? `${ageMatch[1]} ${ageMatch[2]}s` : '';
    const clothes = clothesMatch ? clothesMatch[1].trim().slice(0, 35) : '';
    const traits = [gender, age, clothes].filter(Boolean).join(', ');

    // Replace [CHAR_ID] or [CHAR_ID, ...]: with detailed version
    const idEscaped = char.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\[${idEscaped}([^\\]]*?)\\]`, 'g');
    enhanced = enhanced.replace(pattern, `[SPEAKER: ${char.id} — ${traits}$1]`);
  }
  return enhanced;
}

// ===== MAIN GENERATION =====
export function generatePrompts(theme) {
  const setting = settingDescriptions[theme.setting] || settingDescriptions["オフィス"];

  // Build character descriptions
  const charBlock = theme.characters.map((c, i) =>
    `${c.id}: ${c.appearance}`
  ).join('\n');

  // Build scene descriptions with timing and enhanced speaker tags
  const timings = [[0, 4], [4, 8], [8, 11]];

  const scene1Lines = theme.scene1.map((s, i) => {
    const [ts, te] = timings[i];
    const enhanced = enhanceDialogue(s, theme.characters);
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${enhanced}`;
  }).join('\n\n');

  const scene2Lines = theme.scene2.map((s, i) => {
    const [ts, te] = timings[i];
    const enhanced = enhanceDialogue(s, theme.characters);
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${enhanced}`;
  }).join('\n\n');

  const consistencyNote = `#CHARACTER CONSISTENCY (CRITICAL)
All characters must have IDENTICAL face, hair, skin tone, body type, and clothing between Part 1 and Part 2.
Copy the exact character descriptions below into both parts. Do NOT alter any physical detail.

#SPEAKER IDENTIFICATION (CRITICAL)
Each dialogue line is tagged with [SPEAKER: CHARACTER_ID — gender, age, clothing].
ALWAYS match the spoken line to the EXACT character described in the tag.
The character's GENDER and CLOTHING in the tag MUST match the person shown speaking on screen.
Do NOT swap speakers. Pay special attention to similar roles (e.g., GROOM vs BRIDE).`;

  const totalChars = theme.lines.reduce((sum, l) => sum + l.text.length, 0);
  const speechTime = (totalChars / 7).toFixed(1);

  const timingNote = `#TIMING (CRITICAL)
Total duration: 12 seconds per part.
Scene blocks: 0:00-0:04 / 0:04-0:08 / 0:08-0:11 (dialogue allowed in all three).
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

  return {
    part1,
    part2,
    script: scriptText,
    lines: theme.lines,
    endText: theme.endText,
    meta: {
      lineCount: theme.lines.length,
      totalChars,
    },
  };
}
