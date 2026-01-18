const projects = [
  {
    name: 'JRVS',
    tagline: 'Open-Source AI Agent',
    description:
      'A Python-based AI agent with modular architecture designed for extensibility and reliability. Features comprehensive logging, input validation, and defensive error handling throughout.',
    highlights: [
      'Modular Python architecture',
      'Comprehensive logging system',
      'Defensive error handling',
      'Docker containerization',
      'Clear documentation',
    ],
    github: 'https://github.com/Xthebuilder/JRVS',
    tech: ['Python', 'Docker', 'AI/ML'],
  },
  {
    name: 'Research Agent',
    tagline: 'Automated Research Pipeline',
    description:
      'An automation tool for streamlining research workflows through API integration and structured data processing. Built to handle complex research tasks with minimal manual intervention.',
    highlights: [
      'Research automation',
      'Multi-API integration',
      'Structured workflows',
      'Data processing & analysis',
      'Reproducible results',
    ],
    github: 'https://github.com/Xthebuilder/Research_Agent',
    tech: ['Python', 'APIs', 'Data Analysis'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section px-6 bg-cyber-darker/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <span>//</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="cyber-card neon-border-glow group"
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="font-mono text-xl font-bold text-cyber-text group-hover:text-neon-cyan transition-colors">
                  {project.name}
                </h3>
                <p className="font-mono text-sm text-neon-green">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-cyber-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-cyber-muted"
                  >
                    <span className="text-neon-cyan mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono text-cyber-muted bg-cyber-border/50 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-neon-cyan hover:text-neon-green transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>View on GitHub</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
