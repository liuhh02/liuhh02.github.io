import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Awards from './components/Awards/Awards'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <div className="grid-container">
          <div className="center-screen"><img src="https://github-readme-stats.vercel.app/api?username=liuhh02&show_icons=true&locale=en&theme=vue&hide=prs,issues" alt="liuhh02" /> </div>
          <div className="center-screen"><img src="https://github-readme-stats.vercel.app/api/top-langs?username=liuhh02&show_icons=true&locale=en&langs_count=6&layout=compact&theme=vue&hide=cython,html,scss,css" alt="liuhh02" /> </div>
        </div>
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Certificates />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
