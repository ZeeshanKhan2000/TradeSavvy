import { motion } from "framer-motion"; // Import motion
import { FaArrowRight } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import heroImg from "../assets/hero-img.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Hero = () => {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="p-6 sm:p-10 lg:p-20" id="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <motion.div
          className="text-white"
          variants={fadeIn} // Set the variants
          initial="hidden" // Initial state
          animate="visible" // Animate to visible
          transition={{ duration: 0.5 }} // Transition properties
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold pt-12 pb-6 ">
            Invest your money with{" "}
            <span className="text-green-500">higher return</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
            Anyone can invest money in different currencies to increase their
            earnings with the help of Bitrader through online.
          </p>
          <div className="hero-btn flex flex-col sm:flex-row items-start sm:items-center">
            <a
              href="#"
              className="bg-green-500 text-white border rounded-lg px-8 py-3 mb-4 sm:mb-0 sm:mr-4 flex items-center hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Get Started <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#"
              className="bg-stone-500 text-white border rounded-lg px-8 py-3 flex items-center gap-2 hover:bg-stone-600 transition duration-300 ease-in-out"
            >
              Watch Video <IoPlay />
            </a>
          </div>
          <div className="py-4">
            <h1 className="text-white text-3xl font-bold">Follow us</h1>
            <ul className="flex items-center mt-4">
              <li className="border rounded-full p-2 text-1xl "><FaFacebookF /></li>
              <li className="border rounded-full p-2 text-1xl mx-2"><FaInstagram /></li>
              <li className="border rounded-full p-2 text-1xl mx-2"><FaLinkedinIn /></li>
              <li className="border rounded-full p-2 text-1xl mx-2"><IoLogoYoutube /></li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="text-white"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the image
        >
          <img
            src={heroImg}
            alt="hero image"
            className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md mx-auto pt-5"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
