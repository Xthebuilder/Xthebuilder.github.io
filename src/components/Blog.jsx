import { Link } from 'react-router-dom'
import { blogPosts, formatDate } from '../data/blogPosts'

export default function Blog() {
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
              className="cyber-card neon-border-glow group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* Title */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block"
                  >
                    <h3 className="font-mono text-lg font-bold text-cyber-text group-hover:text-neon-cyan transition-colors mb-2">
                      {post.title}
                    </h3>
                  </Link>

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
                <Link
                  to={`/blog/${post.slug}`}
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
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
