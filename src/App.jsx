import './App.css'
import Header from "./componets/headerPage/header.jsx"
import ReadMore from "./componets/read-More/style.jsx"
import Features from "./componets/features/feature.jsx"
import About from "./componets/about/about.jsx"
import Services from "./componets/services/services.jsx"
import Testimonials from "./componets/Testimonials/Testimonials.jsx"
import Contact from "./componets/Contact/contact.jsx"
import OurBlog from "./componets/our-blog/our-blog.jsx"
import Footer from "./componets/footer/footer.jsx"

function App() {

  return (
    <>
      <div className="comtainer">
        <Header />
        <ReadMore />
        <Features />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <OurBlog />
        <Footer />
      </div>
    </>
  )
}

export default App
