import { useEffect, useMemo, useState } from 'react'

type Project = {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
  status?: string
}

const githubBase = 'https://github.com/MohamedMahmoud2020-dotcom'

const featuredProjects: Project[] = [
  {
    name: 'YouTube Clone',
    description:
      'A YouTube-inspired interface currently being developed with React and Tailwind CSS, including responsive navigation, sidebar states, search interactions and notification UI.',
    tags: ['React', 'Tailwind CSS', 'Frontend', 'In progress'],
    live: 'https://youtube-4thobt057-mohamed-mahmouds-projects-9eb3f5a3.vercel.app/',
    featured: true,
    status: 'Building now',
  },
  {
    name: 'Realtime Chat App',
    description:
      'Full-stack MERN chat application with secure JWT authentication in HttpOnly cookies, Socket.IO messaging, MongoDB persistence, Cloudinary uploads and global state management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    github: `${githubBase}/CHAT-APP2`,
    featured: true,
  },
  {
    name: 'Movies List',
    description:
      'Responsive movie discovery app powered by TMDB. It supports search, favorites, persisted localStorage state, routing, loading states and responsive movie cards.',
    tags: ['React 19', 'Vite', 'TMDB API', 'React Router'],
    github: `${githubBase}/Movies-List`,
    live: 'https://movies-list-kohl-mu.vercel.app',
    featured: true,
  },
  {
    name: 'AI Resume Analyzer',
    description:
      'Modern React Router application for resume analysis, built with TypeScript, Tailwind CSS, PDF tooling and Zustand in a production-oriented full-stack React setup.',
    tags: ['TypeScript', 'React Router', 'Tailwind CSS', 'Zustand'],
    github: `${githubBase}/ai-resume-analyzer`,
    featured: true,
  },
  {
    name: 'Crypto Project',
    description:
      'React-based crypto dashboard project using Vite, routing and Recharts for data-driven visualizations and interactive market views.',
    tags: ['React', 'Vite', 'Recharts', 'Data UI'],
    github: `${githubBase}/crypto-project`,
    featured: true,
  },
  {
    name: 'Countries API',
    description:
      'React application centered on country data and API-driven browsing, with client-side routing and a responsive interface.',
    tags: ['React', 'REST API', 'React Router', 'Tailwind CSS'],
    github: `${githubBase}/countries-api`,
    featured: true,
  },
]

const repositoryNames = [
  'Insure-landing',
  'Gobang-Game',
  'memory-game',
  'Booking-System',
  'TinDog-Start',
  'calculator',
  'gerich-rest',
  'crypto-project',
  'Huddle',
  'Front',
  'Insure',
  'countries-api',
  'SimonGame',
  'Frontend-Challenge',
  'Blogr',
  'lip-hub',
  'Chat-app',
  'CHAT-APP2',
  'LocoBot',
  'Fylo',
  'Challenge',
  'social-app',
  'Movies-List',
  'drum-kit',
  'ai-resume-analyzer',
  'space',
  'K9',
  'social',
]

const allProjects: Project[] = repositoryNames.map((name) => ({
  name,
  description: 'Explore the source code, implementation details and project history on GitHub.',
  tags: ['GitHub project'],
  github: `${githubBase}/${name}`,
}))

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST APIs',
  'Socket.IO',
  'Tailwind CSS',
  'Docker',
  'Git & GitHub',
  'Web Security',
]

const nav = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="currentColor"
        d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.9 4 19 4.3 19 4.3c.6 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
      />
    </svg>
  )
}

