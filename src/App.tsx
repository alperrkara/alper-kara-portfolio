import { useEffect, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import './App.css'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const navItems = [
  { label: 'Projects', href: '#projects-page', kind: 'page' },
  { label: 'About', href: '#about', kind: 'section' },
  { label: 'Services', href: '#services', kind: 'section' },
  { label: 'Contact', href: '#contact', kind: 'section' },
] as const

const footerMenuItems = [
  { label: 'Home', href: '#top', kind: 'section' },
  { label: 'Projects', href: '#projects-page', kind: 'page' },
  { label: 'About', href: '#about', kind: 'section' },
  { label: 'Services', href: '#services', kind: 'section' },
] as const

const workItems = [
  {
    title: 'Tosla & Tosla Isim',
    client: '// Akode',
    image: asset('assets/work-tosla-home.png'),
    alt: 'Tosla Isim dashboard and mobile app mockup on a dark background',
    size: 'small',
  },
  {
    title: 'Vibro, Ignite, Deploy',
    client: '// Bruel & Kjaer',
    image: asset('assets/work-phone.png'),
    alt: 'BKV Insite app mockup displayed on a mobile phone',
    size: 'medium',
  },
  {
    title: 'Tami',
    client: '// Garanti BBVA',
    image: asset('assets/project-tami.png'),
    alt: 'A hand holding the Tami mobile app interface',
    size: 'large',
  },
] as const

const focusAreas = [
  '//Product Design',
  '//Design Systems',
  '//AI Driven Design',
  '//Vibecoding',
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/alperkra/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuEpOW7%2FDT8iVPBzHLB6HGg%3D%3D',
    label: 'LinkedIn',
    icon: asset('assets/icon-linkedin.svg'),
  },
  {
    href: 'https://dribbble.com/alperkra',
    label: 'Dribbble',
    icon: asset('assets/icon-dribbble.svg'),
  },
  {
    href: 'https://medium.com/@alperkra',
    label: 'Medium',
    icon: asset('assets/icon-medium.svg'),
  },
] as const

const serviceItems = [
  {
    title: 'Product Design',
    description:
      'Creating user centered digital products by combining research, strategy, UX flows, and polished UI design into clear and functional experiences.',
    image: asset('assets/service-mobile.png'),
    alt: 'Two mobile app mockups displayed on a dark background',
    accent: 'purple',
  },
  {
    title: 'Design Systems',
    description:
      'Building scalable and consistent design systems with reusable components, clear guidelines, and visual foundations that support efficient product development.',
    image: asset('assets/service-design-system.png'),
    alt: 'A design system color palette board on a dark background',
    accent: 'light',
  },
  {
    title: 'AI Driven Design',
    description:
      'Designing intelligent and adaptive user experiences by integrating AI-powered features, automation, and emerging technologies into digital products.',
    image: asset('assets/service-web.png'),
    alt: 'A dark themed website mockup displayed on a desktop monitor',
    accent: 'blue',
  },
] as const

const experienceItems = [
  {
    company: 'adesso Turkey',
    role: 'UI Designer',
    period: "'24 - Today",
    summary:
      'At adesso Turkey, he worked as a UI Designer and contributed to digital products for brands such as Akode, Garanti BBVA, GlaxoSmithKline, Clivet, and 5Sarj. His responsibilities included UI design, animation design, prototyping, AI driven design and supporting internal applications through vibecoding practices.',
  },
  {
    company: 'New Mind AI',
    role: 'Product Designer',
    period: "'23 - '24",
    summary:
      'At New Mind AI, he worked on AI powered legal tech products, focusing on UX and UI design. He collaborated closely with AI engineers, developers, product owners, and business analysts to understand complex legal workflows and translate them into intuitive, user centered experiences.',
  },
  {
    company: 'Webbilir',
    role: 'Product Designer',
    period: "'22 - '23",
    summary:
      'At Webbilir, he worked on UX and UI design for web and mobile applications, as well as social media and branding projects. He collaborated with cross functional teams to create user centered design solutions, conducted user research and testing, and worked across Figma and Adobe Creative Suite.',
  },
] as const

const projectItems = [
  {
    title: 'Tami',
    client: '// Garanti BBVA',
    image: asset('assets/project-tami-thumb.png'),
    alt: 'A hand holding the Tami mobile app interface on a dark background',
    variant: 'featured',
    tone: 'dark',
  },
  {
    title: 'Tosla & Tosla Isim',
    client: '// Akode',
    image: asset('assets/project-tosla-thumb.png'),
    alt: 'Tosla Isim dashboard and mobile app mockup on a dark background',
    variant: 'featured',
    tone: 'dark',
  },
  {
    title: 'Mecellem',
    client: '// New Mind AI',
    image: asset('assets/project-mecellem-thumb.png'),
    alt: 'Mecellem product presentation shown across layered laptop screens',
    variant: 'standard',
    tone: 'dark',
  },
  {
    title: 'Vibro, Ignite, Deploy',
    client: '// Bruel & Kjaer',
    image: asset('assets/project-vibro-thumb.png'),
    alt: 'BKV Insite app mockup displayed on a mobile phone',
    variant: 'standard',
    tone: 'dark',
  },
  {
    title: 'SmartLight',
    client: '// Lotec',
    image: asset('assets/project-smartlight-thumb.png'),
    alt: 'SmartLight dashboard mockup displayed on a laptop in a dark scene',
    variant: 'standard',
    tone: 'dark',
  },
  {
    title: 'PedalUp',
    client: '// AI Case',
    image: asset('assets/project-pedalup-thumb.png'),
    alt: 'PedalUp product mockup composed over a laptop in a dark scene',
    variant: 'standard',
    tone: 'dark',
  },
] as const

