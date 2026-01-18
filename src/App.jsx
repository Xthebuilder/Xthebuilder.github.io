import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import BlogSection from './components/BlogSection'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen grid-bg ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <BlogSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
