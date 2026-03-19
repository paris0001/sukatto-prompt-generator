export const categories = [
  // 正体判明系
  { id: 'real_vip', name: '実は偉い人', group: '正体判明系', icon: '👑', desc: '見下した相手が実は権力者' },
  { id: 'real_rich', name: '実は金持ち', group: '正体判明系', icon: '💰', desc: '質素な人が実は大富豪' },
  { id: 'real_insider', name: '実は関係者', group: '正体判明系', icon: '🔗', desc: '新人が実は社長の娘など' },
  // 因果応報系
  { id: 'lie_exposed', name: '嘘がバレる', group: '因果応報系', icon: '🤥', desc: '虚偽クレーム→専門家が隣に' },
  { id: 'evidence', name: '証拠が残ってた', group: '因果応報系', icon: '📱', desc: 'パワハラ→録音済み' },
  { id: 'witness', name: '目撃者がいた', group: '因果応報系', icon: '👀', desc: '悪口→本人が隣の席' },
  { id: 'boomerang', name: 'ブーメラン', group: '因果応報系', icon: '🪃', desc: '自分の発言が自分に返る' },
  { id: 'past_karma', name: '過去の行いが返る', group: '因果応報系', icon: '🔄', desc: '昔いじめた相手が今の上司' },
  // 立場逆転系
  { id: 'career_reverse', name: '転職・異動で逆転', group: '立場逆転系', icon: '🔀', desc: '解雇した部下が取引先に' },
  { id: 'rise_and_fall', name: '成功と没落', group: '立場逆転系', icon: '📈', desc: '見下してた相手が成功' },
  // 周囲が味方系
  { id: 'group_strike', name: '周囲一斉反撃', group: '周囲が味方系', icon: '✊', desc: 'パワハラ→部下全員が証人' },
  { id: 'police_called', name: '通報される', group: '周囲が味方系', icon: '🚔', desc: '暴れる→警察到着' },
  // 論破・知識系
  { id: 'expert_crush', name: '専門知識で論破', group: '論破・知識系', icon: '🎓', desc: 'マウント→本物の専門家' },
  // 弱者の逆襲系
  { id: 'patience_snap', name: '我慢の限界爆発', group: '弱者の逆襲系', icon: '💥', desc: '30年耐えた末の一言' },
  { id: 'quit_bomb', name: '辞める切り札', group: '弱者の逆襲系', icon: '🚪', desc: '代わりはいる→1ヶ月後崩壊' },
  { id: 'bully_revenge', name: 'いじめられっ子の反撃', group: '弱者の逆襲系', icon: '🥊', desc: '耐えてた子が反撃' },
  { id: 'hidden_strength', name: '情けない人が実は強い', group: '弱者の逆襲系', icon: '🥷', desc: 'ヘタレ→格闘技の達人' },
  // 自滅系
  { id: 'misread_self', name: '勘違い自滅', group: '自滅系', icon: '💀', desc: '新人と思って横柄→社長の娘' },
  { id: 'overconfident', name: '調子に乗りすぎて墓穴', group: '自滅系', icon: '🕳️', desc: '自慢→全部嘘がバレる' },
  { id: 'ignorant_shame', name: '知識不足で恥', group: '自滅系', icon: '📉', desc: 'マウント→基本が間違い' },
  // 法的制裁系
  { id: 'legal_strike', name: '損害賠償・出禁', group: '法的制裁系', icon: '⚖️', desc: 'ドタキャン→弁護士から請求' },
  // 家族の前で恥系
  { id: 'shame_family', name: '子供・家族の前で恥', group: '家族の前で恥系', icon: '👧', desc: '娘「パパ最低」' },
  { id: 'fiance_reveal', name: '婚約者の前で本性', group: '家族の前で恥系', icon: '💍', desc: '本性バレ→その場で破談' },
];

export function getCategoryById(id) {
  return categories.find(c => c.id === id);
}

export function getCategoriesByGroup() {
  const groups = {};
  for (const cat of categories) {
    if (!groups[cat.group]) groups[cat.group] = [];
    groups[cat.group].push(cat);
  }
  return groups;
}
