import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import logo from '../logo.jpg'
import './styles.css'

const contract = '0xdDDF7AB756C35b4d0537825497e6932780710241'
const tradeUrl = 'https://ponsfamily.com/launchpad/0xdDDF7AB756C35b4d0537825497e6932780710241'

function BowlScene() {
  return (
    <div className="bowl-scene" role="img" aria-label="A top-down bowl of soaked garri with sugar, groundnuts and a spoon">
      <svg className="bowl-illustration" viewBox="0 0 640 640" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="sceneLight" cx="43%" cy="34%" r="70%">
            <stop offset="0" stopColor="#fff9e6" stopOpacity=".94" />
            <stop offset="1" stopColor="#d8c29a" stopOpacity=".2" />
          </radialGradient>
          <linearGradient id="waterTone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0dfae" />
            <stop offset=".52" stopColor="#d9bd78" />
            <stop offset="1" stopColor="#c9a863" />
          </linearGradient>
          <linearGradient id="enamelTone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0e1bc" />
            <stop offset=".7" stopColor="#cab187" />
            <stop offset="1" stopColor="#9a7650" />
          </linearGradient>
          <linearGradient id="steelTone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fffced" />
            <stop offset=".35" stopColor="#c7c0ad" />
            <stop offset=".52" stopColor="#f7f0da" />
            <stop offset="1" stopColor="#77746d" />
          </linearGradient>
          <pattern id="grainPattern" width="34" height="27" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="8" r="2.8" fill="#f2d893" />
            <circle cx="14" cy="19" r="2.2" fill="#c39345" />
            <circle cx="25" cy="7" r="2.3" fill="#e8c778" />
            <circle cx="29" cy="21" r="1.8" fill="#b98137" />
            <circle cx="17" cy="3" r="1.4" fill="#fff0b8" />
          </pattern>
          <clipPath id="soakClip"><ellipse cx="314" cy="301" rx="222" ry="174" /></clipPath>
        </defs>
        <rect width="640" height="640" fill="url(#sceneLight)" />
        <path d="M87 449c96-40 379-47 484 7-97 66-369 76-484-7Z" fill="#63432e" opacity=".17" />
        <ellipse cx="315" cy="303" rx="248" ry="205" fill="#754b2f" opacity=".16" transform="rotate(-7 315 303)" />
        <ellipse cx="315" cy="288" rx="244" ry="202" fill="url(#enamelTone)" stroke="#6b452e" strokeWidth="7" transform="rotate(-7 315 288)" />
        <ellipse cx="315" cy="286" rx="228" ry="184" fill="#9f805c" opacity=".56" transform="rotate(-7 315 286)" />
        <ellipse cx="315" cy="285" rx="224" ry="178" fill="url(#waterTone)" stroke="#fff4d3" strokeWidth="5" transform="rotate(-7 315 285)" />
        <g clipPath="url(#soakClip)">
          <rect x="80" y="110" width="480" height="390" fill="url(#grainPattern)" opacity=".78" transform="rotate(-7 315 285)" />
          <ellipse cx="258" cy="224" rx="128" ry="62" fill="#fff4c9" opacity=".23" transform="rotate(-12 258 224)" />
          <path d="M151 277c52-39 114-43 167-8 38 25 72 19 110-9 44-33 80-27 117 8v113H132Z" fill="#c79d50" opacity=".45" />
          <g fill="#f6df9b" stroke="#b27b33" strokeWidth="2">
            <ellipse cx="220" cy="220" rx="37" ry="23" transform="rotate(-18 220 220)" />
            <ellipse cx="319" cy="220" rx="43" ry="23" transform="rotate(13 319 220)" />
            <ellipse cx="399" cy="288" rx="44" ry="25" transform="rotate(-21 399 288)" />
            <ellipse cx="251" cy="354" rx="51" ry="26" transform="rotate(9 251 354)" />
            <ellipse cx="381" cy="384" rx="39" ry="22" transform="rotate(-12 381 384)" />
          </g>
          <g fill="#fff9e7" opacity=".97">
            <rect x="187" y="190" width="16" height="16" transform="rotate(22 187 190)" />
            <rect x="354" y="204" width="17" height="17" transform="rotate(39 354 204)" />
            <rect x="430" y="318" width="15" height="15" transform="rotate(11 430 318)" />
            <rect x="299" y="389" width="18" height="18" transform="rotate(55 299 389)" />
            <rect x="175" y="326" width="13" height="13" transform="rotate(18 175 326)" />
          </g>
          <g fill="#87502a" stroke="#c2803b" strokeWidth="3">
            <path d="M170 286c-7-22 19-36 37-23 22 16 9 37-13 43-12 3-21-5-24-20Z" />
            <path d="M370 260c1-21 27-28 40-12 15 19-5 34-22 34-12 0-18-8-18-22Z" />
            <path d="M326 339c-2-18 20-28 34-17 17 14 4 30-13 34-11 2-20-5-21-17Z" />
          </g>
        </g>
        <ellipse cx="315" cy="285" rx="224" ry="178" fill="none" stroke="#6c472f" strokeOpacity=".4" strokeWidth="4" transform="rotate(-7 315 285)" />
        <path d="M472 147c-25 31-47 75-60 123" fill="none" stroke="#5f432f" strokeOpacity=".24" strokeWidth="10" strokeLinecap="round" />
        <g transform="rotate(27 501 451)">
          <ellipse cx="438" cy="432" rx="37" ry="28" fill="url(#steelTone)" stroke="#6e685e" strokeWidth="4" />
          <rect x="455" y="423" width="171" height="18" rx="9" fill="url(#steelTone)" stroke="#6e685e" strokeWidth="4" />
          <path d="M467 428h145" stroke="#fffced" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
      <div className="scene-note">cold water<br />sugar<br />no ceremony</div>
    </div>
  )
}

