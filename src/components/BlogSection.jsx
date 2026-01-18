import { useState } from 'react'
import { blogPosts, formatDate } from '../data/blogPosts'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  // If a post is selected, show the full post view
  if (selectedPost) {
    const post = blogPosts.find((p) => p.slug === selectedPost)
    
    if (!post) {
      setSelectedPost(null)
      return null
    }

    return (
      <section id="blog" className="section px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 font-mono text-sm text-neon-cyan hover:text-neon-green transition-colors mb-8"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Blog</span>
          </button>

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-cyber-text mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <time className="font-mono text-sm text-cyber-muted">
                {formatDate(post.date)}
              </time>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono text-neon-cyan/80 bg-neon-cyan/10 border border-neon-cyan/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-neon-cyan via-neon-green to-transparent" />
          </header>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim()
              
              // Skip empty paragraphs
              if (!trimmed) return null

              // Handle headers
              if (trimmed.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="font-mono text-xl md:text-2xl font-bold text-neon-cyan mt-10 mb-4"
                  >
                    {trimmed.replace('## ', '')}
                  </h2>
                )
              }

              // Handle blockquotes
              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-neon-cyan/50 pl-4 my-6 italic text-cyber-muted"
                  >
                    {trimmed.replace('> ', '')}
                  </blockquote>
                )
              }

              // Handle lists
              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '))
                return (
                  <ul key={index} className="my-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-cyber-muted">
                        <span className="text-neon-cyan mt-1">▹</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(/^- /, '')
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyber-text">$1</strong>')
                              .replace(/✨ /g, '')
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )
              }

              // Handle regular paragraphs with bold/italic
              return (
                <p
                  key={index}
                  className="text-cyber-muted leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{
                    __html: trimmed
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyber-text">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }}
                />
              )
            })}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-cyber-border">
            <button
              onClick={() => setSelectedPost(null)}
              className="cyber-btn"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to All Posts</span>
            </button>
          </footer>
        </div>
      </section>
    )
  }

  // Default: show blog post list
  return (
    <section id="blog" className="section px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span>//</span> Blog
        </h2>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="cyber-card neon-border-glow group cursor-pointer"
              onClick={() => setSelectedPost(post.slug)}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="font-mono text-lg font-bold text-cyber-text group-hover:text-neon-cyan transition-colors mb-2">
                    {post.title}
                  </h3>

                  {/* Date */}
                  <p className="font-mono text-xs text-cyber-muted mb-3">
                    {formatDate(post.date)}
                  </p>

                  {/* Excerpt */}
                  <p className="text-cyber-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-neon-cyan/80 bg-neon-cyan/10 border border-neon-cyan/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Link */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPost(post.slug)
                  }}
                  className="inline-flex items-center gap-2 font-mono text-sm text-neon-cyan hover:text-neon-green transition-colors whitespace-nowrap"
                >
                  <span>Read Post</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
