import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Curriculum from "./pages/Curriculum"
import Gallery from "./pages/Gallery"
import Achievement from "./pages/Achievement"
import Content from "./pages/Content"
import Footer from "./components/Footer"
import About from "./pages/About"
const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/curriculum" element={<Curriculum/>} />
        <Route path="/gallery"  element={<Gallery/>}/>
        <Route path="/achievement" element={<Achievement/>}/>
        <Route path="/contact-us" element={<Content/>}/>



      </Routes>
      <Footer/>

      
      
    </div>
  )
}

export default App
