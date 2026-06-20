import { useState, useEffect, useRef } from 'react'
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
  { label: 'About Us',   href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
]

const INDUSTRY_NODES = [
  {
    title: 'Hospitals & Clinics',
    sub:   'Healthcare Facilities',
    bg:    '#6B2D90',
    dark:  true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Schools & Universities',
    sub:   'Education Campuses',
    bg:    '#D97706',
    dark:  true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M22 9L12 4 2 9l10 5 10-5z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Retail & Mixed Use',
    sub:   'Shopping & Business Parks',
    bg:    '#134E4A',
    dark:  true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Government Buildings',
    sub:   'Public Sector Sites',
    bg:    '#C8950E',
    dark:  false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M3 21h18M12 3L2 9h20L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="5"    y1="9" x2="5"    y2="21" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="9.5"  y1="9" x2="9.5"  y2="21" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="14.5" y1="9" x2="14.5" y2="21" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="19"   y1="9" x2="19"   y2="21" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: 'Corporate Offices',
    sub:   'Commercial Buildings',
    bg:    '#0F2B46',
    dark:  true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 6h2m4 0h2M7 10h2m4 0h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M9 22v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Residential Estates',
    sub:   'Managed Communities',
    bg:    '#E8DFC9',
    dark:  false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const WHY_REGAL = [
  {
    title: 'HSE-Compliant Operations',
    desc:  'Operate safely and in line with regulatory requirements across all service lines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
        <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4z" stroke="#D4A62A" strokeWidth="1.5" fill="#D4A62A" fillOpacity="0.12" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#D4A62A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Rapid Response Teams',
    desc:  'Fast mobilisation and reactive support when your building operations need it most.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#D4A62A" strokeWidth="1.5" strokeLinejoin="round" fill="#D4A62A" fillOpacity="0.12"/>
      </svg>
    ),
  },
  {
    title: 'SLA-Based Reporting',
    desc:  'Transparent, measurable performance reporting against agreed service level agreements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
        <path d="M3 3v18h18" stroke="#D4A62A" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="7"  y="10" width="3" height="8" rx="1" fill="#D4A62A"/>
        <rect x="12" y="6"  width="3" height="12" rx="1" fill="#D4A62A" fillOpacity="0.7"/>
        <rect x="17" y="8"  width="3" height="10" rx="1" fill="#D4A62A" fillOpacity="0.85"/>
      </svg>
    ),
  },
  {
    title: 'Trained & Vetted Teams',
    desc:  'Qualified, background-checked personnel with structured on-site supervision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="7" r="4" stroke="#D4A62A" strokeWidth="1.5"/>
        <path d="M5 21v-1a7 7 0 0114 0v1" stroke="#D4A62A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9.5 12l1 1 3-3" stroke="#D4A62A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Single Facilities Partner',
    desc:  'One accountable point of contact managing all your facility services and vendors.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="#D4A62A" strokeWidth="1.5" fill="#D4A62A" fillOpacity="0.2"/>
        <circle cx="4"  cy="5"  r="2" stroke="#D4A62A" strokeWidth="1.3"/>
        <circle cx="20" cy="5"  r="2" stroke="#D4A62A" strokeWidth="1.3"/>
        <circle cx="4"  cy="19" r="2" stroke="#D4A62A" strokeWidth="1.3"/>
        <circle cx="20" cy="19" r="2" stroke="#D4A62A" strokeWidth="1.3"/>
        <path d="M6 6l5 5M18 6l-5 5M6 18l5-5M18 18l-5-5" stroke="#D4A62A" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Nationwide Coverage',
    desc:  'Operational capability supporting organisations across Uganda\'s key urban and regional centres.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#D4A62A" strokeWidth="1.5" fill="#D4A62A" fillOpacity="0.12"/>
        <circle cx="12" cy="9" r="2.5" stroke="#D4A62A" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const SERVICES = [
  {
    img:      cleaningImg,
    tab:      'Cleaning & Hygiene',
    title:    'Cleaning & Hygiene',
    theme:    'purple',
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
    theme:    'navy',
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
    theme:    'teal',
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
    theme:    'sandstone',
    desc:     'Grounds and property upkeep for estates, institutional facilities and commercial sites — with structured condition reporting and planned service delivery.',
    benefits: [
      'Grounds & Landscape Management',
      'Condition Monitoring',
      'Planned Maintenance Schedules',
      'Single Point of Contact',
    ],
  },
]



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(1)
  const [activeSection, setActiveSection] = useState('home')
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    const formData = new FormData(e.currentTarget)
    const body = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][]
    ).toString()
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (res.ok) {
        setFormStatus('success')
        formRef.current?.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'services', 'industries', 'contact']
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-35% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
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
                  <a
                    href={href}
                    className={`nav-link${activeSection === href.slice(1) ? ' nav-link--active' : ''}`}
                    onClick={closeMenu}
                  >
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
              <li>SLA-Based Reporting</li>
            </ul>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Request a Site Assessment
              </a>
              <a href="#services" className="btn btn-outline-navy">
                View Services
              </a>
            </div>

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
              <p className="section-lead">Select a service to explore</p>
            </header>

            {/* Tab navigation */}
            <div className="svc-tabs" role="tablist">
              {SERVICES.map((svc, i) => (
                <button
                  key={svc.tab}
                  role="tab"
                  aria-selected={activeService === i}
                  className={`svc-tab${activeService === i ? ' svc-tab--active' : ''}`}
                  data-tab-theme={svc.theme}
                  onClick={() => setActiveService(i)}
                >
                  {svc.tab}
                </button>
              ))}
            </div>

            {/* Active service showcase — outer holds theme/bg, inner remounts for fade */}
            <div className="svc-showcase" data-theme={SERVICES[activeService].theme}>
              <div className="svc-showcase-inner" key={activeService}>
                <div className="svc-showcase-text">
                  <h3 className="svc-showcase-title">{SERVICES[activeService].title}</h3>
                  <p className="svc-showcase-desc">{SERVICES[activeService].desc}</p>
                  <ul className="svc-showcase-benefits">
                    {SERVICES[activeService].benefits.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-primary svc-cta">
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

          </div>
        </section>
        {/* ── Industries ── */}
        <section id="industries" className="industries">
          <div className="container">

            <header className="section-header">
              <p className="section-eyebrow">Who We Serve</p>
              <h2 className="section-heading">Industries & Expertise</h2>
              <p className="section-lead">
                Supporting organisations across Uganda with integrated facilities management services.
              </p>
            </header>

            {/* Desktop: radial network diagram */}
            <div className="ind-network" role="img" aria-label="Network diagram: six industry sectors connected to Regal at the centre">

              {/* Connector lines + decorative orbit ring */}
              <svg className="ind-connectors" viewBox="0 0 720 560" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker id="ind-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0.5 L0,6.5 L6,3.5 Z" fill="#D4A62A" fillOpacity="0.7"/>
                  </marker>
                </defs>
                {/* Subtle orbit ring */}
                <circle cx="360" cy="280" r="200" stroke="#D4A62A" strokeWidth="1" strokeOpacity="0.10" fill="none" strokeDasharray="3 6"/>
                {/* Lines: outer node edge → REGAL edge, clockwise from 12 o'clock */}
                <line x1="360" y1="145" x2="360" y2="200" stroke="#D4A62A" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="5 3" markerEnd="url(#ind-arrow)"/>
                <line x1="477" y1="213" x2="429" y2="240" stroke="#D4A62A" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="5 3" markerEnd="url(#ind-arrow)"/>
                <line x1="477" y1="348" x2="429" y2="320" stroke="#D4A62A" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="5 3" markerEnd="url(#ind-arrow)"/>
                <line x1="360" y1="415" x2="360" y2="360" stroke="#D4A62A" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="5 3" markerEnd="url(#ind-arrow)"/>
                <line x1="243" y1="348" x2="291" y2="320" stroke="#D4A62A" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="5 3" markerEnd="url(#ind-arrow)"/>
                <line x1="243" y1="213" x2="291" y2="240" stroke="#D4A62A" strokeWidth="2" strokeOpacity="0.55" strokeDasharray="5 3" markerEnd="url(#ind-arrow)"/>
              </svg>

              {/* Centre REGAL hub */}
              <div className="ind-hub">
                <span className="ind-hub-name">REGAL</span>
                <span className="ind-hub-sub">Facilities<br/>Management</span>
              </div>

              {/* Six industry nodes — clockwise from 12 o'clock */}
              {INDUSTRY_NODES.map((node, i) => (
                <div
                  key={node.title}
                  className={`ind-node ind-node--${i + 1}${node.dark ? ' ind-node--dark' : ' ind-node--light'}`}
                  style={{ background: node.bg }}
                >
                  <span className="ind-node-icon">{node.icon}</span>
                  <span className="ind-node-name">{node.title}</span>
                  <span className="ind-node-sub">{node.sub}</span>
                </div>
              ))}
            </div>

            {/* Mobile: stacked hub + 2-col grid */}
            <div className="ind-mobile">
              <div className="ind-hub-mobile">
                <span className="ind-hub-mobile-name">REGAL</span>
                <span className="ind-hub-mobile-sub">Facilities Management</span>
              </div>
              <div className="ind-mobile-grid">
                {INDUSTRY_NODES.map((node) => (
                  <div
                    key={node.title}
                    className={`ind-mobile-item${node.dark ? ' ind-mobile--dark' : ' ind-mobile--light'}`}
                    style={{ background: node.bg }}
                  >
                    <span className="ind-mobile-icon">{node.icon}</span>
                    <span className="ind-mobile-label">{node.title}</span>
                    <span className="ind-mobile-sub-label">{node.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Expertise strip ── */}
            <div className="expertise-strip">
              <p className="expertise-strip-label">Why Organisations Choose Regal</p>
              <div className="expertise-items">
                {WHY_REGAL.map(({ title }) => (
                  <div key={title} className="expertise-item">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="#D4A62A" strokeWidth="1.25"/>
                      <path d="M5 8l2 2 4-4" stroke="#D4A62A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {title}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Section CTA ── */}
            <div className="industries-cta">
              <p className="industries-cta-text">Ready to discuss your facilities requirements?</p>
              <div className="industries-cta-actions">
                <a href="#contact" className="btn btn-primary">Request a Site Assessment</a>
                <a href="#contact" className="btn btn-outline-navy">Get a Quote</a>
              </div>
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
                    <a href="tel:+25677222120" className="ct-card-value">+256 77 222 120</a>
                    <a
                      href="https://wa.me/25677222120"
                      className="ct-whatsapp-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
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

              {formStatus === 'success' ? (
                <div className="ct-success">
                  <svg viewBox="0 0 24 24" width="44" height="44" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" stroke="#25D366" strokeWidth="1.5"/>
                    <path d="M7 12l3.5 3.5L17 9" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4 className="ct-success-title">Request Received</h4>
                  <p className="ct-success-msg">Thank you. Your request has been received and Regal will contact you shortly.</p>
                  <button type="button" className="btn btn-outline-navy" onClick={() => setFormStatus('idle')}>
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  className="ct-form"
                  name="regal-contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="regal-contact" />
                  <input type="text" name="bot-field" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} />

                  <div className="ct-row ct-row--2">
                    <div className="ct-field">
                      <label htmlFor="ct-name">Full Name</label>
                      <input
                        type="text" id="ct-name" name="fullName"
                        placeholder="John Smith" autoComplete="name" required
                      />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="ct-company">Company Name</label>
                      <input
                        type="text" id="ct-company" name="companyName"
                        placeholder="Acme Ltd." autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className="ct-row ct-row--2">
                    <div className="ct-field">
                      <label htmlFor="ct-email">Email Address</label>
                      <input
                        type="email" id="ct-email" name="email"
                        placeholder="you@company.com" autoComplete="email" required
                      />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="ct-tel">Telephone</label>
                      <input
                        type="tel" id="ct-tel" name="telephone"
                        placeholder="+256 77 000 0000" autoComplete="tel" required
                      />
                    </div>
                  </div>

                  <div className="ct-row">
                    <div className="ct-field">
                      <label htmlFor="ct-service">Service Required</label>
                      <div className="ct-select-wrap">
                        <select id="ct-service" name="serviceRequired" defaultValue="" required>
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
                        required
                      />
                    </div>
                  </div>

                  {formStatus === 'error' && (
                    <p className="ct-form-error">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary ct-submit"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending…' : (
                      <>Request a Proposal <span className="ct-submit-arrow" aria-hidden="true">→</span></>
                    )}
                  </button>

                </form>
              )}
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
                  <a href="tel:+25677222120" className="ft-contact-value">+256 77 222 120</a>
                  <a
                    href="https://wa.me/25677222120"
                    className="ft-whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
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
