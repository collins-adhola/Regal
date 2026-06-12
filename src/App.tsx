import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',      href: '#home'      },
  { label: 'Services',  href: '#services'  },
  { label: 'Why Regal', href: '#why-regal' },
  { label: 'Contact',   href: '#contact'   },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="container header-inner">

          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-name">REGAL</span>
            <span className="brand-sub">Facilities Management</span>
          </a>

          <nav
            className={`nav${menuOpen ? ' nav--open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="nav-link" onClick={closeMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="btn btn-primary header-cta" onClick={closeMenu}>
            Get a Quote
          </a>

          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">

            {/* ── Left: text content ── */}
            <div className="hero-content">
              <p className="hero-eyebrow">
                Uganda's Trusted Facilities Management Partner
              </p>

              <h1 className="hero-heading">
                We Manage Your Facilities.<br />
                You Focus on Growth.
              </h1>

              <p className="hero-body">
                Professional cleaning, maintenance, pest control, landscaping and
                property support services delivered to commercial and residential
                clients across Uganda.
              </p>

              <ul className="hero-features">
                <li>Trained Teams</li>
                <li>SLA Reporting</li>
                <li>HSE Compliant</li>
                <li>Rapid Response</li>
              </ul>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
                <a href="#services" className="btn btn-outline">View Services</a>
              </div>

              <p className="hero-trust">
                Trusted by businesses, schools and residential estates across Kampala.
              </p>
            </div>

            {/* ── Right: image card ── */}
            <div className="hero-visual">
              <div className="hero-image-card">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Professional facilities management team at work"
                  className="hero-img"
                />
              </div>
              <div className="hero-badge">
                <span className="hero-badge-num">500+</span>
                <span className="hero-badge-label">Projects Supported</span>
              </div>
            </div>

          </div>
        </section>
        <section id="services">Services placeholder</section>
        <section id="why-regal">Why Regal placeholder</section>
        <section id="contact">Contact placeholder</section>
      </main>

      <footer>Footer placeholder</footer>
    </>
  )
}

export default App
