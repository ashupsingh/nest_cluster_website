import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Leadership from './pages/Leadership'
import ScientificTeam from './pages/ScientificTeam'
import ExecutiveTeam from './pages/ExecutiveTeam'
import Verticals from './pages/Verticals'
import Spokes from './pages/Spokes'
import Resources from './pages/Resources'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Logo from './pages/Logo'

function App() {
  const [loading, setLoading] = useState(true)
  const handleFinish = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onFinish={handleFinish} />}
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/scientific-team" element={<ScientificTeam />} />
            <Route path="/executive-team" element={<ExecutiveTeam />} />
            <Route path="/verticals" element={<Verticals />} />
            <Route path="/spokes" element={<Spokes />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logo" element={<Logo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
