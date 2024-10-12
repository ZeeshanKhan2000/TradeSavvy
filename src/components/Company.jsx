import { motion } from "framer-motion"; // Import motion
import companyImg from "../assets/about-img.png";

const Company = () => {
  // Define animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-5 px-4 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        {/* Text content with animation */}
        <motion.div
          className="text-white order-1 sm:order-1"
          variants={fadeInLeft} // Set the variants for text
          initial="hidden" // Initial state
          animate="visible" // Animate to visible
          transition={{ duration: 0.5 }} // Transition properties
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-6 pb-4">
            Meet <span className="text-green-500">Our Company</span> Unless Miss The Opportunity
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8">
            Hey there! So glad you stopped by to Meet Our Company. Don't miss out on this opportunity to learn about what we do and the amazing team that makes it all happen! Our company is all about creating innovative solutions and providing top-notch services to our clients. From start to finish, we're dedicated to delivering results that exceed expectations.
          </p>
          <a href="#" className="bg-green-400 p-2 border-green-400 rounded-md">
            Explore More
          </a>
        </motion.div>

        {/* Image with animation */}
        <motion.div
          className="flex justify-center order-2 sm:order-2"
          variants={fadeInRight} // Set the variants for the image
          initial="hidden" // Initial state
          animate="visible" // Animate to visible
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the image
        >
          <img
            src={companyImg}
            alt="About Img"
            className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
