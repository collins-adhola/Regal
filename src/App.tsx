import { useState, useEffect } from 'react'
import logoImg          from './assets/logo.png'
import kampalaImg       from './assets/services/cleaning2.jpg'
import cleaningImg      from './assets/services/cleaning.jpeg'
import maintenanceImg   from './assets/services/maintenance.jpeg'
import pestControlImg   from './assets/services/pest-control.jpeg'
import propertyCareImg  from './assets/services/property-care.jpeg'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'Services',   href: '#services'   },
  { label: 'Industries', href: '#industries' },
  { label: 'Process',    href: '#process'    },
  { label: 'About Us',   href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
]

const INDUSTRIES = [
  { title: 'Corporate Offices',      desc: 'Commercial workplaces and mixed-use business properties' },
  { title: 'Residential Estates',    desc: 'Condominiums, gated communities and managed developments' },
  { title: 'Hospitals & Clinics',    desc: 'Medical centres, clinics and healthcare facilities' },
  { title: 'Schools & Universities', desc: 'Educational campuses and academic institutions' },
  { title: 'Government Buildings',   desc: 'Public sector facilities and contractor-managed sites' },
  { title: 'Retail & Mixed Use',     desc: 'Malls, industrial parks and commercial precincts' },
] as const

const SERVICES = [
  {
    img:      cleaningImg,
    tab:      'Cleaning & Hygiene',
    title:    'Cleaning & Hygiene',
    desc:     'Professional cleaning programmes for offices, schools, healthcare environments and residential estates — delivered with documented quality controls and HSE-compliant procedures.',
    benefits: [
      'Quality Assurance Protocols',
      'Trained & Vetted Teams',
      'HSE-Compliant Operations',
      'Scheduled Service Reporting',
    ],
  },
  {
    img:      maintenanceImg,
    tab:      'Maintenance',
    title:    'Maintenance & Repairs',
    desc:     'Preventive and reactive maintenance for electrical, plumbing, HVAC and building fabric — keeping your assets operational and lifecycle costs controlled.',
    benefits: [
      'Planned Preventive Maintenance',
      'Rapid Response Callouts',
      'Asset Lifecycle Management',
      'Documented Work Records',
    ],
  },
  {
    img:      pestControlImg,
    tab:      'Pest Control',
    title:    'Pest Control',
    desc:     'Integrated pest management combining scheduled prevention and targeted treatment to protect occupant health and maintain full regulatory compliance.',
    benefits: [
      'Integrated Prevention Plans',
      'Licensed Technicians',
      'Regulatory Compliance',
      'Detailed Treatment Reports',
    ],
  },
  {
    img:      propertyCareImg,
    tab:      'Property Care',
    title:    'Property Care',
    desc:     'Grounds and property upkeep for estates, institutional facilities and commercial sites — with structured condition reporting and planned service delivery.',
    benefits: [
      'Grounds & Landscape Management',
      'Condition Monitoring',
      'Planned Maintenance Schedules',
      'Single Point of Contact',
    ],
  },
]


