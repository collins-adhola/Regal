import { useState, useEffect } from 'react'
import logoImg          from './assets/logo.png'
import heroImg          from './assets/services/hero1.jpeg'
import cleaningImg      from './assets/services/cleaning.jpeg'
import maintenanceImg   from './assets/services/maintenance.jpeg'
import pestControlImg   from './assets/services/pest-control.jpeg'
import propertyCareImg  from './assets/services/property-care.jpeg'

const NAV_LINKS = [
  { label: 'Home',      href: '#home'      },
  { label: 'Services',  href: '#services'  },
  { label: 'Why Regal', href: '#why-regal' },
  { label: 'Contact',   href: '#contact'   },
]

const WHY_ITEMS = [
  { icon: '✦', title: 'Trained Teams' },
  { icon: '✦', title: 'Rapid Response' },
  { icon: '✦', title: 'HSE Compliant' },
  { icon: '✦', title: 'Performance Reporting' },
] as const

const SERVICES = [
  {
    img:  cleaningImg,
    icon: '🧹',
    title: 'Cleaning & Hygiene',
    desc: 'Structured cleaning programmes for offices, schools and commercial properties, delivered to consistent hygiene and quality standards.',
  },
  {
    img:  maintenanceImg,
    icon: '⚙️',
    title: 'Maintenance & Repairs',
    desc: 'Planned preventive and reactive maintenance covering plumbing, electrical and general building infrastructure across all property types.',
  },
  {
    img:  pestControlImg,
    icon: '🛡️',
    title: 'Pest Control',
    desc: 'Integrated pest management combining targeted treatment and scheduled prevention to protect occupant health and property integrity.',
  },
  {
    img:  propertyCareImg,
    icon: '🏢',
    title: 'Property Care',
    desc: 'End-to-end upkeep for residential estates, institutional facilities and commercial rentals with documented service delivery.',
  },
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
            <img src={logoImg} alt="Regal Facilities Management" className="nav-logo" />
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
              <div className="hero-brand">
                <span className="hero-brand-name">REGAL</span>
                <span className="hero-brand-sub">Facilities Management</span>
              </div>

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
                  src={heroImg}
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
        <section id="services" className="services">
          <div className="container">

            <header className="section-header">
              <p className="section-eyebrow">What We Offer</p>
              <h2 className="section-heading">Core Facilities Services</h2>
              <p className="section-lead">
                Essential property support delivered with professional standards
                and clear reporting.
              </p>
            </header>

            <div className="svc-grid">
              {SERVICES.map(({ img, icon, title, desc }) => (
                <article key={title} className="svc-card">
                  <div className="svc-thumb">
                    <img
                      src={img}
                      alt={title}
                      className="svc-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="svc-body">
                    <div className="svc-icon-badge" aria-hidden="true">{icon}</div>
                    <h3 className="svc-title">{title}</h3>
                    <p className="svc-desc">{desc}</p>
                    <a href="#contact" className="svc-link">
                    Learn more
                    <span className="svc-link-arrow" aria-hidden="true">→</span>
                  </a>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
        <section id="why-regal" className="why-regal">
          <div className="container why-regal-inner">

            {/* ── Left: text + trust items ── */}
            <div className="wr-content">
              <p className="section-eyebrow">Why Regal</p>
              <h2 className="wr-heading">Operational Standards Businesses Can Rely On</h2>
              <p className="wr-lead">
                Structured facilities management delivered with trained personnel,
                responsive coordination and measurable service standards.
              </p>

              <div className="wr-trust-grid">
                {WHY_ITEMS.map(({ icon, title }) => (
                  <div key={title} className="wr-trust-item">
                    <span className="wr-trust-icon" aria-hidden="true">{icon}</span>
                    <span className="wr-trust-title">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: image with floating badges ── */}
            <div className="wr-visual">
              <div className="wr-image-card">
                <img
                  src={maintenanceImg}
                  alt="Regal facilities management team on site"
                  className="wr-img"
                  loading="lazy"
                />
              </div>
              <div className="wr-badge wr-badge--bottom">
                <span className="wr-badge-num">500+</span>
                <span className="wr-badge-label">Projects Supported</span>
              </div>
            </div>

          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container contact-inner">

            {/* ── Left: info ── */}
            <div className="ct-info">
              <p className="section-eyebrow">Contact</p>
              <h2 className="ct-heading">Let's Discuss Your Facilities Requirements</h2>
              <p className="ct-lead">
                Whether you need routine facilities support, emergency response
                services or property maintenance coordination, Regal is ready
                to assist.
              </p>

              <div className="ct-cards">

                <div className="ct-card">
                  <div className="ct-card-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.75"
                      strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="ct-card-label">Email</p>
                    <a href="mailto:elvis@regalfacilities.com" className="ct-card-value">
                      elvis@regalfacilities.com
                    </a>
                  </div>
                </div>

                <div className="ct-card">
                  <div className="ct-card-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.75"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.93 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="ct-card-label">Telephone</p>
                    <a href="tel:077222120" className="ct-card-value">077 222 120</a>
                  </div>
                </div>

                <div className="ct-card">
                  <div className="ct-card-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.75"
                      strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="ct-card-label">Availability</p>
                    <p className="ct-card-value">Mon – Sat &nbsp;·&nbsp; 7:00 AM – 7:00 PM</p>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="ct-form-wrap">
              <div className="ct-form-header">
                <h3 className="ct-form-title">Request a Quote</h3>
                <p className="ct-form-subtitle">We respond within one business day.</p>
              </div>

              <form className="ct-form" noValidate>

                <div className="ct-row ct-row--2">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Full Name</label>
                    <input
                      type="text" id="ct-name" name="name"
                      placeholder="John Smith" autoComplete="name"
                    />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-company">Company Name</label>
                    <input
                      type="text" id="ct-company" name="company"
                      placeholder="Acme Ltd." autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="ct-row ct-row--2">
                  <div className="ct-field">
                    <label htmlFor="ct-email">Email Address</label>
                    <input
                      type="email" id="ct-email" name="email"
                      placeholder="you@company.com" autoComplete="email"
                    />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-tel">Telephone</label>
                    <input
                      type="tel" id="ct-tel" name="tel"
                      placeholder="+256 77 000 0000" autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-service">Service Required</label>
                    <div className="ct-select-wrap">
                      <select id="ct-service" name="service" defaultValue="">
                        <option value="" disabled>Select a service…</option>
                        <option value="cleaning">Cleaning &amp; Hygiene</option>
                        <option value="maintenance">Maintenance &amp; Repairs</option>
                        <option value="pest-control">Pest Control</option>
                        <option value="property-care">Property Care</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-message">Message</label>
                    <textarea
                      id="ct-message" name="message" rows={4}
                      placeholder="Briefly describe your requirements…"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary ct-submit">
                  Request a Quote
                  <span className="ct-submit-arrow" aria-hidden="true">→</span>
                </button>

              </form>
            </div>

          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">

          <div className="footer-top">

            {/* ── Brand column ── */}
            <div className="ft-brand">
              <div className="ft-brand-lockup">
                <span className="ft-brand-name">REGAL</span>
                <span className="ft-brand-sub">Facilities Management</span>
              </div>
              <p className="ft-brand-desc">
                Professional facilities management services delivering
                operational reliability, responsive support and measurable
                service standards across Uganda.
              </p>
            </div>

            {/* ── Quick Links ── */}
            <div className="ft-col">
              <h4 className="ft-col-heading">Quick Links</h4>
              <ul className="ft-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#why-regal">Why Regal</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* ── Core Services ── */}
            <div className="ft-col">
              <h4 className="ft-col-heading">Core Services</h4>
              <ul className="ft-links">
                <li><a href="#services">Cleaning &amp; Hygiene</a></li>
                <li><a href="#services">Maintenance &amp; Repairs</a></li>
                <li><a href="#services">Pest Control</a></li>
                <li><a href="#services">Property Care</a></li>
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="ft-col">
              <h4 className="ft-col-heading">Contact</h4>
              <div className="ft-contact-items">
                <div className="ft-contact-item">
                  <span className="ft-contact-label">Email</span>
                  <a href="mailto:elvis@regalfacilities.com" className="ft-contact-value">
                    elvis@regalfacilities.com
                  </a>
                </div>
                <div className="ft-contact-item">
                  <span className="ft-contact-label">Telephone</span>
                  <a href="tel:077222120" className="ft-contact-value">077 222 120</a>
                </div>
                <div className="ft-contact-item">
                  <span className="ft-contact-label">Availability</span>
                  <span className="ft-contact-value">
                    Mon – Sat &nbsp;·&nbsp; 7:00 AM – 7:00 PM
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p className="ft-copyright">
              &copy; 2026 Regal Facilities Management. All rights reserved.
            </p>
            <p className="ft-tagline">
              Operational Excellence &nbsp;·&nbsp; Professional Standards &nbsp;·&nbsp; Responsive Support
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default App
