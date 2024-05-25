import "./App.css";
import Footer from "./components/Footer";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import Tours from "./pages/tours/Tours";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name='/' className='element'>
        <HomePage />
      </Element>
      <Element name='tours' className='element'>
        <Tours />
      </Element>
      <Element name='about' className='element'>
        <About />
      </Element>
      <Element name='contacts' className='element'>
        <Contact />
      </Element>
      <Footer/>
    </>
  );
}

export default App;
