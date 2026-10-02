import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import logo from '../logo.jpg'
import './styles.css'

const contract = '0xdDDF7AB756C35b4d0537825497e6932780710241'
const tradeUrl = 'https://ponsfamily.com/launchpad/0xdDDF7AB756C35b4d0537825497e6932780710241'

function BowlScene() {
  return (
    <div className="bowl-scene" aria-label="A top-down bowl of soaked garri with sugar, groundnuts and a spoon" role="img">
      <div className="light-pool" />
      <div className="bowl-shadow" />
      <div className="bowl">
        <div className="soak-water">
          <div className="garri-grain grain-a" />
          <div className="garri-grain grain-b" />
          <div className="garri-grain grain-c" />
          <div className="sugar sugar-a" />
          <div className="sugar sugar-b" />
          <div className="sugar sugar-c" />
          <div className="groundnut nut-a" />
          <div className="groundnut nut-b" />
          <div className="groundnut nut-c" />
        </div>
      </div>
      <div className="spoon" aria-hidden="true">
        <span className="spoon-bowl" />
        <span className="spoon-handle" />
      </div>
      <div className="scene-note">cold water / sugar / no ceremony</div>
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
