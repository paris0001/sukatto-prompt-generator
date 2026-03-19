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

// ===== MAIN GENERATION =====
export function generatePrompts(theme) {
  const setting = settingDescriptions[theme.setting] || settingDescriptions["オフィス"];

  // Build character descriptions
  const charBlock = theme.characters.map((c, i) =>
    `${c.id}: ${c.appearance}`
  ).join('\n');

  // Build scene descriptions with timing: 0-4s, 4-8s, 8-11s (last block has NO dialogue)
  const timings = [[0, 4], [4, 8], [8, 11]];
  const scene1Lines = theme.scene1.map((s, i) => {
    const [ts, te] = timings[i] || [8, 11];
    // Strip any dialogue from the last block (8-11s) - dialogue must end by 0:08
    let text = s;
    if (i === 2) {
      text = text.replace(/\n?\[.*?\].*?「.*?」/g, '').trim();
      if (!text) text = "Silent reaction. Characters process what just happened. No dialogue. Only ambient sound and facial expressions.";
    }
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${text}`;
  }).join('\n\n');

  const scene2Lines = theme.scene2.map((s, i) => {
    const [ts, te] = timings[i] || [8, 11];
    let text = s;
    if (i === 2) {
      text = text.replace(/\n?\[.*?\].*?「.*?」/g, '').trim();
      if (!text) text = "Silent reaction. Characters process what just happened. No dialogue. Only ambient sound and facial expressions.";
    }
    return `(0:${String(ts).padStart(2, '0')}-0:${String(te).padStart(2, '0')}) ${text}`;
  }).join('\n\n');

  const consistencyNote = `#CHARACTER CONSISTENCY (CRITICAL)
All characters must have IDENTICAL face, hair, skin tone, body type, and clothing between Part 1 and Part 2.
Copy the exact character descriptions below into both parts. Do NOT alter any physical detail.`;

  const totalChars = theme.lines.reduce((sum, l) => sum + l.text.length, 0);
  const speechTime = (totalChars / 7).toFixed(1);

  const timingNote = `#TIMING (CRITICAL)
Total duration: 12 seconds per part.
Dialogue window: 0:00-0:08 ONLY. All spoken lines must finish by the 8-second mark.
Silent reaction: 0:08-0:11. No dialogue. Show character reactions through facial expressions only.
Final beat: 0:11-0:12. Complete silence. Hold or fade.
Dialogue total: ${totalChars} chars / ~${speechTime}s of speech.
RULE: NO DIALOGUE AFTER 0:08. The last 4 seconds are purely visual.`;

  const part1 = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. Emotional dramatic twist story.
No text on screen. No subtitles. No background music. Only dialogue and ambient sound.

${timingNote}

${consistencyNote}

#CHARACTERS (IDENTICAL in Part 1 and Part 2)
${charBlock}

#SETTING
${setting}

#SCENE (Dialogue: 0:00-0:08 | Silent reaction: 0:08-0:11 | Final beat: 0:11-0:12)

${scene1Lines}

(0:11-0:12) FINAL BEAT: Complete silence. Hold on character's face. No dialogue. Only ambient sound.`;

  const part2 = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. Emotional dramatic twist story. Continuing directly from Part 1.
No text on screen except final message. No subtitles. No background music.

${timingNote}

${consistencyNote}

#CHARACTERS (IDENTICAL to Part 1 — same face, same hair, same clothes)
${charBlock}

#SETTING
${setting}

#SCENE (Dialogue: 0:00-0:08 | Silent reaction: 0:08-0:11 | Final beat: 0:11-0:12)

${scene2Lines}

(0:11-0:12) FINAL BEAT: No dialogue. Complete silence. Slow fade to black.
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
      totalChars: theme.lines.reduce((sum, l) => sum + l.text.length, 0),
    },
  };
}
