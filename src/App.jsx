import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'flowbite/dist/flowbite.min.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImagSlider from "./components/ImageSlide";
import Company from "./components/Company";
import Services from "./components/Services";
import Product from "./components/Product";
import Pricing from "./components/pricing";
import Advisers from "./components/Advisers";
import Articles from "./components/Articles";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImagSlider/>
      <Company/>
      <Services/>
      <Product/>
      <Pricing />
      <Advisers/>
      <Articles/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