function CopyContract({ onCopied }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contract)
      onCopied()
    } catch {
      onCopied('Copy it from the bar')
    }
  }

  return (
    <button className="contract-bar" onClick={copy} type="button" title="Copy contract address">
      <span className="contract-label">Contract</span>
      <span className="contract-value">{contract}</span>
      <span className="copy-action">Copy</span>
    </button>
  )
}

function ConnectButton({ children }) {
  return (
    <button className="connect-button" type="button" disabled aria-disabled="true">
      <span>{children}</span>
      <span className="coming-soon">Coming soon</span>
    </button>
  )
}

function App() {
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(''), 2400)
    return () => window.clearTimeout(timer)
  }, [toast])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="GARRI home">
          <span className="logo-frame"><img src={logo} alt="" /></span>
          <span className="brand-name">GARRI</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#desk">The desk</a>
          <a href="#ritual">Soak it</a>
          <a href="#token">The token</a>
        </nav>
        <a className="header-buy" href={tradeUrl} target="_blank" rel="noreferrer">
          Soak the bag <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow">$GARRI · ROBINHOOD CHAIN · ETH GAS</p>
            <h1 id="hero-title">Garri dey blind person.</h1>
            <p className="hero-subline">Now the cup is onchain.</p>
            <p className="hero-meta">$GARRI · Robinhood Chain · 0% creator · fees to the people</p>
            <div className="hero-actions">
              <a className="button button-primary" href={tradeUrl} target="_blank" rel="noreferrer">Soak the bag <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#desk">See the desk <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay"><BowlScene /></div>
        </section>

        <section className="connect-strip section-shell reveal" aria-label="Connect to rewards desk">
          <div className="connect-intro">
            <span className="connect-dot" aria-hidden="true" />
            <span>Rewards desk opens soon.</span>
          </div>
          <div className="connect-actions">
            <ConnectButton>Connect X</ConnectButton>
            <ConnectButton>Connect wallet</ConnectButton>
          </div>
          <p className="connect-note">Rewards desk. Fees only. He holds 0%.</p>
        </section>

        <section id="desk" className="desk section-shell" aria-labelledby="desk-title">
          <div className="section-heading reveal">
            <p className="eyebrow">For the ones who pour and post</p>
            <h2 id="desk-title">The desk</h2>
            <p>Creators and holders. Structured. Paid from fees. Connect X and wallet when it opens.</p>
          </div>
          <div className="reward-list reveal reveal-delay">
            <div className="reward-row">
              <span className="row-number">01</span>
              <div><h3>Hold even $1.</h3><p>Proof you were here.</p></div>
              <span className="row-mark" aria-hidden="true">+</span>
            </div>
            <div className="reward-row">
              <span className="row-number">02</span>
              <div><h3>Make content.</h3><p>Tag <a href="https://x.com/garrionchain" target="_blank" rel="noreferrer">@garrionchain</a>.</p></div>
              <span className="row-mark" aria-hidden="true">+</span>
            </div>
            <div className="reward-row">
              <span className="row-number">03</span>
              <div><h3>Fees in. Rewards out.</h3><p>No supply for the ambassador.</p></div>
              <span className="row-mark" aria-hidden="true">=</span>
            </div>
          </div>
        </section>

        <section id="ritual" className="ritual section-shell" aria-labelledby="ritual-title">
          <div className="ritual-intro reveal">
            <p className="eyebrow">The reliable method</p>
            <h2 id="ritual-title">How to soak it</h2>
            <p>Nothing complicated. The same way your roommate did it at 1am.</p>
          </div>
          <ol className="ritual-list reveal reveal-delay">
            {['Pour a dry pile', 'Cold or warm water', 'Stir until it swells', 'Sugar until it slaps', 'Eat'].map((step, index) => (
              <li key={step}>
                <span className="step-count">{String(index + 1).padStart(2, '0')}</span>
                <span className="step-text">{step}</span>
                {index < 4 && <span className="step-arrow" aria-hidden="true">↘</span>}
              </li>
            ))}
          </ol>
        </section>

        <section id="token" className="token-section section-shell" aria-labelledby="token-title">
          <div className="token-top reveal">
            <div>
              <p className="eyebrow">No mystery, just ingredients</p>
              <h2 id="token-title">The token</h2>
            </div>
            <p className="token-lede">A small cup, a public contract, and a rewards desk funded by the pour.</p>
          </div>
          <div className="token-grid reveal reveal-delay">
            <div className="token-item"><span>Name</span><strong>GARRI</strong></div>
            <div className="token-item"><span>Ticker</span><strong>$GARRI</strong></div>
            <div className="token-item"><span>Network</span><strong>Robinhood Chain</strong></div>
            <div className="token-item"><span>Gas</span><strong>ETH</strong></div>
            <div className="token-item"><span>Creator holding</span><strong>0%</strong></div>
            <div className="token-item"><span>Fees</span><strong>For rewards, not a treasury flex</strong></div>
          </div>
          <CopyContract onCopied={(message = 'Contract copied') => setToast(message)} />
          <div className="token-action">
            <p>Buy it, hold it, make something with it.</p>
            <a className="button button-primary" href={tradeUrl} target="_blank" rel="noreferrer">Soak the bag <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-brand"><span className="footer-mark">G</span><span>Garri ontop.</span></div>
        <div className="footer-links">
          <a href="https://x.com/garrionchain" target="_blank" rel="noreferrer">@garrionchain ↗</a>
          <span>Built for the people who know.</span>
        </div>
      </footer>

      <div className={`toast ${toast ? 'toast-visible' : ''}`} role="status" aria-live="polite">{toast}</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>,
)
