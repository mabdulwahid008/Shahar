import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import HowWeDo from "./components/HowWeDo";
import MobileSlider from "./components/MobileSlider";
import SecondContactForm from "./components/SecondContactForm";
import SecondSection from "./components/SecondSection";
import StickyFooter from "./components/StickyFooter";
import Testimonials from "./components/Testimonials";
import ThirdContactForm from "./components/ThirdContactForm";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import ReactGA from 'react-ga';

ReactGA.initialize('G-6778HC6QN8');

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      {/* <MobileSlider /> */}
      <ContactForm />
      <AboutUs />
      <Testimonials />
      <HowWeDo />
      <Faqs />
      <SecondContactForm />
      {/* <ThirdContactForm /> */}
      <Footer />
      <StickyFooter />
    </>
  );
}

export default App;
