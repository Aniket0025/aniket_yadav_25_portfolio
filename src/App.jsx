import React from "react"
import CustomCursor from "./components/CustomCursor.jsx"
import IntroAnimation from "./components/IntroAnimation.jsx"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Achievement from "./sections/Achievement.jsx"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import MyWork from "./sections/MyWork"
import Skills from "./sections/Skills"
import Blog from "./sections/Blog"


function App() {

  const [introDone, setIntroDone] = React.useState(false);

  return (

    <>

      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (

        <div className="relative gradient text-white">
          <CustomCursor />
          {/* <ParticlesBackground/> */}

          <Navbar />
          <Home />
          <About />
          <Skills />
          <MyWork />
          <Blog />
          <Achievement />
          {/* <Experience/>
      <Testimonials/> */}
          <Contact />
          <Footer />

        </div>

      )}


    </>
  )
}

export default App