const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Site Assessment',
    desc: 'Free compliance review and facility audit covering building systems, risks and service requirements.',
  },
  {
    num: '02',
    title: 'Service Planning',
    desc: 'Tailored IFM plan with scheduled maintenance, vendor coordination and clear service deliverables.',
  },
  {
    num: '03',
    title: 'Operational Delivery',
    desc: 'Trained teams deployed with single-point accountability and fully documented service execution.',
  },
  {
    num: '04',
    title: 'Reporting & Review',
    desc: 'Monthly performance data, work order records and structured continuous improvement reviews.',
  },
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)

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
        {/* ── Hero ── */}
        <section id="home" className="hero">

          {/* LEFT — brand + content */}
          <div className="hero-left">

            <div className="hero-brand">
              <span className="hero-brand-name">Regal</span>
              <span className="hero-brand-sub">Facilities Management</span>
            </div>

            <p className="hero-eyebrow">Uganda's Premier Facilities Partner</p>

            <h1 className="hero-heading">
              Your Buildings.<br />
              <span className="hero-heading-accent">Our Responsibility.</span>
            </h1>

            <p className="hero-body">
              Professional facilities management for businesses, schools, healthcare
              and residential estates across Uganda.
            </p>

            <ul className="hero-trust-list">
              <li>Trained &amp; Vetted Teams</li>
              <li>HSE-Compliant Operations</li>
              <li>SLA-Based Reporting</li>
              <li>Rapid Response Support</li>
            </ul>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Request a Site Assessment
              </a>
              <a href="#services" className="btn btn-outline-navy">
                View Services
              </a>
            </div>

            <p className="hero-locale">Serving businesses across Uganda</p>

          </div>

          {/* RIGHT — floating image with service cards */}
          <div className="hero-right">
            <div className="hero-image-wrap">

              <img
                src={kampalaImg}
                alt="Regal facilities professional at work"
                className="hero-image"
              />

              <div className="hfc hfc--tl">
                <span className="hfc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
                <div>
                  <p className="hfc-title">Cleaning &amp; Hygiene</p>
                  <p className="hfc-sub">Offices · Schools · Estates</p>
                </div>
              </div>

              <div className="hfc hfc--tr">
                <span className="hfc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </span>
                <div>
                  <p className="hfc-title">Maintenance</p>
                  <p className="hfc-sub">Planned &amp; Reactive</p>
                </div>
              </div>

              <div className="hfc hfc--bl">
                <span className="hfc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <div>
                  <p className="hfc-title">Pest Control</p>
                  <p className="hfc-sub">Prevention &amp; Treatment</p>
                </div>
              </div>

              <div className="hfc hfc--br">
                <span className="hfc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </span>
                <div>
                  <p className="hfc-title">Property Care</p>
                  <p className="hfc-sub">Grounds &amp; Upkeep</p>
                </div>
              </div>

            </div>
          </div>

        </section>
        <section id="services" className="services">
          <div className="container">

            <header className="section-header">
              <p className="section-eyebrow">What We Deliver</p>
              <h2 className="section-heading">Our Services</h2>
            </header>

            {/* Tab navigation */}
            <div className="svc-tabs" role="tablist">
              {SERVICES.map((svc, i) => (
                <button
                  key={svc.tab}
                  role="tab"
                  aria-selected={activeService === i}
                  className={`svc-tab${activeService === i ? ' svc-tab--active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  {svc.tab}
                </button>
              ))}
            </div>

            {/* Active service showcase */}
            <div className="svc-showcase" key={activeService}>
              <div className="svc-showcase-text">
                <h3 className="svc-showcase-title">{SERVICES[activeService].title}</h3>
                <p className="svc-showcase-desc">{SERVICES[activeService].desc}</p>
                <ul className="svc-showcase-benefits">
                  {SERVICES[activeService].benefits.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary">
                  Request a Quote
                </a>
              </div>
              <div className="svc-showcase-visual">
                <img
                  src={SERVICES[activeService].img}
                  alt={SERVICES[activeService].title}
                  className="svc-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </section>
        {/* ── Industries ── */}
        <section id="industries" className="industries">
          <div className="container">

            <header className="section-header">
              <p className="section-eyebrow">Who We Serve</p>
              <h2 className="section-heading">Industries We Support</h2>
              <p className="section-lead">
                Regal provides structured facility management for organisations
                that require reliable, compliant and professionally delivered
                building services across Uganda.
              </p>
            </header>

            <div className="ind-grid">
              {INDUSTRIES.map(({ title, desc }) => (
                <div key={title} className="ind-card">
                  <p className="ind-card-title">{title}</p>
                  <p className="ind-card-desc">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── How We Engage ── */}
        <section id="process" className="process">
          <div className="container">
            <header className="section-header">
              <p className="section-eyebrow">Our Approach</p>
              <h2 className="section-heading">How We Engage</h2>
              <p className="section-lead">
                A structured four-stage process — from initial site review to
                ongoing performance reporting and continuous improvement.
              </p>
            </header>
            <div className="process-steps">
              {PROCESS_STEPS.map(({ num, title, desc }) => (
                <div key={num} className="process-step">
                  <div className="process-num">{num}</div>
                  <h3 className="process-title">{title}</h3>
                  <p className="process-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">

            {/* ── Left: info ── */}
            <div className="ct-info">
              <p className="section-eyebrow">Contact</p>
              <h2 className="ct-heading">Start Your Facilities Partnership</h2>
              <p className="ct-lead">
                Reach out to discuss your facility management requirements.
                We provide fast, professional proposals for corporate,
                institutional and residential clients across Uganda.
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
                <h3 className="ct-form-title">Request a Proposal</h3>
                <p className="ct-form-subtitle">Fast, professional proposals for corporate and institutional clients.</p>
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
                  Request a Proposal
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
                <li><a href="#industries">Industries</a></li>
                <li><a href="#process">Process</a></li>
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
