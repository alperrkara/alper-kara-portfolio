import { useEffect, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import './App.css'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

type ProjectSlug =
  | 'tami'
  | 'tosla'
  | 'mecellem'
  | 'vibro'
  | 'smartlight'
  | 'pedalup'

type Route =
  | { page: 'home' }
  | { page: 'projects' }
  | { page: 'project'; slug: ProjectSlug }

type ProjectDetail = {
  slug: ProjectSlug
  cardTitle: string
  heroTitle: string
  clientLabel: string
  image: string
  heroImage: string
  alt: string
  heroAlt: string
  variant: 'featured' | 'standard'
  tone: 'dark'
  meta: {
    client: string
    role: string
    timeline: string
    date: string
  }
  detailImages?: {
    header?: string
    problemLeft?: string
    problemRight?: string
    solution?: string
  }
  heroMediaFit?: 'contain' | 'cover'
  heroMediaStyle?: 'card' | 'bare'
  heroMediaRadius?: 'none' | 'md'
  problemMediaStyle?: 'card' | 'bare'
  problemMediaRadius?: 'none' | 'md'
  solutionMediaStyle?: 'card' | 'bare'
  solutionMediaRadius?: 'none' | 'md'
  about: string
  problem: string
  solution: string
}

const projectDetails: Record<ProjectSlug, ProjectDetail> = {
  tami: {
    slug: 'tami',
    cardTitle: 'Tami',
    heroTitle: 'TAMI',
    clientLabel: '// Garanti BBVA',
    image: asset('assets/project-tami-thumb.png'),
    heroImage: asset('assets/project-tami.png'),
    alt: 'A hand holding the Tami mobile app interface on a dark background',
    heroAlt: 'Tami product visual',
    variant: 'featured',
    tone: 'dark',
    meta: {
      client: 'Garanti BBVA',
      role: 'UI Designer',
      timeline: '6 months',
      date: '01/08/2025',
    },
    detailImages: {
      header: asset('assets/tami-detail-header.png'),
      problemLeft: asset('assets/tami-detail-image-1.png'),
      problemRight: asset('assets/tami-detail-image-2.png'),
      solution: asset('assets/tami-detail-image-3.png'),
    },
    heroMediaStyle: 'bare',
    heroMediaRadius: 'md',
    problemMediaStyle: 'bare',
    problemMediaRadius: 'md',
    solutionMediaStyle: 'bare',
    solutionMediaRadius: 'md',
    about:
      'Tami is a digital financial product within the Garanti BBVA ecosystem. I worked on its web and mobile interfaces as a UI Designer, focusing on improving product flows, visual hierarchy, navigation, UI consistency, and overall usability across the experience.',
    problem:
      'Tami is a digital financial product within the Garanti BBVA ecosystem, designed across web and mobile experiences. One of the main goals was to bring the product experience closer to the parent brand, Garanti BBVA’s design system, while still preserving Tami’s own product identity. The challenge was to improve visual consistency, hierarchy, navigation, and component usage across platforms without making the product feel disconnected from its existing brand language.',
    solution:
      'As a UI Designer, I worked on improving product flows, navigation structures, visual hierarchy, component consistency, and overall usability across web and mobile interfaces. My focus was to align the experience more closely with Garanti BBVA’s design system principles while adapting them to Tami’s own needs, creating a clearer, more scalable, and more consistent product experience.',
  },
  tosla: {
    slug: 'tosla',
    cardTitle: 'Tosla & Tosla Isim',
    heroTitle: 'TOSLA & TOSLA ISIM',
    clientLabel: '// AKÖde',
    image: asset('assets/project-tosla-thumb.png'),
    heroImage: asset('assets/project-tosla.png'),
    alt: 'Tosla Isim dashboard and mobile app mockup on a dark background',
    heroAlt: 'Tosla and Tosla Isim product visual',
    variant: 'featured',
    tone: 'dark',
    meta: {
      client: 'AKÖde',
      role: 'Product Designer',
      timeline: '1 year',
      date: '01/08/2024',
    },
    detailImages: {
      header: asset('assets/tosla-detail-header.png'),
      problemLeft: asset('assets/tosla-detail-image-1.png'),
      problemRight: asset('assets/tosla-detail-image-2.png'),
      solution: asset('assets/tosla-detail-image-3.png'),
    },
    heroMediaFit: 'cover',
    about:
      'Tosla and Tosla İşim are fintech products designed for both B2C and B2B users. Tosla focuses on individual users through digital wallet, money transfer, payment, onboarding, and everyday financial management flows, while Tosla İşim supports business users with merchant oriented payment solutions and operational processes. I was involved in UX/UI design, mobile interface design, product flows, design system consistency, and social media visuals, contributing to both the product experience and the brand’s digital communication.',
    problem:
      'One of the main challenges was designing for two different user groups within the same product ecosystem while maintaining a consistent and scalable experience. Since the product included many financial flows, there were also gaps in the design system, missing component states, and undefined edge cases. This created a need for more consistent UI patterns, clearer interaction rules, and better coverage for different user scenarios such as empty states, error states, loading states, validation messages, and alternative flow outcomes.',
    solution:
      'As a UI Designer, I was involved in the full design process, including UX/UI design, mobile interface design, product flows, design system consistency, and social media visuals. I worked on creating clearer and more scalable user flows for both B2C and B2B experiences, while improving consistency across screens and touchpoints. I contributed to defining reusable UI patterns, improving component usage, and designing missing states and edge cases to make the experience more complete and reliable. My focus was to create a product experience that felt consistent, user friendly, and adaptable across different financial scenarios, while also supporting the brand’s digital communication through social media and visual design assets.',
  },
  mecellem: {
    slug: 'mecellem',
    cardTitle: 'Mecellem',
    heroTitle: 'MECELLEM',
    clientLabel: '// New Mind AI',
    image: asset('assets/project-mecellem-thumb.png'),
    heroImage: asset('assets/project-mecellem-thumb.png'),
    alt: 'Mecellem product presentation shown across layered laptop screens',
    heroAlt: 'Mecellem product visual',
    variant: 'standard',
    tone: 'dark',
    meta: {
      client: 'New Mind AI',
      role: 'Product Designer',
      timeline: '1.5 year',
      date: '01/06/2023',
    },
    detailImages: {
      header: asset('assets/mecellem-detail-header.png'),
      problemLeft: asset('assets/mecellem-detail-image-1.png'),
      problemRight: asset('assets/mecellem-detail-image-2.png'),
      solution: asset('assets/mecellem-detail-image-3.png'),
    },
    heroMediaStyle: 'bare',
    about:
      'Mecellem is an AI based legal tech product designed to help legal professionals manage, organize, analyze, and access legal information more efficiently. As a Product Designer, I worked closely with AI engineers and software developers to integrate AI powered functionalities into user interfaces, simplify complex legal workflows, and create clear, user centered experiences for legal software products.',
    problem:
      'Mecellem is an AI based legal tech product designed for a very specific user group: lawyers and legal professionals. The main challenge was creating a product experience for users who work with complex legal documents, dense information structures, and highly detailed professional workflows. At the time, AI technologies were still becoming more widely adopted in professional software products, so another challenge was making AI powered features feel clear, trustworthy, and useful for users who may not have been fully familiar with AI driven workflows. The product needed to simplify legal processes without making the technology feel unfamiliar, complex, or unreliable.',
    solution:
      'As a Product Designer, I worked closely with AI engineers and software developers to integrate AI powered functionalities into legal software interfaces in a clear and user centered way. My focus was to design workflows that helped legal professionals manage, organize, analyze, and access legal information more efficiently. I worked on simplifying complex legal interactions, structuring dense information more clearly, and making AI supported features easier to understand and use. The goal was to create an interface that felt professional, reliable, and accessible for lawyers, while helping them benefit from emerging AI technologies in their daily legal workflows.',
  },
  vibro: {
    slug: 'vibro',
    cardTitle: 'Vibro, Ignite, Deploy',
    heroTitle: 'VIBRO, IGNITE & DEPLOY',
    clientLabel: '// Brüel & Kjær',
    image: asset('assets/project-vibro-thumb.png'),
    heroImage: asset('assets/project-vibro-thumb.png'),
    alt: 'BKV Insite app mockup displayed on a mobile phone',
    heroAlt: 'Vibro, Ignite and Deploy product visual',
    variant: 'standard',
    tone: 'dark',
    meta: {
      client: 'Brüel & Kjær',
      role: 'Product Designer',
      timeline: '6 months',
      date: '01/12/2022',
    },
    detailImages: {
      header: asset('assets/vibro-detail-header.png'),
      problemLeft: asset('assets/vibro-detail-image-1.png'),
      problemRight: asset('assets/vibro-detail-image-2.png'),
      solution: asset('assets/vibro-detail-image-3.png'),
    },
    heroMediaStyle: 'bare',
    heroMediaRadius: 'md',
    solutionMediaStyle: 'bare',
    solutionMediaRadius: 'md',
    about:
      'Vibro Deploy and Ignite are industrial digital products for Brüel & Kjær Vibro, focused on machine monitoring, vibration analysis, sensor management, system setup, and operational control. I worked as a Product Designer across mobile, tablet, and desktop interfaces, designing dashboards, machine status screens, technical workflows, and responsive layouts. The main focus was turning complex industrial data and engineering processes into clear, structured, and usable digital experiences.',
    problem:
      'Vibro Deploy and Ignite are industrial digital products designed for different user groups working with complex machine systems, vibration data, sensors, and operational workflows. The products needed to support technical users such as engineers, field operators, and maintenance teams, each with different needs, levels of expertise, and usage contexts. The main challenge was turning highly technical machine data and complex industrial processes into interfaces that could be understood and used across mobile, tablet, and desktop experiences. Since users interact with the product in different environments, the design had to be clear, responsive, and practical without oversimplifying critical technical information.',
    solution:
      'As a Product Designer, I worked on designing structured interfaces for dashboards, machine status screens, sensor related flows, system setup, operational controls, and responsive layouts across mobile, tablet, and desktop. My focus was to create a clear information hierarchy and scalable interface structure that could support different user groups and technical workflows. I helped simplify complex machine related data into usable screens, making the experience more understandable, consistent, and efficient for users working in real industrial environments.',
  },
  smartlight: {
    slug: 'smartlight',
    cardTitle: 'SmartLight',
    heroTitle: 'SMARTLIGHT',
    clientLabel: '// Lotec',
    image: asset('assets/project-smartlight-thumb.png'),
    heroImage: asset('assets/project-smartlight-thumb.png'),
    alt: 'SmartLight dashboard mockup displayed on a laptop in a dark scene',
    heroAlt: 'SmartLight product visual',
    variant: 'standard',
    tone: 'dark',
    meta: {
      client: 'Lotec',
      role: 'Product Designer',
      timeline: '6 months',
      date: '01/12/2022',
    },
    detailImages: {
      header: asset('assets/smartlight-detail-header.png'),
      problemLeft: asset('assets/smartlight-detail-image-1.png'),
      problemRight: asset('assets/smartlight-detail-image-2.png'),
      solution: asset('assets/smartlight-detail-image-3.png'),
    },
    heroMediaStyle: 'bare',
    heroMediaRadius: 'md',
    about:
      'Smartlight is a smart street lighting control platform focused on monitoring, managing, and optimizing urban lighting systems. I worked on the web dashboard experience, designing interfaces for real time lighting control, scheduling, maintenance tracking, energy efficiency, and system status monitoring. The main goal was to simplify complex technical operations into a clear, scalable, and user friendly interface.',
    problem:
      'Smartlight is a smart street lighting control and management platform designed for municipalities and operators responsible for managing urban lighting infrastructure. The product served users who needed to monitor, control, and maintain large scale lighting systems through a web based dashboard. The main challenge was transforming a complex technical infrastructure into a clear and manageable digital experience. Users needed to track real time lighting status, control lighting units, manage schedules, monitor energy usage, identify system issues, and follow maintenance processes without getting lost in technical complexity or dense data.',
    solution:
      'As a UI/UX Designer, I worked on designing the web dashboard experience for monitoring, controlling, and managing smart lighting systems. My role included creating interfaces for real time system status, lighting control, scheduling, maintenance tracking, energy monitoring, and operational overview screens. My focus was to create a clear information hierarchy, scalable dashboard structure, and user friendly interface that made complex urban lighting operations easier to understand and manage. The goal was to help operators make faster decisions, monitor system performance more efficiently, and control lighting infrastructure through a more organized digital experience.',
  },
  pedalup: {
    slug: 'pedalup',
    cardTitle: 'PedalUp',
    heroTitle: 'PEDALUP',
    clientLabel: '// AI Case',
    image: asset('assets/project-pedalup-thumb.png'),
    heroImage: asset('assets/project-pedalup-thumb.png'),
    alt: 'PedalUp product mockup composed over a laptop in a dark scene',
    heroAlt: 'PedalUp product visual',
    variant: 'standard',
    tone: 'dark',
    meta: {
      client: 'adesso Turkey',
      role: 'Product Designer',
      timeline: '4 months',
      date: '01/02/2026',
    },
    about:
      'PedalUp is a concept bike sharing product that I developed as an end to end AI supported design project. I worked through the full process, starting from UX research, competitor analysis, personas, user journeys, and product flows, then continued with design system creation and UI design in Figma. The product includes key flows such as map based bike station discovery, QR code rental, navigation, ride tracking, bike return, and issue reporting. After completing the design, I used Codex to turn the concept into a functional digital prototype, exploring how AI can support the transition from design to development. This project reflects my interest in combining UX research, scalable design systems, polished interfaces, and AI assisted workflows to create more efficient and complete product experiences.',
    problem:
      'PedalUp is a concept bike sharing product designed for urban users who need fast, practical, and flexible transportation for short distance journeys. The main problem was that many existing micro mobility and bike sharing experiences can feel unreliable due to unclear station availability, limited service areas, confusing pricing, weak guidance during the rental and return process, and lack of visibility around bike condition. With the rise of AI tools in the design industry, I also wanted to explore how AI could support the product design process from end to end, not only during ideation but also throughout UX research, design system creation, UI design, and functional prototyping.',
    solution:
      'I developed PedalUp as an end to end AI supported product design project. The process started with UX research, competitor analysis, personas, user journeys, pain points, and product flow definition. Based on these insights, I designed core flows such as map based station discovery, bike availability, QR code rental, navigation to stations, ride tracking, bike return, pricing visibility, and issue reporting. I also created a scalable design system in Figma, including colors, typography, components, buttons, cards, forms, icons, states, and interaction patterns to keep the experience consistent. After completing the UI design, I used Codex to turn the concept into a functional digital prototype, exploring how AI can help connect the design and development process more efficiently. The goal was to create a clearer, more trustworthy, and more seamless bike sharing experience while also demonstrating how AI assisted workflows can support the full product design cycle.',
  },
} as const

const projectSlugs = Object.keys(projectDetails) as ProjectSlug[]

const parseRoute = (hash: string): Route => {
  if (hash === '#projects-page') {
    return { page: 'projects' }
  }

  if (hash.startsWith('#project-')) {
    const slug = hash.replace('#project-', '') as ProjectSlug
    if (projectSlugs.includes(slug)) {
      return { page: 'project', slug }
    }
  }

  return { page: 'home' }
}

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
    slug: 'tosla',
    title: 'Tosla & Tosla Isim',
    client: '// AKÖde',
    image: asset('assets/work-tosla-home.png'),
    alt: 'Tosla Isim dashboard and mobile app mockup on a dark background',
    size: 'small',
  },
  {
    slug: 'vibro',
    title: 'Vibro, Ignite, Deploy',
    client: '// Brüel & Kjær',
    image: asset('assets/work-phone.png'),
    alt: 'BKV Insite app mockup displayed on a mobile phone',
    size: 'medium',
  },
  {
    slug: 'tami',
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
      'Designing intelligent and adaptive user experiences by integrating AI powered features, automation, and emerging technologies into digital products.',
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
    slug: 'tami',
    title: 'Tami',
    client: '// Garanti BBVA',
    image: asset('assets/project-tami-thumb.png'),
    alt: 'A hand holding the Tami mobile app interface on a dark background',
    variant: 'featured',
    tone: 'dark',
  },
  {
    slug: 'tosla',
    title: 'Tosla & Tosla Isim',
    client: '// AKÖde',
    image: asset('assets/project-tosla-thumb.png'),
    alt: 'Tosla Isim dashboard and mobile app mockup on a dark background',
    variant: 'featured',
    tone: 'dark',
  },
  {
    slug: 'mecellem',
    title: 'Mecellem',
    client: '// New Mind AI',
    image: asset('assets/project-mecellem-thumb.png'),
    alt: 'Mecellem product presentation shown across layered laptop screens',
    variant: 'standard',
    tone: 'dark',
  },
  {
    slug: 'vibro',
    title: 'Vibro, Ignite, Deploy',
    client: '// Brüel & Kjær',
    image: asset('assets/project-vibro-thumb.png'),
    alt: 'BKV Insite app mockup displayed on a mobile phone',
    variant: 'standard',
    tone: 'dark',
  },
  {
    slug: 'smartlight',
    title: 'SmartLight',
    client: '// Lotec',
    image: asset('assets/project-smartlight-thumb.png'),
    alt: 'SmartLight dashboard mockup displayed on a laptop in a dark scene',
    variant: 'standard',
    tone: 'dark',
  },
  {
    slug: 'pedalup',
    title: 'PedalUp',
    client: '// AI Case',
    image: asset('assets/project-pedalup-thumb.png'),
    alt: 'PedalUp product mockup composed over a laptop in a dark scene',
    variant: 'standard',
    tone: 'dark',
  },
] as const

