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

// ===== STRIP ALL DIALOGUE FROM SCENE TEXT =====
function stripDialogue(text) {
  return text
    .replace(/\n?\[.*?\](?:,\s*[^:]*)?:\s*「[^」]*」/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ===== BUILD SPEAKER LABEL (visual description for Sora2) =====
function buildSpeakerLabel(char) {
  if (!char) return 'Unknown';
  const app = char.appearance;
  // Extract: gender+age, hair, clothing — the 3 most visually distinctive traits
  const genderAge = app.match(/Japanese\s+(male|female|man|woman|boy|girl),?\s*(early|mid|late)?\s*(\d+)/i);
  const hairMatch = app.match(/(short|long|shoulder-length|cropped|styled|slicked|dyed-?brown|grey|silver|black|ponytail|bald|buzz)[^,.]*hair/i);
  const clothesMatch = app.match(/wearing\s+([^.]+)/i);

  const parts = [];
  if (genderAge) parts.push(genderAge[0].replace(/Japanese\s+/i, ''));
  if (hairMatch) parts.push(hairMatch[0].trim());
  if (clothesMatch) parts.push(clothesMatch[1].trim().slice(0, 40));
  return parts.join(', ') || app.slice(0, 80);
}

// ===== KEYWORD MAP for Japanese speaker → English character ID =====
const speakerKeywords = {
  '客': ['CUSTOMER', 'RUDE', 'MAN', 'ARROGANT', 'KNOW', 'CRITIC', 'CASUAL'],
  '男性客': ['RUDE', 'MAN', 'ARROGANT', 'CUSTOMER'],
  '女性客': ['WOMAN', 'FEMALE', 'CUSTOMER', 'KAREN'],
  '店員': ['CLERK', 'STAFF', 'WORKER'],
  '店長': ['MANAGER'],
  'オーナー': ['OWNER'],
  '社長': ['CEO', 'PRESIDENT'],
  '部長': ['DEPARTMENT', 'HEAD', 'DIRECTOR'],
  '課長': ['SECTION', 'CHIEF'],
  '上司': ['BOSS', 'SUPERIOR'],
  '部下': ['SUBORDINATE', 'WORKER'],
  '社員': ['EMPLOYEE', 'STAFF', 'WORKER'],
  '新人': ['ROOKIE', 'NEWBIE', 'NEW', 'STUDENT'],
  '先輩': ['SENIOR', 'SENPAI'],
  '後輩': ['JUNIOR', 'KOHAI'],
  '同僚': ['COLLEAGUE', 'COWORKER'],
  '運転手': ['DRIVER'],
  '医師': ['DOCTOR', 'EXPERT', 'WORLD'],
  '看護師': ['NURSE'],
  '患者': ['PATIENT', 'KNOW_IT'],
  '弁護士': ['LAWYER', 'ATTORNEY'],
  '警察': ['POLICE', 'OFFICER', 'COP'],
  '校長': ['PRINCIPAL'],
  '先生': ['TEACHER', 'SENSEI'],
  '生徒': ['STUDENT'],
  '母': ['MOTHER', 'MOM', 'MAMA'],
  '母親': ['MOTHER', 'MOM'],
  '父': ['FATHER', 'DAD', 'PAPA'],
  '父親': ['FATHER', 'DAD'],
  '娘': ['DAUGHTER', 'GIRL'],
  '息子': ['SON', 'BOY'],
  '妻': ['WIFE'],
  '夫': ['HUSBAND'],
  '嫁': ['WIFE', 'BRIDE', 'DAUGHTER_IN_LAW'],
  '姑': ['MOTHER_IN_LAW', 'MIL'],
  '義姉': ['SISTER_IN_LAW'],
  '新郎': ['GROOM'],
  '新婦': ['BRIDE'],
  '婚約者': ['FIANCE', 'PARTNER'],
  '老人': ['OLD', 'ELDERLY', 'SENIOR'],
  '老婦人': ['ELDERLY_WOMAN', 'OLD_WOMAN'],
  '常連': ['REGULAR'],
  '保健所': ['HEALTH'],
  '人事': ['HR'],
  '面接官': ['INTERVIEWER'],
  '録音': ['RECORDING'],
  'シェフ': ['CHEF', 'COOK'],
  '板前': ['CHEF', 'COOK'],
  'パート': ['PART_TIMER', 'WORKER'],
  '派遣': ['TEMP', 'DISPATCH'],
  '営業': ['SALES'],
  'ソムリエ': ['SOMMELIER'],
  'インターン': ['INTERN'],
  '受付': ['RECEPTIONIST', 'FRONT'],
  '担当者': ['REPRESENTATIVE', 'MANAGER'],
  '被害者': ['VICTIM'],
  'サラリーマン': ['BUSINESSMAN', 'SALARY'],
  '司会': ['MC', 'HOST', 'EMCEE'],
  'スタッフ': ['STAFF'],
  '取締役': ['DIRECTOR', 'EXECUTIVE', 'CLEANER'],
  '女性': ['WOMAN', 'FEMALE', 'LADY'],
  '男': ['MAN', 'MALE', 'GUY'],
  '男性': ['MAN', 'MALE'],
  '孫': ['GRANDCHILD', 'GRANDSON'],
  'おばあちゃん': ['GRANDMOTHER', 'ELDERLY'],
  'おじいちゃん': ['GRANDFATHER', 'OLD'],
};

// ===== BUILD SPEAKER MAP (keyword-based matching) =====
function buildSpeakerMap(allLines, characters) {
  const speakerToChar = {};
  const usedChars = new Set();
  const uniqueSpeakers = [...new Set(allLines.map(l => l.speaker))];

  for (const sp of uniqueSpeakers) {
    let bestChar = null;
    let bestScore = 0;

    // Try keyword matching
    const keywords = speakerKeywords[sp] || [sp.toUpperCase()];

    for (const char of characters) {
      if (usedChars.has(char.id)) continue;
      const charIdUpper = char.id.toUpperCase();
      let score = 0;
      for (const kw of keywords) {
        if (charIdUpper.includes(kw.toUpperCase())) {
          score += 10;
        }
      }
      // Also check if speaker name appears in character appearance text
      if (char.appearance.toLowerCase().includes(sp.toLowerCase())) {
        score += 5;
      }
      if (score > bestScore) {
        bestScore = score;
        bestChar = char;
      }
    }

    // Fallback: assign first unused character
    if (!bestChar) {
      for (const char of characters) {
        if (!usedChars.has(char.id)) {
          bestChar = char;
          break;
        }
      }
    }

    if (bestChar) {
      speakerToChar[sp] = bestChar;
      usedChars.add(bestChar.id);
    }
  }

  return speakerToChar;
}

// ===== BUILD SORA2 OFFICIAL DIALOGUE BLOCK =====
// Format: Dialogue:\n- SpeakerVisualDesc: "セリフ"
function buildDialogueBlock(lines, speakerToChar) {
  const dialogueLines = lines.map(line => {
    const char = speakerToChar[line.speaker];
    const label = char ? buildSpeakerLabel(char) : line.speaker;
    return `- ${label}: "${line.text}"`;
  }).join('\n');

  return `Dialogue:\n${dialogueLines}`;
}

// ===== PICK RANDOM FROM ARRAY =====
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===== MAIN GENERATION =====
export function generatePrompts(theme) {
  const setting = settingDescriptions[theme.setting] || settingDescriptions["オフィス"];

  // Character descriptions
  const charBlock = theme.characters.map(c => `${c.id}: ${c.appearance}`).join('\n');

  // Pick from line variations if available, otherwise use default
  let lines1, lines2;
  if (theme.lines1Alts && theme.lines1Alts.length > 0) {
    const allLines1 = [theme.lines1 || theme.lines.slice(0, Math.ceil(theme.lines.length / 2)), ...theme.lines1Alts];
    lines1 = pickRandom(allLines1);
  } else {
    lines1 = theme.lines1 || theme.lines.slice(0, Math.ceil(theme.lines.length / 2));
  }
  if (theme.lines2Alts && theme.lines2Alts.length > 0) {
    const allLines2 = [theme.lines2 || theme.lines.slice(Math.ceil(theme.lines.length / 2)), ...theme.lines2Alts];
    lines2 = pickRandom(allLines2);
  } else {
    lines2 = theme.lines2 || theme.lines.slice(Math.ceil(theme.lines.length / 2));
  }

  const chars1 = lines1.reduce((s, l) => s + l.text.length, 0);
  const chars2 = lines2.reduce((s, l) => s + l.text.length, 0);

  // Build consistent speaker map from ALL lines, then use it for both parts
  const allLinesForMap = [...lines1, ...lines2];
  const speakerToChar = buildSpeakerMap(allLinesForMap, theme.characters);

  // Build Sora2 official format dialogue blocks
  const dialogue1 = buildDialogueBlock(lines1, speakerToChar);
  const dialogue2 = buildDialogueBlock(lines2, speakerToChar);

  // Build visual scene descriptions (dialogue stripped out)
  const timings = [[0, 4], [4, 8], [8, 11]];
  const buildSceneBlock = (scenes) => scenes.map((s, i) => {
    const [ts, te] = timings[i];
    return `(0:${String(ts).padStart(2,'0')}-0:${String(te).padStart(2,'0')}) ${stripDialogue(s)}`;
  }).join('\n\n');

  const scene1Text = buildSceneBlock(theme.scene1);
  const scene2Text = buildSceneBlock(theme.scene2);

  // ===== PART 1 PROMPT (Sora2 official format) =====
  const part1 = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. 12 seconds. No background music.

Characters (identical in Part 1 and Part 2):
${charBlock}

${setting}

${scene1Text}

(0:11-0:12) Silent hold. No dialogue. Character's expression only.

${dialogue1}`;

  // ===== PART 2 PROMPT (Sora2 official format) =====
  const part2 = `Cinematic short drama, 9:16 vertical, 4K, photorealistic, dramatic lighting, Japanese contemporary setting. 12 seconds. No background music. Continuing directly from Part 1.

Characters (identical to Part 1 — same face, same hair, same clothes):
${charBlock}

${setting}

${scene2Text}

(0:11-0:12) Silent. Slow fade to black. Text fades in: 「${theme.endText}」

${dialogue2}`;

  // Build copy-friendly script
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
