import { useState, useCallback } from 'react'
import { themes, getRandomTheme } from './data/themes'
import { generatePrompts } from './data/promptTemplates'
import './index.css'

function CopyButton({ text, label = 'COPY', size = 'sm' }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={(e) => { e.stopPropagation(); handleCopy() }}
      className={`${size === 'lg' ? 'px-4 py-2 text-xs' : 'px-2.5 py-1 text-[10px]'} tracking-wide font-medium rounded-md transition shrink-0`}
      style={{
        background: copied ? 'var(--sk-success)' : 'var(--sk-primary-dim)',
        border: `1px solid ${copied ? 'var(--sk-success)' : 'var(--sk-primary)'}`,
        color: copied ? '#fff' : 'var(--sk-primary)',
      }}
    >
      {copied ? '✓ Copied' : label}
    </button>
  )
}

function PromptOutput({ result, theme }) {
  return (
    <div className="space-y-4">
      {/* YouTube Info */}
      <div className="card p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ background: 'var(--sk-primary-dim)', color: 'var(--sk-primary)' }}>POST INFO</span>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold" style={{ color: 'var(--sk-gold)' }}>TITLE + TAGS</span>
            <CopyButton text={theme.ytTitle} />
          </div>
          <p className="text-sm font-bold leading-relaxed">{theme.ytTitle}</p>
        </div>
        <div style={{ borderTop: '1px solid var(--sk-border)', paddingTop: '12px' }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold" style={{ color: 'var(--sk-gold)' }}>DESCRIPTION</span>
            <CopyButton text={theme.ytDesc} />
          </div>
          <p className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--sk-text-dim)' }}>{theme.ytDesc}</p>
        </div>
        <div className="flex justify-center pt-1" style={{ borderTop: '1px solid var(--sk-border)' }}>
          <CopyButton text={`${theme.ytTitle}\n\n${theme.ytDesc}`} label="◆ TITLE + DESC コピー" size="lg" />
        </div>
      </div>

      {/* Part 1 */}
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2" style={{ background: 'var(--sk-primary-dim)', borderBottom: '1px solid var(--sk-border)' }}>
          <span className="text-xs font-bold" style={{ color: 'var(--sk-primary)' }}>PART 1 — 前編</span>
          <CopyButton text={result.part1} label="COPY 前編" />
        </div>
        <pre className="p-4 text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto" style={{ color: 'var(--sk-text)', fontFamily: "'Noto Sans JP', sans-serif" }}>
          {result.part1}
        </pre>
      </div>

      {/* Part 2 */}
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2" style={{ background: 'var(--sk-accent-dim)', borderBottom: '1px solid var(--sk-border)' }}>
          <span className="text-xs font-bold" style={{ color: 'var(--sk-accent)' }}>PART 2 — 後編</span>
          <CopyButton text={result.part2} label="COPY 後編" />
        </div>
        <pre className="p-4 text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto" style={{ color: 'var(--sk-text)', fontFamily: "'Noto Sans JP', sans-serif" }}>
          {result.part2}
        </pre>
      </div>

      {/* Script */}
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2" style={{ background: 'var(--sk-gold-dim)', borderBottom: '1px solid var(--sk-border)' }}>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold" style={{ color: 'var(--sk-gold)' }}>台本 — {result.meta.lineCount}行</span>
            <span className="text-[10px] px-2 py-0.5 rounded font-bold" style={{
              background: result.meta.totalChars >= 60 && result.meta.totalChars <= 80 ? 'rgba(46,164,79,0.1)' : 'rgba(215,58,73,0.1)',
              color: result.meta.totalChars >= 60 && result.meta.totalChars <= 80 ? 'var(--sk-success)' : 'var(--sk-danger)',
              border: `1px solid ${result.meta.totalChars >= 60 && result.meta.totalChars <= 80 ? 'var(--sk-success)' : 'var(--sk-danger)'}`,
            }}>
              合計 {result.meta.totalChars}字 / ~{(result.meta.totalChars / 7).toFixed(1)}s {result.meta.totalChars >= 60 && result.meta.totalChars <= 80 ? '✓' : result.meta.totalChars < 60 ? '△短い' : '△長い'}
            </span>
          </div>
          <CopyButton text={result.script} label="COPY 台本" />
        </div>
        <div className="p-4 space-y-2">
          {result.lines.map((line, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[10px] font-bold shrink-0 px-1.5 py-0.5 rounded" style={{ background: 'var(--sk-primary-dim)', color: 'var(--sk-primary)' }}>
                {line.speaker}
              </span>
              <p className="text-sm leading-relaxed flex-1">「{line.text}」</p>
              <span className="text-[9px] shrink-0 px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--sk-text-dim)', border: '1px solid var(--sk-border)' }}>
                {line.text.length}字
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1" style={{ borderTop: '1px dashed var(--sk-border)' }}>
            <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--sk-text-dim)', border: '1px solid var(--sk-border)' }}>
              0:11-0:12
            </span>
            <span className="text-[10px]" style={{ color: 'var(--sk-text-dim)' }}>無音（セリフなし）</span>
          </div>
        </div>
        <div className="px-4 py-2" style={{ borderTop: '1px dashed var(--sk-border)', background: 'rgba(0,0,0,0.02)' }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px]" style={{ color: 'var(--sk-text-dim)' }}>テロップ</span>
            <CopyButton text={result.endText} />
          </div>
          <p className="text-sm font-bold mt-1" style={{ color: 'var(--sk-text)' }}>「{result.endText}」</p>
        </div>
      </div>

      {/* Copy All */}
      <div className="flex justify-center gap-2 py-2">
        <CopyButton
          text={`【タイトル】\n${theme.ytTitle}\n\n【前編プロンプト】\n${result.part1}\n\n【後編プロンプト】\n${result.part2}\n\n【台本】\n${result.script}\n\n【テロップ】\n${result.endText}\n\n【解説】\n${theme.ytDesc}`}
          label="◆ ALL COPY（全部まとめて）"
          size="lg"
        />
      </div>
    </div>
  )
}

function TitleHistory({ history }) {
  if (!history.length) return null
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: '1px solid var(--sk-border)' }}>
        <span className="text-xs font-bold" style={{ color: 'var(--sk-text)' }}>タイトル履歴 ({history.length}/10)</span>
      </div>
      <div>
        {history.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 text-xs"
            style={{ borderBottom: '1px solid var(--sk-border)' }}
          >
            <span className="shrink-0 w-5 text-center" style={{ color: 'var(--sk-text-light)' }}>{i + 1}</span>
            <p className="flex-1 leading-relaxed" style={{ color: 'var(--sk-text)' }}>{item.theme.ytTitle}</p>
            <CopyButton text={item.theme.ytTitle} label="COPY" />
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])

  const handleRandom = useCallback(() => {
    const theme = getRandomTheme()
    const r = generatePrompts(theme)
    setSelectedTheme(theme)
    setResult(r)
    setHistory(prev => [{ theme, result: r }, ...prev].slice(0, 10))
  }, [])

  return (
    <div className="min-h-screen paper-bg">
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ background: 'rgba(250,248,245,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--sk-border)' }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold" style={{ color: 'var(--sk-primary)' }}>スカッと Prompt Generator</h1>
            <p className="text-[10px]" style={{ color: 'var(--sk-text-dim)' }}>ショートドラマ台本＆プロンプト — {themes.length}テーマ</p>
          </div>
          <button
            onClick={handleRandom}
            className="px-5 py-2.5 text-sm font-bold rounded-xl transition hover:shadow-lg active:scale-95"
            style={{ background: 'var(--sk-primary)', color: '#fff' }}
          >
            🎲 生成
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-5 space-y-4">
        {/* First visit message */}
        {!result && !history.length && (
          <div className="card p-8 text-center space-y-3">
            <p className="text-4xl">🎬</p>
            <p className="text-sm font-bold" style={{ color: 'var(--sk-text)' }}>右上の「🎲 生成」ボタンを押してください</p>
            <p className="text-xs" style={{ color: 'var(--sk-text-dim)' }}>ランダムにスカッと系ショートドラマのプロンプト・台本・タイトルが生成されます</p>
          </div>
        )}

        {/* Output */}
        {result && selectedTheme && (
          <PromptOutput result={result} theme={selectedTheme} />
        )}

        {/* Title History */}
        <TitleHistory history={history} />
      </main>

      <footer className="py-4 text-center">
        <p className="text-[10px]" style={{ color: 'var(--sk-text-light)' }}>Sukatto Prompt Generator v1.0</p>
      </footer>
    </div>
  )
}

export default App
