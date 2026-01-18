import { useParams, Link } from 'react-router-dom'
import { getBlogPost, formatDate } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-mono text-4xl font-bold text-neon-cyan mb-4">404</h1>
          <p className="text-cyber-muted mb-8">Post not found</p>
          <Link to="/" className="cyber-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          to="/#blog"
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
        </Link>

        {/* Header */}
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

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={index}
                  className="font-mono text-xl md:text-2xl font-bold text-neon-cyan mt-10 mb-4"
                >
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }

            // Handle blockquotes
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-neon-cyan/50 pl-4 my-6 italic text-cyber-muted"
                >
                  {paragraph.replace('> ', '')}
                </blockquote>
              )
            }

            // Handle lists
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter(line => line.startsWith('- '))
              return (
                <ul key={index} className="my-4 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-cyber-muted">
                      <span className="text-neon-cyan mt-1">▹</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace('- ', '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyber-text">$1</strong>')
                            .replace(/✨ /g, '')
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )
            }

            // Handle regular paragraphs with bold text
            if (paragraph.trim()) {
              return (
                <p
                  key={index}
                  className="text-cyber-muted leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyber-text">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }}
                />
              )
            }

            return null
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-cyber-border">
          <Link
            to="/#blog"
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
          </Link>
        </footer>
      </div>
    </article>
  )
}