function App() {
  const [filter, setFilter] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    const query = filter.trim().toLowerCase()
    if (!query) return allProjects
    return allProjects.filter((project) => project.name.toLowerCase().includes(query))
  }, [filter])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#top" className="brand" aria-label="Mohamed Mahmoud home">
          <span className="brand-dot" />
          Mohamed Mahmoud
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow">Full-stack software developer</div>
            <h1>
              I build web products that feel <span>clear, fast and dependable.</span>
            </h1>
            <p className="hero-lede">
              Computer Engineering graduate and Master&apos;s student focused on React, TypeScript,
              Node.js and secure full-stack applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work <ArrowIcon />
              </a>
              <a className="button button-ghost" href={githubBase} target="_blank" rel="noreferrer">
                <GithubMark /> GitHub profile
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-window">
              <div className="window-bar">
                <span /> <span /> <span />
                <small>portfolio.tsx</small>
              </div>
              <pre>
                <code>{`const developer = {\n  name: "Mohamed Mahmoud",\n  focus: [\n    "React",\n    "TypeScript",\n    "Node.js",\n    "Web Security"\n  ],\n  mindset: "build → test → improve"\n};`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Technology stack">
          <div className="marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-pad about-grid" id="about">
          <div>
            <div className="section-kicker">01 / About</div>
            <h2>Engineering mindset. Product focus.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Mohamed, a software developer with a Computer Engineering background. I enjoy
              turning product ideas into maintainable interfaces and full-stack systems, with extra
              attention to authentication, APIs, state management and user experience.
            </p>
            <p>
              My recent work ranges from real-time messaging and API-driven apps to developer tools
              and interface recreations. I care about readable code, useful abstractions and shipping
              things that actually work.
            </p>
            <div className="stats">
              <div><strong>29</strong><span>Projects represented</span></div>
              <div><strong>MERN</strong><span>Core full-stack stack</span></div>
              <div><strong>B.Sc.</strong><span>Computer Engineering</span></div>
            </div>
          </div>
        </section>

        <section className="section-pad work-section" id="work">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / Selected work</div>
              <h2>Projects that best show how I build.</h2>
            </div>
            <p>Recent and technically representative work, from frontend experiences to real-time full-stack systems.</p>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <article className="featured-card" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-meta">
                  {project.status && <span className="status-pill">{project.status}</span>}
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowIcon /></a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">Code <ArrowIcon /></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <div className="section-kicker">03 / Repository archive</div>
              <h2>All public GitHub projects.</h2>
            </div>
            <div className="search-box">
              <label htmlFor="project-search">Find a project</label>
              <input
                id="project-search"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Search repositories..."
              />
            </div>
          </div>

          <div className="repo-grid">
            {filteredProjects.map((project) => (
              <a
                className="repo-card"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <div className="repo-card-top">
                  <GithubMark />
                  <ArrowIcon />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="repo-label">Repository</span>
              </a>
            ))}
          </div>
          {filteredProjects.length === 0 && <p className="empty-state">No repositories match that search.</p>}
        </section>

        <section className="section-pad skills-section" id="skills">
          <div className="section-kicker">04 / Toolkit</div>
          <div className="skills-layout">
            <h2>Tools I use to move from idea to working software.</h2>
            <div className="skills-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="capabilities">
            <div>
              <span>Frontend</span>
              <p>Responsive interfaces, reusable components, routing, client state and API integration.</p>
            </div>
            <div>
              <span>Backend</span>
              <p>REST services, authentication, MongoDB data models, Node/Express workflows and real-time events.</p>
            </div>
            <div>
              <span>Security</span>
              <p>Secure auth patterns, HttpOnly cookies, authorization thinking and practical web-security fundamentals.</p>
            </div>
          </div>
        </section>

        <section className="section-pad contact" id="contact">
          <div className="contact-panel">
            <div className="section-kicker">05 / Contact</div>
            <h2>Have a software role or project in mind?</h2>
            <p>I&apos;m interested in frontend, full-stack and software engineering opportunities where I can contribute, learn quickly and take ownership.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="https://www.linkedin.com/in/mohamed-mahmoud-169a061b2/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon />
              </a>
              <a className="button button-ghost" href={githubBase} target="_blank" rel="noreferrer">
                <GithubMark /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Mohamed Mahmoud</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  )
}

export default App
