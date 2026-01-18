export default function About() {
  return (
    <section id="about" className="section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span>//</span> About Me
        </h2>

        <div className="cyber-card">
          <div className="space-y-6 text-cyber-muted leading-relaxed">
            <p>
              I'm a <span className="text-neon-cyan">Python developer</span> focused on building 
              robust backend systems, automation pipelines, and intelligent AI agents. My work 
              emphasizes clean architecture, defensive error handling, and maintainable code that 
              stands the test of production environments.
            </p>

            <p>
              With a strong foundation in <span className="text-neon-green">automation</span> and 
              <span className="text-neon-green"> infrastructure tooling</span>, I build systems that 
              reduce manual overhead and enable teams to focus on what matters. Whether it's 
              orchestrating complex workflows, integrating APIs, or processing data at scale, I 
              prioritize reliability and clarity.
            </p>

            <p>
              My approach to development centers on <span className="text-neon-cyan">thorough 
              documentation</span>, comprehensive logging, and validation at every layer. I believe 
              that good code tells a story—one that future developers (including yourself) can 
              follow and extend without friction.
            </p>

            <p>
              Currently exploring the intersection of <span className="text-neon-magenta">AI agents</span> and 
              practical software systems—building tools that augment human capabilities while 
              remaining transparent and controllable.
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