type ActivePage = 'home' | 'projects'

function App() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [activePage, setActivePage] = useState<ActivePage>(() =>
    window.location.hash === '#projects-page' ? 'projects' : 'home',
  )
  const [pendingHomeTarget, setPendingHomeTarget] = useState<string | null>(null)
  const currentExperience = experienceItems[activeExperience]
  const heroTexture = asset('assets/hero-texture.jpg')
  const heroImageStyle = {
    backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 30%), linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.18)), url(${heroTexture})`,
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => {
      element.classList.remove('is-visible')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [activePage])

  useEffect(() => {
    if (activePage !== 'home' || !pendingHomeTarget) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      smoothScrollToId(pendingHomeTarget)
      setPendingHomeTarget(null)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [activePage, pendingHomeTarget])

  const smoothScrollToId = (targetId: string) => {
    const target = document.querySelector<HTMLElement>(targetId)
    if (!target) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
      return
    }

    const startY = window.scrollY
    const targetY = target.getBoundingClientRect().top + window.scrollY - 20
    const distance = targetY - startY
    const duration = 1200
    const startTime = performance.now()

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo({
        top: startY + distance * easedProgress,
        behavior: 'auto',
      })

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
    window.history.replaceState(null, '', targetId)
  }

  const openProjectsPage = (event?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event?.preventDefault()
    setActivePage('projects')
    setPendingHomeTarget(null)
    window.history.replaceState(null, '', '#projects-page')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const goHomeTo =
    (targetId: string) => (event?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      event?.preventDefault()
      setActivePage('home')
      setPendingHomeTarget(targetId)
      window.history.replaceState(null, '', targetId)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

  const showPrevious = () => {
    setActiveExperience((current) =>
      current === 0 ? experienceItems.length - 1 : current - 1,
    )
  }

  const showNext = () => {
    setActiveExperience((current) =>
      current === experienceItems.length - 1 ? 0 : current + 1,
    )
  }

  const renderHeader = () => (
    <header className="site-header">
      <a className="brand" href="#top" onClick={goHomeTo('#top')}>
        Alper Kara
      </a>
      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) =>
          item.kind === 'page' ? (
            <a
              key={item.label}
              href={item.href}
              onClick={openProjectsPage}
              aria-current={activePage === 'projects' ? 'page' : undefined}
            >
              {item.label}
            </a>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={goHomeTo(item.href)}
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
    </header>
  )

  const renderFooter = (extraClassName?: string) => (
    <footer
      className={`site-footer reveal-up reveal-delay-4${extraClassName ? ` ${extraClassName}` : ''}`}
      data-reveal
    >
      <div className="site-footer__main">
        <div className="site-footer__columns">
          <div className="site-footer__cta">
            <h2>
              <span className="site-footer__cta-muted">Do not hesitate</span>
              <span className="site-footer__cta-accent">Say hi!</span>
            </h2>
            <a className="cta-link site-footer__link" href="mailto:alperkra@icloud.com">
              <span>Get in touch</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="site-footer__menu">
            <span>Menu</span>
            <nav aria-label="Footer">
              {footerMenuItems.map((item) =>
                item.kind === 'page' ? (
                  <a key={item.label} href={item.href} onClick={openProjectsPage}>
                    {item.label}
                  </a>
                ) : (
                  <a key={item.label} href={item.href} onClick={goHomeTo(item.href)}>
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </div>
        </div>

        <div className="social-links site-footer__socials">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
            >
              <img src={item.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )

  const renderHomePage = () => (
    <main className="page-content" id="top">
      <section className="hero-section reveal-up" data-reveal>
        <div className="hero-image" aria-hidden="true" style={heroImageStyle} />
        <div className="hero-copy">
          <div>
            <h1>Hi! I&apos;m Alper</h1>
            <p className="hero-lead">
              I design digital products, visual systems, and AI powered
              experiences that feel clear, human, and a little more joyful to
              use.
            </p>
          </div>
          <a className="cta-link" href="mailto:alperkra@icloud.com">
            <span>Get in touch</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="location-tag">// Istanbul, TR</p>
      </section>

      <section
        className="section-block reveal-up reveal-delay-1"
        id="projects"
        data-reveal
      >
        <div className="section-heading">
          <h2>Some of my works</h2>
          <a className="section-link" href="#projects-page" onClick={openProjectsPage}>
            <span>See all</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="works-grid">
          {workItems.map((item) => (
            <article
              key={item.title}
              className={`work-card work-card--${item.size}`}
              aria-label={item.title}
            >
              <img src={item.image} alt={item.alt} />
              <div className="work-card__meta">
                <h3>{item.title}</h3>
                <p>{item.client}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section-block reveal-up reveal-delay-2"
        id="about"
        data-reveal
      >
        <div className="section-heading">
          <h2>About</h2>
        </div>

        <div className="about-card reveal-up reveal-delay-1" data-reveal>
          <img
            className="profile-image"
            src={asset('assets/profile.png')}
            alt="Portrait of Alper Kara"
          />

          <div className="about-copy">
            <p className="about-intro">
              <strong>Alper Kara</strong> is a digital product designer from
              Istanbul, interested in AI driven design, design systems and
              creating clear digital experiences.
            </p>

            <div className="focus-tags" aria-label="Focus areas">
              {focusAreas.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p className="about-detail">
              Based in Istanbul, Alper has spent the past four years designing
              digital products and helping brands turn complex ideas into clear,
              user friendly experiences.
            </p>
          </div>

          <div className="social-links">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <img src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="experience-card reveal-up reveal-delay-2" data-reveal>
          <div className="experience-top">
            <div className="experience-meta">
              <span>Experience</span>
              <span>{currentExperience.company}</span>
            </div>

            <div className="experience-controls">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous experience"
              >
                <img src={asset('assets/icon-arrow-left.svg')} alt="" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next experience"
              >
                <img src={asset('assets/icon-arrow-right.svg')} alt="" />
              </button>
            </div>
          </div>

          <div className="experience-divider" />

          <div
            key={currentExperience.company}
            className="experience-body experience-body--animated"
          >
            <div className="experience-text">
              <h3>{currentExperience.role}</h3>
              <p>{currentExperience.summary}</p>
              <span className="experience-period">{currentExperience.period}</span>
            </div>

            <div className="experience-dots" aria-label="Experience pages">
              {experienceItems.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  className={index === activeExperience ? 'is-active' : ''}
                  onClick={() => setActiveExperience(index)}
                  aria-label={`Show ${item.company} experience`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="dark-panel reveal-up reveal-delay-3"
        id="services"
        data-reveal
      >
        <div className="services-shell">
          <div className="section-heading section-heading--dark">
            <h2>Services</h2>
          </div>

          <p className="services-intro">
            <span className="services-intro__muted">I work across </span>
            <span className="services-intro__strong">
              AI-driven design, UI/UX, product design, design systems, and
              branding.
            </span>
            <span className="services-intro__muted">
              {' '}
              My focus is on creating clear, scalable, and user-centered digital
              experiences that connect strategy, visual design, and emerging
              technologies.
            </span>
          </p>

          <div className="services-grid">
            {serviceItems.map((item, index) => (
              <article
                key={item.title}
                className={`service-card service-card--${item.accent} reveal-up`}
                data-reveal
                style={
                  {
                    ['--reveal-delay' as string]: `${110 * (index + 1)}ms`,
                  } as CSSProperties
                }
              >
                <div className="service-card__visual">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="service-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="contact-band reveal-up reveal-delay-4"
        id="contact"
        data-reveal
      >
        <div className="contact-band__copy">
          <p>
            If you want to talk about design, photography, science, art or
            travelling.
          </p>
          <p>Let&apos;s meet!</p>
        </div>

        <img className="contact-band__sun" src={asset('assets/sun-footer.png')} alt="" />
      </section>
      {renderFooter()}
    </main>
  )

  const renderProjectsPage = () => (
    <main className="projects-page">
      <section className="projects-hero reveal-up" data-reveal>
        <button className="projects-back" type="button" onClick={goHomeTo('#projects')}>
          <img src={asset('assets/icon-back-projects.svg')} alt="" />
          <span>Go back</span>
        </button>

        <div className="projects-heading">
          <div className="projects-heading__row">
            <h1>PROJECTS</h1>
            <p>(between 2022-2026)</p>
          </div>
          <p className="projects-heading__copy">
            <span>A curated selection of </span>
            <strong>product design, branding, and visual work.</strong>
            <br />
            <span>
              Select any project to explore the process, use case, and final
              outcome.
            </span>
          </p>
        </div>
      </section>

      <section className="projects-grid">
        {projectItems.map((item, index) => (
          <article
            key={item.title}
            className={`project-card project-card--${item.variant} reveal-up`}
            data-reveal
            style={
              {
                ['--reveal-delay' as string]: `${80 * (index + 1)}ms`,
              } as CSSProperties
            }
          >
            <div
              className={`project-card__media project-card__media--${item.variant} project-card__media--${item.tone}`}
            >
              {item.image ? (
                <img src={item.image} alt={item.alt} />
              ) : (
                <div className="project-card__placeholder" aria-hidden="true" />
              )}
            </div>

            <div className="project-card__meta">
              <h3>{item.title}</h3>
              <p>{item.client}</p>
            </div>
          </article>
        ))}
      </section>

      {renderFooter('site-footer--projects')}
    </main>
  )

  return (
    <div className="page-shell">
      {renderHeader()}
      {activePage === 'projects' ? renderProjectsPage() : renderHomePage()}
    </div>
  )
}

export default App
