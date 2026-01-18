import { useEffect, useRef } from 'react'

export default function Hero() {
  const nameRef = useRef(null)

  useEffect(() => {
    // Add initial glitch class after component mounts
    const timer = setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.classList.add('initial-glitch')
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Terminal-style prefix */}
        <div className="animate-fade-in opacity-0 mb-4">
          <span className="font-mono text-sm text-neon-green">
            {'>'} initializing portfolio...
          </span>
        </div>

        {/* Main Name with Glitch Effect */}
        <h1 className="mb-6 animate-slide-up opacity-0 delay-200">
          <span
            ref={nameRef}
            data-text="Xavier Martin Cofield"
            className="glitch-text font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-cyber-text neon-text-cyan cursor-default"
          >
            Xavier Martin Cofield
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-lg md:text-xl text-cyber-muted mb-8 animate-slide-up opacity-0 delay-300">
          <span className="text-neon-cyan">Python Developer</span>
          <span className="mx-3 text-cyber-border">·</span>
          <span className="text-neon-green">Automation</span>
          <span className="mx-3 text-cyber-border">·</span>
          <span className="text-neon-magenta">AI Systems</span>
        </p>

        {/* Description */}
        <p className="text-cyber-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0 delay-400">
          Building reliable backend systems, intelligent automation, and AI-powered agents 
          with clean architecture and thorough documentation.
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up opacity-0 delay-500">
          <a href="#projects" className="cyber-btn">
            <span>View Projects</span>
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-600">
          <div className="w-6 h-10 border-2 border-cyber-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
