import { themes_56_100 } from './themes_56_100.js';

// Each theme has:
// - id, title (internal), category (matches categories.js id)
// - ytTitle: YouTube clickbait title
// - ytDesc: YouTube description + hashtags
// - setting: location key for settingDescriptions
// - characters: array of { id, appearance }
// - scene1: array of 3 strings (0-4s, 4-8s, 8-12s) for part 1
// - scene2: array of 3 strings for part 2
// - lines: array of { speaker, text } for the script
// - endText: final text overlay

const _themes = [
  // ========== 正体判明系：実は偉い人 ==========
  {
    id: 1, category: 'real_vip',
    title: "店員に怒鳴った客→相手はオーナーの娘",
    ytTitle: "「バイトのくせに生意気だな！」店員に怒鳴った男。だがその店員がオーナーの娘だと知った瞬間、顔が青ざめる・・・！ #スカッとする話 #因果応報",
    ytDesc: "カフェで店員に横柄な態度をとった男性客。だがその店員はオーナーの娘だった。出禁を告げられた男の顔色が変わる。\n#スカッと #因果応報 #カフェ #出禁",
    setting: "カフェ",
    characters: [
      { id: "RUDE_MAN", appearance: "Japanese man, mid 40s, business casual, loosened tie, arrogant expression. He snaps his fingers at the counter, speaking loudly." },
      { id: "GIRL", appearance: "Japanese woman, early 20s, cafe apron, ponytail, calm polite demeanor despite being yelled at. She is the owner's daughter working part-time." },
      { id: "OWNER", appearance: "Japanese woman, late 50s, elegant casual clothes, pearl earrings. She emerges from the back kitchen wiping her hands." },
    ],
    scene1: [
      "Wide shot of the cafe. RUDE_MAN at the counter slams his hand down.\n[RUDE_MAN, loud]: 「遅えんだよ！バイトのくせに気が利かねえな！」\nGIRL bows apologetically, hands trembling slightly. Other customers look uncomfortable.",
      "Medium shot. RUDE_MAN leans over the counter, pointing at GIRL.\n[RUDE_MAN]: 「店長呼べよ。お前じゃ話になんねえ」\nGIRL nods calmly and turns toward the back kitchen. She opens the door and speaks softly.",
      "Medium shot. OWNER walks out from the kitchen. She stands next to GIRL and puts her hand gently on her daughter's shoulder. She looks at RUDE_MAN with calm, cold eyes.\n[OWNER, quiet]: 「店長の私ですが。この子は私の娘です」\nRUDE_MAN's pointing hand slowly drops.",
    ],
    scene2: [
      "Close-up of RUDE_MAN's face. His arrogant expression crumbles. He looks at OWNER, then at GIRL, then back at OWNER. He opens his mouth but no words come.\n[OWNER]: 「お客様、本日をもちまして出入り禁止とさせていただきます」",
      "Wide shot. OWNER places RUDE_MAN's bill on the counter and bows formally. GIRL stands behind her mother, composed. Other customers watch in silence. One regular nods approvingly.",
      "RUDE_MAN fumbles with his wallet, pays, and walks to the door without looking back. The door closes. The cafe returns to its peaceful atmosphere. GIRL exhales and smiles at her mother. OWNER squeezes her hand.",
    ],
    lines: [
      { speaker: "男性客", text: "遅えんだよ！バイトのくせに気が利かねえな！" },
      { speaker: "男性客", text: "店長呼べよ。お前じゃ話になんねえ" },
      { speaker: "オーナー", text: "店長の私ですが。この子は私の娘です" },
      { speaker: "オーナー", text: "お客様、本日をもちまして出入り禁止とさせていただきます" },
    ],
    endText: "見下した相手が、誰かはわからない",
  },
  {
    id: 2, category: 'real_vip',
    title: "運転手を見下した新入社員→元警察署長",
    ytTitle: "「運転手のくせに偉そうに」新入社員が社用車の運転手を見下した。だが翌日の朝礼で紹介されたのは・・・！ #スカッとする話 #正体判明",
    ytDesc: "社用車の運転手に横柄な態度をとった新入社員。翌日、その運転手が元警察署長で社長の旧友だと紹介される。\n#スカッと #新入社員 #因果応報 #会社",
    setting: "オフィス",
    characters: [
      { id: "ROOKIE", appearance: "Japanese man, mid 20s, new ill-fitting suit, eager but arrogant expression. He talks on his phone loudly in the back seat of a company car." },
      { id: "DRIVER", appearance: "Japanese man, late 60s, neat uniform, silver hair, calm dignified bearing. He drives steadily, watching through the rearview mirror." },
      { id: "CEO", appearance: "Japanese man, early 60s, expensive suit, commanding presence. He stands at the podium in the morning meeting." },
    ],
    scene1: [
      "Interior of company car. ROOKIE in the back seat, feet on the front seat rest, talking loudly on phone.\n[ROOKIE, to phone]: 「いや、今車の中。運転手のジジイが遅くてさ」\nDRIVER's eyes flicker in the rearview mirror but he says nothing.",
      "ROOKIE hangs up and leans forward.\n[ROOKIE, dismissive]: 「ねえ、もうちょっと飛ばせない？年寄りだから無理？」\nDRIVER: 「安全運転が第一ですので」\nROOKIE scoffs and leans back, scrolling his phone.",
      "The car arrives at the office. ROOKIE gets out without a word or thanks, slamming the door. DRIVER watches him walk away. He straightens his tie in the mirror. His expression is calm but sharp — the look of someone who has commanded rooms.",
    ],
    scene2: [
      "Next morning. Office meeting room. All employees standing. CEO at the podium.\n[CEO]: 「本日は特別顧問をご紹介します」\nThe door opens. DRIVER walks in — same face, but now in a sharp suit. ROOKIE's coffee cup freezes at his lips.",
      "Medium shot.\n[CEO]: 「元県警本部長の佐藤さんです。私の30年来の友人でもあります」\nDRIVER/ADVISOR bows to the room. His eyes find ROOKIE. He gives a slight, knowing smile. ROOKIE's face goes white.",
      "Wide shot. Everyone applauds. ROOKIE stands frozen, unable to clap. His phone buzzes in his pocket — he doesn't move to check it. DRIVER/ADVISOR takes his seat at the head table next to the CEO. He folds his hands calmly.",
    ],
    lines: [
      { speaker: "新人", text: "いや、今車の中。運転手のジジイが遅くてさ" },
      { speaker: "新人", text: "ねえ、もうちょっと飛ばせない？年寄りだから無理？" },
      { speaker: "社長", text: "元県警本部長の佐藤さんです。私の30年来の友人でもあります" },
    ],
    endText: "肩書きがなくても、敬意は払うべきだった",
  },
  {
    id: 3, category: 'real_vip',
    title: "清掃員を笑った社員→元役員が復帰",
    ytTitle: "「掃除のおばちゃんに用はないよ」社員が笑った清掃員。だが翌月、その人が役員として復帰した・・・！ #スカッとする話 #逆転劇",
    ytDesc: "清掃の仕事をしていた女性を馬鹿にした社員。だがその女性は育児休暇中の元取締役だった。復帰した瞬間、力関係が逆転する。\n#スカッと #清掃員 #取締役 #逆転",
    setting: "オフィス",
    characters: [
      { id: "EMPLOYEE", appearance: "Japanese man, early 30s, casual office attire, smirking expression, coffee in hand. He laughs with a colleague while blocking the hallway." },
      { id: "CLEANER", appearance: "Japanese woman, mid 40s, plain cleaning uniform, hair tied back, no makeup. She pushes a cleaning cart quietly. Dignified posture despite humble attire." },
      { id: "DEPARTMENT_HEAD", appearance: "Japanese man, late 50s, suit, visibly nervous when he sees CLEANER being mocked." },
    ],
    scene1: [
      "Office hallway. CLEANER pushes her cart. EMPLOYEE blocks the way with his colleague, not moving.\n[EMPLOYEE, laughing]: 「おばちゃん、ちょっと待ってよ。ここ今使ってるから」\nHe doesn't move. CLEANER waits patiently without expression.",
      "EMPLOYEE turns to his colleague.\n[EMPLOYEE, loud whisper]: 「掃除のおばちゃんに挨拶する必要ないよな」\nThey both laugh. DEPARTMENT_HEAD walks by, sees the scene, and his face tenses. He bows deeply to CLEANER.\n[DEPARTMENT_HEAD]: 「お疲れ様です」",
      "EMPLOYEE looks confused at why his boss bowed to a cleaner. CLEANER nods to DEPARTMENT_HEAD and continues pushing her cart past EMPLOYEE. As she passes, DEPARTMENT_HEAD whispers to EMPLOYEE:\n[DEPARTMENT_HEAD, tense]: 「来月から気をつけろよ…」\nEMPLOYEE looks baffled.",
    ],
    scene2: [
      "One month later. All-company meeting. The CEO introduces someone. The door opens. CLEANER walks in — but now in an elegant suit, hair styled professionally, confident posture.\n[CEO]: 「育児休暇から復帰されました。取締役の田中です」",
      "Wide shot. The room applauds. CLEANER/DIRECTOR takes the podium. Her eyes scan the room. They land on EMPLOYEE. She pauses for one beat. Then smiles professionally and continues.\nEMPLOYEE sinks into his chair, face red.",
      "After the meeting. EMPLOYEE stands alone in the hallway where he blocked the cleaning cart. The hallway is empty. He stares at the floor where the cart wheels left faint marks.",
    ],
    lines: [
      { speaker: "社員", text: "おばちゃん、ちょっと待ってよ。ここ今使ってるから" },
      { speaker: "社員", text: "掃除のおばちゃんに挨拶する必要ないよな" },
      { speaker: "部長", text: "来月から気をつけろよ…" },
      { speaker: "社長", text: "育児休暇から復帰されました。取締役の田中です" },
    ],
    endText: "その人の本当の姿は、制服では分からない",
  },
  {
    id: 4, category: 'real_vip',
    title: "ボロい服の老人を追い出した宝石店→最大の顧客",
    ytTitle: "「お客様のお求めの品はございません」質素な老人を追い返した宝石店。だがその老人は年間3000万円の上客だった・・・！ #スカッとする話 #見た目で判断",
    ytDesc: "質素な服装の老人を門前払いにした宝石店員。実はその老人は年間3000万円を使う上客だった。隣の店に入っていく老人を見て店員は凍りつく。\n#スカッと #宝石店 #見た目で判断 #上客",
    setting: "レストラン",
    characters: [
      { id: "OLD_MAN", appearance: "Japanese man, mid 70s, worn but clean polo shirt, simple slacks, old canvas bag. Gentle face, calm demeanor. He walks slowly but with quiet dignity." },
      { id: "CLERK", appearance: "Japanese woman, late 20s, immaculate makeup, designer uniform, haughty expression. She sizes up customers by their appearance." },
      { id: "RIVAL_CLERK", appearance: "Japanese woman, mid 30s, neat uniform from the neighboring jewelry store. She bows warmly to OLD_MAN at her door." },
    ],
    scene1: [
      "Exterior of a luxury jewelry store. OLD_MAN approaches the glass door. CLERK sees him through the window and her smile disappears.\nHe enters. CLERK approaches with arms crossed.\n[CLERK, cold]: 「あの、当店のお品物はかなりお値段が…」",
      "OLD_MAN looks at a display case with a diamond necklace.\n[OLD_MAN, quiet]: 「孫娘の結婚祝いに何かいいものをと思って」\n[CLERK, dismissive]: 「こちらは300万円からですが」\nShe emphasizes the price, expecting him to leave.",
      "OLD_MAN nods slowly. He looks at CLERK for a long moment, then turns and walks toward the exit. He pauses at the door.\n[OLD_MAN, quiet]: 「そうですか。では隣のお店に行きますね」\nHe pushes the door open. CLERK smirks, relieved.",
    ],
    scene2: [
      "Through the glass window, CLERK watches OLD_MAN enter the rival jewelry store next door. RIVAL_CLERK bows deeply and welcomes him with a warm smile. She already knows him.\nThe store manager walks up behind CLERK.\n[MANAGER, pale]: 「今の人…まさか鈴木様じゃないだろうな」",
      "CLERK turns around.\n[CLERK]: 「えっ、鈴木様って…」\n[MANAGER]: 「うちの年間最高顧客だ。年3000万以上お買い上げの。なぜ帰したんだ」\nCLERK's face drains of color.",
      "Through the window: OLD_MAN is seated comfortably in the rival store, being served tea. He points at a display case. RIVAL_CLERK brings out several pieces for him to examine. He smiles.\nCLERK stands frozen, her own reflection staring back at her from the empty glass display.",
    ],
    lines: [
      { speaker: "店員", text: "あの、当店のお品物はかなりお値段が…" },
      { speaker: "老人", text: "孫娘の結婚祝いに何かいいものをと思って" },
      { speaker: "老人", text: "そうですか。では隣のお店に行きますね" },
      { speaker: "店長", text: "うちの年間最高顧客だ。年3000万以上お買い上げの。なぜ帰したんだ" },
    ],
    endText: "本当の価値は、見た目の中にはない",
  },
  // ========== 正体判明系：実は金持ち ==========
  {
    id: 5, category: 'real_rich',
    title: "質素な客を馬鹿にした車ディーラー→現金一括購入",
    ytTitle: "「冷やかしですか？」Tシャツ姿の男を追い返そうとしたディーラー。だが男がカバンから出したものを見て、営業マンは固まる・・・！ #スカッとする話 #実は金持ち",
    ytDesc: "高級車ディーラーでTシャツ姿の男を冷やかし扱いした営業マン。だが男がカバンから取り出したのは現金2000万円だった。\n#スカッと #ディーラー #見た目で判断 #現金購入",
    setting: "駐車場",
    characters: [
      { id: "CASUAL_MAN", appearance: "Japanese man, late 30s, plain white T-shirt, jeans, sneakers, worn backpack. Unshaven, relaxed posture. He looks at luxury cars with genuine interest." },
      { id: "SALESMAN", appearance: "Japanese man, early 30s, crisp suit, polished shoes, slicked hair. He sizes up CASUAL_MAN and decides he can't afford anything." },
      { id: "SENIOR_SALES", appearance: "Japanese man, late 50s, experienced salesman, suit slightly worn. He watches from the back of the showroom." },
    ],
    scene1: [
      "Luxury car showroom. CASUAL_MAN walks in, looking at a high-end sedan. SALESMAN approaches but his smile is thin.\n[SALESMAN, condescending]: 「ご試乗ですか？こちらの車種は1800万円からですが」\nHe emphasizes the price.",
      "CASUAL_MAN touches the hood gently.\n[CASUAL_MAN]: 「この色いいね。ナビのオプション全部つけたらいくら？」\n[SALESMAN, smirking]: 「2200万円ほどですが…ローンの審査もございますし」\nHe clearly doesn't take CASUAL_MAN seriously.",
      "CASUAL_MAN nods. He swings his worn backpack off his shoulder, unzips it on the hood of the car. Inside: bundles of cash, neatly wrapped. He pulls out one bundle and sets it down.\n[CASUAL_MAN, casual]: 「現金でいい？あと端数はカードで」\nSALESMAN's jaw drops. The showroom goes silent.",
    ],
    scene2: [
      "Close-up of SALESMAN's face. He stares at the cash on the car hood. His mouth opens and closes. SENIOR_SALES rushes over from the back, having seen everything.\n[SENIOR_SALES, bowing deeply]: 「大変失礼いたしました。私が担当させていただきます」",
      "SENIOR_SALES gently moves SALESMAN aside and begins professionally assisting CASUAL_MAN. SALESMAN stands frozen to the side. Other staff peek from behind displays.\nCASUAL_MAN sits in the driver's seat, adjusting the mirror.\n[CASUAL_MAN, to SALESMAN]: 「ローンの審査、いらなかったね」",
      "Wide shot. CASUAL_MAN and SENIOR_SALES shake hands over completed paperwork. SALESMAN stands alone by the entrance, straightening brochures no one will read. Through the glass, CASUAL_MAN drives his new car out of the lot.",
    ],
    lines: [
      { speaker: "営業", text: "ご試乗ですか？こちらの車種は1800万円からですが" },
      { speaker: "営業", text: "2200万円ほどですが…ローンの審査もございますし" },
      { speaker: "男性", text: "現金でいい？あと端数はカードで" },
      { speaker: "男性", text: "ローンの審査、いらなかったね" },
    ],
    endText: "人を値踏みした者が、一番価値を見誤る",
  },
  // ========== 因果応報系：嘘がバレる ==========
  {
    id: 6, category: 'lie_exposed',
    title: "虚偽クレームで閉店に追い込もうとした客→隣に保健所職員",
    ytTitle: "「この店で食中毒になった！」虚偽クレームで店を脅した女。だが隣のテーブルに座っていたのは保健所の職員だった・・・！ #スカッとする話 #嘘がバレる",
    ytDesc: "「食中毒になった」と虚偽クレームで飲食店を脅す女性。だが隣席にいたのは保健所の職員。矛盾を即座に指摘され、女性は逃げ出す。\n#スカッと #虚偽クレーム #因果応報 #保健所",
    setting: "ファミレス",
    characters: [
      { id: "KAREN", appearance: "Japanese woman, mid 40s, flashy clothes, excessive makeup, pointing angrily at the restaurant manager. She has not actually eaten anything — her plate is untouched." },
      { id: "MANAGER", appearance: "Japanese man, early 40s, restaurant manager uniform, sweating, bowing repeatedly. He looks desperate." },
      { id: "HEALTH_OFFICER", appearance: "Japanese man, late 30s, plain polo shirt, glasses, sitting at the next table with a half-eaten meal. He has been listening quietly. He reaches into his bag and pulls out an ID badge." },
    ],
    scene1: [
      "Restaurant interior. KAREN stands over MANAGER, pointing.\n[KAREN, loud]: 「先週ここで食べて食中毒になったのよ！保健所に通報するわよ！」\n[MANAGER, bowing]: 「大変申し訳ございません…」\nKAREN's plate on the table is completely untouched.",
      "KAREN escalates.\n[KAREN]: 「慰謝料として30万払いなさい！さもないと口コミに書くわよ！」\nMANAGER looks around helplessly. Other customers stare. HEALTH_OFFICER at the next table puts down his chopsticks.",
      "HEALTH_OFFICER stands calmly and turns to KAREN.\n[HEALTH_OFFICER]: 「すみません。保健所の者ですが」\nHe shows his ID badge. KAREN's expression freezes.\n[HEALTH_OFFICER]: 「先週この店で食中毒の届出は一件もありませんが」",
    ],
    scene2: [
      "Close-up of KAREN's face. Her aggressive expression shatters.\n[HEALTH_OFFICER, calm]: 「それに、お皿に手をつけた形跡がありませんね。今日初めてのご来店ではないですか？」\nHe glances at her untouched plate.",
      "KAREN grabs her bag and stumbles toward the exit.\n[KAREN, mumbling]: 「ちょっと…勘違いだったかも…」\nShe pushes through the door and practically runs. HEALTH_OFFICER turns to MANAGER.\n[HEALTH_OFFICER]: 「虚偽のクレームなら警察案件ですよ。証拠は防犯カメラに残っています」",
      "Wide shot. MANAGER bows deeply to HEALTH_OFFICER. The other customers murmur approvingly. One gives a thumbs up. HEALTH_OFFICER sits back down and calmly resumes eating. MANAGER brings him a fresh coffee on the house.",
    ],
    lines: [
      { speaker: "女性", text: "先週ここで食べて食中毒になったのよ！保健所に通報するわよ！" },
      { speaker: "女性", text: "慰謝料として30万払いなさい！" },
      { speaker: "保健所職員", text: "保健所の者ですが。先週この店で食中毒の届出は一件もありませんが" },
      { speaker: "保健所職員", text: "お皿に手をつけた形跡がありませんね" },
    ],
    endText: "嘘は、一番聞かれたくない人に聞かれている",
  },
  // ========== 因果応報系：証拠が残ってた ==========
  {
    id: 7, category: 'evidence',
    title: "パワハラ上司→部下が3ヶ月分録音していた",
    ytTitle: "「証拠がなきゃ何も出来ないだろ？」パワハラ上司がニヤリと笑った瞬間、部下がスマホを取り出した・・・！ #スカッとする話 #パワハラ",
    ytDesc: "「証拠がない」と居直るパワハラ上司。だが部下は3ヶ月間、毎日の暴言を録音していた。人事部の前で再生ボタンが押される。\n#スカッと #パワハラ #録音 #因果応報",
    setting: "会議室",
    characters: [
      { id: "BOSS", appearance: "Japanese man, late 40s, rolled-up sleeves, aggressive posture, pointing at subordinate. Red face, veins on neck. He leans over the desk intimidatingly." },
      { id: "SUBORDINATE", appearance: "Japanese woman, mid 20s, neat office clothes, calm composure despite facing BOSS. She holds a smartphone in her lap under the desk." },
      { id: "HR_DIRECTOR", appearance: "Japanese woman, early 50s, formal suit, sitting at the head of the table with a notepad. She watches the exchange carefully." },
    ],
    scene1: [
      "Meeting room. HR_DIRECTOR has called both BOSS and SUBORDINATE in. BOSS is confident.\n[BOSS, smirking]: 「パワハラ？そんな事実はない。証拠があるなら出してみろよ」\nHe crosses his arms and leans back in his chair.",
      "SUBORDINATE takes a breath. She places her smartphone on the table. BOSS glances at it dismissively.\n[SUBORDINATE, calm]: 「3ヶ月分、毎日録音しています」\nShe presses play. The room fills with BOSS's voice:\n『使えねえな。お前の代わりなんかいくらでもいるんだよ！』",
      "Close-up of BOSS's face. The smirk disappears. The recording continues, voice after voice, day after day. HR_DIRECTOR is writing rapidly. BOSS's hands grip the armrests.\n[BOSS, hoarse]: 「おい、消せ…」\n[HR_DIRECTOR, firm]: 「最後まで聞かせてください」",
    ],
    scene2: [
      "The recording plays another clip:\n『お前みたいなのが会社にいると迷惑なんだよ。辞めろ辞めろ！』\nBOSS stares at the table. His aggressive posture has collapsed. He is hunched in his chair.\nHR_DIRECTOR removes her glasses and sets them on the table.",
      "[HR_DIRECTOR, cold]: 「十分です。この内容は懲戒委員会に回します」\nBOSS opens his mouth.\n[BOSS]: 「待ってくれ、あれは冗談で…」\n[HR_DIRECTOR]: 「冗談には聞こえませんでした」",
      "Wide shot. SUBORDINATE stands, bows to HR_DIRECTOR, and leaves the room. Her posture is straight. BOSS remains seated, alone with HR_DIRECTOR. The door closes. Through the glass wall, SUBORDINATE walks past. She does not look back.",
    ],
    lines: [
      { speaker: "上司", text: "パワハラ？証拠があるなら出してみろよ" },
      { speaker: "部下", text: "3ヶ月分、毎日録音しています" },
      { speaker: "録音", text: "お前の代わりなんかいくらでもいるんだよ！" },
      { speaker: "人事部長", text: "この内容は懲戒委員会に回します" },
    ],
    endText: "言葉は消えない。記録は残る",
  },
  // ========== 因果応報系：目撃者がいた ==========
  {
    id: 8, category: 'witness',
    title: "同僚の悪口を言った社員→本人が隣の個室に",
    ytTitle: "「あいつマジ使えない」居酒屋で同僚の悪口を言い放った男。だが隣の個室にいたのは・・・！ #スカッとする話 #因果応報",
    ytDesc: "居酒屋の個室で同僚の悪口を盛大に語る社員たち。だが薄い壁の向こうの個室にいたのは、悪口の対象本人だった。\n#スカッと #悪口 #居酒屋 #因果応報",
    setting: "居酒屋",
    characters: [
      { id: "GOSSIPER", appearance: "Japanese man, early 30s, loosened tie, red-faced from drinking, gesturing dramatically as he bad-mouths someone. Loud voice carries through thin walls." },
      { id: "FRIEND", appearance: "Japanese man, early 30s, also drinking, laughing along with GOSSIPER, adding fuel to the fire." },
      { id: "VICTIM", appearance: "Japanese man, late 20s, sitting quietly in the adjacent private room with a single beer. He can hear everything through the thin partition wall. His expression shifts from shock to calm resolve." },
    ],
    scene1: [
      "Izakaya private room. GOSSIPER and FRIEND drinking beer, laughing loudly.\n[GOSSIPER, loud]: 「鈴木ってマジ使えないよな。なんで昇進したんだろ」\n[FRIEND, laughing]: 「コネだろコネ。実力ゼロだよあいつ」\nTheir voices carry through the thin partition wall.",
      "Shot of the adjacent private room. VICTIM sits alone, chopsticks frozen mid-air. He can hear every word. His expression is controlled but his jaw tightens.\n[GOSSIPER, through wall]: 「来月の異動で飛ばされればいいのに。あいつがいるとみんな迷惑してるし」",
      "VICTIM sets down his chopsticks. He takes a slow breath. He stands, adjusts his jacket, and slides open his partition door. He takes two steps and stands in the open doorway of GOSSIPER's room.\nGOSSIPER is mid-laugh when he looks up and sees VICTIM standing there.\nThe laughter dies instantly.",
    ],
    scene2: [
      "Close-up of GOSSIPER's face. His glass stops halfway to his mouth. Beer drips onto his tie. FRIEND looks down at the table.\n[VICTIM, calm]: 「鈴木です。隣にいました」\nSilence. The izakaya background noise seems deafening.",
      "VICTIM looks at both of them for a long moment. He doesn't raise his voice.\n[VICTIM]: 「聞こえてましたよ。全部」\nHe pauses.\n[VICTIM]: 「明日から気まずくなるのは、僕じゃなくて君たちだと思うけど」",
      "VICTIM turns and walks back to his room. He picks up his bag, leaves money on the table, and exits the izakaya. GOSSIPER and FRIEND sit in absolute silence. GOSSIPER slowly puts his glass down. The fun is over.",
    ],
    lines: [
      { speaker: "社員A", text: "鈴木ってマジ使えないよな。なんで昇進したんだろ" },
      { speaker: "社員B", text: "コネだろコネ。実力ゼロだよあいつ" },
      { speaker: "鈴木", text: "鈴木です。隣にいました" },
      { speaker: "鈴木", text: "明日から気まずくなるのは、僕じゃなくて君たちだと思うけど" },
    ],
    endText: "壁は薄い。そして言葉はもっと薄い",
  },
  // ========== 弱者の逆襲系：我慢の限界爆発 ==========
  {
    id: 9, category: 'patience_snap',
    title: "30年耐えた妻の一言が夫に刺さる",
    ytTitle: "「お前に何ができるんだ」30年間モラハラに耐え続けた妻。だが離婚届を出した時の一言が、夫の心を完全に砕く・・・！ #スカッとする話 #モラハラ",
    ytDesc: "30年間夫のモラハラに耐え続けた妻が、ついに離婚届を差し出した。その時の静かな一言が、夫の心を完全に打ち砕く。\n#スカッと #モラハラ #離婚 #我慢の限界",
    setting: "住宅街",
    characters: [
      { id: "WIFE", appearance: "Japanese woman, late 50s, simple clothes, no makeup, grey-streaked hair tied back. Her posture is straight despite years of suppression. Her eyes are calm and final." },
      { id: "HUSBAND", appearance: "Japanese man, early 60s, sitting in his usual armchair, newspaper open, beer on the side table. He barely looks up when spoken to. Entitled posture." },
    ],
    scene1: [
      "Living room of a modest Japanese house. HUSBAND in his armchair, watching TV. WIFE stands in the doorway holding a manila envelope.\n[HUSBAND, not looking up]: 「飯まだ？」\nWIFE does not answer. She walks to the table and places the envelope in front of him.",
      "HUSBAND glances at the envelope, annoyed. He opens it. Inside: divorce papers, already signed by WIFE. His newspaper drops.\n[HUSBAND, incredulous]: 「は？何これ。冗談だろ？」\n[WIFE]: 「冗談じゃありません」\nHer voice is steady. Not angry. Not sad. Just done.",
      "[HUSBAND, scoffing]: 「お前に何ができるんだ。一人で生きていけると思ってるのか？」\nWIFE looks at him. For the first time in 30 years, she does not look away.\n[WIFE, quiet]: 「あなたと暮らす30年より、一人の1日の方がずっと楽です」\nHUSBAND's scoff dies on his lips.",
    ],
    scene2: [
      "Close-up of HUSBAND's face. The condescension drains away. He searches WIFE's eyes for the fear he's used to seeing. It's not there.\n[HUSBAND]: 「ちょっと待て、話し合おう…」\n[WIFE]: 「30年間、話し合いたかったのは私の方です」",
      "WIFE picks up a pre-packed suitcase from the hallway — she had it ready. HUSBAND stands from his chair for the first time, reaching toward her.\n[HUSBAND]: 「子供たちに何て言うんだ」\n[WIFE, at the door]: 「子供たちが引っ越しを手伝ってくれました」\nHUSBAND freezes.",
      "Wide shot. WIFE opens the front door. Afternoon light floods in. A car is waiting outside — their adult daughter in the driver's seat, waving. WIFE steps out without looking back. The door closes. HUSBAND stands alone in the dim living room. His beer is getting warm. His dinner will not be made.",
    ],
    lines: [
      { speaker: "夫", text: "お前に何ができるんだ。一人で生きていけると思ってるのか？" },
      { speaker: "妻", text: "あなたと暮らす30年より、一人の1日の方がずっと楽です" },
      { speaker: "妻", text: "30年間、話し合いたかったのは私の方です" },
      { speaker: "妻", text: "子供たちが引っ越しを手伝ってくれました" },
    ],
    endText: "我慢は、いつか静かに終わる",
  },
  // ========== 家族の前で恥系 ==========
  {
    id: 10, category: 'shame_family',
    title: "店員に威張る父→娘「パパ最低」",
    ytTitle: "「俺は客だぞ！」コンビニ店員に怒鳴る父親。だが隣にいた小さな娘が言った一言で、父親は固まる・・・！ #スカッとする話 #子供の一言",
    ytDesc: "コンビニ店員に横柄な態度をとる父親。隣で見ていた小さな娘が「パパ最低」と呟いた瞬間、父親の世界が止まる。\n#スカッと #子供の一言 #コンビニ #父親",
    setting: "コンビニ",
    characters: [
      { id: "FATHER", appearance: "Japanese man, late 30s, business suit, tired and irritable from work. He slams items on the counter and berates the clerk over a minor mistake." },
      { id: "CLERK", appearance: "Japanese woman, late teens, part-time worker, slightly trembling hands as she tries to scan items while being yelled at. She bows repeatedly." },
      { id: "DAUGHTER", appearance: "Japanese girl, age 6, school backpack, holding a small juice box. She watches her father with wide eyes, slowly backing away from him." },
    ],
    scene1: [
      "Convenience store. FATHER slams a bento box on the counter.\n[FATHER, angry]: 「おい、箸入ってなかっただろ前回！ちゃんとやれよ！」\nCLERK bows frantically.\n[CLERK]: 「申し訳ございません…」\nDAUGHTER stands behind FATHER, clutching her juice box.",
      "FATHER escalates, leaning over the counter.\n[FATHER]: 「俺は客だぞ？客に向かってその態度はなんだ？」\nCLERK's eyes are red. Other customers look away uncomfortably. DAUGHTER tugs at FATHER's jacket sleeve. He shakes her off without looking.",
      "FATHER is about to continue when DAUGHTER speaks. Her small voice cuts through the store.\n[DAUGHTER, quiet]: 「パパ…最低」\nFATHER freezes mid-sentence. He turns to look down at his daughter. She is looking at him with eyes full of disappointment, not fear. She takes a step back from him.",
    ],
    scene2: [
      "Close-up of FATHER's face. The anger drains away. In its place: shock, then shame. His daughter's eyes are worse than any reprimand. She looks at him the way she might look at a stranger she doesn't like.\n[FATHER, voice cracking]: 「…美咲」",
      "DAUGHTER turns away from him, walks to CLERK, and holds up her juice box.\n[DAUGHTER, to CLERK]: 「お姉さん、ごめんなさい。パパがごめんなさい」\nCLERK kneels down, surprised, and takes the juice box to scan it. She smiles gently at DAUGHTER.",
      "Wide shot. FATHER stands at the counter, hands at his sides. He looks at CLERK. For the first time, he bows.\n[FATHER, quiet]: 「…すみませんでした」\nHe picks up his bags. DAUGHTER takes his hand but doesn't look up at him. They walk out. FATHER's steps are heavy. DAUGHTER's are light.",
    ],
    lines: [
      { speaker: "父親", text: "俺は客だぞ？客に向かってその態度はなんだ？" },
      { speaker: "娘", text: "パパ…最低" },
      { speaker: "娘", text: "お姉さん、ごめんなさい。パパがごめんなさい" },
      { speaker: "父親", text: "…すみませんでした" },
    ],
    endText: "子供は、親の姿をそのまま映す鏡",
  },
  // ========== 正体判明系：実は偉い人（追加） ==========
  {
    id: 11, category: 'real_vip',
    title: "ホームレスと思って追い出した男→市長だった",
    ytTitle: "「汚い格好で来ないでくれる？」公園のベンチに座る男性を追い出そうとした住民。だがその人物は新任の市長だった・・・！ #スカッとする話 #因果応報",
    ytDesc: "公園のベンチでラフな格好で休んでいた男性をホームレス扱いした住民。だがその男性は就任前に地域を視察していた新任市長だった。\n#スカッと #市長 #見た目で判断 #正体判明",
    setting: "公園",
    characters: [
      { id: "RESIDENT", appearance: "Japanese woman, mid 50s, expensive cardigan, pearl necklace, styled bob haircut, pinched expression. She holds a small dog on a leash and points aggressively at the man on the bench." },
      { id: "MAYOR", appearance: "Japanese man, early 50s, worn windbreaker, baseball cap, reading glasses, unshaven stubble. He sits on a park bench with a notebook, sketching ideas for park renovation. Calm, observant eyes." },
      { id: "AIDE", appearance: "Japanese man, early 30s, neat suit, carrying a briefcase and tablet. He jogs over from a parked black sedan when he sees the confrontation." },
    ],
    scene1: [
      "Public park, morning. MAYOR sits on a bench in casual clothes, writing in a notebook. RESIDENT approaches with her dog.\n[RESIDENT, disgusted]: 「ちょっと、ここは住民の公園よ。汚い格好で居座らないでくれる？」\nMAYOR looks up calmly from his notebook.",
      "MAYOR starts to respond but RESIDENT cuts him off.\n[RESIDENT]: 「ホームレスなら駅前に行って。ここの住民は迷惑してるの」\nShe waves her hand dismissively. Other park-goers watch uncomfortably. MAYOR closes his notebook slowly.",
      "AIDE notices the confrontation from the parked sedan and rushes over.\n[AIDE, out of breath]: 「市長！次の視察先の準備が整いました」\nHe bows to MAYOR. RESIDENT's hand drops to her side.\n[RESIDENT, stammering]: 「し…市長…？」"
    ],
    scene2: [
      "Close-up of RESIDENT's face. Her superior expression crumbles. MAYOR stands from the bench, puts his notebook in his pocket.\n[MAYOR, calm]: 「この公園の改修計画を考えていたんです。住民の方のご意見を聞きたかったんですが」",
      "RESIDENT's dog wags its tail at MAYOR. He bends down and pets it gently.\n[MAYOR]: 「公園は誰でも使える場所です。それが行政の基本ですから」\nRESIDENT clutches her dog's leash, unable to speak.",
      "Wide shot. MAYOR and AIDE walk toward the sedan. RESIDENT stands frozen in the park, other residents whispering around her. One elderly man on a nearby bench shakes his head at her. MAYOR pauses at the car, looks back at the park, and writes one more note."
    ],
    lines: [
      { speaker: "住民女性", text: "汚い格好で居座らないでくれる？" },
      { speaker: "住民女性", text: "ホームレスなら駅前に行って" },
      { speaker: "秘書", text: "市長！次の視察先の準備が整いました" },
      { speaker: "市長", text: "公園は誰でも使える場所です。それが行政の基本ですから" },
    ],
    endText: "権力者ほど、静かにそこにいる",
  },
  // ========== 正体判明系：実は金持ち（追加） ==========
  {
    id: 12, category: 'real_rich',
    title: "地味な母親を見下した保護者→学校最大の寄付者",
    ytTitle: "「あの人、給食費も払えなさそう」地味な母親を陰で笑ったママ友グループ。だが校長が発表した寄付者の名前を聞いて全員凍りつく・・・！ #スカッとする話 #実は金持ち",
    ytDesc: "質素な服装の母親をバカにしていたママ友グループ。だが新校舎の寄付者として紹介されたのはその母親だった。\n#スカッと #ママ友 #実は金持ち #学校",
    setting: "学校",
    characters: [
      { id: "QUIET_MOM", appearance: "Japanese woman, late 30s, no makeup, plain grey sweater, worn canvas tote bag, hair in a simple low bun. She sits quietly at the back of the school auditorium, smiling softly." },
      { id: "BOSS_MOM", appearance: "Japanese woman, early 40s, designer handbag, full makeup, highlighted hair, expensive watch. She whispers loudly to her group, gesturing toward QUIET_MOM with a smirk." },
      { id: "PRINCIPAL", appearance: "Japanese man, late 50s, formal suit, glasses, standing at the auditorium podium with a microphone. He holds an announcement folder." },
    ],
    scene1: [
      "School auditorium, parents' meeting. QUIET_MOM sits alone in the back row. BOSS_MOM and two other mothers sit a few rows ahead, glancing back.\n[BOSS_MOM, whispering loudly]: 「見て、あの人また同じ服。給食費も大変なんじゃない？」\nThe group giggles.",
      "BOSS_MOM continues.\n[BOSS_MOM]: 「うちの子と遊ばせたくないのよね。家も古いアパートらしいし」\nQUIET_MOM can hear but doesn't react. She looks at the stage with the same gentle expression.",
      "PRINCIPAL takes the podium.\n[PRINCIPAL]: 「それでは、新校舎建設の寄付者をご紹介します。5000万円のご寄付をいただきました」\nThe room murmurs in surprise. BOSS_MOM sits up straight, curious.\n[PRINCIPAL]: 「山田美咲様、前へどうぞ」\nQUIET_MOM stands from the back row."
    ],
    scene2: [
      "All heads turn. QUIET_MOM walks to the podium, bowing modestly. BOSS_MOM's jaw drops. Her friends exchange panicked looks.\n[QUIET_MOM, at podium, soft]: 「子供たちが良い環境で学べるなら、それが一番です」",
      "The auditorium erupts in applause. PRINCIPAL bows deeply to QUIET_MOM. She bows back. BOSS_MOM sinks into her seat, face red, clutching her designer bag that suddenly feels meaningless.",
      "After the ceremony. QUIET_MOM walks past BOSS_MOM's group in the hallway. She pauses, smiles gently.\n[QUIET_MOM]: 「給食費は払えてますから、ご心配なく」\nShe continues walking. BOSS_MOM stares at the floor. Her friends pretend to check their phones."
    ],
    lines: [
      { speaker: "ママ友A", text: "あの人また同じ服。給食費も大変なんじゃない？" },
      { speaker: "校長", text: "新校舎建設に5000万円のご寄付をいただきました。山田美咲様、前へどうぞ" },
      { speaker: "母親", text: "子供たちが良い環境で学べるなら、それが一番です" },
      { speaker: "母親", text: "給食費は払えてますから、ご心配なく" },
    ],
    endText: "本当の豊かさは、見せびらかさない",
  },
  {
    id: 13, category: 'real_rich',
    title: "ボロ軽トラの老人を笑った若者→大地主",
    ytTitle: "「ボロい車で来んなよ」駐車場で軽トラの老人を笑った若者。だがその老人がこの土地一帯の地主だと知った瞬間・・・！ #スカッとする話 #実は金持ち",
    ytDesc: "古い軽トラックで来た老人を馬鹿にした若者。だがその老人はこの周辺一帯を所有する大地主だった。若者が借りている駐車場もその老人の土地だった。\n#スカッと #大地主 #駐車場 #見た目で判断",
    setting: "駐車場",
    characters: [
      { id: "YOUNG_MAN", appearance: "Japanese man, early 20s, flashy streetwear, gold chain necklace, bleached hair, standing next to a leased imported car. He laughs while filming on his phone." },
      { id: "OLD_FARMER", appearance: "Japanese man, late 70s, faded work jacket, rubber boots, weathered face with deep wrinkles, calloused hands. He drives a dented old light truck. Quiet dignity in his movements." },
      { id: "PARKING_MANAGER", appearance: "Japanese man, mid 40s, uniform polo with parking company logo, clipboard. He rushes over when he sees the confrontation, bowing deeply to OLD_FARMER." },
    ],
    scene1: [
      "Parking lot. OLD_FARMER parks his old light truck. YOUNG_MAN leans against his imported car nearby, filming with his phone.\n[YOUNG_MAN, laughing]: 「うわ、見ろよこのボロ軽トラ。こんなの乗ってて恥ずかしくないの？」\nOLD_FARMER steps out slowly, unfazed.",
      "YOUNG_MAN walks closer, still recording.\n[YOUNG_MAN]: 「じいちゃん、ここ月極3万の駐車場だよ？場違いじゃない？」\nOLD_FARMER looks at him calmly.\n[OLD_FARMER]: 「そうかい。3万かい」",
      "PARKING_MANAGER rushes over from the office.\n[PARKING_MANAGER, bowing deeply]: 「地主の鈴木様！本日はわざわざお越しいただきありがとうございます！」\nYOUNG_MAN's phone slowly lowers.\n[PARKING_MANAGER, to YOUNG_MAN]: 「この方がこの駐車場と周辺一帯のオーナーですよ」"
    ],
    scene2: [
      "Close-up of YOUNG_MAN's face. His smirk vanishes. He looks at OLD_FARMER, then at the parking lot, then at his own leased car.\n[OLD_FARMER, calm]: 「あんたの駐車場代も、わしに入ってくるんだがね」",
      "YOUNG_MAN hurriedly deletes the video on his phone. PARKING_MANAGER glares at him.\n[PARKING_MANAGER]: 「鈴木様はこの辺り30か所の土地をお持ちです。あなたのアパートの土地もそうですよ」\nYOUNG_MAN's gold chain suddenly feels very heavy.",
      "Wide shot. OLD_FARMER and PARKING_MANAGER walk toward the office. YOUNG_MAN stands alone next to his leased car. He looks at the old light truck, then at his own car. For the first time, his car doesn't feel impressive."
    ],
    lines: [
      { speaker: "若者", text: "ボロ軽トラ。こんなの乗ってて恥ずかしくないの？" },
      { speaker: "若者", text: "ここ月極3万の駐車場だよ？場違いじゃない？" },
      { speaker: "管理人", text: "この方がこの駐車場と周辺一帯のオーナーですよ" },
      { speaker: "老人", text: "あんたの駐車場代も、わしに入ってくるんだがね" },
    ],
    endText: "本物の金持ちは、車で見栄を張らない",
  },
  {
    id: 14, category: 'real_rich',
    title: "安い服の女性を追い出した高級レストラン→ミシュラン審査員",
    ytTitle: "「ドレスコードがありまして」質素な服の女性を追い返した高級レストラン。だが翌日届いたミシュランの結果を見て支配人は崩れ落ちる・・・！ #スカッとする話 #ミシュラン",
    ytDesc: "質素な服装の女性客を門前払いにした高級レストラン。だがその女性はミシュランの覆面審査員だった。翌月、星が一つも付かなかった。\n#スカッと #レストラン #ミシュラン #因果応報",
    setting: "レストラン",
    characters: [
      { id: "WOMAN", appearance: "Japanese woman, mid 40s, clean but simple navy blouse and khaki pants, small shoulder bag, no accessories. She has sharp observant eyes and a small notebook peeking from her bag. Straight posture, refined manners." },
      { id: "MAITRE_D", appearance: "Japanese man, early 40s, tailored black suit, slicked back hair, condescending half-smile. He blocks the entrance with his body, hands clasped behind his back." },
      { id: "CHEF_OWNER", appearance: "Japanese man, late 50s, white chef coat, tall chef hat, standing in the kitchen doorway. His face goes pale when he recognizes the woman being turned away." },
    ],
    scene1: [
      "Entrance of an upscale French restaurant. WOMAN approaches the reservation desk. MAITRE_D looks her up and down.\n[MAITRE_D, cold smile]: 「申し訳ございませんが、当店にはドレスコードがございまして」\nWOMAN looks at her own outfit, then back at him.",
      "[WOMAN, polite]: 「予約してある佐々木です。電話では特に服装の指定はなかったと思いますが」\n[MAITRE_D]: 「お客様のお召し物では他のお客様のご迷惑に…」\nHe gestures toward the door. WOMAN's eyes narrow slightly.",
      "CHEF_OWNER happens to walk past the kitchen door and sees WOMAN at the entrance. His face drains of color. He rushes forward.\n[CHEF_OWNER, panicked whisper to MAITRE_D]: 「何やってるんだ！あの方を通せ！」\nBut WOMAN has already turned and walked out. The door closes behind her."
    ],
    scene2: [
      "CHEF_OWNER grabs MAITRE_D by the arm.\n[CHEF_OWNER, shaking]: 「あの人はミシュランの審査員だ。料理業界では有名な佐々木さんだ」\nMAITRE_D's condescending smile disappears completely.",
      "One month later. CHEF_OWNER sits in his empty restaurant, staring at a tablet screen. The Michelin results are out. His restaurant received no stars. Nearby restaurants that welcomed all guests earned recognition.\n[CHEF_OWNER, to himself]: 「終わった…」",
      "Wide shot. The restaurant's reservation book lies open — half the pages are empty. MAITRE_D's locker is cleaned out; he was fired last week. CHEF_OWNER stands alone in his beautiful, empty dining room, straightening a napkin that no one will use tonight."
    ],
    lines: [
      { speaker: "支配人", text: "当店にはドレスコードがございまして" },
      { speaker: "女性", text: "予約してある佐々木です" },
      { speaker: "シェフ", text: "あの人はミシュランの審査員だ！" },
      { speaker: "シェフ", text: "終わった…" },
    ],
    endText: "客を選ぶ店は、客にも選ばれない",
  },
  // ========== 正体判明系：実は関係者 ==========
  {
    id: 15, category: 'real_insider',
    title: "新幹線で席を奪った男→隣は鉄道会社の社長",
    ytTitle: "「指定席？知らないね」新幹線で他人の席を奪った男。だが隣に座っていたのは鉄道会社の社長だった・・・！ #スカッとする話 #新幹線",
    ytDesc: "新幹線で指定席を奪い居座る男。だが隣の席に座っていたのは鉄道会社の社長本人だった。車掌を呼んだのは社長だった。\n#スカッと #新幹線 #指定席 #鉄道会社社長",
    setting: "新幹線",
    characters: [
      { id: "SEAT_THIEF", appearance: "Japanese man, mid 40s, crumpled business suit, beer can in hand, sprawled across two seats. Aggressive posture, flushed face from drinking. He refuses to move." },
      { id: "PASSENGER", appearance: "Japanese woman, early 30s, holding a valid reserved seat ticket, standing in the aisle looking distressed. She holds a heavy bag and looks exhausted." },
      { id: "RAIL_CEO", appearance: "Japanese man, early 60s, understated dark suit, thin-rimmed glasses, calm demeanor. He sits in the window seat next to the disputed seat, observing quietly with sharp eyes." },
    ],
    scene1: [
      "Shinkansen interior. PASSENGER stands over SEAT_THIEF who occupies her reserved seat.\n[PASSENGER]: 「すみません、ここ私の指定席なんですが…」\n[SEAT_THIEF, not moving]: 「知らないね。早い者勝ちだろ」\nHe takes a swig of beer.",
      "PASSENGER shows her ticket.\n[PASSENGER]: 「チケットにこの席番号が書いてあります」\n[SEAT_THIEF]: 「うるせえな。車掌でも呼べば？どうせ来ないよ」\nHe laughs. RAIL_CEO in the window seat reaches into his pocket and sends a text message.",
      "Within 30 seconds, a conductor arrives — unusually fast. The conductor bows deeply to RAIL_CEO first.\n[CONDUCTOR, nervous]: 「社長、お呼びでしょうか」\nSEAT_THIEF's beer can freezes at his lips.\n[RAIL_CEO, calm]: 「この方の座席を確認してあげてください」"
    ],
    scene2: [
      "Close-up of SEAT_THIEF's face. He stares at RAIL_CEO, then at the conductor who called him 'President.'\n[SEAT_THIEF, stammering]: 「しゃ…社長…？」\n[RAIL_CEO]: 「ええ。この路線を運営している会社の社長です」",
      "SEAT_THIEF stands immediately, fumbling with his beer can. The conductor checks PASSENGER's ticket and confirms her seat.\n[CONDUCTOR]: 「お客様、こちらの席で間違いございません」\nPASSENGER sits down, relieved. SEAT_THIEF backs into the aisle.",
      "Wide shot. SEAT_THIEF walks away down the aisle, head down, carrying his beer can. RAIL_CEO turns to PASSENGER.\n[RAIL_CEO, gentle]: 「お疲れ様でした。快適な旅を」\nHe returns to reading his book. PASSENGER smiles, settling into her rightful seat."
    ],
    lines: [
      { speaker: "男", text: "知らないね。早い者勝ちだろ" },
      { speaker: "男", text: "車掌でも呼べば？どうせ来ないよ" },
      { speaker: "車掌", text: "社長、お呼びでしょうか" },
      { speaker: "社長", text: "この路線を運営している会社の社長です" },
    ],
    endText: "偉い人ほど、静かに見ている",
  },
  {
    id: 16, category: 'real_insider',
    title: "面接官を舐めた就活生→面接官が取引先の社長",
    ytTitle: "「こんな小さい会社、滑り止めですよ」就活生が面接官に言った一言。だが翌週、第一志望の最終面接に現れたのは・・・！ #スカッとする話 #面接",
    ytDesc: "面接で「滑り止め」と正直に言ってしまった就活生。だが翌週、第一志望の最終面接官としてその人が再登場する。\n#スカッと #就活 #面接 #因果応報",
    setting: "面接室",
    characters: [
      { id: "STUDENT", appearance: "Japanese man, early 20s, new recruit suit, gel-styled hair, overconfident smirk. He sits with legs slightly spread, leaning back in the interview chair." },
      { id: "INTERVIEWER", appearance: "Japanese woman, late 40s, simple navy blazer, minimal makeup, pearl stud earrings. She takes notes calmly. She is actually the CEO of a major partner company serving as an external interviewer." },
      { id: "HR_STAFF", appearance: "Japanese man, early 30s, company badge visible, sitting beside INTERVIEWER. He flinches when STUDENT speaks rudely." },
    ],
    scene1: [
      "Small meeting room. STUDENT sits across from INTERVIEWER and HR_STAFF.\n[INTERVIEWER]: 「当社を志望された理由を教えてください」\n[STUDENT, casual]: 「正直に言うと、滑り止めですね。本命は大手のA社なんで」\nHR_STAFF's pen stops moving.",
      "INTERVIEWER's expression doesn't change. She continues calmly.\n[INTERVIEWER]: 「そうですか。A社のどこに魅力を感じますか？」\n[STUDENT, grinning]: 「規模ですかね。こういう小さい会社だと将来性が…」\nHe trails off, gesturing around the small room.",
      "INTERVIEWER closes her notebook.\n[INTERVIEWER, calm]: 「お話、よく分かりました。ありがとうございました」\nSTUDENT stands, barely bows, and leaves. HR_STAFF turns to INTERVIEWER.\n[HR_STAFF, apologetic]: 「申し訳ありません、田中社長…」\nThe door is already closed. STUDENT didn't hear."
    ],
    scene2: [
      "One week later. A large, impressive meeting room at Company A. STUDENT sits nervously in his best suit — this is his dream company's final interview. The door opens. INTERVIEWER walks in and sits across from him.\nSTUDENT's face turns white.",
      "[INTERVIEWER, professional smile]: 「A社の社外取締役として最終面接を担当します。先週もお会いしましたね」\nSTUDENT grips the arms of his chair.\n[STUDENT, voice cracking]: 「あ…あの時は…」",
      "[INTERVIEWER]: 「小さい会社の面接官が、大きい会社の最終面接に座ることもあるんですよ」\nShe opens her notebook — the same one from last week. STUDENT stares at the table. The interview hasn't started yet, but it's already over."
    ],
    lines: [
      { speaker: "学生", text: "正直に言うと、滑り止めですね" },
      { speaker: "学生", text: "こういう小さい会社だと将来性が…" },
      { speaker: "面接官", text: "A社の社外取締役として最終面接を担当します" },
      { speaker: "面接官", text: "小さい会社の面接官が、大きい会社の最終面接に座ることもあるんですよ" },
    ],
    endText: "世界は思ったより狭い",
  },
  {
    id: 17, category: 'real_insider',
    title: "タクシー運転手に暴言→乗客の妻が交通局長",
    ytTitle: "「遅いんだよクソジジイ！」タクシー運転手に暴言を吐いた男。だが後部座席のもう一人の乗客が名刺を出した瞬間・・・！ #スカッとする話 #タクシー",
    ytDesc: "タクシー運転手に暴言を吐く酔った男。だが相乗りしていたもう一人の乗客は交通局の局長だった。\n#スカッと #タクシー #暴言 #因果応報",
    setting: "タクシー",
    characters: [
      { id: "DRUNK_MAN", appearance: "Japanese man, mid 30s, rumpled suit, loosened tie, red face from alcohol. He kicks the back of the driver's seat and shouts slurred insults." },
      { id: "TAXI_DRIVER", appearance: "Japanese man, late 60s, clean white gloves, neat uniform, silver hair. He grips the steering wheel tightly, enduring the abuse with a clenched jaw." },
      { id: "OFFICIAL", appearance: "Japanese woman, early 50s, grey business suit, briefcase on lap, sitting on the other side of the back seat. She has been silent, observing. She reaches into her briefcase for a business card holder." },
    ],
    scene1: [
      "Interior of a taxi at night. DRUNK_MAN in the back seat, OFFICIAL sitting on the far side. TAXI_DRIVER drives carefully.\n[DRUNK_MAN, slurred]: 「おい、もっと飛ばせよ！遅いんだよクソジジイ！」\nHe kicks the back of the driver's seat. TAXI_DRIVER flinches.",
      "DRUNK_MAN continues.\n[DRUNK_MAN]: 「こんな運転じゃ免許返せよ。年寄りは引退しろ」\nTAXI_DRIVER stays silent, hands trembling on the wheel. OFFICIAL watches from her side of the seat, her expression hardening.",
      "OFFICIAL speaks for the first time.\n[OFFICIAL, clear voice]: 「運転手さん、次の信号で停めてください」\nThe taxi stops. OFFICIAL takes out a business card and holds it up.\n[OFFICIAL]: 「国土交通省の者です。今の暴行、全て記録させていただきました」\nDRUNK_MAN's red face turns white."
    ],
    scene2: [
      "Close-up of the business card: 国土交通省 交通局長. DRUNK_MAN stares at it, sobering up instantly.\n[DRUNK_MAN]: 「え…冗談でしょ…」\n[OFFICIAL]: 「タクシー車内での暴行は犯罪です。運転手さん、警察を呼びますか？」",
      "TAXI_DRIVER looks in the rearview mirror, surprised. For the first time, someone has stood up for him.\n[TAXI_DRIVER, quiet]: 「いえ…お客様が反省されるなら…」\n[OFFICIAL, to DRUNK_MAN]: 「運転手さんの寛大さに感謝すべきですね」",
      "DRUNK_MAN fumbles with the door, bows clumsily toward the driver.\n[DRUNK_MAN, mumbling]: 「す、すみませんでした…」\nHe stumbles out of the taxi. OFFICIAL moves to the front passenger seat.\n[OFFICIAL, to TAXI_DRIVER]: 「いつも安全運転をありがとうございます」\nTAXI_DRIVER's eyes glisten."
    ],
    lines: [
      { speaker: "酔った男", text: "遅いんだよクソジジイ！年寄りは引退しろ" },
      { speaker: "女性", text: "国土交通省の者です。今の暴行、全て記録させていただきました" },
      { speaker: "運転手", text: "お客様が反省されるなら…" },
      { speaker: "女性", text: "いつも安全運転をありがとうございます" },
    ],
    endText: "誰が見ていなくても、誰かは見ている",
  },
  {
    id: 18, category: 'real_insider',
    title: "美容師を馬鹿にした客→担当はコンテスト優勝者",
    ytTitle: "「あんた本当に美容師？下手すぎない？」新人と思い込んだ客が美容師を罵倒。だがその美容師は全国コンテスト優勝者だった・・・！ #スカッとする話 #美容院",
    ytDesc: "若いからと新人扱いして美容師を罵倒した客。だがその美容師は全国コンテスト優勝者で、指名3ヶ月待ちの人気スタイリストだった。\n#スカッと #美容院 #見た目で判断 #実力",
    setting: "美容院",
    characters: [
      { id: "RUDE_CLIENT", appearance: "Japanese woman, mid 50s, heavy makeup, designer clothes, multiple rings on fingers. She sits in the salon chair with arms crossed, scowling at the mirror." },
      { id: "STYLIST", appearance: "Japanese woman, mid 20s, trendy but understated outfit, short asymmetric haircut dyed light brown, multiple ear piercings. She holds scissors professionally despite being insulted. Calm, focused eyes." },
      { id: "SALON_OWNER", appearance: "Japanese man, late 40s, stylish vest and shirt, well-groomed beard. He watches from the reception desk, ready to intervene." },
    ],
    scene1: [
      "Hair salon interior. RUDE_CLIENT sits in the chair. STYLIST begins consultation.\n[RUDE_CLIENT, dismissive]: 「あんた何年目？新人でしょ？ベテランに変えてくれない？」\n[STYLIST, professional]: 「5年目になります。ご希望のスタイルをお聞かせください」",
      "RUDE_CLIENT waves her hand.\n[RUDE_CLIENT]: 「若い子に任せて失敗したくないの。店長呼んで」\nSALON_OWNER approaches.\n[SALON_OWNER]: 「お客様、彼女は当店のトップスタイリストです」\n[RUDE_CLIENT, scoffing]: 「この子が？冗談でしょ」",
      "SALON_OWNER points to the wall. A large poster shows STYLIST holding a trophy — the National Hair Design Competition grand prize winner.\n[SALON_OWNER]: 「全国大会優勝者です。指名は3ヶ月待ちですが、今日たまたま空きがあったんです」\nRUDE_CLIENT stares at the poster, then at STYLIST."
    ],
    scene2: [
      "Close-up of RUDE_CLIENT's face in the mirror. Her scowl fades into embarrassment.\n[RUDE_CLIENT, quietly]: 「あ…そうなの…」\nSTYLIST smiles professionally, showing no resentment.\n[STYLIST]: 「では、ご要望をお聞かせください」",
      "Time skip. STYLIST finishes the haircut. RUDE_CLIENT stares at herself in the mirror. Her hair is transformed — elegant, ten years younger. She touches it with trembling fingers.\n[RUDE_CLIENT, stunned]: 「…すごい」",
      "RUDE_CLIENT stands, bowing to STYLIST — something she clearly doesn't do often.\n[RUDE_CLIENT]: 「さっきはごめんなさい。次も指名していい？」\n[STYLIST, warm smile]: 「もちろんです。3ヶ月後のご予約、お取りしますね」\nRUDE_CLIENT leaves looking different — not just her hair, but her attitude."
    ],
    lines: [
      { speaker: "客", text: "あんた何年目？新人でしょ？" },
      { speaker: "客", text: "若い子に任せて失敗したくないの" },
      { speaker: "オーナー", text: "全国大会優勝者です。指名は3ヶ月待ちです" },
      { speaker: "客", text: "さっきはごめんなさい。次も指名していい？" },
    ],
    endText: "実力は、見た目の若さでは測れない",
  },
  // ========== 因果応報系：嘘がバレる（追加） ==========
  {
    id: 19, category: 'lie_exposed',
    title: "仮病で休んだ社員→SNSにテーマパーク写真",
    ytTitle: "「高熱で動けません…」仮病で休んだ社員。だがSNSに上がった写真を見た上司が翌日呼び出す・・・！ #スカッとする話 #嘘がバレる",
    ytDesc: "高熱で出社できないと嘘をついた社員。だがその日のうちにテーマパークで遊ぶ写真をSNSに投稿。上司のフォロワーだったことを忘れていた。\n#スカッと #仮病 #SNS #因果応報",
    setting: "オフィス",
    characters: [
      { id: "LIAR", appearance: "Japanese man, mid 20s, typically neat office clothes but today seen in casual T-shirt and sunglasses in a social media photo. He sits nervously in the office the next day, sweating." },
      { id: "SECTION_CHIEF", appearance: "Japanese woman, late 40s, neat blouse and pencil skirt, reading glasses pushed up on her head. She holds a printed screenshot of a social media post, expression ice cold." },
      { id: "COWORKER", appearance: "Japanese woman, mid 20s, office attire, sitting at the next desk. She worked overtime to cover LIAR's shift and looks exhausted with dark circles under her eyes." },
    ],
    scene1: [
      "Office, morning. Flashback: phone call. LIAR on the phone, faking a weak voice.\n[LIAR, on phone, fake cough]: 「すみません…38度の熱で…今日はお休みさせてください…」\nCut to: LIAR at a theme park, laughing, posting selfies with Mickey Mouse ears.",
      "Next day. LIAR walks into the office looking healthy. COWORKER stares at him with exhausted eyes — she covered all his work yesterday.\n[LIAR, cheerful]: 「いやー、昨日は大変だった。熱がすごくて」\nCOWORKER says nothing. She glances at SECTION_CHIEF's office.",
      "SECTION_CHIEF opens her office door.\n[SECTION_CHIEF, cold]: 「中田くん、ちょっと来て」\nShe holds up a printed screenshot. It's LIAR's social media post from yesterday — him at the theme park, timestamp clearly visible, Mickey ears on his head.\n[SECTION_CHIEF]: 「38度の熱で絶叫マシン、乗れるんだ？」"
    ],
    scene2: [
      "Close-up of LIAR's face. All color drains away. He stares at the printed screenshot — his own smiling face with the timestamp 14:32, the day he called in sick.\n[LIAR]: 「あ…これは…その…」\n[SECTION_CHIEF]: 「私、あなたのフォロワーなの。知らなかった？」",
      "SECTION_CHIEF places a formal warning document on the desk.\n[SECTION_CHIEF]: 「昨日、田辺さんが一人であなたの分まで残業したの。知ってた？」\nLIAR looks through the glass at COWORKER, who is rubbing her eyes at her desk.",
      "LIAR stands, bows deeply.\n[LIAR, shaking]: 「申し訳ありませんでした…」\n[SECTION_CHIEF]: 「謝る相手は私じゃなくて田辺さんよ」\nLIAR walks out of the office. He stops at COWORKER's desk. She doesn't look up. He bows. The office is silent."
    ],
    lines: [
      { speaker: "社員", text: "38度の熱で…今日はお休みさせてください" },
      { speaker: "課長", text: "38度の熱で絶叫マシン、乗れるんだ？" },
      { speaker: "課長", text: "私、あなたのフォロワーなの。知らなかった？" },
      { speaker: "課長", text: "謝る相手は私じゃなくて田辺さんよ" },
    ],
    endText: "SNSは、嘘を一番早くバラす",
  },
  {
    id: 20, category: 'lie_exposed',
    title: "学歴詐称の部長→同窓会名簿に名前なし",
    ytTitle: "「俺は東大卒だぞ」学歴を自慢し続けた部長。だが部下が同窓会名簿を持ってきた瞬間・・・！ #スカッとする話 #学歴詐称",
    ytDesc: "東大卒を自慢し部下を見下し続けた部長。だが部下が偶然入手した同窓会名簿にその名前はなかった。\n#スカッと #学歴詐称 #因果応報 #嘘がバレる",
    setting: "会議室",
    characters: [
      { id: "FAKE_DIRECTOR", appearance: "Japanese man, mid 50s, expensive suit, university alumni pin on lapel, condescending posture. He constantly adjusts his glasses and speaks in a lecturing tone." },
      { id: "YOUNG_EMPLOYEE", appearance: "Japanese man, late 20s, modest office clothes, quiet demeanor. He holds a thick alumni directory with bookmarked pages. His hands are steady despite his racing heart." },
      { id: "PRESIDENT", appearance: "Japanese man, early 60s, dignified suit, actual university alumni pin. He sits at the head of the table, expression unreadable." },
    ],
    scene1: [
      "Meeting room. FAKE_DIRECTOR berates YOUNG_EMPLOYEE in front of others.\n[FAKE_DIRECTOR]: 「だからFラン卒は使えないんだよ。俺みたいに東大出てればこんなミスはしない」\nYOUNG_EMPLOYEE bows, jaw clenched.",
      "FAKE_DIRECTOR turns to the room.\n[FAKE_DIRECTOR]: 「東大の法学部で学んだ論理的思考がないとな。お前らには分からんだろうが」\nHe laughs. No one else does. PRESIDENT watches from the head of the table.",
      "YOUNG_EMPLOYEE opens his bag and pulls out a thick book — the Tokyo University Alumni Directory.\n[YOUNG_EMPLOYEE, calm]: 「部長、この名簿なんですが。該当年度の法学部の卒業生名簿にお名前がないんです」\nThe room goes silent. FAKE_DIRECTOR's laugh dies."
    ],
    scene2: [
      "Close-up of FAKE_DIRECTOR's face. His confident expression shatters like glass.\n[FAKE_DIRECTOR, defensive]: 「そ、それは名簿が古いだけだ…」\n[PRESIDENT, speaking up]: 「私もその年の法学部卒だが、君の名前は記憶にないな」",
      "FAKE_DIRECTOR stares at PRESIDENT. He didn't know the president was from the same university.\n[PRESIDENT]: 「人事に確認させよう。経歴詐称は懲戒事由だ」\nFAKE_DIRECTOR's hands grip the table edge, knuckles white.",
      "Wide shot. FAKE_DIRECTOR sits alone as others file out of the meeting room. His alumni pin sits on the table — he removed it himself. YOUNG_EMPLOYEE walks past, pausing at the door.\n[YOUNG_EMPLOYEE, quiet]: 「学歴じゃなくて、仕事で勝負すればよかったのに」\nThe door closes."
    ],
    lines: [
      { speaker: "部長", text: "俺みたいに東大出てればこんなミスはしない" },
      { speaker: "社員", text: "該当年度の法学部の卒業生名簿にお名前がないんです" },
      { speaker: "社長", text: "私もその年の法学部卒だが、君の名前は記憶にないな" },
      { speaker: "社員", text: "学歴じゃなくて、仕事で勝負すればよかったのに" },
    ],
    endText: "嘘の学歴より、本物の実力を",
  },
  {
    id: 21, category: 'lie_exposed',
    title: "浮気の言い訳→GPSの履歴が全部残ってた",
    ytTitle: "「残業だったんだ」毎晩遅い夫の言い訳。だが妻がカーナビの履歴を見せた瞬間、夫は絶句する・・・！ #スカッとする話 #浮気バレ",
    ytDesc: "毎晩「残業」と言い訳していた夫。だが妻はカーナビの行き先履歴を全て保存していた。ホテル街への往復記録を突きつけられ、夫は絶句する。\n#スカッと #浮気 #カーナビ #嘘がバレる",
    setting: "住宅街",
    characters: [
      { id: "CHEATING_HUSBAND", appearance: "Japanese man, late 30s, loosened tie, slight cologne smell, nervous smile. He enters the living room holding a convenience store bag as alibi. His shirt has a faint lipstick mark on the collar." },
      { id: "CALM_WIFE", appearance: "Japanese woman, mid 30s, casual home clothes, hair tied back, no tears. She sits at the dining table with a laptop open and a stack of printed papers. Her expression is eerily calm." },
    ],
    scene1: [
      "Living room, late night. CHEATING_HUSBAND enters.\n[CHEATING_HUSBAND, tired act]: 「ただいま。今日も残業で遅くなった」\nCALM_WIFE sits at the table, not looking up from her laptop.\n[CALM_WIFE]: 「お疲れ様。ちょっと座って」",
      "CHEATING_HUSBAND sits, uneasy. CALM_WIFE turns the laptop toward him. The screen shows a map with GPS tracking — his car's route for the past three months.\n[CALM_WIFE]: 「会社から残業記録をもらったの。先月の残業、ゼロだったよ」\nHUSBAND's convenience store bag drops.",
      "CALM_WIFE flips through printed papers — screenshots of the car navigation history.\n[CALM_WIFE]: 「毎週木曜日、渋谷のホテル街。6ヶ月で24回。律儀だね」\nShe places the stack neatly on the table. CHEATING_HUSBAND stares at the papers, mouth open, no words coming out."
    ],
    scene2: [
      "Close-up of CHEATING_HUSBAND's face. His fake tired act crumbles.\n[CHEATING_HUSBAND]: 「これは…違うんだ、説明させてくれ」\n[CALM_WIFE]: 「24回分の説明、聞く時間はないわ」\nShe places a manila envelope on the table. Inside: divorce papers.",
      "CHEATING_HUSBAND reaches for her hand. She pulls away.\n[CHEATING_HUSBAND]: 「やり直せないか…」\n[CALM_WIFE]: 「やり直す？24回やり直すチャンスがあったのに、24回とも同じ場所に行ったよね」",
      "CALM_WIFE stands, picks up a pre-packed bag from the hallway.\n[CALM_WIFE]: 「弁護士には連絡済み。カーナビの記録は証拠として提出します」\nShe walks to the door. CHEATING_HUSBAND sits at the table surrounded by printed maps that trace his lies, route by route."
    ],
    lines: [
      { speaker: "夫", text: "今日も残業で遅くなった" },
      { speaker: "妻", text: "先月の残業、ゼロだったよ" },
      { speaker: "妻", text: "毎週木曜日、渋谷のホテル街。6ヶ月で24回" },
      { speaker: "妻", text: "24回やり直すチャンスがあったのに、24回とも同じ場所に行ったよね" },
    ],
    endText: "嘘は、データに勝てない",
  },
  // ========== 因果応報系：証拠が残ってた（追加） ==========
  {
    id: 22, category: 'evidence',
    title: "セクハラ否定の役員→防犯カメラに全記録",
    ytTitle: "「合意の上だ」セクハラを否定した役員。だが防犯カメラの映像が再生された瞬間、言い訳は完全に崩壊する・・・！ #スカッとする話 #セクハラ",
    ytDesc: "セクハラを全否定した役員。だが廊下の防犯カメラがすべてを記録していた。映像を前に、役員の嘘が完全に崩壊する。\n#スカッと #セクハラ #防犯カメラ #証拠",
    setting: "会議室",
    characters: [
      { id: "EXEC", appearance: "Japanese man, late 50s, expensive pinstripe suit, gold watch, receding hairline, confident smirk. He sits with arms crossed, legs spread wide, radiating arrogance." },
      { id: "VICTIM_WOMAN", appearance: "Japanese woman, mid 20s, conservative office blouse, hair pinned back, sitting rigidly with hands folded. She looks tense but determined." },
      { id: "LAWYER", appearance: "Japanese woman, early 40s, sharp black suit, thin-framed glasses, holding a tablet and USB drive. She speaks with precise, measured words." },
    ],
    scene1: [
      "Meeting room. EXEC sits on one side, VICTIM_WOMAN and LAWYER on the other.\n[EXEC, dismissive]: 「セクハラ？彼女の勘違いだよ。肩をポンと叩いただけだ」\nHe waves his hand. VICTIM_WOMAN's jaw tightens.",
      "[EXEC]: 「証拠がないなら、これ以上の話は名誉毀損になるぞ」\nHe leans back, confident. LAWYER opens her briefcase and removes a USB drive.\n[LAWYER]: 「では、証拠をお見せします」",
      "LAWYER inserts the USB into the meeting room monitor. Security camera footage plays: EXEC cornering VICTIM_WOMAN in a hallway, grabbing her arm, leaning in close as she tries to pull away. Timestamp clearly visible. The room is silent.\n[LAWYER]: 「3階廊下の防犯カメラです。肩をポンと叩いただけ、ですか？」"
    ],
    scene2: [
      "Close-up of EXEC's face. His confident smirk is gone. He stares at the screen showing himself.\n[EXEC, stammering]: 「こ、これは…角度が…」\n[LAWYER]: 「別の角度もあります」\nShe clicks. A second camera angle shows the same scene even more clearly.",
      "[LAWYER]: 「過去6ヶ月分、17件の映像があります。すべて提出済みです」\nShe places a printed report on the table. EXEC's gold watch reflects the light as his hand trembles.\n[EXEC]: 「待ってくれ…示談で…」\n[LAWYER]: 「示談の段階は過ぎました」",
      "Wide shot. EXEC sits slumped in his chair, the confident posture completely gone. VICTIM_WOMAN stands, bows to LAWYER, and walks out with steady steps. On the monitor, the security footage is paused on EXEC's face — caught in the act. The evidence will not disappear."
    ],
    lines: [
      { speaker: "役員", text: "セクハラ？肩をポンと叩いただけだ" },
      { speaker: "役員", text: "証拠がないなら名誉毀損になるぞ" },
      { speaker: "弁護士", text: "3階廊下の防犯カメラです" },
      { speaker: "弁護士", text: "過去6ヶ月分、17件の映像があります。すべて提出済みです" },
    ],
    endText: "カメラは、嘘をつかない",
  },
  {
    id: 23, category: 'evidence',
    title: "いじめっ子が否定→クラス全員のスマホに動画",
    ytTitle: "「いじめなんてしてません」しらを切ったいじめっ子。だが教室中のスマホに同じ動画が入っていた・・・！ #スカッとする話 #いじめ",
    ytDesc: "いじめを全否定した生徒。だがクラスメイト全員のスマホに証拠動画が保存されていた。職員室で再生された瞬間、嘘が崩壊する。\n#スカッと #いじめ #証拠 #学校",
    setting: "学校",
    characters: [
      { id: "BULLY", appearance: "Japanese boy, age 16, school uniform with rolled-up sleeves, dyed brown hair tips, cocky grin. He sits with legs crossed in the teacher's office, arms behind his head." },
      { id: "BULLIED_STUDENT", appearance: "Japanese boy, age 15, school uniform buttoned properly, slight frame, bruise visible on his wrist. He sits with head down, hands in lap." },
      { id: "TEACHER", appearance: "Japanese woman, mid 30s, cardigan over blouse, concerned expression. She places 5 smartphones on the desk, all showing the same video thumbnail." },
    ],
    scene1: [
      "Teacher's office. BULLY sits confidently. BULLIED_STUDENT sits nearby, head down.\n[BULLY, casual]: 「いじめ？してませんよ。ふざけてただけです」\n[TEACHER]: 「田中くんの腕の痣は？」\n[BULLY]: 「知りませんね。自分で転んだんじゃないですか」",
      "BULLY looks at BULLIED_STUDENT.\n[BULLY]: 「な？ふざけてただけだよな？」\nBULLIED_STUDENT doesn't respond, gripping his own wrist. TEACHER opens her desk drawer.",
      "TEACHER places five smartphones on the desk, each showing the same video.\n[TEACHER]: 「クラスメイト5人が別々に撮影した動画です。全部同じ場面が映っています」\nShe presses play on the first phone. BULLY's voice fills the room: shouting, hitting, laughing.\nBULLY's crossed legs uncross."
    ],
    scene2: [
      "The video plays. On screen: BULLY shoving BULLIED_STUDENT against lockers, kicking his bag, laughing with friends. Multiple angles, multiple phones, same cruelty.\n[BULLY, panicking]: 「待って、これは…ふざけてて…」\n[TEACHER]: 「5人が同時にふざけていると思った？」",
      "TEACHER turns off the videos.\n[TEACHER]: 「保護者と教育委員会にはすでに報告しています」\nThe door opens. BULLY's mother enters, face pale. Behind her, the vice principal.\n[BULLY'S MOTHER]: 「あなた…何してるの…」\nBULLY's cocky posture collapses completely.",
      "Wide shot. BULLIED_STUDENT lifts his head for the first time. Across the desk, BULLY stares at the floor, his mother's hand gripping his shoulder. The five smartphones lie on the desk — silent witnesses that spoke louder than any denial."
    ],
    lines: [
      { speaker: "いじめっ子", text: "いじめ？してませんよ。ふざけてただけです" },
      { speaker: "先生", text: "クラスメイト5人が別々に撮影した動画です" },
      { speaker: "先生", text: "保護者と教育委員会にはすでに報告しています" },
      { speaker: "母親", text: "あなた…何してるの…" },
    ],
    endText: "スマホの時代、いじめは隠せない",
  },
  {
    id: 24, category: 'evidence',
    title: "万引き犯が否定→ポケットから商品タグ",
    ytTitle: "「何も盗ってない！」万引きを否定した女。だがポケットから出てきたものに言い訳できなくなる・・・！ #スカッとする話 #万引き",
    ytDesc: "商品を盗んでいないと主張した女性。だがポケットから未精算の商品タグが次々と出てきて、言い逃れできなくなる。\n#スカッと #万引き #証拠 #コンビニ",
    setting: "コンビニ",
    characters: [
      { id: "SHOPLIFTER", appearance: "Japanese woman, mid 30s, oversized coat with many pockets, large tote bag, nervous darting eyes. She clutches her bag to her chest defensively." },
      { id: "STORE_MANAGER", appearance: "Japanese man, mid 40s, store uniform polo, name badge, calm but firm demeanor. He stands between SHOPLIFTER and the exit." },
      { id: "SECURITY", appearance: "Japanese man, late 30s, plain clothes, earpiece visible. He holds a tablet showing security camera footage of the theft in progress." },
    ],
    scene1: [
      "Convenience store back office. SHOPLIFTER stands defiantly.\n[SHOPLIFTER, angry]: 「何も盗ってないわよ！冤罪よ！訴えるわよ！」\nSTORE_MANAGER stands calmly.\n[STORE_MANAGER]: 「お客様、防犯カメラを確認させてください」",
      "SECURITY shows the tablet: footage of SHOPLIFTER slipping cosmetics into her coat pockets.\n[SHOPLIFTER]: 「これ私じゃないわ！似てる人はいくらでもいるでしょ！」\nShe crosses her arms. Something crinkles in her coat pocket.",
      "STORE_MANAGER notices the sound.\n[STORE_MANAGER]: 「お客様、ポケットの中を見せていただけますか」\n[SHOPLIFTER]: 「プライバシーの侵害よ！」\nAs she gestures angrily, a price tag falls from her coat onto the floor. Then another. Then a lipstick rolls out of her pocket."
    ],
    scene2: [
      "Close-up of the floor: three price tags, a lipstick, and a mascara, all with the store's barcode stickers. SHOPLIFTER stares down at them.\n[STORE_MANAGER]: 「何も盗っていない、でしたか」\nSHOPLIFTER's defiant expression crumbles.",
      "[SHOPLIFTER, changing tone]: 「あ…これは…入れるの忘れてて…」\n[SECURITY]: 「お支払い前に商品をポケットに入れ、レジを通過する映像が残っています」\nHe plays the footage again. The timestamp and angle are undeniable.",
      "Wide shot. STORE_MANAGER picks up the phone.\n[STORE_MANAGER]: 「警察に連絡します」\nSHOPLIFTER sinks into the chair, hands over her face. The stolen items sit on the desk between them — a lipstick and mascara worth less than 3000 yen that will cost her everything."
    ],
    lines: [
      { speaker: "女", text: "何も盗ってないわよ！冤罪よ！" },
      { speaker: "店長", text: "お客様、ポケットの中を見せていただけますか" },
      { speaker: "警備員", text: "レジを通過する映像が残っています" },
      { speaker: "店長", text: "警察に連絡します" },
    ],
    endText: "小さな嘘が、大きな代償になる",
  },
  // ========== 因果応報系：目撃者がいた（追加） ==========
  {
    id: 25, category: 'witness',
    title: "当て逃げした男→向かいのマンションから住民が見てた",
    ytTitle: "「誰も見てないだろ」深夜に当て逃げした男。だが翌朝、向かいのマンションの住民から連絡が来る・・・！ #スカッとする話 #当て逃げ",
    ytDesc: "深夜に車をぶつけて逃げた男。誰にも見られていないと思ったが、向かいのマンションの不眠症の住民がベランダから全てを目撃していた。\n#スカッと #当て逃げ #目撃者 #因果応報",
    setting: "駐車場",
    characters: [
      { id: "HIT_RUN_DRIVER", appearance: "Japanese man, early 40s, casual jacket, baseball cap pulled low. He crouches by the damaged car he hit, looking around nervously before jumping back into his own car." },
      { id: "CAR_OWNER", appearance: "Japanese woman, mid 30s, business suit, holding car keys. She stares at the deep scratch and dent on her parked car, hand over her mouth." },
      { id: "WITNESS_RESIDENT", appearance: "Japanese man, late 60s, pajamas and cardigan, reading glasses around neck. He holds a smartphone with a video clearly showing the hit and run from his high-angle balcony view." },
    ],
    scene1: [
      "Parking lot, early morning. CAR_OWNER approaches her car and finds a massive dent and scratch on the driver's side. She looks around — no note, no one around.\n[CAR_OWNER, upset]: 「嘘でしょ…当て逃げ？」\nShe kneels to examine the damage.",
      "CAR_OWNER calls the police. While waiting, an elderly man approaches from the apartment building across the street.\n[WITNESS_RESIDENT]: 「あの、昨夜のことなら見てましたよ」\nCAR_OWNER looks up, surprised.\n[WITNESS_RESIDENT]: 「不眠症でベランダにいたんです。全部動画に撮りました」",
      "He shows his smartphone. The video is clear: HIT_RUN_DRIVER backing into the parked car at 2 AM, getting out, checking the damage, looking around, then driving away. The license plate is perfectly visible from the high angle.\n[CAR_OWNER, relieved]: 「ナンバーまで映ってる…！」\n[WITNESS_RESIDENT]: 「8階からだとよく見えるんです」"
    ],
    scene2: [
      "Police station. HIT_RUN_DRIVER sits across from an officer. His cap is off now, face sweaty.\n[OFFICER]: 「昨夜2時、この駐車場で車両に接触して逃走しましたね」\n[HIT_RUN_DRIVER]: 「知りません。その時間は家にいました」",
      "The officer turns a monitor toward him. The witness's video plays — HIT_RUN_DRIVER's face, his car, his license plate, all crystal clear.\n[OFFICER]: 「向かいのマンション8階から撮影された映像です」\nHIT_RUN_DRIVER stares at the screen, seeing himself from above.",
      "Wide shot. HIT_RUN_DRIVER slumps in the chair.\n[HIT_RUN_DRIVER, defeated]: 「…すみません」\n[OFFICER]: 「当て逃げは刑事罰の対象です」\nHIT_RUN_DRIVER's hands cover his face. Somewhere in a high-rise apartment, an old man with insomnia sleeps peacefully for once."
    ],
    lines: [
      { speaker: "車の持ち主", text: "当て逃げ？" },
      { speaker: "目撃者", text: "不眠症でベランダにいたんです。全部動画に撮りました" },
      { speaker: "警察", text: "向かいのマンション8階から撮影された映像です" },
      { speaker: "警察", text: "当て逃げは刑事罰の対象です" },
    ],
    endText: "誰も見ていない場所はない",
  },
  {
    id: 26, category: 'witness',
    title: "子供を突き飛ばした女→後ろにPTAの全役員",
    ytTitle: "「邪魔なのよガキ！」スーパーで子供を突き飛ばした女。だが振り返ると、そこにはPTA役員が全員いた・・・！ #スカッとする話 #目撃者",
    ytDesc: "スーパーで邪魔だと子供を突き飛ばした女性。振り返ると、同じ学校のPTA役員全員が買い出し中で目撃していた。\n#スカッと #スーパー #目撃者 #PTA",
    setting: "スーパー",
    characters: [
      { id: "AGGRESSIVE_WOMAN", appearance: "Japanese woman, early 40s, tight ponytail, designer sunglasses pushed up, shopping cart overflowing. She shoves past people impatiently, heels clicking on the floor." },
      { id: "CHILD", appearance: "Japanese boy, age 7, school backpack, holding a juice box. He stands in the aisle looking at snacks. Small and harmless." },
      { id: "PTA_LEADER", appearance: "Japanese woman, late 40s, casual sweater, tote bag with school PTA badge. She stands with four other women, all holding school event shopping lists, all staring at what just happened." },
    ],
    scene1: [
      "Supermarket aisle. CHILD stands looking at snacks on a shelf. AGGRESSIVE_WOMAN rounds the corner with her cart.\n[AGGRESSIVE_WOMAN]: 「ちょっと、邪魔なのよ！どきなさい！」\nShe shoves CHILD aside with her hand. He stumbles and falls, juice box spilling.",
      "CHILD sits on the floor, eyes welling with tears. AGGRESSIVE_WOMAN doesn't even look back, pushing her cart forward.\n[AGGRESSIVE_WOMAN, muttering]: 「親はどこよ。しつけがなってないわ」\nShe rounds the next aisle and stops dead.",
      "Five women stand in the aisle, all wearing PTA badges, all staring at her. PTA_LEADER steps forward.\n[PTA_LEADER, cold]: 「今、子供を突き飛ばしましたよね。全員見てました」\nAGGRESSIVE_WOMAN recognizes them — they're all from her son's school."
    ],
    scene2: [
      "Close-up of AGGRESSIVE_WOMAN's face. Her aggressive expression melts into panic.\n[AGGRESSIVE_WOMAN]: 「あ、あれは…ちょっとぶつかっただけで…」\n[PTA_LEADER]: 「突き飛ばして転ばせたのを、5人全員が見ています」",
      "Another PTA member has already gone to help CHILD. She kneels beside him, checking his arm for injuries.\n[PTA_MEMBER]: 「この子、膝を擦りむいてますよ」\n[PTA_LEADER, to AGGRESSIVE_WOMAN]: 「あなた、佐藤くんのお母さんよね？次のPTA会議で話し合いましょう」",
      "Wide shot. AGGRESSIVE_WOMAN abandons her overflowing cart in the aisle and walks rapidly toward the exit, heels clicking. The PTA members watch her go. PTA_LEADER picks up the child's spilled juice box. CHILD sniffles but manages a small smile at the kind women surrounding him."
    ],
    lines: [
      { speaker: "女", text: "邪魔なのよ！どきなさい！" },
      { speaker: "PTA会長", text: "子供を突き飛ばしましたよね。全員見てました" },
      { speaker: "PTA役員", text: "この子、膝を擦りむいてますよ" },
      { speaker: "PTA会長", text: "次のPTA会議で話し合いましょう" },
    ],
    endText: "小さな暴力は、たくさんの目に映る",
  },
  // ========== 因果応報系：ブーメラン ==========
  {
    id: 27, category: 'boomerang',
    title: "後輩をクビにさせた先輩→自分がリストラ対象に",
    ytTitle: "「あいつを辞めさせろ」後輩を追い出した先輩社員。だが半年後、自分がリストラ対象になっていた・・・！ #スカッとする話 #ブーメラン",
    ytDesc: "優秀な後輩を嫉妬から追い出した先輩社員。半年後、その後輩が転職先で活躍し、自分はリストラリストに載っていた。\n#スカッと #リストラ #嫉妬 #ブーメラン",
    setting: "オフィス",
    characters: [
      { id: "SENIOR", appearance: "Japanese man, late 30s, slightly overweight, wrinkled shirt, complacent expression. He leans back in his office chair, feet nearly on the desk. He holds a coffee mug that says 'Boss.'" },
      { id: "HR_MANAGER", appearance: "Japanese woman, mid 40s, formal suit, carrying a sealed envelope. She approaches SENIOR's desk with a neutral but firm expression." },
      { id: "JUNIOR_PHOTO", appearance: "A framed company newsletter on the wall showing a young Japanese man, mid 20s, neat suit, bright smile — the former junior employee now featured as a rising star at a competitor company." },
    ],
    scene1: [
      "Office. SENIOR sits at his desk, scrolling on his phone. A framed newsletter on the wall shows his former junior employee winning an award at a competitor company.\n[COWORKER, passing by]: 「見た？山田くん、転職先で新規事業賞取ったらしいよ」\n[SENIOR, scoffing]: 「ふん。あいつの実力じゃないだろ」",
      "HR_MANAGER approaches SENIOR's desk holding a sealed envelope.\n[HR_MANAGER]: 「高橋さん、会議室Bに来ていただけますか」\n[SENIOR, annoyed]: 「何？今忙しいんだけど」\n[HR_MANAGER]: 「人事からの大切なお話です」",
      "Meeting room B. HR_MANAGER opens the envelope.\n[HR_MANAGER]: 「率直に申し上げます。部門の業績が悪化しており、人員整理を行います」\nSENIOR's coffee mug freezes at his lips.\n[HR_MANAGER]: 「高橋さんは対象者リストに入っています」"
    ],
    scene2: [
      "Close-up of SENIOR's face. His complacent expression shatters.\n[SENIOR]: 「なんで俺が？10年もいるんだぞ」\n[HR_MANAGER]: 「山田さんが担当していた案件、引き継ぎ後すべて失注しています。その責任は引き継いだ高橋さんにあります」",
      "[SENIOR, desperate]: 「あいつがいなくなったから業績が…」\nHe stops mid-sentence, realizing what he just admitted.\n[HR_MANAGER]: 「そうですね。山田さんを追い出す工作をしたのは高橋さんだと、複数の証言があります」",
      "Wide shot. SENIOR sits alone in the meeting room. On the table: a severance package document. Through the window, the company newsletter with his former junior's smiling face is visible on the office wall. The junior he pushed out is thriving. The senior who pushed him out is done."
    ],
    lines: [
      { speaker: "先輩", text: "あいつの実力じゃないだろ" },
      { speaker: "人事", text: "高橋さんは対象者リストに入っています" },
      { speaker: "人事", text: "山田さんを追い出す工作をしたのは高橋さんだと証言があります" },
    ],
    endText: "人を落とした穴に、自分が落ちる",
  },
  {
    id: 28, category: 'boomerang',
    title: "嫁いびりの姑→息子に捨てられる",
    ytTitle: "「出ていけ！」嫁を追い出した姑。だが息子が選んだのは母ではなく妻だった・・・！ #スカッとする話 #姑 #ブーメラン",
    ytDesc: "嫁をいびり続けて追い出した姑。だが息子は妻を追いかけて家を出た。残されたのは姑一人だった。\n#スカッと #姑 #嫁いびり #ブーメラン #因果応報",
    setting: "住宅街",
    characters: [
      { id: "MOTHER_IN_LAW", appearance: "Japanese woman, late 60s, traditional blouse, arms crossed, sneering expression. She stands in the living room doorway blocking the path, pointing toward the front door." },
      { id: "WIFE", appearance: "Japanese woman, early 30s, simple dress, holding a small suitcase. Her eyes are red but her expression is resolved. She has endured years of verbal abuse." },
      { id: "SON", appearance: "Japanese man, mid 30s, casual home clothes, standing between his mother and his wife. He has been silent for years but today his fists are clenched at his sides." },
    ],
    scene1: [
      "Living room of a Japanese house. MOTHER_IN_LAW stands over WIFE who is packing a small suitcase.\n[MOTHER_IN_LAW]: 「出ていきなさい！あんたみたいな嫁は最初からいらなかったのよ！」\nWIFE continues packing silently, hands shaking.",
      "[MOTHER_IN_LAW, to SON]: 「大輔、あんたもこんな女と別れなさい。もっといい人を見つけてあげるから」\nSON stands still, looking at the floor. WIFE closes her suitcase and stands.\n[WIFE, quiet]: 「お世話になりました」",
      "WIFE walks toward the front door. MOTHER_IN_LAW looks satisfied. Then SON moves. He grabs his jacket from the hook.\n[MOTHER_IN_LAW]: 「大輔？どこ行くの？」\n[SON, quiet but firm]: 「美咲と一緒に行く」\nMOTHER_IN_LAW's triumphant expression freezes."
    ],
    scene2: [
      "Close-up of MOTHER_IN_LAW's face. Her sneering expression crumbles into shock.\n[MOTHER_IN_LAW]: 「何言ってるの！この家を出るっていうの？」\n[SON]: 「5年間、黙っててごめん。でももう限界だ」",
      "[MOTHER_IN_LAW, screaming]: 「あんたは私の息子でしょ！親を捨てるの？」\n[SON]: 「母さんが美咲を捨てるなら、僕はこの家を出る。ずっと見て見ぬふりをした自分が一番悪い」\nHe bows to his mother, then turns.",
      "Wide shot. SON and WIFE walk out the front door together. SON takes her suitcase. MOTHER_IN_LAW stands in the doorway of her empty house. The hallway echoes. She called it 'her house' — now it truly is hers alone."
    ],
    lines: [
      { speaker: "姑", text: "出ていきなさい！あんたみたいな嫁は最初からいらなかったのよ！" },
      { speaker: "息子", text: "美咲と一緒に行く" },
      { speaker: "息子", text: "5年間、黙っててごめん。でももう限界だ" },
      { speaker: "息子", text: "母さんが美咲を捨てるなら、僕はこの家を出る" },
    ],
    endText: "追い出した相手と一緒に、大切なものも出ていく",
  },
  {
    id: 29, category: 'boomerang',
    title: "部下の企画を盗んだ上司→プレゼンで質問に答えられず",
    ytTitle: "「これは俺の企画だ」部下の企画を盗んでプレゼンした上司。だが社長からの質問に一つも答えられず・・・！ #スカッとする話 #パクリ",
    ytDesc: "部下の企画書を自分の名前で提出した上司。だがプレゼンで社長からの質問に全く答えられず、盗作がバレる。\n#スカッと #企画泥棒 #プレゼン #ブーメラン",
    setting: "会議室",
    characters: [
      { id: "THIEF_BOSS", appearance: "Japanese man, mid 40s, sharp suit, confident smile, standing at a projector screen pointing at slides he didn't make. His gestures are rehearsed but his understanding is shallow." },
      { id: "REAL_CREATOR", appearance: "Japanese woman, late 20s, office blouse, sitting in the back row of the meeting room. She watches her own slides being presented by someone else, her expression a mix of anger and patience." },
      { id: "COMPANY_PRESIDENT", appearance: "Japanese man, late 60s, silver hair, reading glasses, sitting in the front row. He asks questions with the precision of someone who built the company from scratch." },
    ],
    scene1: [
      "Conference room. THIEF_BOSS presents slides confidently.\n[THIEF_BOSS]: 「この新規事業案は私が3ヶ月かけて作りました。市場分析から戦略まで全て」\nHe clicks to the next slide. REAL_CREATOR in the back row clenches her jaw.",
      "COMPANY_PRESIDENT raises his hand.\n[PRESIDENT]: 「5ページ目の市場予測、根拠となるデータソースは？」\nTHIEF_BOSS blinks.\n[THIEF_BOSS]: 「え…それは…一般的な市場データを…」\n[PRESIDENT]: 「具体的に」\nTHIEF_BOSS scrolls through slides, sweating.",
      "[PRESIDENT]: 「では8ページの収益モデル。なぜこの利益率を想定した？」\nTHIEF_BOSS stares at the slide as if seeing it for the first time.\n[THIEF_BOSS]: 「これは…その…業界平均を…」\nPRESIDENT removes his glasses and looks at THIEF_BOSS, then slowly turns to look at REAL_CREATOR in the back row."
    ],
    scene2: [
      "[PRESIDENT]: 「鈴木さん、この資料に見覚えは？」\nREAL_CREATOR stands.\n[REAL_CREATOR]: 「はい。私が作成した企画書です。データソースはNRI総研の2025年レポートで、利益率は過去3年の類似事業から算出しました」\nShe answers instantly. The room murmurs.",
      "THIEF_BOSS's face drains of color.\n[PRESIDENT, to THIEF_BOSS]: 「3ヶ月かけて作ったのに、自分の資料の根拠を一つも答えられない。不思議だな」\nTHIEF_BOSS grips the podium.\n[THIEF_BOSS]: 「これは…共同で…」\n[REAL_CREATOR]: 「共同作業はしていません。ファイルの作成者ログに私の名前だけが残っています」",
      "Wide shot. PRESIDENT stands.\n[PRESIDENT]: 「鈴木さん、改めてプレゼンしてくれるか」\nREAL_CREATOR walks to the front. THIEF_BOSS slinks to the back row — the seat REAL_CREATOR just left. The projector shows the same slides, but now the right person is presenting them."
    ],
    lines: [
      { speaker: "上司", text: "この新規事業案は私が3ヶ月かけて作りました" },
      { speaker: "社長", text: "5ページ目の市場予測、根拠となるデータソースは？" },
      { speaker: "部下", text: "私が作成した企画書です" },
      { speaker: "社長", text: "鈴木さん、改めてプレゼンしてくれるか" },
    ],
    endText: "盗んだ企画は、自分のものにはならない",
  },
  {
    id: 30, category: 'boomerang',
    title: "他人の悪評を広めた女→自分が孤立",
    ytTitle: "「あの人ね、実は…」ママ友の悪口を広めた女。だが1ヶ月後、グループから外されたのは自分だった・・・！ #スカッとする話 #ブーメラン",
    ytDesc: "ママ友の悪い噂を広めて孤立させようとした女性。だが嘘がバレて、グループから追放されたのは自分だった。\n#スカッと #ママ友 #悪口 #ブーメラン #因果応報",
    setting: "カフェ",
    characters: [
      { id: "GOSSIP_QUEEN", appearance: "Japanese woman, late 30s, trendy outfit, perfectly curled hair, holding iced latte. She leans forward conspiratorially, whispering to other mothers with exaggerated expressions." },
      { id: "TARGET_MOM", appearance: "Japanese woman, early 30s, simple cardigan, gentle face, sitting alone at a distant table. She looks at her phone, unaware she is being discussed." },
      { id: "GROUP_LEADER", appearance: "Japanese woman, early 40s, sensible clothes, fair-minded expression. She holds her phone showing screenshots of contradictory messages from GOSSIP_QUEEN." },
    ],
    scene1: [
      "Cafe. GOSSIP_QUEEN whispers to two other mothers.\n[GOSSIP_QUEEN, conspiratorial]: 「あの田中さんね、実は旦那さんが借金まみれらしいわよ」\nShe glances at TARGET_MOM sitting alone across the cafe.\n[GOSSIP_QUEEN]: 「子供の塾代も払えてないんですって。可哀想よねー」",
      "TARGET_MOM approaches the table to say hello. The other mothers look away awkwardly.\n[TARGET_MOM, confused]: 「あれ、今日もお茶会だったの？私、連絡もらってないけど…」\n[GOSSIP_QUEEN, fake smile]: 「あら、送ったはずなんだけどー」\nTARGET_MOM looks hurt but nods and leaves.",
      "One week later. GROUP_LEADER approaches GOSSIP_QUEEN at school pickup.\n[GROUP_LEADER, serious]: 「ちょっと話があるの」\nShe shows her phone — screenshots of GOSSIP_QUEEN's messages to different people, each containing contradictory stories about TARGET_MOM.\n[GROUP_LEADER]: 「田中さんの旦那さん、借金なんてないよね？私、直接聞いたの」"
    ],
    scene2: [
      "Close-up of GOSSIP_QUEEN's face. Her confident gossip expression shatters.\n[GOSSIP_QUEEN]: 「いや、それは聞いた話で…」\n[GROUP_LEADER]: 「誰から？私には3人に違う話をしてたの。全部スクショが残ってるよ」",
      "GROUP_LEADER continues.\n[GROUP_LEADER]: 「みんなで話し合ったの。嘘を広める人とは付き合えない」\nGOSSIP_QUEEN looks around. The other mothers avoid her eyes.\n[GOSSIP_QUEEN, panicking]: 「待って、誤解なの…」",
      "Wide shot. School gate. GOSSIP_QUEEN stands alone as other mothers walk past without greeting. TARGET_MOM walks by with GROUP_LEADER and others, chatting warmly. GOSSIP_QUEEN clutches her phone — the same phone she used to spread lies, now showing a group chat she's been removed from."
    ],
    lines: [
      { speaker: "噂好き", text: "あの田中さんね、実は旦那さんが借金まみれらしいわよ" },
      { speaker: "リーダー", text: "田中さんの旦那さん、借金なんてないよね？直接聞いたの" },
      { speaker: "リーダー", text: "嘘を広める人とは付き合えない" },
    ],
    endText: "悪口の矢は、必ず自分に返ってくる",
  },
  // ========== 因果応報系：過去の因果 ==========
  {
    id: 31, category: 'past_karma',
    title: "いじめっ子が面接に来た→面接官はいじめられっ子",
    ytTitle: "「よろしくお願いします」面接室に入った瞬間、元いじめっ子は凍りつく。面接官は10年前にいじめた同級生だった・・・！ #スカッとする話 #因果応報",
    ytDesc: "就職面接に来た男。面接官として現れたのは、10年前に自分がいじめていた同級生だった。立場が完全に逆転した瞬間。\n#スカッと #いじめ #面接 #過去の因果",
    setting: "面接室",
    characters: [
      { id: "FORMER_BULLY", appearance: "Japanese man, early 30s, cheap ill-fitting suit, nervous expression. He was once a confident school bully but life has humbled him. He carries a worn resume folder." },
      { id: "FORMER_VICTIM", appearance: "Japanese man, early 30s, expensive well-tailored suit, confident posture. Once a bullied quiet kid, now a successful department manager. He sits behind the desk with calm authority." },
    ],
    scene1: [
      "Interview room. FORMER_BULLY enters, bowing deeply.\n[FORMER_BULLY]: 「よろしくお願いしま…」\nHe looks up. FORMER_VICTIM sits behind the desk. Their eyes meet. FORMER_BULLY's bow freezes mid-motion.\n[FORMER_BULLY, barely audible]: 「…中村…？」",
      "FORMER_VICTIM looks at the resume, then at FORMER_BULLY. His expression doesn't change.\n[FORMER_VICTIM, professional]: 「田中太郎さんですね。お座りください」\nFORMER_BULLY sits, knees shaking. He remembers: the locker shoves, the torn notebooks, the daily torment he inflicted.",
      "FORMER_VICTIM conducts the interview professionally.\n[FORMER_VICTIM]: 「前職の退職理由を教えてください」\nFORMER_BULLY can barely speak. His confident bully persona from school is gone.\n[FORMER_BULLY, stammering]: 「人間関係が…うまくいかなくて…」\n[FORMER_VICTIM]: 「人間関係、ですか」\nThe words hang in the air."
    ],
    scene2: [
      "FORMER_VICTIM leans back in his chair.\n[FORMER_VICTIM]: 「正直に言うと、あなたのことは覚えています。中学の同級生だった」\nFORMER_BULLY stares at the desk.\n[FORMER_BULLY]: 「…あの頃は…本当に…」",
      "[FORMER_VICTIM]: 「あの経験があったから、人の痛みが分かる人間になろうと思った。だから今の自分がある」\nHe pauses.\n[FORMER_VICTIM]: 「面接は公平に行います。過去は関係ない」\nFORMER_BULLY's eyes widen.",
      "FORMER_VICTIM stands and hand extends for a handshake.\n[FORMER_VICTIM]: 「結果は後日お伝えします」\nFORMER_BULLY takes his hand. He bows deeply — deeper than any bow in his life.\n[FORMER_BULLY, voice breaking]: 「あの時は…本当にすみませんでした」\nFORMER_VICTIM nods once. The interview is over. The past is not."
    ],
    lines: [
      { speaker: "元いじめっ子", text: "中村…？" },
      { speaker: "面接官", text: "あなたのことは覚えています。中学の同級生だった" },
      { speaker: "面接官", text: "面接は公平に行います。過去は関係ない" },
      { speaker: "元いじめっ子", text: "あの時は…本当にすみませんでした" },
    ],
    endText: "因果は、時間をかけて巡ってくる",
  },
  {
    id: 32, category: 'past_karma',
    title: "捨てた元カノが社長になっていた",
    ytTitle: "「お前じゃ釣り合わない」捨てた元カノ。10年後、取引先の社長として現れた彼女を見て男は膝から崩れる・・・！ #スカッとする話 #過去の因果",
    ytDesc: "「つまらない女」と捨てた元カノ。10年後、営業先の会社の社長室に案内されると、そこにいたのは彼女だった。\n#スカッと #元カノ #社長 #因果応報",
    setting: "オフィス",
    characters: [
      { id: "EX_BF", appearance: "Japanese man, mid 30s, average suit, tired face with early wrinkles. He carries a heavy sample bag, a mid-level salesman making cold calls. His confidence has faded over the years." },
      { id: "EX_GF_CEO", appearance: "Japanese woman, mid 30s, elegant charcoal suit, hair in a polished updo, pearl earrings. She sits behind a large mahogany desk in a corner office. Poised, successful, transformed from the quiet girl she once was." },
    ],
    scene1: [
      "Corporate office lobby. EX_BF adjusts his tie nervously, waiting for his sales appointment.\n[RECEPTIONIST]: 「社長室へどうぞ」\nHe follows, rehearsing his pitch. The door opens to a corner office with city views.",
      "EX_GF_CEO sits behind the desk. She looks up. Their eyes meet. EX_BF's sample bag slips from his fingers.\n[EX_BF, stunned]: 「…美紀…？」\n[EX_GF_CEO, professional]: 「お久しぶりです。お座りください」\nHer composure is perfect. His is shattered.",
      "EX_BF sits, memories flooding back. He remembers his exact words: 'You're boring. I need someone with more ambition.'\n[EX_GF_CEO]: 「営業のご提案ですね。お聞きします」\nShe opens her notebook. EX_BF fumbles with his materials, hands shaking.\n[EX_BF]: 「あ…その…弊社の…」\nHe can't form a coherent sentence."
    ],
    scene2: [
      "EX_GF_CEO waits patiently, pen in hand. EX_BF finally sets down his materials.\n[EX_BF, dropping the act]: 「すごいな…社長になったんだ」\n[EX_GF_CEO, slight smile]: 「つまらない女なりに、頑張りました」\nEX_BF flinches. She remembers his exact words too.",
      "[EX_BF]: 「あの時は…俺は最低だった」\n[EX_GF_CEO]: 「いいえ。あなたに振られたから、自分で会社を作ろうと思ったの。感謝してるわ」\nShe says it without sarcasm. That makes it cut deeper.",
      "Wide shot. EX_GF_CEO stands and shakes his hand professionally.\n[EX_GF_CEO]: 「ご提案は検討します。今日はありがとうございました」\nEX_BF walks to the elevator alone. He passes the company nameplate: her name, CEO. He enters the elevator and stares at his own reflection — an average salesman in an average suit."
    ],
    lines: [
      { speaker: "男", text: "美紀…？" },
      { speaker: "女性社長", text: "つまらない女なりに、頑張りました" },
      { speaker: "男", text: "あの時は…俺は最低だった" },
      { speaker: "女性社長", text: "あなたに振られたから、自分で会社を作ろうと思ったの" },
    ],
    endText: "捨てた相手が、一番輝くこともある",
  },
  {
    id: 33, category: 'past_karma',
    title: "恩師を無視し続けた元生徒→恩師が入院先の主治医",
    ytTitle: "「誰？知らない」街で恩師に声をかけられ無視した男。だが入院先の主治医として恩師が現れる・・・！ #スカッとする話 #恩知らず",
    ytDesc: "出世して態度が変わり、育ててくれた恩師を街で無視した男。数年後、大病で入院した先の主治医がその恩師だった。\n#スカッと #恩師 #病院 #因果応報",
    setting: "病院",
    characters: [
      { id: "UNGRATEFUL_MAN", appearance: "Japanese man, early 40s, hospital gown, lying in bed looking anxious. Once arrogant in a suit, now humbled by illness. IV drip in his arm, face pale." },
      { id: "DOCTOR_MENTOR", appearance: "Japanese man, late 60s, white doctor's coat, stethoscope, grey hair, warm but dignified face. He holds a medical chart. He was once a high school teacher who changed careers to medicine." },
    ],
    scene1: [
      "Flashback: busy street. UNGRATEFUL_MAN in an expensive suit, talking on phone. An older man (DOCTOR_MENTOR in casual clothes) approaches, smiling.\n[MENTOR, happy]: 「おお、山田くん！元気か？先生だよ、覚えてるか？」\n[UNGRATEFUL_MAN, cold, not stopping]: 「すみません、急いでるんで」\nHe walks past without recognition. MENTOR's smile fades.",
      "Present day. Hospital room. UNGRATEFUL_MAN lies in bed, diagnosed with a serious condition. A nurse enters.\n[NURSE]: 「主治医の先生がいらっしゃいます」\nThe door opens. DOCTOR_MENTOR walks in, white coat, stethoscope. UNGRATEFUL_MAN stares.\n[UNGRATEFUL_MAN, shocked]: 「…先生…？」",
      "[DOCTOR_MENTOR, professional, warm]: 「やあ、山田くん。今度は覚えてくれたかな」\nHe smiles gently — the same smile from that day on the street. UNGRATEFUL_MAN's eyes well up.\n[DOCTOR_MENTOR]: 「教師を辞めた後、医学部に入り直したんだ。人を助ける仕事がしたくてね」"
    ],
    scene2: [
      "DOCTOR_MENTOR sits beside the bed, reviewing the chart.\n[DOCTOR_MENTOR]: 「手術は難しいが、私が責任を持って担当する」\nUNGRATEFUL_MAN can't look him in the eye.\n[UNGRATEFUL_MAN]: 「先生…あの時は…街で…」",
      "[DOCTOR_MENTOR, gentle]: 「覚えてるよ。でもね、先生はいつだって生徒の味方だよ。それは変わらない」\nUNGRATEFUL_MAN's tears fall. The arrogant businessman is gone; he is a scared student again.\n[UNGRATEFUL_MAN]: 「すみませんでした…」",
      "Wide shot. DOCTOR_MENTOR pats UNGRATEFUL_MAN's hand.\n[DOCTOR_MENTOR]: 「元気になったら、一緒にご飯でも食べよう。先生のおごりだ」\nHe stands and walks to the door. UNGRATEFUL_MAN watches him go — the man he once ignored is now the man who will save his life."
    ],
    lines: [
      { speaker: "恩師", text: "やあ、山田くん。今度は覚えてくれたかな" },
      { speaker: "恩師", text: "教師を辞めた後、医学部に入り直したんだ" },
      { speaker: "男", text: "先生…あの時は…すみませんでした" },
      { speaker: "恩師", text: "先生はいつだって生徒の味方だよ" },
    ],
    endText: "恩は忘れても、恩人は覚えている",
  },
  {
    id: 34, category: 'past_karma',
    title: "養子を差別した親戚→養子が一族を救う",
    ytTitle: "「血が繋がってないくせに」養子をいじめ続けた親戚。だが一族が破産の危機に陥った時、手を差し伸べたのは・・・！ #スカッとする話 #養子",
    ytDesc: "「本当の家族じゃない」と差別され続けた養子。大人になり成功した後、破産した親戚を唯一助けに来たのはその養子だった。\n#スカッと #養子 #家族 #因果応報",
    setting: "住宅街",
    characters: [
      { id: "ADOPTED_SON", appearance: "Japanese man, early 30s, well-tailored casual jacket, calm confident expression. He stands at the door of his adoptive uncle's house, holding documents. Once a quiet bullied boy, now a successful businessman." },
      { id: "CRUEL_UNCLE", appearance: "Japanese man, late 50s, wrinkled polo shirt, unshaven, dark circles under eyes. His house is cluttered with unpaid bills. He opens the door looking defeated." },
      { id: "ADOPTIVE_MOTHER", appearance: "Japanese woman, late 60s, gentle face, standing behind ADOPTED_SON. She is the only relative who always treated him as true family." },
    ],
    scene1: [
      "Flashback: Family gathering, years ago. Young boy (ADOPTED_SON as a child) sits quietly. CRUEL_UNCLE drinks beer, laughing.\n[CRUEL_UNCLE, loud]: 「こいつは血が繋がってないからな。本当の家族じゃないだろ」\nThe boy looks down at his plate. ADOPTIVE_MOTHER squeezes his hand under the table.",
      "Present day. CRUEL_UNCLE's house. Foreclosure notice on the door. He sits inside, surrounded by debt notices. His business failed, his friends left, his relatives won't answer calls.\n[CRUEL_UNCLE, on phone]: 「兄さん、頼む、少しだけ…」\n[VOICE ON PHONE]: 「無理だ」\nCall ends. He stares at the phone.",
      "Doorbell rings. CRUEL_UNCLE opens the door. ADOPTED_SON stands there with ADOPTIVE_MOTHER.\n[CRUEL_UNCLE, stunned]: 「…健一…？」\n[ADOPTED_SON]: 「おじさん、大変だと聞きました」\nHe holds up a folder. Inside: a loan restructuring plan and a check."
    ],
    scene2: [
      "CRUEL_UNCLE stares at the check, then at ADOPTED_SON.\n[CRUEL_UNCLE]: 「なんで…お前に一番ひどいことを言ったのに…」\n[ADOPTED_SON]: 「おばさんが育ててくれた恩があります。おじさんが困ってるなら、助けるのが家族でしょう」",
      "CRUEL_UNCLE's legs give out. He sinks to the floor.\n[CRUEL_UNCLE, crying]: 「すまない…血が繋がってないなんて…あんなこと…」\n[ADOPTED_SON]: 「血は関係ありません。僕はこの家族の一員ですから」\nADOPTIVE_MOTHER wipes her eyes.",
      "Wide shot. The three of them sit at the kitchen table, going through the restructuring documents together. The foreclosure notice has been taken down from the door. ADOPTED_SON pours tea for his uncle — the same uncle who said he wasn't family."
    ],
    lines: [
      { speaker: "おじ", text: "こいつは血が繋がってないからな" },
      { speaker: "養子", text: "おじさんが困ってるなら、助けるのが家族でしょう" },
      { speaker: "おじ", text: "血が繋がってないなんて…あんなこと…" },
      { speaker: "養子", text: "血は関係ありません。僕はこの家族の一員ですから" },
    ],
    endText: "家族の絆は、血ではなく心で結ばれる",
  },
  {
    id: 35, category: 'past_karma',
    title: "後輩に奢らなかった先輩→後輩の店で門前払い",
    ytTitle: "「後輩が奢るのは当たり前だろ」いつも後輩にたかっていた先輩。10年後、後輩が開いた人気店で予約を断られる・・・！ #スカッとする話 #因果応報",
    ytDesc: "常に後輩に支払いを押し付けていた先輩。10年後、後輩が開いた予約困難な人気レストランで予約を取ろうとするが断られる。\n#スカッと #先輩後輩 #レストラン #因果応報",
    setting: "レストラン",
    characters: [
      { id: "CHEAP_SENIOR", appearance: "Japanese man, early 40s, casual jacket, trying to look important. He stands at the entrance of a popular restaurant, waving his phone showing a failed reservation attempt." },
      { id: "CHEF_JUNIOR", appearance: "Japanese man, mid 30s, pristine white chef coat, confident posture. He is the owner-chef of this Michelin-starred restaurant. He appears at the kitchen door, recognizes his old senior." },
      { id: "HOSTESS", appearance: "Japanese woman, mid 20s, elegant black dress, reservation book in hand. She politely but firmly blocks the entrance." },
    ],
    scene1: [
      "Flashback: izakaya, 10 years ago. A group of young coworkers finish eating. CHEAP_SENIOR pushes the bill toward the youngest at the table.\n[CHEAP_SENIOR]: 「後輩が奢るのは当たり前だろ。社会のルールだ」\nYoung CHEF_JUNIOR reluctantly pulls out his wallet, paying for everyone again.",
      "Present day. Upscale restaurant entrance. CHEAP_SENIOR tries to walk in.\n[HOSTESS]: 「ご予約はございますか」\n[CHEAP_SENIOR]: 「予約？取れなかったけど、一人くらい入れるだろ」\n[HOSTESS]: 「申し訳ございません。完全予約制です」",
      "CHEAP_SENIOR raises his voice.\n[CHEAP_SENIOR]: 「シェフ呼んでよ。昔の知り合いなんだ」\nCHEF_JUNIOR appears from the kitchen. He wipes his hands on a towel and looks at CHEAP_SENIOR.\n[CHEF_JUNIOR, calm]: 「お久しぶりです、先輩」"
    ],
    scene2: [
      "[CHEAP_SENIOR, grinning]: 「おお！入れてくれよ。昔の縁だろ？」\n[CHEF_JUNIOR]: 「先輩、覚えてますか。僕がいつもお会計してたこと」\nCHEAP_SENIOR's grin falters.\n[CHEF_JUNIOR]: 「3年間で200回以上、全額僕が払いました」",
      "[CHEAP_SENIOR]: 「それは…先輩後輩のルールで…」\n[CHEF_JUNIOR]: 「あのお金を貯めていたら、もっと早く開業できたかもしれません」\nHe pauses.\n[CHEF_JUNIOR]: 「でもおかげで節約が身につきました。感謝してますよ」",
      "[CHEAP_SENIOR]: 「じゃあ入れてくれよ…」\n[CHEF_JUNIOR, bowing]: 「申し訳ありません。2ヶ月先まで予約で満席です。ルールですので」\nHe turns and walks back to the kitchen. CHEAP_SENIOR stands at the entrance of a restaurant he can see but cannot enter."
    ],
    lines: [
      { speaker: "先輩", text: "後輩が奢るのは当たり前だろ。社会のルールだ" },
      { speaker: "シェフ", text: "3年間で200回以上、全額僕が払いました" },
      { speaker: "先輩", text: "昔の縁だろ？入れてくれよ" },
      { speaker: "シェフ", text: "2ヶ月先まで予約で満席です。ルールですので" },
    ],
    endText: "おごらなかった分だけ、敬意も返ってこない",
  },
  // ========== 逆転系：立場逆転（キャリア） ==========
  {
    id: 36, category: 'career_reverse',
    title: "バイトを見下した正社員→バイトが上司に昇進",
    ytTitle: "「バイトは黙ってろ」見下していたバイトが正社員に。しかもいきなり自分の上司として着任する・・・！ #スカッとする話 #逆転",
    ytDesc: "バイトを見下していた正社員。そのバイトが本社からの出向で正社員になり、しかも自分の直属の上司として着任する。\n#スカッと #バイト #昇進 #立場逆転",
    setting: "オフィス",
    characters: [
      { id: "ARROGANT_REGULAR", appearance: "Japanese man, mid 30s, wrinkled shirt, loose tie, dismissive posture. He leans against his desk talking to colleagues, ignoring his work." },
      { id: "FORMER_PART_TIMER", appearance: "Japanese woman, late 20s, sharp new suit, confident stride. She was once a quiet part-time worker in this office, now returning as a manager after getting her MBA." },
      { id: "DIVISION_HEAD", appearance: "Japanese man, early 50s, executive suit, standing at the front of the office making an announcement." },
    ],
    scene1: [
      "Office. ARROGANT_REGULAR chats with a colleague.\n[ARROGANT_REGULAR]: 「新しい課長が来るらしいな。どうせ本社のお偉いさんだろ」\n[COLLEAGUE]: 「名前聞いた？佐藤って人らしいよ」\n[ARROGANT_REGULAR]: 「知らね。誰でもいいよ」",
      "DIVISION_HEAD enters with FORMER_PART_TIMER.\n[DIVISION_HEAD]: 「新任の課長を紹介する。佐藤さんだ」\nFORMER_PART_TIMER steps forward. ARROGANT_REGULAR's coffee cup stops mid-sip.\n[ARROGANT_REGULAR, whispering]: 「え…あのバイトの…？」",
      "FORMER_PART_TIMER addresses the room.\n[FORMER_PART_TIMER]: 「2年前までここでアルバイトをしていた佐藤です。MBAを取得し、本社を経て戻ってきました。よろしくお願いします」\nShe bows. The room applauds. ARROGANT_REGULAR cannot bring himself to clap."
    ],
    scene2: [
      "After the announcement. FORMER_PART_TIMER approaches ARROGANT_REGULAR's desk.\n[FORMER_PART_TIMER]: 「田中さん、お久しぶりです」\nARROGANT_REGULAR can't meet her eyes. He remembers telling her 'バイトは黙ってろ' multiple times.\n[ARROGANT_REGULAR, stiff]: 「あ…ど、どうも…」",
      "[FORMER_PART_TIMER]: 「今期の営業目標の件、15時に打ち合わせをお願いします」\nShe speaks professionally, no trace of revenge. That makes it worse.\n[ARROGANT_REGULAR]: 「は、はい…」\n[FORMER_PART_TIMER, walking away]: 「あ、それと。バイト時代に色々教えていただいたこと、感謝しています」",
      "Wide shot. FORMER_PART_TIMER walks to the corner office — the manager's room. ARROGANT_REGULAR sits at his desk, the same desk he occupied when he used to order her around. The office hierarchy has flipped. His coffee has gone cold."
    ],
    lines: [
      { speaker: "正社員", text: "バイトは黙ってろ" },
      { speaker: "新課長", text: "2年前までここでアルバイトをしていた佐藤です" },
      { speaker: "正社員", text: "あのバイトの…？" },
      { speaker: "新課長", text: "バイト時代に色々教えていただいたこと、感謝しています" },
    ],
    endText: "見下した人が、見上げる人になる",
  },
  {
    id: 37, category: 'career_reverse',
    title: "派遣社員をいびった社員→派遣が大口顧客の役員",
    ytTitle: "「派遣のくせに意見するな」いびり続けた派遣社員が契約終了後、最大顧客の役員として商談に現れる・・・！ #スカッとする話 #派遣",
    ytDesc: "派遣社員をいびっていた正社員。数年後、最大の取引先の役員として元派遣社員が商談に現れ、立場が完全に逆転する。\n#スカッと #派遣社員 #逆転 #因果応報",
    setting: "会議室",
    characters: [
      { id: "BULLY_EMPLOYEE", appearance: "Japanese man, early 40s, standard suit, slightly balding, nervous sweat on forehead. He sits at the conference table with sales materials, waiting for the client." },
      { id: "EX_TEMP", appearance: "Japanese woman, mid 30s, executive suit, designer watch, hair in an elegant French twist. She enters the conference room with an entourage. Once meek and quiet, now commanding." },
      { id: "BULLY_BOSS", appearance: "Japanese man, late 50s, department head, sitting next to BULLY_EMPLOYEE. He nudges his subordinate to behave." },
    ],
    scene1: [
      "Flashback: open office. BULLY_EMPLOYEE drops a stack of papers on a young woman's desk.\n[BULLY_EMPLOYEE]: 「派遣のくせに意見するな。言われたことだけやれ」\nYoung temp worker (EX_TEMP) bows silently, eyes down.",
      "Present day. Conference room. BULLY_EMPLOYEE and BULLY_BOSS wait for their biggest client.\n[BULLY_BOSS]: 「今日の商談、絶対に失敗するなよ。相手は新任の執行役員らしい」\nThe door opens. EX_TEMP walks in with two assistants. BULLY_EMPLOYEE's presentation clicker falls from his hand.",
      "[EX_TEMP, professional]: 「お世話になります。御社の担当になりました」\nShe extends her business card. BULLY_EMPLOYEE reads it with trembling hands: Executive Officer.\n[EX_TEMP]: 「あら、お久しぶりですね。以前こちらで派遣でお世話になりました」"
    ],
    scene2: [
      "BULLY_EMPLOYEE's face goes white. BULLY_BOSS kicks him under the table.\n[BULLY_BOSS, bowing]: 「大変お世話になっております！」\n[EX_TEMP, sitting down]: 「では、ご提案をお聞きします」\nShe opens her notebook — the same focused expression she had as a temp, but now from the other side of the table.",
      "BULLY_EMPLOYEE stumbles through the presentation. His slides shake on the screen. EX_TEMP listens patiently, asks sharp questions — the same kind of insightful questions she once raised as a temp.\n[EX_TEMP]: 「なるほど。この点は改善の余地がありますね」\nThe irony is not lost on BULLY_EMPLOYEE.",
      "After the meeting. BULLY_EMPLOYEE and BULLY_BOSS bow as EX_TEMP leaves.\n[EX_TEMP, at the door]: 「あの時、意見を聞いてもらえなかったことが、自分で考える力をくれました。ありがとうございます」\nShe smiles and exits. BULLY_EMPLOYEE stares at the closed door. BULLY_BOSS glares at him."
    ],
    lines: [
      { speaker: "社員", text: "派遣のくせに意見するな" },
      { speaker: "元派遣", text: "以前こちらで派遣でお世話になりました" },
      { speaker: "元派遣", text: "意見を聞いてもらえなかったことが、自分で考える力をくれました" },
    ],
    endText: "踏みつけた花が、一番高く咲く",
  },
  {
    id: 38, category: 'career_reverse',
    title: "落ちこぼれ扱いの生徒→教え子が恩師の上司に",
    ytTitle: "「お前は何をやってもダメだ」落ちこぼれ扱いされた生徒。20年後、元担任が転職してきた会社の部長になっていた・・・！ #スカッとする話 #逆転劇",
    ytDesc: "学生時代に落ちこぼれ扱いされた生徒が、20年後には部長に。元担任が早期退職して転職してきた会社でかつての教え子に再会する。\n#スカッと #逆転 #教師 #立場逆転",
    setting: "オフィス",
    characters: [
      { id: "FORMER_STUDENT", appearance: "Japanese man, early 40s, well-fitted suit, reading glasses, commanding but kind presence. He sits in the department head's office, reviewing documents." },
      { id: "FORMER_TEACHER", appearance: "Japanese man, late 50s, new cheap suit that doesn't quite fit, nervous expression. He holds orientation documents as a mid-career hire, shifting his weight from foot to foot." },
    ],
    scene1: [
      "Office hallway. FORMER_TEACHER, newly hired, is being shown around by HR.\n[HR]: 「こちらが配属先の部長室です」\nThe door opens. FORMER_STUDENT sits behind the desk. Their eyes meet.\n[FORMER_TEACHER, stunned]: 「…木村…？」\n[FORMER_STUDENT]: 「お久しぶりです、山下先生」",
      "Flashback: classroom, 20 years ago. Young FORMER_STUDENT stands while FORMER_TEACHER berates him in front of the class.\n[FORMER_TEACHER, past]: 「お前は何をやってもダメだ。大学なんか行けるわけがない」\nThe class laughs. Young student stares at the floor.",
      "Back to present. FORMER_TEACHER stands frozen in the doorway. FORMER_STUDENT stands and gestures to a chair.\n[FORMER_STUDENT]: 「どうぞ、座ってください」\nFORMER_TEACHER sits slowly, unable to process the reversal."
    ],
    scene2: [
      "[FORMER_TEACHER, looking at the floor]: 「あの頃は…ひどいことを言った…」\n[FORMER_STUDENT]: 「先生に何をやってもダメだと言われた日、悔しくて毎日勉強しました。あの言葉がなかったら今の自分はいません」",
      "FORMER_TEACHER's eyes fill with tears.\n[FORMER_TEACHER]: 「教師失格だった…」\n[FORMER_STUDENT]: 「今は同僚です。過去のことは忘れましょう」\nHe extends his hand.\n[FORMER_STUDENT]: 「改めて、よろしくお願いします」",
      "Wide shot. FORMER_TEACHER takes his hand, bowing deeply. FORMER_STUDENT pats his shoulder. They walk out of the office together — the former student leading the way, showing his once-teacher around the office where they'll work as equals."
    ],
    lines: [
      { speaker: "元教師", text: "木村…？" },
      { speaker: "部長", text: "お久しぶりです、山下先生" },
      { speaker: "部長", text: "あの言葉がなかったら今の自分はいません" },
      { speaker: "部長", text: "今は同僚です。改めて、よろしくお願いします" },
    ],
    endText: "落ちこぼれの定義は、時間が書き換える",
  },
  {
    id: 39, category: 'career_reverse',
    title: "不採用にした会社→応募者が競合の幹部に",
    ytTitle: "「不採用です。うちには合わない」門前払いした応募者が、半年後に競合の幹部として現れる・・・！ #スカッとする話 #逆転",
    ytDesc: "雑な面接で不採用にした応募者。半年後、その人物が競合会社の幹部となり、最大のクライアントを奪っていく。\n#スカッと #不採用 #競合 #逆転劇",
    setting: "面接室",
    characters: [
      { id: "REJECTED_APPLICANT", appearance: "Japanese woman, early 30s, neat business suit, portfolio case. In the flashback she sits nervously; in the present she wears a sharper suit and walks with the confidence of a senior executive." },
      { id: "LAZY_INTERVIEWER", appearance: "Japanese man, mid 40s, loosened tie, scrolling his phone during interviews. He barely looked at the resume, made his decision in 3 minutes." },
      { id: "COMPANY_VP", appearance: "Japanese man, late 50s, worried expression, holding a lost contract report. He confronts LAZY_INTERVIEWER about the situation." },
    ],
    scene1: [
      "Flashback: interview room. REJECTED_APPLICANT presents her portfolio. LAZY_INTERVIEWER barely glances at it, scrolling his phone.\n[LAZY_INTERVIEWER, bored]: 「うーん、うちには合わないかな。はい、不採用です」\nThe interview lasted 3 minutes. REJECTED_APPLICANT bows and leaves, portfolio unopened.",
      "Present day: COMPANY_VP storms into LAZY_INTERVIEWER's office.\n[VP, angry]: 「A社に最大のクライアント3社を持っていかれた！担当は佐藤って人物だ」\nHe slams a business card on the desk. LAZY_INTERVIEWER looks at the name and photo. His face drains.",
      "[LAZY_INTERVIEWER]: 「この人…半年前にうちの面接に来た…」\n[VP]: 「何？」\n[LAZY_INTERVIEWER]: 「3分で不採用にしました…」\nVP stares at him. The silence is deafening."
    ],
    scene2: [
      "[VP, barely containing rage]: 「3分？この人の経歴を見たのか？」\nHe pulls up REJECTED_APPLICANT's LinkedIn — MBA, award-winning strategist, industry expert.\n[LAZY_INTERVIEWER]: 「…履歴書は…あまり見てなくて…」",
      "VP sits down heavily.\n[VP]: 「クライアント3社の売上は年間5億だ。お前が3分で5億を捨てたんだ」\nLAZY_INTERVIEWER says nothing. Through the office window, a news article is visible on a colleague's screen: 'A社、業界最優秀チームリーダーに佐藤氏を抜擢。'",
      "Wide shot. LAZY_INTERVIEWER sits alone at his desk after VP leaves. He opens his drawer and finds the original resume — still in its envelope, never opened. He pulls it out and reads it for the first time. Every line screams talent. He missed it all in 3 minutes."
    ],
    lines: [
      { speaker: "面接官", text: "うちには合わないかな。はい、不採用です" },
      { speaker: "副社長", text: "A社に最大のクライアント3社を持っていかれた！" },
      { speaker: "面接官", text: "3分で不採用にしました…" },
      { speaker: "副社長", text: "お前が3分で5億を捨てたんだ" },
    ],
    endText: "人を見る目がない者が、一番高くつく",
  },
  {
    id: 40, category: 'career_reverse',
    title: "受付嬢を馬鹿にした取引先→受付嬢が新CEO",
    ytTitle: "「受付嬢ごときが口出すな」取引先が受付の女性を罵倒。だが翌月、その女性がCEOに就任する・・・！ #スカッとする話 #逆転劇",
    ytDesc: "受付嬢を見下して罵倒した取引先。だがその女性は創業者の娘で、翌月CEOに就任。取引は打ち切られた。\n#スカッと #受付 #CEO #逆転 #因果応報",
    setting: "オフィス",
    characters: [
      { id: "RUDE_CLIENT", appearance: "Japanese man, late 40s, expensive suit, flashy watch, slicked hair. He taps the reception counter impatiently, looking down at the receptionist with contempt." },
      { id: "RECEPTIONIST_CEO", appearance: "Japanese woman, late 20s, receptionist uniform with company badge, hair in a neat bun. She speaks politely but firmly. She is actually the founder's daughter learning the business from the ground up." },
      { id: "OUTGOING_CEO", appearance: "Japanese man, late 60s, the company founder, walking past the reception area. He overhears the exchange and stops." },
    ],
    scene1: [
      "Office reception area. RUDE_CLIENT arrives late for a meeting.\n[RUDE_CLIENT, snapping]: 「おい、部長に取り次いでくれ。約束がある」\n[RECEPTIONIST_CEO]: 「お名前とお約束のお時間を確認させてください」\n[RUDE_CLIENT]: 「面倒くさい。受付嬢ごときが偉そうに」",
      "[RECEPTIONIST_CEO, calm]: 「セキュリティ上の確認ですので、ご協力をお願いします」\n[RUDE_CLIENT, slamming counter]: 「こっちは年間2億の取引先だぞ！受付の小娘に用はない！上を呼べ！」\nOUTGOING_CEO stops in the hallway, listening.",
      "OUTGOING_CEO approaches.\n[OUTGOING_CEO]: 「どうされましたか」\n[RUDE_CLIENT, suddenly polite]: 「あ、社長！この受付の子が…」\n[OUTGOING_CEO, cold]: 「この子は私の娘です。来月から彼女がこの会社のCEOになります」\nRUDE_CLIENT's complaint dies in his throat."
    ],
    scene2: [
      "Close-up of RUDE_CLIENT's face. His polished confidence shatters.\n[RUDE_CLIENT]: 「お嬢様が…受付を…？」\n[OUTGOING_CEO]: 「現場を知らずに経営はできませんから。半年間、全部署を回っています」",
      "[OUTGOING_CEO]: 「取引先を選ぶのは、来月から彼女の仕事になります」\nHe looks at RECEPTIONIST_CEO. She nods, professional as ever.\n[RECEPTIONIST_CEO, to RUDE_CLIENT]: 「改めまして、お名前を伺えますか」\nRUDE_CLIENT gives his name in a whisper.",
      "One month later. RECEPTIONIST_CEO sits in the CEO's office, reviewing contracts. RUDE_CLIENT's company file is on the desk with a red sticky note: '契約見直し.' She picks up the phone.\n[RECEPTIONIST_CEO]: 「受付の小娘から、ご連絡です」\nOn the other end, silence."
    ],
    lines: [
      { speaker: "取引先", text: "受付嬢ごときが偉そうに" },
      { speaker: "取引先", text: "年間2億の取引先だぞ！" },
      { speaker: "創業者", text: "この子は私の娘です。来月から彼女がCEOになります" },
      { speaker: "新CEO", text: "受付の小娘から、ご連絡です" },
    ],
    endText: "現場を知る者が、一番強いリーダーになる",
  },
  // ========== 逆転系：栄枯盛衰 ==========
  {
    id: 41, category: 'rise_and_fall',
    title: "マウンティング女→3年後に立場逆転",
    ytTitle: "「あなたの旦那さん、年収いくら？」マウンティングし続けた女。3年後の同窓会で、立場が完全に逆転する・・・！ #スカッとする話 #マウンティング",
    ytDesc: "年収や持ち物でマウンティングし続けた女性。3年後の同窓会では夫が失業し、見下していた相手が成功していた。\n#スカッと #マウンティング #同窓会 #栄枯盛衰",
    setting: "レストラン",
    characters: [
      { id: "SHOW_OFF", appearance: "Japanese woman, late 30s. In the past: designer dress, huge diamond ring, luxury bag, smug expression. In the present: plain dress, ring finger bare, exhausted face, trying to maintain dignity." },
      { id: "QUIET_WOMAN", appearance: "Japanese woman, late 30s. In the past: simple dress, modest accessories, enduring the humiliation quietly. In the present: elegant understated outfit, genuine confidence, warm smile." },
    ],
    scene1: [
      "Flashback: restaurant, 3 years ago. Alumni reunion dinner. SHOW_OFF flashes her diamond ring at QUIET_WOMAN.\n[SHOW_OFF]: 「これ、5カラットよ。旦那がパリで買ってくれたの。あなたの旦那さん、年収いくら？」\nQUIET_WOMAN smiles tightly, sipping her water.",
      "[SHOW_OFF, louder]: 「うちはタワマンの最上階。ねえ、あなたたちまだ賃貸？大変ねー」\nOther alumni look uncomfortable. QUIET_WOMAN says nothing, but her eyes are steady.\n[SHOW_OFF]: 「努力が足りないのよ。うちの旦那は年収3000万だから」",
      "Present day: same restaurant, 3 years later. Alumni reunion. QUIET_WOMAN enters in an elegant but understated outfit, looking healthy and confident. She chats warmly with old friends. The door opens. SHOW_OFF enters — different person. Plain dress, no ring, bags under her eyes."
    ],
    scene2: [
      "SHOW_OFF takes a seat at the corner. A mutual friend whispers to QUIET_WOMAN.\n[FRIEND]: 「あの人、旦那さんの会社が倒産して離婚したらしいわよ。タワマンも手放したって」\nQUIET_WOMAN looks at SHOW_OFF with genuine sympathy, not satisfaction.",
      "QUIET_WOMAN walks over to SHOW_OFF with two glasses of wine.\n[QUIET_WOMAN]: 「久しぶり。一緒に飲もう」\nSHOW_OFF stares, shocked by the kindness.\n[SHOW_OFF, barely audible]: 「あの時は…嫌な人だったよね、私…」",
      "[QUIET_WOMAN]: 「昔のことはいいよ。私も最近、自分で起業したの。いろいろ大変だったけど」\nShe sits beside SHOW_OFF. For the first time, they talk as equals. SHOW_OFF's eyes fill with tears — not from loss, but from unexpected kindness from someone she didn't deserve it from."
    ],
    lines: [
      { speaker: "マウント女", text: "これ5カラットよ。あなたの旦那さん、年収いくら？" },
      { speaker: "マウント女", text: "努力が足りないのよ" },
      { speaker: "友人", text: "旦那さんの会社が倒産して離婚したらしいわよ" },
      { speaker: "女性", text: "昔のことはいいよ。一緒に飲もう" },
    ],
    endText: "見下した相手が、手を差し伸べてくれることもある",
  },
  {
    id: 42, category: 'rise_and_fall',
    title: "人気絶頂のインフルエンサー→炎上で全てを失う",
    ytTitle: "「私に逆らったら終わるよ？」100万フォロワーのインフルエンサーが店員を恫喝。その様子が流出して全てを失う・・・！ #スカッとする話 #炎上",
    ytDesc: "フォロワー100万人のインフルエンサーが店員を恫喝する動画が流出。スポンサー契約は全解除、フォロワーは激減し、全てを失う。\n#スカッと #インフルエンサー #炎上 #因果応報",
    setting: "カフェ",
    characters: [
      { id: "INFLUENCER", appearance: "Japanese woman, mid 20s, perfectly styled hair, full makeup, designer outfit, phone always in hand. She records everything for content but gets angry when the camera isn't on her terms." },
      { id: "BARISTA", appearance: "Japanese man, early 20s, cafe apron, earnest expression. He accidentally made the wrong drink order. He bows repeatedly." },
      { id: "OTHER_CUSTOMER", appearance: "Japanese woman, early 30s, casual clothes, sitting at a nearby table. She quietly holds up her phone, recording the entire tirade." },
    ],
    scene1: [
      "Trendy cafe. BARISTA places a drink on the counter.\n[INFLUENCER, loud]: 「これ、オーダーと違うんだけど！何回言えば分かるの？」\n[BARISTA, bowing]: 「申し訳ございません、すぐ作り直します」\n[INFLUENCER]: 「当たり前でしょ。使えないわね」",
      "INFLUENCER leans over the counter, pointing at BARISTA.\n[INFLUENCER]: 「私のフォロワー100万人に言ったら、この店終わるからね？」\nShe waves her phone threateningly. OTHER_CUSTOMER at a nearby table quietly raises her phone, recording.\n[INFLUENCER]: 「私に逆らったらどうなるか、分かってる？」",
      "BARISTA stands frozen, eyes down. Other customers look away. INFLUENCER storms out with her correct drink, not noticing OTHER_CUSTOMER's phone. That night, the video goes viral — viewed 5 million times by morning."
    ],
    scene2: [
      "INFLUENCER's apartment. Morning. Her phone explodes with notifications. She opens social media: the video of her tirade is everywhere. Comments: 「最低」「スポンサーに報告」「フォロー解除」\nHer follower count drops in real-time: 1,000,000... 980,000... 950,000...",
      "Her manager calls.\n[MANAGER, on phone]: 「スポンサー3社から契約解除の連絡が来た。化粧品のCMも白紙だ」\nINFLUENCER stares at her phone, refreshing. More followers leaving. Her carefully curated image shattered by 30 seconds of truth.",
      "Wide shot. INFLUENCER sits alone in her aesthetic apartment, surrounded by gifted products from sponsors who will want them back. Her ring light is off. Her camera is face down. The phone keeps buzzing — but none of the notifications are the kind she wants."
    ],
    lines: [
      { speaker: "インフルエンサー", text: "私のフォロワー100万人に言ったら、この店終わるからね？" },
      { speaker: "インフルエンサー", text: "私に逆らったらどうなるか、分かってる？" },
      { speaker: "マネージャー", text: "スポンサー3社から契約解除の連絡が来た" },
    ],
    endText: "影響力は、人を傷つけるためにあるのではない",
  },
  {
    id: 43, category: 'rise_and_fall',
    title: "全員から慕われた部長→横領発覚で転落",
    ytTitle: "「信じてたのに…」社員全員に慕われた部長。だが10年間の横領が発覚し、全てが崩壊する・・・！ #スカッとする話 #横領",
    ytDesc: "人望厚い部長として慕われていた男。だが10年間にわたる横領が経理の新人に発見され、信頼も地位も全て失う。\n#スカッと #横領 #裏切り #栄枯盛衰",
    setting: "会議室",
    characters: [
      { id: "POPULAR_DIRECTOR", appearance: "Japanese man, early 50s, warm smile that everyone trusted, well-tailored suit, reading glasses. He was the most popular manager in the company. Now he sits in a conference room, smile gone, looking small." },
      { id: "ACCOUNTING_ROOKIE", appearance: "Japanese woman, early 20s, simple office clothes, large glasses, holding a thick folder of financial discrepancies. She is nervous but determined." },
      { id: "CEO_2", appearance: "Japanese man, late 60s, grey suit, sitting at the head of the table. His face shows deep personal betrayal — he trusted this man for 20 years." },
    ],
    scene1: [
      "Conference room. CEO_2 sits at the head. POPULAR_DIRECTOR sits across from ACCOUNTING_ROOKIE.\n[CEO_2, heavy voice]: 「木村、率直に聞く。会社の金を使い込んだのか」\n[POPULAR_DIRECTOR, smooth]: 「社長、何かの間違いですよ。私がそんなことするわけが…」",
      "ACCOUNTING_ROOKIE opens her folder with trembling hands.\n[ACCOUNTING_ROOKIE]: 「過去10年間の経費精算に不一致があります。合計4700万円です」\nShe spreads printouts on the table. Highlighted lines, circled numbers, cross-referenced receipts.\n[ACCOUNTING_ROOKIE]: 「架空の接待費、存在しない業者への支払い。全て部長の承認印です」",
      "POPULAR_DIRECTOR reaches for the papers.\n[POPULAR_DIRECTOR, still smiling]: 「これは事務処理の問題で…」\n[CEO_2]: 「木村。経理が業者に確認した。3社は実在しない。住所も電話番号もでたらめだ」\nPOPULAR_DIRECTOR's warm smile finally breaks."
    ],
    scene2: [
      "Close-up of POPULAR_DIRECTOR's face. The mask falls off. His popular-manager persona crumbles.\n[POPULAR_DIRECTOR]: 「…社長、20年の付き合いじゃないですか…」\n[CEO_2]: 「20年信じていた。だからこそ許せない」",
      "[CEO_2]: 「懲戒解雇と刑事告訴の手続きに入る」\nPOPULAR_DIRECTOR slumps. Through the glass wall, employees who adored him watch in shock. Some are crying. The man they trusted most was stealing from them all along.",
      "Wide shot. POPULAR_DIRECTOR stands, removes his company badge, and places it on the table. He walks through the office for the last time. No one meets his eyes. The desk that always had flowers from grateful colleagues is bare. ACCOUNTING_ROOKIE, the quietest person in the company, was the one who saw what everyone missed."
    ],
    lines: [
      { speaker: "社長", text: "木村、会社の金を使い込んだのか" },
      { speaker: "経理", text: "過去10年間で合計4700万円の不一致があります" },
      { speaker: "部長", text: "20年の付き合いじゃないですか…" },
      { speaker: "社長", text: "20年信じていた。だからこそ許せない" },
    ],
    endText: "信頼は築くのに10年、壊すのに1秒",
  },
  {
    id: 44, category: 'rise_and_fall',
    title: "権力を振りかざした議員→選挙で大敗",
    ytTitle: "「俺を誰だと思ってる」住民に横柄な態度を取り続けた議員。選挙当日、開票結果を見て議員は崩れ落ちる・・・！ #スカッとする話 #選挙",
    ytDesc: "住民を見下し権力を振りかざした地方議員。選挙で新人候補に大差で敗北し、全てを失う。\n#スカッと #議員 #選挙 #栄枯盛衰 #因果応報",
    setting: "役所",
    characters: [
      { id: "ARROGANT_POLITICIAN", appearance: "Japanese man, late 50s, expensive suit with a rose pin, red election sash, formerly confident posture now slumped. He stares at election results on a large screen." },
      { id: "YOUNG_CANDIDATE", appearance: "Japanese woman, early 30s, simple white blouse, modest campaign sash. She bows to supporters with genuine tears of gratitude. She ran on a platform of listening to residents." },
      { id: "RESIDENT", appearance: "Japanese man, late 60s, work jacket, weathered face. He sits in the audience at the election venue, nodding with satisfaction at the results." },
    ],
    scene1: [
      "Flashback: town hall meeting. ARROGANT_POLITICIAN at the microphone.\n[RESIDENT]: 「道路の補修をお願いしたいのですが…」\n[ARROGANT_POLITICIAN]: 「順番がある。俺の地元が先だ」\n[RESIDENT]: 「でも子供が通学で…」\n[ARROGANT_POLITICIAN]: 「文句があるなら自分で出馬しろ」",
      "Another flashback: ARROGANT_POLITICIAN at a restaurant with supporters, using campaign funds.\n[ARROGANT_POLITICIAN, drunk]: 「住民なんて選挙の時だけ愛想振ればいいんだよ。4年に一度頭下げりゃ十分」\nA waiter overhears and looks disgusted.",
      "Election night. Results hall. Large screen shows vote counts updating.\nARROGANT_POLITICIAN: 15,234\nYOUNG_CANDIDATE: 38,891\nDouble the votes. ARROGANT_POLITICIAN stares at the screen, sash hanging limply."
    ],
    scene2: [
      "Close-up of ARROGANT_POLITICIAN's face. Shock, then denial, then nothing. He thought his 20-year incumbency was untouchable.\n[SUPPORTER, whispering]: 「先生…残念ながら…」\nARROGANT_POLITICIAN doesn't respond.",
      "Across the hall, YOUNG_CANDIDATE bows to her supporters, tears streaming.\n[YOUNG_CANDIDATE]: 「一軒一軒回って、皆さんの声を聞かせていただきました。これからもずっと聞き続けます」\nRESIDENT in the audience claps, eyes wet.",
      "Wide shot. ARROGANT_POLITICIAN removes his rose pin and sets it on the table. He walks out of the results hall alone. No supporters follow. Outside, YOUNG_CANDIDATE's celebration can be heard. His black sedan waits — the last time a government car will be arranged for him."
    ],
    lines: [
      { speaker: "議員", text: "文句があるなら自分で出馬しろ" },
      { speaker: "議員", text: "住民なんて選挙の時だけ愛想振ればいいんだよ" },
      { speaker: "新人候補", text: "皆さんの声を聞かせていただきました。これからもずっと聞き続けます" },
    ],
    endText: "権力は借り物。返す日は必ず来る",
  },
  // ========== 集団系：全員が味方 ==========
  {
    id: 45, category: 'group_strike',
    title: "パワハラ課長に部署全員が辞表",
    ytTitle: "「辞めたきゃ辞めろ！」部下に怒鳴った課長。翌日、机の上に部署全員分の辞表が置かれていた・・・！ #スカッとする話 #パワハラ",
    ytDesc: "「代わりはいくらでもいる」が口癖のパワハラ課長。翌日、部署20人全員の辞表が一斉に提出される。代わりはいなかった。\n#スカッと #パワハラ #辞表 #全員退職",
    setting: "オフィス",
    characters: [
      { id: "POWER_HARASSER", appearance: "Japanese man, late 40s, shirt sleeves rolled up, tie loose, red face. He pounds his desk while berating employees. Coffee mug with 'I'm the boss' written on it." },
      { id: "LEAD_EMPLOYEE", appearance: "Japanese woman, mid 30s, neat office clothes, dark circles under eyes from overwork. She stands at the front of the group, holding a stack of resignation letters." },
      { id: "GENERAL_MANAGER", appearance: "Japanese man, early 60s, executive suit, rushing into the office after receiving an emergency call." },
    ],
    scene1: [
      "Office. POWER_HARASSER slams documents on a young employee's desk.\n[POWER_HARASSER]: 「こんな企画書、幼稚園児でも書けるわ！やり直せ！」\nThe young employee bows, trembling. It's 10 PM, the third rewrite today.",
      "[POWER_HARASSER]: 「文句があるなら辞めろ！お前の代わりなんかいくらでもいるんだよ！」\nHe storms to his office. LEAD_EMPLOYEE watches from her desk. She opens a group chat on her phone. Message: 「明日、全員で出しましょう」\n20 check marks appear.",
      "Next morning. POWER_HARASSER arrives at the office, coffee in hand. His desk is covered with white envelopes — 20 of them, neatly arranged. Each one labeled 「退職届」. He picks one up, then another, then another. All signed. All dated today."
    ],
    scene2: [
      "POWER_HARASSER rushes out of his office.\n[POWER_HARASSER]: 「おい、これどういうことだ！」\nThe office is silent. LEAD_EMPLOYEE stands.\n[LEAD_EMPLOYEE]: 「代わりはいくらでもいるとおっしゃったので、代わりを探してください」",
      "GENERAL_MANAGER arrives, out of breath.\n[GENERAL_MANAGER]: 「何が起きてるんだ」\n[LEAD_EMPLOYEE]: 「部署全員、退職届を出しました。パワハラの記録も全て人事に提出済みです」\nShe holds up a USB drive.\n[GENERAL_MANAGER, to POWER_HARASSER]: 「お前…何をやった…」",
      "Wide shot. POWER_HARASSER stands alone in the middle of 20 empty desks. The resignation letters are scattered on his desk. His 'I'm the boss' mug sits next to them. He is the boss of no one."
    ],
    lines: [
      { speaker: "課長", text: "お前の代わりなんかいくらでもいるんだよ！" },
      { speaker: "社員", text: "代わりはいくらでもいるとおっしゃったので、代わりを探してください" },
      { speaker: "社員", text: "パワハラの記録も全て人事に提出済みです" },
      { speaker: "部長", text: "お前…何をやった…" },
    ],
    endText: "代わりがいないのは、いつも横暴な上司の方",
  },
  {
    id: 46, category: 'group_strike',
    title: "いじめっ子を庇った担任→クラス全員が抗議",
    ytTitle: "「いじめなんてない」いじめっ子を庇った担任。だが翌日、クラス全員が校長室に抗議に行く・・・！ #スカッとする話 #いじめ",
    ytDesc: "いじめを報告してもいじめっ子を庇い続けた担任。クラス36人全員が校長室に直訴し、担任は交代させられた。\n#スカッと #いじめ #クラス全員 #団結",
    setting: "学校",
    characters: [
      { id: "BAD_TEACHER", appearance: "Japanese man, mid 40s, wrinkled dress shirt, dismissive posture. He waves away complaints like flies, always protecting the bully's parents who are PTA donors." },
      { id: "CLASS_REP", appearance: "Japanese girl, age 15, school uniform with class representative badge. She holds a petition with signatures, standing at the front of a group of students." },
      { id: "SCHOOL_PRINCIPAL", appearance: "Japanese man, late 50s, glasses, formal suit. He opens his office door to find 36 students lined up in the hallway." },
    ],
    scene1: [
      "Classroom. A bullied student sits alone, bruised. BAD_TEACHER at his desk, grading papers.\n[CLASS_REP]: 「先生、また石田くんがいじめられています。助けてください」\n[BAD_TEACHER, not looking up]: 「子供同士のじゃれ合いだろ。大げさだな」",
      "[CLASS_REP]: 「じゃれ合いで痣はできません」\n[BAD_TEACHER]: 「石田の家はPTAの…」\nHe catches himself, clears his throat.\n[BAD_TEACHER]: 「とにかく、いじめなんてない。席に戻りなさい」\nCLASS_REP returns to her desk. She passes a note to the student next to her.",
      "Next morning. BAD_TEACHER arrives at the classroom. It's empty. Every desk is vacant. He walks to the hallway. 36 students stand in a line outside the principal's office.\n[BAD_TEACHER, shouting]: 「何やってるんだ！教室に戻れ！」\nNo one moves."
    ],
    scene2: [
      "SCHOOL_PRINCIPAL opens his door.\n[PRINCIPAL]: 「どうしました」\nCLASS_REP steps forward and presents a petition — every student's signature.\n[CLASS_REP]: 「いじめが放置されています。先生に何度言っても動きません。クラス全員の署名です」",
      "PRINCIPAL reads the petition. His expression hardens. He looks at BAD_TEACHER.\n[PRINCIPAL]: 「職員室で話を聞く。全員、会議室に来なさい」\n[BAD_TEACHER, panicking]: 「校長、これは生徒の反抗で…」\n[PRINCIPAL]: 「36人全員が反抗？それは指導の問題だ」",
      "Wide shot. Students file into the meeting room. BAD_TEACHER stands in the empty hallway, alone. Inside, 36 voices tell the same story. The bullied student is in the middle of the group — for the first time, surrounded by allies."
    ],
    lines: [
      { speaker: "担任", text: "子供同士のじゃれ合いだろ。大げさだな" },
      { speaker: "学級委員", text: "いじめが放置されています。クラス全員の署名です" },
      { speaker: "校長", text: "36人全員が反抗？それは指導の問題だ" },
    ],
    endText: "声は、集まれば無視できない力になる",
  },
  {
    id: 47, category: 'group_strike',
    title: "横暴な客にファミレスの全スタッフが毅然対応",
    ytTitle: "「客は神様だろ！」暴れる客に、ファミレスの全スタッフが立ち上がった・・・！ #スカッとする話 #カスハラ",
    ytDesc: "ファミレスで暴言を繰り返す迷惑客。店長だけでなく全スタッフが一丸となって毅然と対応し、退店を求めた。\n#スカッと #カスハラ #ファミレス #団結",
    setting: "ファミレス",
    characters: [
      { id: "MONSTER_CUSTOMER", appearance: "Japanese man, mid 50s, wrinkled polo shirt, bloodshot eyes, empty beer bottles on his table. He stands, chair knocked back, shouting at a young waitress." },
      { id: "YOUNG_WAITRESS", appearance: "Japanese woman, late teens, restaurant uniform, name badge, tears running down her face. She holds a tray against her chest like a shield." },
      { id: "STORE_MANAGER_2", appearance: "Japanese woman, early 40s, manager badge, apron. She steps between the customer and the waitress. Behind her, kitchen staff, other servers, and even the dishwasher form a line." },
    ],
    scene1: [
      "Family restaurant, evening. MONSTER_CUSTOMER has been drinking for hours. He grabs YOUNG_WAITRESS's arm.\n[MONSTER_CUSTOMER]: 「おい、注文間違えただろ！金返せ！ただにしろ！」\n[YOUNG_WAITRESS, crying]: 「す、すみません…」\nHer tray clatters.",
      "[MONSTER_CUSTOMER]: 「客は神様なんだよ！俺が言うことは絶対だ！」\nHe slams the table. Plates rattle. Other customers flinch. YOUNG_WAITRESS tries to back away but he still grips her arm.",
      "STORE_MANAGER_2 appears. She firmly removes MONSTER_CUSTOMER's hand from the waitress's arm.\n[STORE_MANAGER_2]: 「お客様、スタッフへの暴力はおやめください」\nBehind her, the kitchen door opens. Two cooks, another server, and the dishwasher walk out and stand behind the manager in a line."
    ],
    scene2: [
      "MONSTER_CUSTOMER looks at the line of staff — five people, all standing together, all looking at him with the same firm expression.\n[MONSTER_CUSTOMER, faltering]: 「な、なんだよお前ら…」\n[STORE_MANAGER_2]: 「当店はスタッフへの暴力・暴言を許容しません。お引き取りください」",
      "One of the cooks steps forward — a large man with thick arms.\n[COOK]: 「警察呼びましょうか、店長」\n[STORE_MANAGER_2]: 「お客様が退店されないなら、そうしましょう」\nMONSTER_CUSTOMER's aggressive posture shrinks.",
      "Wide shot. MONSTER_CUSTOMER grabs his jacket and stumbles toward the exit, muttering. The door closes. STORE_MANAGER_2 turns to YOUNG_WAITRESS and puts a hand on her shoulder.\n[STORE_MANAGER_2]: 「よく耐えたね。もう大丈夫」\nOther customers begin to clap. The staff exchanges looks — tired but united."
    ],
    lines: [
      { speaker: "客", text: "客は神様なんだよ！俺が言うことは絶対だ！" },
      { speaker: "店長", text: "スタッフへの暴力・暴言を許容しません。お引き取りください" },
      { speaker: "調理師", text: "警察呼びましょうか、店長" },
      { speaker: "店長", text: "よく耐えたね。もう大丈夫" },
    ],
    endText: "仲間がいれば、理不尽に負けない",
  },
  {
    id: 48, category: 'group_strike',
    title: "意地悪な姑に親戚全員が反論",
    ytTitle: "「この嫁は出来損ないよ」法事で嫁を罵倒した姑。だが親戚全員が嫁の味方をする・・・！ #スカッとする話 #姑",
    ytDesc: "法事の席で嫁を公然と罵倒した姑。だが親戚全員が嫁の味方をし、姑は孤立する。\n#スカッと #姑 #嫁 #親戚 #因果応報",
    setting: "住宅街",
    characters: [
      { id: "MEAN_MIL", appearance: "Japanese woman, late 60s, formal kimono, stern face with deep frown lines. She sits at the head of the family gathering table, chopsticks pointing at the bride as she criticizes." },
      { id: "BRIDE", appearance: "Japanese woman, early 30s, modest dark dress for the memorial service, hair neatly pinned. She sits with eyes down, enduring the insults, hands gripping her knees." },
      { id: "AUNT", appearance: "Japanese woman, mid 60s, formal dress, warm face. She has watched the bullying for years. Today she speaks up. Other relatives nod behind her." },
    ],
    scene1: [
      "Traditional Japanese room, memorial service gathering. Family seated around a low table. MEAN_MIL points her chopsticks at BRIDE.\n[MEAN_MIL]: 「この子は料理もまともにできない。うちの家の恥よ」\nBRIDE bows her head lower. The room is tense.",
      "[MEAN_MIL]: 「子供もまだできないし。嫁として失格ね」\nShe looks around the table for agreement. No one nods. BRIDE's hands tremble in her lap.\n[MEAN_MIL]: 「ねえ、みんなもそう思うでしょ？」",
      "Silence. Then AUNT sets down her cup.\n[AUNT, firm]: 「姉さん、いい加減にしなさい」\nMEAN_MIL turns, shocked.\n[AUNT]: 「美咲さんはよくやってる。毎回法事の準備をしてくれてるのは美咲さんでしょう」"
    ],
    scene2: [
      "Other relatives speak up one by one.\n[UNCLE]: 「この料理だって全部美咲さんが作ったんだぞ。うまいじゃないか」\n[COUSIN]: 「おばさん、私たちみんな美咲さんに感謝してますよ」\nMEAN_MIL looks around — no ally in sight.",
      "[MEAN_MIL, flustered]: 「あなたたち…嫁の味方をするの？」\n[AUNT]: 「味方じゃない。事実を言ってるの。美咲さんがいなかったら、この法事も成り立たなかった」\nBRIDE lifts her head for the first time, eyes glistening with grateful tears.",
      "Wide shot. BRIDE is surrounded by supportive relatives who pat her back and compliment the food. MEAN_MIL sits at the head of the table, isolated, chopsticks still in hand but nothing to point them at."
    ],
    lines: [
      { speaker: "姑", text: "この子は料理もまともにできない。うちの家の恥よ" },
      { speaker: "叔母", text: "姉さん、いい加減にしなさい" },
      { speaker: "おじ", text: "この料理全部美咲さんが作ったんだぞ" },
      { speaker: "叔母", text: "美咲さんがいなかったら、この法事も成り立たなかった" },
    ],
    endText: "本当の家族は、血よりも行動で決まる",
  },
  {
    id: 49, category: 'group_strike',
    title: "電車で妊婦に席を譲らない若者→乗客全員が立ち上がる",
    ytTitle: "「知らねーよ」妊婦に席を譲らず暴言を吐いた若者。だが車両の乗客全員が立ち上がった・・・！ #スカッとする話 #電車",
    ytDesc: "優先席で妊婦に暴言を吐いた若者。すると車両中の乗客が次々と立ち上がり、妊婦に席を譲った。\n#スカッと #電車 #妊婦 #乗客全員",
    setting: "電車",
    characters: [
      { id: "RUDE_YOUTH", appearance: "Japanese man, early 20s, headphones around neck, legs spread wide across two priority seats, scrolling phone. He wears a baggy hoodie and sneakers on the seat." },
      { id: "PREGNANT_WOMAN", appearance: "Japanese woman, early 30s, maternity dress, holding the overhead strap with one hand and her belly with the other. She sways with the train's movement, looking exhausted." },
      { id: "SALARYMAN", appearance: "Japanese man, mid 40s, neat suit, briefcase. He is the first to stand. After him, a chain reaction — a grandmother, a college student, a construction worker, all offering their seats." },
    ],
    scene1: [
      "Crowded train. PREGNANT_WOMAN stands near the priority seats. RUDE_YOUTH sprawls across two seats, phone in hand.\n[PREGNANT_WOMAN, softly]: 「すみません、優先席を…」\n[RUDE_YOUTH, not looking up]: 「知らねーよ。先に座ったもん勝ちだろ」",
      "[PREGNANT_WOMAN]: 「お腹が大きくて立っているのがつらいんです…」\n[RUDE_YOUTH]: 「自分で妊娠したんだろ？自己責任じゃん」\nThe train car goes silent. Passengers exchange glances. PREGNANT_WOMAN's eyes fill with tears.",
      "SALARYMAN stands from his seat three rows away.\n[SALARYMAN]: 「こちらにどうぞ」\nHe gestures to his seat. Then a grandmother stands. Then a college student. Then a construction worker. One by one, four people stand and offer their seats to the pregnant woman."
    ],
    scene2: [
      "PREGNANT_WOMAN, overwhelmed, takes SALARYMAN's seat. She bows to everyone.\n[SALARYMAN, to RUDE_YOUTH]: 「優先席の意味、知ってるか」\nRUDE_YOUTH looks around. The entire car is staring at him. Not with anger — with disappointment.",
      "The grandmother speaks.\n[GRANDMOTHER]: 「あなたも誰かのお腹から生まれてきたのよ」\nThe college student nods. RUDE_YOUTH's phone slowly lowers. He pulls his feet off the seat.\n[RUDE_YOUTH, mumbling]: 「…悪かった」",
      "Wide shot. RUDE_YOUTH gets off at the next stop, head down. The car returns to quiet. PREGNANT_WOMAN sits surrounded by standing strangers who chose to stand so she could sit. She whispers 'ありがとうございます' and the grandmother pats her hand."
    ],
    lines: [
      { speaker: "若者", text: "知らねーよ。先に座ったもん勝ちだろ" },
      { speaker: "若者", text: "自分で妊娠したんだろ？自己責任じゃん" },
      { speaker: "サラリーマン", text: "こちらにどうぞ" },
      { speaker: "おばあさん", text: "あなたも誰かのお腹から生まれてきたのよ" },
    ],
    endText: "一人の勇気が、全員の優しさに火をつける",
  },
  // ========== 通報系：警察を呼ぶ ==========
  {
    id: 50, category: 'police_called',
    title: "駐車場で暴力を振るった男→被害者が元刑事",
    ytTitle: "「なんだお前！」駐車場で因縁をつけ殴りかかった男。だが相手は元刑事だった・・・！ #スカッとする話 #警察",
    ytDesc: "駐車場で因縁をつけて殴りかかった男。だが相手は元刑事で、瞬時に取り押さえられ、通報された。\n#スカッと #駐車場 #暴力 #元刑事",
    setting: "駐車場",
    characters: [
      { id: "AGGRESSOR", appearance: "Japanese man, mid 30s, tank top, tattoo peeking from sleeve, muscular build. He gets out of his car aggressively after a minor parking dispute, fists clenched." },
      { id: "EX_DETECTIVE", appearance: "Japanese man, late 50s, polo shirt, average build but sharp alert eyes. He stands calmly by his car, weight balanced on both feet. His hands are relaxed but ready — decades of training visible in his posture." },
      { id: "WIFE_WITNESS", appearance: "Japanese woman, mid 50s, sitting in the passenger seat of EX_DETECTIVE's car. She calmly takes out her phone and starts recording." },
    ],
    scene1: [
      "Parking lot. Minor fender proximity — no contact, just close parking. AGGRESSOR storms out of his car.\n[AGGRESSOR]: 「おい！ぶつけただろ！降りろ！」\nEX_DETECTIVE steps out calmly.\n[EX_DETECTIVE]: 「接触はしていませんよ。確認しましょう」",
      "[AGGRESSOR, grabbing EX_DETECTIVE's collar]: 「うるせえ！金出せ！」\nHe pulls back his fist. EX_DETECTIVE moves with trained precision — a simple wrist redirect, and AGGRESSOR's arm is locked behind his back. AGGRESSOR is face-down on the hood of his own car in two seconds.",
      "EX_DETECTIVE holds the lock easily, barely breathing hard.\n[EX_DETECTIVE, calm]: 「暴行罪で現行犯逮捕できますが、どうしますか」\n[AGGRESSOR, struggling]: 「な、何者だよ…！」\n[EX_DETECTIVE]: 「元刑事です。30年やってました」"
    ],
    scene2: [
      "WIFE_WITNESS holds up her phone from the car window.\n[WIFE_WITNESS]: 「全部撮ってあるわよ。先に殴りかかったのはあなた」\nAGGRESSOR stops struggling.\n[EX_DETECTIVE]: 「妻は元鑑識課です。証拠保全はお手の物ですよ」",
      "Police siren in the distance — WIFE_WITNESS already called. A patrol car arrives. Officers step out.\n[OFFICER]: 「何がありましたか」\n[EX_DETECTIVE]: 「暴行未遂です。映像あります」\nHe releases AGGRESSOR to the officers. AGGRESSOR slumps, all fight gone.",
      "Wide shot. AGGRESSOR sits in the back of the patrol car. EX_DETECTIVE and WIFE_WITNESS give statements calmly — they've done this routine from the other side many times before. EX_DETECTIVE checks his car for scratches. There are none. There never were."
    ],
    lines: [
      { speaker: "男", text: "ぶつけただろ！金出せ！" },
      { speaker: "元刑事", text: "暴行罪で現行犯逮捕できますが、どうしますか" },
      { speaker: "妻", text: "全部撮ってあるわよ" },
      { speaker: "元刑事", text: "妻は元鑑識課です。証拠保全はお手の物ですよ" },
    ],
    endText: "相手を選ばない暴力は、最悪の相手に当たる",
  },
  {
    id: 51, category: 'police_called',
    title: "ストーカーの元彼→彼女が録音と位置情報で通報",
    ytTitle: "「別れたくない」拒否しても付きまとう元彼。だが彼女は全てを記録して警察に突き出す・・・！ #スカッとする話 #ストーカー",
    ytDesc: "別れを受け入れず付きまとう元彼。だが彼女は全ての待ち伏せ・電話・メッセージを記録し、警察に証拠として提出した。\n#スカッと #ストーカー #証拠 #警察",
    setting: "マンション",
    characters: [
      { id: "STALKER_EX", appearance: "Japanese man, early 30s, hoodie with hood up, standing outside an apartment building at night. He holds his phone, having sent dozens of unread messages. Desperate, unshaven, dark circles." },
      { id: "BRAVE_WOMAN", appearance: "Japanese woman, late 20s, home clothes, standing inside her apartment with the chain lock on. She holds her phone, recording his voice through the door. A thick folder of evidence sits on her table." },
      { id: "POLICE_OFFICER", appearance: "Japanese man, early 40s, police uniform, arriving with a partner. He approaches STALKER_EX from behind." },
    ],
    scene1: [
      "Apartment hallway at night. STALKER_EX stands at BRAVE_WOMAN's door, knocking repeatedly.\n[STALKER_EX]: 「なあ、話だけでも聞いてくれよ。俺たちやり直せるだろ？」\nInside, BRAVE_WOMAN stands with her back against the door, phone recording.",
      "[STALKER_EX, knocking harder]: 「出て来いよ！無視するな！」\nBRAVE_WOMAN looks at her phone — she already called the police 5 minutes ago. On her table: a folder containing 3 months of evidence — 200 messages, GPS logs of him following her, photos of him waiting outside her workplace.",
      "Blue lights flash through the hallway window. Two officers approach.\n[POLICE_OFFICER]: 「お話を伺えますか」\nSTALKER_EX turns.\n[STALKER_EX]: 「彼女に会いに来ただけです。元カノなんで」\n[POLICE_OFFICER]: 「ストーカー規制法に基づく警告を出しています。3回目の警告ですよ」"
    ],
    scene2: [
      "BRAVE_WOMAN opens the door with the chain still on. She hands the evidence folder to the officer through the gap.\n[BRAVE_WOMAN]: 「3ヶ月分の待ち伏せ記録、200件のメッセージ、職場周辺でのGPS記録です」\nSTALKER_EX stares at the thick folder.",
      "[POLICE_OFFICER, to STALKER_EX]: 「これだけの証拠があれば逮捕案件です」\nSTALKER_EX's desperate expression shifts to fear.\n[STALKER_EX]: 「逮捕…？俺はただ…」\n[POLICE_OFFICER]: 「相手が嫌がっていることが全てです。こちらに来てください」",
      "Wide shot. STALKER_EX is led away by officers. BRAVE_WOMAN closes the door, slides the chain lock, and leans against the wall. She exhales — the first safe breath in months. Her phone shows the recording has stopped. 47 minutes of evidence, added to the pile."
    ],
    lines: [
      { speaker: "元彼", text: "俺たちやり直せるだろ？" },
      { speaker: "警察", text: "ストーカー規制法に基づく警告を出しています。3回目です" },
      { speaker: "女性", text: "3ヶ月分の待ち伏せ記録、200件のメッセージ、GPS記録です" },
      { speaker: "警察", text: "相手が嫌がっていることが全てです" },
    ],
    endText: "記録は、自分を守る最強の盾になる",
  },
  {
    id: 52, category: 'police_called',
    title: "銀行で暴れた客→ボタン一つで即通報",
    ytTitle: "「金出せ！早くしろ！」銀行で暴れた男。だが窓口の下には・・・！ #スカッとする話 #銀行",
    ytDesc: "銀行窓口で暴言を吐き暴れた男。だが窓口職員はカウンター下の通報ボタンを押していた。3分で警察が到着する。\n#スカッと #銀行 #通報 #暴力客",
    setting: "銀行",
    characters: [
      { id: "VIOLENT_CUSTOMER", appearance: "Japanese man, early 40s, wrinkled shirt, unshaven, agitated. He leans over the bank counter, pounding the glass partition, shouting about a denied loan application." },
      { id: "BANK_TELLER", appearance: "Japanese woman, mid 30s, bank uniform, name badge, professional composure despite the threat. Her left hand is under the counter, finger on the silent alarm button." },
      { id: "SECURITY_GUARD", appearance: "Japanese man, late 40s, security uniform, standing near the entrance. He moves to position himself between the violent customer and other clients." },
    ],
    scene1: [
      "Bank interior. VIOLENT_CUSTOMER slams his fist on the counter.\n[VIOLENT_CUSTOMER]: 「なんで融資が降りねえんだよ！ふざけるな！」\n[BANK_TELLER, calm]: 「申し訳ございません。審査基準に基づく判断でして…」\n[VIOLENT_CUSTOMER]: 「基準とか知るか！金出せ！」",
      "VIOLENT_CUSTOMER grabs a pen holder and throws it. Other customers gasp and move back. SECURITY_GUARD steps forward.\n[SECURITY_GUARD]: 「お客様、落ち着いてください」\n[VIOLENT_CUSTOMER]: 「うるせえ！」\nUnder the counter, BANK_TELLER's finger presses the silent alarm button.",
      "[VIOLENT_CUSTOMER, leaning over counter]: 「支店長呼べ！ここで暴れてやるからな！」\nBANK_TELLER maintains eye contact, counting seconds. Three minutes. She needs to keep him talking for three minutes.\n[BANK_TELLER]: 「支店長をお呼びしますので、少々お待ちください」"
    ],
    scene2: [
      "Exactly three minutes later. The bank entrance opens. Two police officers enter quietly. VIOLENT_CUSTOMER doesn't notice — he's still ranting at the counter.\n[OFFICER_1]: 「お客様、ちょっとよろしいですか」\nVIOLENT_CUSTOMER spins around.",
      "[VIOLENT_CUSTOMER]: 「警察？誰が呼んだ！」\n[BANK_TELLER, standing straight]: 「私です。業務妨害と器物損壊で通報しました」\nShe holds up the thrown pen holder — cracked from the impact. SECURITY_GUARD stands beside her.\n[OFFICER_1]: 「防犯カメラの映像も確保させていただきます」",
      "Wide shot. VIOLENT_CUSTOMER is escorted out by officers. Bank operations resume. BANK_TELLER takes a breath, then turns to the next customer in line with a professional smile.\n[BANK_TELLER]: 「お待たせいたしました。次のお客様、どうぞ」\nThe counter has a small scratch from the thrown pen holder. It will be repaired. The teller will not."
    ],
    lines: [
      { speaker: "客", text: "なんで融資が降りねえんだよ！金出せ！" },
      { speaker: "客", text: "警察？誰が呼んだ！" },
      { speaker: "窓口", text: "私です。業務妨害と器物損壊で通報しました" },
      { speaker: "窓口", text: "お待たせいたしました。次のお客様、どうぞ" },
    ],
    endText: "暴力で手に入るものは、手錠だけ",
  },
  // ========== 専門知識系：専門家に論破される ==========
  {
    id: 53, category: 'expert_crush',
    title: "医者に説教した素人→相手は専門医の権威",
    ytTitle: "「ネットに書いてあったんだけど」医者に治療法を指図した患者。だがその医者はその分野の世界的権威だった・・・！ #スカッとする話 #医者",
    ytDesc: "ネットの情報で医師に治療法を指図した患者。だがその医師はその分野の世界的権威で、教科書を執筆した本人だった。\n#スカッと #医者 #ネット情報 #専門家",
    setting: "病院",
    characters: [
      { id: "KNOW_IT_ALL", appearance: "Japanese man, mid 40s, hospital gown, holding a smartphone with a health blog open. He points at the screen and lectures the doctor condescendingly." },
      { id: "WORLD_EXPERT", appearance: "Japanese man, early 60s, white doctor's coat with multiple credential badges, grey temples, calm patient expression. He listens to the patient's lecture with a slight, tired smile." },
      { id: "NURSE", appearance: "Japanese woman, mid 30s, nurse uniform, standing behind the doctor. She bites her lip to suppress a reaction, knowing exactly who the patient is lecturing." },
    ],
    scene1: [
      "Hospital examination room. KNOW_IT_ALL shows his phone to WORLD_EXPERT.\n[KNOW_IT_ALL]: 「先生ね、ネットに書いてあったんだけど、この薬は副作用が多いらしいよ。別の薬にしてよ」\nWORLD_EXPERT listens patiently.",
      "[KNOW_IT_ALL]: 「あと、この治療法は古いって書いてあった。最新のはこっち」\nHe shows another blog post. NURSE behind the doctor covers her mouth.\n[KNOW_IT_ALL]: 「医者ももうちょっと勉強した方がいいよ。ネットの方が詳しいこともあるから」",
      "WORLD_EXPERT adjusts his glasses.\n[WORLD_EXPERT, mild]: 「そのサイトの情報、どなたが書いたかご存知ですか」\n[KNOW_IT_ALL]: 「知らないけど、すごく詳しい人でしょ」\n[WORLD_EXPERT]: 「その記事の参考文献に挙げられている論文、書いたの私です」\nKNOW_IT_ALL's phone slowly lowers."
    ],
    scene2: [
      "WORLD_EXPERT takes off his glasses and points to the wall. Framed diplomas, international awards, and a copy of a medical textbook — authored by him.\n[WORLD_EXPERT]: 「この分野の教科書も私が書きました。第7版まで出ています」\nKNOW_IT_ALL stares at the wall, then at the doctor.",
      "[WORLD_EXPERT, gentle]: 「ネットの情報が全て間違いとは言いません。ただ、あなたの症状にはこの治療が最善です。それは30年の経験からお伝えしています」\nKNOW_IT_ALL closes his phone.\n[KNOW_IT_ALL]: 「…すみません…」",
      "Wide shot. KNOW_IT_ALL sits quietly as WORLD_EXPERT explains the treatment plan properly. This time, the patient listens. NURSE brings in the medication tray. WORLD_EXPERT pats the patient's shoulder.\n[WORLD_EXPERT]: 「分からないことは何でも聞いてください。ネットじゃなくて、私に」"
    ],
    lines: [
      { speaker: "患者", text: "医者ももうちょっと勉強した方がいいよ" },
      { speaker: "医師", text: "その記事の参考文献の論文、書いたの私です" },
      { speaker: "医師", text: "この分野の教科書も私が書きました" },
      { speaker: "医師", text: "分からないことは何でも聞いてください。ネットじゃなくて、私に" },
    ],
    endText: "検索10分の知識で、30年の専門家に勝てるわけがない",
  },
  {
    id: 54, category: 'expert_crush',
    title: "法律を振りかざした隣人→相手は弁護士",
    ytTitle: "「訴えてやる！」法律用語を並べて脅した隣人。だが相手は現役の弁護士だった・・・！ #スカッとする話 #弁護士",
    ytDesc: "法律用語を並べて近隣住民を脅した男。だが脅された相手は現役の弁護士で、全ての法律用語の間違いを指摘される。\n#スカッと #弁護士 #法律 #隣人トラブル",
    setting: "マンション",
    characters: [
      { id: "FAKE_LAWYER", appearance: "Japanese man, mid 50s, polo shirt, reading glasses, holding a printed Wikipedia page about property law. He stands in the apartment hallway, pointing aggressively at his neighbor's door." },
      { id: "REAL_LAWYER", appearance: "Japanese woman, early 40s, casual weekend clothes, hair in a messy bun. She leans against her doorframe with arms crossed, an amused expression growing as FAKE_LAWYER misquotes laws." },
    ],
    scene1: [
      "Apartment hallway. FAKE_LAWYER pounds on REAL_LAWYER's door.\n[FAKE_LAWYER]: 「おい、お宅の室外機がうるさいんだよ！民法709条の不法行為で訴えてやるからな！」\nREAL_LAWYER opens the door in her weekend clothes.",
      "[FAKE_LAWYER, waving his printed paper]: 「騒音は刑法の傷害罪にもなる。知ってた？慰謝料300万は取れるからな！」\nREAL_LAWYER listens, head slightly tilted.\n[REAL_LAWYER]: 「…続けてください。興味深いです」",
      "[FAKE_LAWYER]: 「お前が払わないなら強制執行だ！俺は法律に詳しいんだ！」\nREAL_LAWYER nods slowly.\n[REAL_LAWYER]: 「では、いくつか訂正させてください。私、弁護士なんです」\nShe reaches inside and holds up her bar association ID card.\nFAKE_LAWYER's printed paper droops."
    ],
    scene2: [
      "[REAL_LAWYER]: 「まず、室外機の騒音は709条の可能性はありますが、生活騒音の受忍限度を超えていなければ不法行為にはなりません」\nFAKE_LAWYER blinks.\n[REAL_LAWYER]: 「次に、騒音で傷害罪は成立しません。条文を読み間違えていますね」",
      "[REAL_LAWYER]: 「そして強制執行には確定判決か執行力ある公正証書が必要です。Wikipediaには書いてなかったですか？」\nShe glances at his printed page. FAKE_LAWYER folds it in half, hiding it.\n[FAKE_LAWYER]: 「…室外機の音、少し気になるだけなんだが…」",
      "REAL_LAWYER smiles.\n[REAL_LAWYER]: 「それなら普通に言ってくだされば。業者に点検を頼みますよ」\nShe takes out her phone.\n[REAL_LAWYER]: 「ちなみに、虚偽の法律を並べて脅すのは脅迫罪になり得ます。これは本当の法律です」\nFAKE_LAWYER nods rapidly and retreats to his apartment."
    ],
    lines: [
      { speaker: "隣人", text: "民法709条の不法行為で訴えてやるからな！" },
      { speaker: "隣人", text: "俺は法律に詳しいんだ！" },
      { speaker: "弁護士", text: "いくつか訂正させてください。私、弁護士なんです" },
      { speaker: "弁護士", text: "虚偽の法律を並べて脅すのは脅迫罪になり得ます。これは本当の法律です" },
    ],
    endText: "にわか知識は、本物の前では武器にならない",
  },
  {
    id: 55, category: 'expert_crush',
    title: "料理に文句をつけた客→シェフは三ツ星出身",
    ytTitle: "「こんな味付けプロの仕事じゃない」個人店の料理にケチをつけた客。だがシェフの経歴を知って黙り込む・・・！ #スカッとする話 #レストラン",
    ytDesc: "小さな個人店の料理に「素人の味」と文句をつけた客。だがそのシェフはパリの三ツ星レストランで10年修業した経歴の持ち主だった。\n#スカッと #シェフ #三ツ星 #料理",
    setting: "レストラン",
    characters: [
      { id: "FOOD_CRITIC_WANNABE", appearance: "Japanese man, mid 30s, turtleneck and blazer, wine glass in hand, swirling it pretentiously. He barely ate the dish but is already complaining loudly, gesturing with his fork." },
      { id: "MICHELIN_CHEF", appearance: "Japanese man, late 40s, simple white chef coat without logos, bandana over short hair, burn scars on forearms from decades of cooking. He emerges from a tiny open kitchen, wiping his hands on a towel." },
      { id: "REGULAR_CUSTOMER", appearance: "Japanese woman, mid 60s, sitting at the counter nearby. She is a regular who knows the chef's background. She watches with a knowing smile." },
    ],
    scene1: [
      "Small neighborhood restaurant, 10 seats. FOOD_CRITIC_WANNABE pushes his barely-touched plate forward.\n[CRITIC, loud]: 「この味付け、プロの仕事じゃないね。塩加減もソースも素人レベル」\nHe swirls his wine glass. MICHELIN_CHEF looks over from the kitchen.",
      "[CRITIC]: 「僕はパリで三ツ星レストランに何度も行ってるから分かるんだよ。この程度の店じゃ仕方ないけどさ」\nHe laughs. REGULAR_CUSTOMER at the counter smirks into her soup.\n[REGULAR_CUSTOMER, quietly]: 「お客さん、もう少し食べてから言ったらどうかしら」",
      "MICHELIN_CHEF steps out from the kitchen. He approaches the table calmly.\n[CHEF]: 「お口に合いませんでしたか。どの三ツ星に行かれたんですか？」\n[CRITIC]: 「えーと…ギィ・サヴォワとか…」\n[CHEF]: 「ああ、ギィ・サヴォワ。2012年から2018年まで、私はそこのスーシェフでした」"
    ],
    scene2: [
      "CRITIC's wine glass stops mid-swirl.\n[CHEF]: 「パリで10年修業して、地元に帰ってこの店を開きました」\nHe points to a small photo on the wall — himself in a Parisian kitchen, standing next to the head chef of a famous three-star restaurant.\n[CRITIC]: 「え…本当に…」",
      "[CHEF]: 「この皿のソースはそのレストランのレシピを和食材でアレンジしたものです。塩分は0.8%で計算しています」\nHe picks up the barely-touched plate.\n[CHEF]: 「でもお口に合わなかったのなら、別の品をお作りしましょうか」\nCRITIC looks at the plate leaving his table with new eyes.",
      "[CRITIC, embarrassed]: 「…すみません。そのまま食べさせてください」\nCHEF nods and returns the plate. CRITIC takes a proper bite for the first time. His eyes widen.\n[CRITIC, quietly]: 「…美味い」\nREGULAR_CUSTOMER smiles.\n[REGULAR_CUSTOMER]: 「でしょう？」"
    ],
    lines: [
      { speaker: "客", text: "この味付け、プロの仕事じゃないね。素人レベル" },
      { speaker: "シェフ", text: "ギィ・サヴォワ。2012年から2018年まで、私はそこのスーシェフでした" },
      { speaker: "客", text: "すみません。そのまま食べさせてください" },
      { speaker: "常連", text: "でしょう？" },
    ],
    endText: "本物は、小さな場所でも本物のままだ",
  },
];

export const themes = [..._themes, ...themes_56_100];

export function getRandomTheme() {
  const t = themes[Math.floor(Math.random() * themes.length)];
  return t;
}

export function getThemesByCategory(categoryId) {
  return themes.filter(t => t.category === categoryId);
}
