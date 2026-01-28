export default function About() {
  return (
    <section id="about" className="section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span>//</span> About Xavier Martin Cofield
        </h2>

        <div className="cyber-card">
          <div className="space-y-6 text-cyber-muted leading-relaxed">
            <p>
              <strong>Xavier Martin Cofield</strong> is a passionate <span className="text-neon-cyan">Python developer</span> with 
              extensive experience building robust backend systems, automation pipelines, and intelligent AI agents. 
              My professional focus centers on creating software solutions that emphasize clean architecture, 
              defensive error handling, and maintainable code designed for production environments.
            </p>

            <h3 className="text-lg font-semibold text-cyber-text mt-8 mb-4">Professional Background</h3>
            <p>
              With deep expertise in <span className="text-neon-green">automation engineering</span> and 
              <span className="text-neon-green"> infrastructure tooling</span>, I develop systems that significantly 
              reduce manual overhead and enable development teams to focus on high-impact work. My experience spans 
              orchestrating complex workflows, integrating multiple APIs, processing data at scale, and building 
              resilient distributed systems.
            </p>

            <h3 className="text-lg font-semibold text-cyber-text mt-8 mb-4">Development Philosophy</h3>
            <p>
              Xavier Martin Cofield's approach to software development prioritizes <span className="text-neon-cyan">comprehensive 
              documentation</span>, detailed logging systems, and validation at every architectural layer. I firmly believe 
              that well-crafted code should tell a clear story—enabling future developers (including myself) to 
              understand, maintain, and extend the codebase without friction.
            </p>

            <h3 className="text-lg font-semibold text-cyber-text mt-8 mb-4">Current Focus</h3>
            <p>
              Currently, I'm exploring the fascinating intersection of <span className="text-neon-magenta">AI agent development</span> and 
              practical software systems. My work involves building intelligent tools that augment human capabilities while 
              maintaining transparency and user control. Recent projects include JRVS, an open-source AI agent, and 
              advanced research automation pipelines.
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="mt-8 pt-8 border-t border-cyber-border">
            <h3 className="font-mono text-sm text-cyber-muted mb-4">
              {'>'} core_focus.py
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Python Development',
                'Backend Systems',
                'Automation',
                'AI Agents',
                'API Integration',
                'Documentation',
              ].map((focus) => (
                <span
                  key={focus}
                  className="px-3 py-1.5 text-sm font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 rounded"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