function App() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash))
  const [pendingHomeTarget, setPendingHomeTarget] = useState<string | null>(null)
  const currentExperience = experienceItems[activeExperience]
  const activePage = route.page
  const heroTexture = asset('assets/hero-texture.jpg')
  const heroImageStyle = {
    backgroundImage: `linear-gradient(110deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 30%), linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.18)), url(${heroTexture})`,
  }

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute(window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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
    setRoute({ page: 'projects' })
    setPendingHomeTarget(null)
    window.history.pushState(null, '', '#projects-page')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openProjectPage =
    (slug: ProjectSlug) =>
    (event?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      event?.preventDefault()
      setRoute({ page: 'project', slug })
      setPendingHomeTarget(null)
      window.history.pushState(null, '', `#project-${slug}`)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

  const goHomeTo =
    (targetId: string) => (event?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      event?.preventDefault()
      setRoute({ page: 'home' })
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

  const renderContactBand = (extraClassName?: string) => (
    <section
      className={`contact-band reveal-up reveal-delay-4${extraClassName ? ` ${extraClassName}` : ''}`}
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
            <a
              key={item.title}
              className={`work-card work-card--${item.size}`}
              href={`#project-${item.slug}`}
              onClick={openProjectPage(item.slug)}
              aria-label={item.title}
            >
              <img src={item.image} alt={item.alt} />
              <div className="work-card__meta">
                <h3>{item.title}</h3>
                <p>{item.client}</p>
              </div>
            </a>
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
              AI Driven design, UI/UX, product design, design systems, and
              branding.
            </span>
            <span className="services-intro__muted">
              {' '}
              My focus is on creating clear, scalable, and user centered digital
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
      {renderContactBand()}
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
          <a
            key={item.title}
            className={`project-card project-card--${item.variant} reveal-up`}
            data-reveal
            href={`#project-${item.slug}`}
            onClick={openProjectPage(item.slug)}
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
          </a>
        ))}
      </section>

      {renderFooter('site-footer--projects')}
    </main>
  )

  const renderProjectDetailPage = (slug: ProjectSlug) => {
    const project = projectDetails[slug]

    return (
      <main className="projects-page project-detail-page">
        <section className="project-detail-hero reveal-up" data-reveal>
          <button className="projects-back" type="button" onClick={openProjectsPage}>
            <img src={asset('assets/icon-back-projects.svg')} alt="" />
            <span>Go back</span>
          </button>

          <div className="project-detail-heading">
            <h1>{project.heroTitle}</h1>
            <div
              className={`project-detail-hero-media${
                project.heroMediaFit === 'cover' ? ' project-detail-hero-media--cover' : ''
              }${
                project.heroMediaStyle === 'bare' ? ' project-detail-hero-media--bare' : ''
              }${
                project.heroMediaRadius === 'md' ? ' project-detail-hero-media--rounded' : ''
              }`}
            >
              {project.detailImages?.header ? (
                <img src={project.detailImages.header} alt={project.heroAlt} />
              ) : project.heroImage ? (
                <img src={project.heroImage} alt={project.heroAlt} />
              ) : null}
            </div>
          </div>

          <div className="project-detail-copy">
            <div className="project-detail-meta">
              <h2>About</h2>
              <div className="project-detail-meta__list">
                <p>
                  <span>Client: </span>
                  <strong>{project.meta.client}</strong>
                </p>
                <p>
                  <span>Role: </span>
                  <strong>{project.meta.role}</strong>
                </p>
                <p>
                  <span>Timeline: </span>
                  <strong>{project.meta.timeline}</strong>
                </p>
                <p>
                  <span>Date: </span>
                  <strong>{project.meta.date}</strong>
                </p>
              </div>
            </div>

            <p className="project-detail-copy__text">{project.about}</p>
          </div>
        </section>

        <section className="project-detail-section reveal-up reveal-delay-1" data-reveal>
          <div className="project-detail-gallery project-detail-gallery--split">
            <div
              className={`project-detail-gallery__card${
                project.problemMediaStyle === 'bare' ? ' project-detail-gallery__card--bare' : ''
              }${
                project.problemMediaRadius === 'md'
                  ? ' project-detail-gallery__card--rounded'
                  : ''
              }`}
            >
              {project.detailImages?.problemLeft ? (
                <img src={project.detailImages.problemLeft} alt="" />
              ) : null}
            </div>
            <div
              className={`project-detail-gallery__card${
                project.problemMediaStyle === 'bare' ? ' project-detail-gallery__card--bare' : ''
              }${
                project.problemMediaRadius === 'md'
                  ? ' project-detail-gallery__card--rounded'
                  : ''
              }`}
            >
              {project.detailImages?.problemRight ? (
                <img src={project.detailImages.problemRight} alt="" />
              ) : null}
            </div>
          </div>

          <div className="project-detail-copy">
            <div className="project-detail-meta">
              <h2>Problem</h2>
            </div>

            <p className="project-detail-copy__text">{project.problem}</p>
          </div>
        </section>

        <section className="project-detail-section reveal-up reveal-delay-2" data-reveal>
          <div className="project-detail-gallery project-detail-gallery--single">
            <div
              className={`project-detail-gallery__card${
                project.solutionMediaStyle === 'bare' ? ' project-detail-gallery__card--bare' : ''
              }${
                project.solutionMediaRadius === 'md'
                  ? ' project-detail-gallery__card--rounded'
                  : ''
              }`}
            >
              {project.detailImages?.solution ? (
                <img src={project.detailImages.solution} alt="" />
              ) : null}
            </div>
          </div>

          <div className="project-detail-copy">
            <div className="project-detail-meta">
              <h2>Solution</h2>
            </div>

            <p className="project-detail-copy__text">{project.solution}</p>
          </div>
        </section>

        {renderContactBand('contact-band--project')}
        {renderFooter('site-footer--projects')}
      </main>
    )
  }

  return (
    <div className="page-shell">
      {renderHeader()}
      {route.page === 'projects'
        ? renderProjectsPage()
        : route.page === 'project'
          ? renderProjectDetailPage(route.slug)
          : renderHomePage()}
    </div>
  )
}

export default App
