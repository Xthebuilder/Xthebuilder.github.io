const skillGroups = [
  {
    category: 'Languages & Data',
    color: 'cyan',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy'],
  },
  {
    category: 'APIs & Automation',
    color: 'green',
    skills: ['REST APIs', 'Automation', 'Web Scraping', 'Task Scheduling'],
  },
  {
    category: 'DevOps & Tools',
    color: 'magenta',
    skills: ['Docker', 'Linux', 'Git', 'Bash'],
  },
  {
    category: 'Architecture',
    color: 'cyan',
    skills: ['Backend Systems', 'API Design', 'Documentation', 'Testing'],
  },
]

const colorClasses = {
  cyan: {
    border: 'border-neon-cyan/30',
    bg: 'bg-neon-cyan/10',
    text: 'text-neon-cyan',
    glow: 'hover:shadow-neon-cyan',
  },
  green: {
    border: 'border-neon-green/30',
    bg: 'bg-neon-green/10',
    text: 'text-neon-green',
    glow: 'hover:shadow-neon-green',
  },
  magenta: {
    border: 'border-neon-magenta/30',
    bg: 'bg-neon-magenta/10',
    text: 'text-neon-magenta',
    glow: 'hover:shadow-neon-magenta',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span>//</span> Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const colors = colorClasses[group.color]
            return (
              <div
                key={group.category}
                className={`cyber-card ${colors.glow}`}
              >
                {/* Category Header */}
                <h3 className={`font-mono text-sm font-medium ${colors.text} mb-4`}>
                  {'>'} {group.category}
                </h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm font-mono border rounded ${colors.border} ${colors.bg} text-cyber-text hover:${colors.text} transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="font-mono text-sm text-cyber-muted">
            <span className="text-neon-cyan">+</span> Always learning new tools and technologies
          </p>
        </div>
      </div>
    </section>
  )
}
