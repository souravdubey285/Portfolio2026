export default function SouravPortfolio() {
  const featuredProjects = [
    {
      title: "Book An Artist",
      category: "Production Work",
      description:
        "Worked on real marketplace experiences across listing, collection, inspiration, local search, and SEO-critical discovery flows for a live platform.",
      impact: [
        "Improved page speed, UX, and frontend structure across key flows",
        "Implemented SSR and metadata improvements for SEO-critical pages",
        "Shipped smoother discovery, onboarding, and search experiences"
      ],
      tech: ["React", "Redux", "Ant Design", "Performance", "SEO"],
      links: [
        {
          label: "View Canvas Painters",
          href: "https://bookanartist.co/discover/canvas-painters?buy-artwork",
        },
        {
          label: "View Artist Services",
          href: "https://bookanartist.co/gigs/listing",
        },
      ],
    },
    {
      title: "Bistro & Brew",
      category: "Freelance Project",
      description:
        "A freelance hospitality website focused on clean presentation, responsive layout, and polished customer-facing design.",
      impact: [
        "Built a real-world freelance website",
        "Designed a responsive and elegant UI",
        "Delivered a production-ready business presence"
      ],
      tech: ["React", "UI Design", "Responsive Web"],
      links: [
        {
          label: "Visit Bistro & Brew",
          href: "https://www.bistroandbrew.in",
        },
      ],
    },
    {
      title: "10AppDeals",
      category: "Personal Project",
      description:
        "A full-stack SaaS platform for curating limited-time app deals with authentication, real-time updates, and fast onboarding.",
      impact: [
        "Built frontend with React and TailwindCSS",
        "Used Supabase for real-time database and auth",
        "Onboarded 25+ developers within 48 hours"
      ],
      tech: ["React", "Tailwind CSS", "Supabase", "Auth"],
      links: [],
    },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Book An Artist",
      period: "Jan 2025 — Present",
      location: "Melbourne, Victoria, Australia · On-site",
      summary:
        "Improving core marketplace experiences with a focus on frontend architecture, SEO, performance, and scalable user-facing product development.",
      points: [
        "Improved frontend architecture by enhancing SEO, page load speed, and user experience across Listing, Collection, Inspiration, and Local Search",
        "Developed revamped UI flows, improved search experiences, and optimized onboarding sections for smoother navigation and stronger engagement",
        "Refactored legacy code and updated outdated dependencies to improve maintainability, stability, and performance",
        "Implemented SSR and structured metadata for SEO-critical pages, improving organic visibility and search rankings",
        "Collaborated with design, backend, and business teams to deliver clean, scalable, production-ready frontend solutions",
        "Assisted leadership by creating Power BI dashboards for clearer reporting and better business decision-making"
      ],
    },
    {
      role: "Freelance Developer",
      company: "Freelance",
      period: "Mar 2025 — Apr 2025",
      location: "Remote",
      summary:
        "Delivered a freelance React web application with a strong focus on responsive UI, reusability, clean architecture, and smooth navigation.",
      points: [
        "Engineered a fully responsive and interactive web application using React.js and React Hooks",
        "Developed modular UI components with reusability and scalability in mind",
        "Implemented client-side routing with React Router v6 for smoother navigation without page reloads",
        "Designed the UI with a mobile-first approach using Flexbox and Grid while ensuring cross-browser compatibility"
      ],
    },
    {
      role: "Software Engineer",
      company: "Bonkers Corner",
      period: "Jan 2024",
      location: "Remote",
      summary:
        "Contributed to a high-traffic e-commerce product focused on product discovery, reusable UI systems, and smoother shopping experiences.",
      points: [
        "Worked on product search, faceted filters, category sorting, and pagination",
        "Built reusable UI components aligned with the design system",
        "Improved performance with code splitting, lazy loading, and caching strategies"
      ],
    },
    {
      role: "Data Analyst",
      company: "Merideon Wealth Strategies",
      period: "Jan 2023 — Jun 2023",
      location: "Western Australia, Australia · Remote",
      summary:
        "Worked on BI reporting, analytics, and database-oriented problem solving across finance-focused business systems.",
      points: [
        "Developed BI reports, dashboards, and ad-hoc reports using Power BI",
        "Built calculated measures using DAX",
        "Developed scripts for cube refresh automation and scheduling in MicroStrategy",
        "Contributed to a finance data mart and analyzed the data warehouse for performance improvements",
        "Worked with SQL objects including stored procedures, views, and user-defined functions"
      ],
    }
  ];

  const skills = [
    "React",
    "JavaScript",
    "Redux",
    "Node.js",
    "HTML5",
    "CSS3",
    "Ant Design",
    "Performance Optimization",
    "SEO",
    "AWS",
    "Git",
    "Power BI",
    "Responsive UI",
    "Component Architecture",
  ];

  const highlights = [
    "Frontend engineer focused on fast, scalable, production-ready interfaces",
    "Hands-on experience across marketplace, admin, e-commerce, freelance, and analytics work",
    "Strong interest in startup environments, performance engineering, and modern product design",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/80">
                Melbourne · Software Engineer
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Sourav Dubey
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
                Frontend-focused software engineer building high-performance React applications,
                scalable UI systems, and polished digital products across marketplace, admin,
                freelance, and e-commerce experiences.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:sourav2850@gmail.com"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
                >
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/dubey-sourav/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-sky-400/40 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-400/20"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sourav2850"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-5 py-3 text-sm font-medium text-fuchsia-100 transition hover:bg-fuchsia-400/20"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-neutral-300 shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mt-8 grid gap-8">
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">About</h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Profile
                </span>
              </div>
              <p className="text-sm leading-7 text-neutral-300 md:text-base">
                I’m a software engineer with experience building scalable, high-performance web
                applications using React, Redux, and modern UI frameworks. My work has focused on
                responsive frontend systems, performance optimization, SEO-oriented experiences,
                and production-ready interfaces that support both end users and internal teams.
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
                I enjoy fast-moving environments where ownership, execution, and product quality
                matter. I like working on systems that need to be clean, efficient, and reliable
                while still feeling polished for real users.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold md:text-3xl">Featured Work</h2>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                Live Projects
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="flex h-full flex-col rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-black/30 p-5 shadow-xl"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-300/80">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-medium text-neutral-200">Highlights</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-400">
                      {project.impact.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.length > 0 ? (
                      project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-400/20"
                        >
                          {link.label}
                        </a>
                      ))
                    ) : (
                      <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-400">
                        Private build
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Journey
                </span>
              </div>

              <div className="space-y-5">
                {experience.map((item) => (
                  <article
                    key={`${item.company}-${item.role}-${item.period}`}
                    className="rounded-[28px] border border-white/10 bg-black/30 p-5 shadow-lg"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="mt-1 text-sm text-neutral-300">{item.company}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">{item.location}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">{item.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-400">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold">Education</h2>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Academic
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <h3 className="text-lg font-semibold">La Trobe University</h3>
                  <p className="mt-1 text-sm text-neutral-300">Master of Information Technology</p>
                  <p className="mt-2 text-sm text-neutral-500">Melbourne · Jul 2021 — Jul 2023</p>
                </div>
              </section>

              <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold">Contact</h2>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Reach Out
                  </span>
                </div>
                <p className="text-sm leading-7 text-neutral-300">
                  I’m interested in frontend engineering roles where performance, product quality,
                  ownership, and polished user experience matter.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href="mailto:sourav2850@gmail.com"
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.01]"
                  >
                    sourav2850@gmail.com
                  </a>
                  <a
                    href="tel:+61431175829"
                    className="rounded-2xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-400/20"
                  >
                    +61 431 175 829
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dubey-sourav/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-3 text-sm font-medium text-fuchsia-100 transition hover:bg-fuchsia-400/20"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}