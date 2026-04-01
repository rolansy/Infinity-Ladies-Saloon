import { useEffect, useMemo, useState } from 'react'
import logo from './assets/logo.png'
import inaugurationImage from './assets/Inaugration.png'
import servicesData from './data/servicesData.json'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeGroupName, setActiveGroupName] = useState('')

  const activeGroup = useMemo(
    () => servicesData.find((group) => group.category === activeGroupName) || null,
    [activeGroupName],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      const dot = document.getElementById('cursorDot')
      const ring = document.getElementById('cursorRing')
      if (!dot || !ring) return
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      window.setTimeout(() => {
        ring.style.left = `${e.clientX}px`
        ring.style.top = `${e.clientY}px`
      }, 55)
    }

    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(activeGroup))
    return () => document.body.classList.remove('modal-open')
  }, [activeGroup])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 },
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeGroup])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveGroupName('')
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const titleCase = (value) =>
    value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  const formatRupee = (value) => {
    const num = Number(value || 0)
    if (!num) return ''
    return new Intl.NumberFormat('en-IN').format(num)
  }

  const getPriceText = (service) => {
    if (service.isRange) {
      const from = Number(service.from || 0)
      const to = Number(service.to || 0)
      if (from && to) return `Rs ${formatRupee(from)} - ${formatRupee(to)}`
      if (from) return `From Rs ${formatRupee(from)}`
      return 'On request'
    }

    const fixed = Number(service.price || 0)
    return fixed ? `Rs ${formatRupee(fixed)}` : 'On request'
  }

  const parseServiceName = (raw) => {
    const match = raw.match(/^(.*)\{(.*)\}$/)
    if (!match) return { name: raw, note: '' }
    return { name: match[1].trim(), note: match[2].trim() }
  }

  const getMinPrice = (group) => {
    const prices = group.services
      .flatMap((service) => [Number(service.price || 0), Number(service.from || 0)])
      .filter((n) => n > 0)
    return prices.length ? Math.min(...prices) : 0
  }

  const tickerItems = servicesData.map((group) => titleCase(group.category.trim()))

  return (
    <div className="site-root">
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-mark"></span>
          Infinity Ladies Saloon
        </a>
        <ul className="nav-links">
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#pictures">Pictures</a>
          </li>
          <li>
            <a href="#booking">Booking</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#social">Instagram</a>
          </li>
        </ul>
        <button
          className="nav-cta"
          onClick={() =>
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Book Visit
        </button>
      </nav>

      <section id="hero">
        <div className="reveal">
          <div className="hero-kicker">Infinity Ladies Saloon</div>
          <h1 className="hero-title">
            Grace in every <em>detail</em>
          </h1>
          <p className="hero-desc">
            Infinity Ladies Salon is a ladies salon and beauty parlour in
            Kothamangalam, offering category-wise services for hair, skin,
            makeup, nails, and treatments.
          </p>
          <div className="hero-actions">
            <a href="#categories" className="btn-main">
              View Categories
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#location" className="btn-ghost">
              Find Location
            </a>
          </div>
        </div>

        <div className="hero-logo-wrap reveal delay-1">
          <img src={logo} alt="Infinity Ladies Saloon logo" className="hero-logo" />
        </div>

        <div className="scroll-marker" aria-hidden="true">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {tickerItems.concat(tickerItems).map((item, index) => (
            <span key={`${item}-${index}`} className="ticker-item">
              {item}
              <span className="dot"></span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Grand Opening / Inauguration Section ── */}
      <div className="inauguration-section">
        <div className="inauguration-card reveal">
          <img
            src={inaugurationImage}
            alt="Infinity Ladies Salon Grand Opening"
            className="inauguration-img"
          />
          <div className="inauguration-overlay">
            <span className="inauguration-tag">✦ Grand Opening</span>
            <div className="inauguration-bottom">
              <div className="inauguration-title">
                Now Open in <em>Kothamangalam</em>
              </div>
              <div className="inauguration-meta">
                Infinity Ladies Salon<br />Kothamangalam, Kerala
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="categories" className="section">
        <div className="section-head reveal">
          <div className="section-no">01</div>
          <div>
            <div className="section-tag">Service Categories</div>
            <h2 className="section-title">
              Choose by <em>category</em>
            </h2>
          </div>
        </div>

        <div className="cards-grid">
          {servicesData.map((group) => {
            const minPrice = getMinPrice(group)
            return (
              <div className="cat-card reveal" key={group.category}>
                <div className="cat-name">{titleCase(group.category.trim())}</div>
                <div className="cat-meta">
                  <span>{group.count} services</span>
                  <span>
                    {minPrice ? `From Rs ${formatRupee(minPrice)}` : 'Price on request'}
                  </span>
                </div>
                <div className="cat-foot">
                  <button
                    type="button"
                    className="cat-btn"
                    onClick={() => setActiveGroupName(group.category)}
                  >
                    View Services
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="pictures" className="section">
        <div className="section-head reveal">
          <div className="section-no">02</div>
          <div>
            <div className="section-tag">Pictures</div>
            <h2 className="section-title">
              Studio mood and <em>style gallery</em>
            </h2>
          </div>
        </div>
        <div className="pictures-grid reveal">
          <div className="pic-card large">
            <img src={logo} alt="Infinity Ladies Saloon showcase" />
            <div className="pic-overlay">
              <span className="pic-label">Infinity Ladies Saloon</span>
            </div>
          </div>
          <div className="pic-card pic-fill-1">
            <div className="pic-overlay">
              <span className="pic-label">Hair Styling Zone</span>
            </div>
          </div>
          <div className="pic-card pic-fill-2">
            <div className="pic-overlay">
              <span className="pic-label">Skin Care Corner</span>
            </div>
          </div>
          <div className="pic-card pic-fill-3">
            <div className="pic-overlay">
              <span className="pic-label">Makeup Studio</span>
            </div>
          </div>
          <div className="pic-card pic-fill-4">
            <div className="pic-overlay">
              <span className="pic-label">Nail Art Desk</span>
            </div>
          </div>
        </div>
        <p className="gallery-note reveal">
          Add your own salon photos in these slots anytime. The section is already
          laid out for portrait and landscape images.
        </p>
      </section>

      <section id="booking" className="section">
        <div className="booking-info reveal">
          <div className="section-tag">Booking</div>
          <h2 className="section-title booking-title">
            Ready to book your <em>session</em>?
          </h2>
          <p>
            Pick your category, tap View Services, and review pricing in the popup.
            Then message on Instagram or call directly to reserve a slot.
          </p>
          <a
            className="booking-link"
            href="https://www.instagram.com/infinityladiessalon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on Instagram
          </a>
        </div>
        <div className="booking-card reveal delay-1">
          <h3>Quick Suggestions</h3>
          <ul className="booking-list">
            <li>Use category cards for faster browsing on mobile devices.</li>
            <li>Update offers seasonally by category for better conversions.</li>
            <li>Add before/after images in the Pictures section every week.</li>
            <li>Sync price updates from billing software once finalized.</li>
          </ul>
        </div>
      </section>

      <section id="location" className="section">
        <div className="section-head reveal">
          <div className="section-no">04</div>
          <div>
            <div className="section-tag">Location</div>
            <h2 className="section-title">
              Visit our <em>studio</em>
            </h2>
          </div>
        </div>

        <div className="location-grid">
          <div className="map-card reveal">
            <iframe
              title="Infinity Ladies Salon Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320846.0915713994!2d76.46032066866472!3d10.213397002121745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e7b02cd9d9ab%3A0x15a1329e90c12ad!2sINFINITY%20HAIR%20STUDIO!5e0!3m2!1sen!2sin!4v1774803958623!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="location-card reveal delay-1">
            <div className="loc-row">
              <div className="loc-label">Address</div>
              <div className="loc-value">
                3J58+V9 Kothamangalam, Kerala
                <br />
                Near Vimalagiri School, Kothamangalam Bazar, Ernakulam 686691
              </div>
            </div>
            <div className="loc-row">
              <div className="loc-label">Working Hours</div>
              <div className="loc-value">
                MON to SAT 9:30AM to 07:30PM<br />
                Sunday Closed
              </div>
            </div>
            <div className="loc-row">
              <div className="loc-label">Contact</div>
              <div className="loc-value">
                <a href="tel:+916238424024">+91 62384 24024</a>
              </div>
              <div className="contact-actions">
                {/* Call button */}
                <a className="contact-pill contact-pill--call" href="tel:+916238424024">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call
                </a>
                {/* WhatsApp button */}
                <a
                  className="contact-pill contact-pill--whatsapp"
                  href="https://wa.me/916238424024?text=Hi%20Infinity%20Ladies%20Salon%2C%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="loc-row">
              <div className="loc-label">Email</div>
              <div className="loc-value">
                <a href="mailto:contactus@infinityladiessalon.com">
                  contactus@infinityladiessalon.com
                </a>
              </div>
              {/* Smart Maps link — opens Apple Maps on iOS, Google Maps elsewhere */}
              <a
                className="map-link map-link--branded"
                href="https://maps.apple.com/?q=INFINITY+HAIR+STUDIO&ll=10.0596747,76.61593"
                onClick={(e) => {
                  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
                  if (!isIOS) {
                    e.preventDefault()
                    window.open(
                      'https://www.google.com/maps/place/INFINITY+HAIR+STUDIO/@10.0596747,76.6133551,17z',
                      '_blank'
                    )
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Map pin icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="social" className="section">
        <div className="section-tag">Social</div>
        <h2 className="section-title social-title">Follow Infinity Ladies Saloon</h2>
        <a
          className="ig-button ig-button--branded"
          href="https://www.instagram.com/infinityladiessalon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Official Instagram gradient icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <defs>
              <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#fdf497"/>
                <stop offset="5%" stopColor="#fdf497"/>
                <stop offset="45%" stopColor="#fd5949"/>
                <stop offset="60%" stopColor="#d6249f"/>
                <stop offset="90%" stopColor="#285AEB"/>
              </radialGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGrad)"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.6"/>
            <circle cx="17.5" cy="6.5" r="1" fill="white"/>
          </svg>
          @infinityladiessalon
        </a>
      </section>

      <footer>
        <div>Infinity Ladies Saloon</div>
        <div>infinityladiessalon.com</div>
      </footer>

      <div
        className={`services-modal ${activeGroup ? 'open' : ''}`}
        aria-hidden={activeGroup ? 'false' : 'true'}
        onClick={() => setActiveGroupName('')}
      >
        <div className="modal-panel" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <div className="modal-head">
            <h3 className="modal-title">{activeGroup ? titleCase(activeGroup.category.trim()) : 'Services'}</h3>
            <button type="button" className="modal-close" onClick={() => setActiveGroupName('')}>
              Close
            </button>
          </div>
          <div className="modal-meta">
            {activeGroup ? `${activeGroup.count} services in this category` : ''}
          </div>
          <div className="modal-services">
            {activeGroup?.services.map((service, index) => {
              const split = parseServiceName(service.service)
              return (
                <div className="modal-service-card" key={`${service.service}-${index}`}>
                  <div>
                    <div className="modal-service-name">{split.name}</div>
                    {split.note ? <div className="modal-service-note">{split.note}</div> : null}
                  </div>
                  <div className="modal-service-price">{getPriceText(service)}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
