import Home from "./components/Home/Home"
import Navbar from "./components/navbar/Navbar"
import About from "./components/About/About"
import React from "react"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/footer"
import Projects from "./components/Projects/Projects"

function App() { 
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
