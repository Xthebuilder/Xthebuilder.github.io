// SEO Helper for Xavier Martin Cofield Portfolio
// Manual meta tag management for GitHub Pages compatibility

export const seoData = {
  siteName: "Xavier Martin Cofield Portfolio",
  siteUrl: "https://xthebuilder.github.io",
  author: "Xavier Martin Cofield",
  defaultTitle: "Xavier Martin Cofield | Python Developer & AI Systems Engineer",
  defaultDescription: "Xavier Martin Cofield is a Python developer specializing in automation, AI systems, and backend development. Building reliable backend systems and AI-powered agents with clean architecture.",
  keywords: [
    "Xavier Martin Cofield",
    "Python Developer", 
    "Software Engineer",
    "AI Systems",
    "Automation",
    "Backend Development",
    "JRVS",
    "Research Agent"
  ]
}

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "Xavier Martin Cofield | Python Developer & AI Systems Engineer",
    description: "Xavier Martin Cofield is a Python developer specializing in automation, AI systems, and backend development. Experienced in building reliable backend systems, intelligent automation, and AI-powered agents.",
    keywords: ["Xavier Martin Cofield", "Python Developer", "AI Systems", "Automation", "Backend Development"]
  },
  about: {
    title: "About Xavier Martin Cofield | Python Developer & Software Engineer",
    description: "Learn about Xavier Martin Cofield's background as a Python developer specializing in automation, AI systems, and backend development. Professional experience and development philosophy.",
    keywords: ["Xavier Martin Cofield", "About", "Python Developer", "Software Engineer", "Career"]
  },
  projects: {
    title: "Projects by Xavier Martin Cofield | Python Development Portfolio",
    description: "Explore Xavier Martin Cofield's portfolio of Python development projects including JRVS AI agent, research automation tools, and backend systems with clean architecture.",
    keywords: ["Xavier Martin Cofield", "Projects", "Portfolio", "JRVS", "Python Projects", "AI Agent"]
  },
  blog: {
    title: "Blog by Xavier Martin Cofield | Python Development Insights",
    description: "Technical articles and insights from Xavier Martin Cofield covering Python development, AI systems, automation best practices, and software engineering experiences.",
    keywords: ["Xavier Martin Cofield", "Blog", "Python Development", "AI Systems", "Technical Articles"]
  },
  contact: {
    title: "Contact Xavier Martin Cofield | Python Developer",
    description: "Get in touch with Xavier Martin Cofield for Python development projects, AI systems consultation, automation solutions, or collaboration opportunities.",
    keywords: ["Xavier Martin Cofield", "Contact", "Python Developer", "Collaboration", "Consultation"]
  }
}

// Generate structured data for person schema
export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Xavier Martin Cofield",
    "jobTitle": "Python Developer",
    "description": "Python developer specializing in automation, AI systems, and backend development",
    "url": "https://xthebuilder.github.io",
    "sameAs": [
      "https://github.com/Xthebuilder",
      "https://www.linkedin.com/in/xavier-martin-c-21447138a/"
    ],
    "knowsAbout": [
      "Python Programming",
      "Backend Development", 
      "AI Systems",
      "Automation",
      "Software Engineering"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Developer"
    }
  }
}

// Generate blog post structured data
export const generateBlogPostSchema = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description || post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person", 
      "name": "Xavier Martin Cofield"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Xavier Martin Cofield Portfolio"
    },
    "url": `https://xthebuilder.github.io/blog/${post.slug}`,
    "keywords": post.tags.join(", ")
  }
}

// Utility to update document title dynamically
export const updateDocumentTitle = (pageKey) => {
  const config = pageConfigs[pageKey] || pageConfigs.home
  if (typeof document !== 'undefined') {
    document.title = config.title
  }
}

// Utility to update meta description dynamically  
export const updateMetaDescription = (pageKey) => {
  const config = pageConfigs[pageKey] || pageConfigs.home
  if (typeof document !== 'undefined') {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description)
    }
  }
}