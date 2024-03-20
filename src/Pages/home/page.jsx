import About from "../../Components/Home/About";
import Download from "../../Components/Home/Download";
import Footer from "../../Components/Home/Footer";
import Hero from "../../Components/Home/Hero";
import Partners from "../../Components/Home/Partners";
import Services from "../../Components/Home/Services";

export default function Homepage() {
  return (
    <div>
        <Hero />
        <Services />
        <About />
        <Partners />
        <Download />
        <Footer />
    </div>
  )
}
