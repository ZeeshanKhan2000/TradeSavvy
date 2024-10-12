import { SERVICES_DATA } from '../constants';
import { motion } from 'framer-motion'; // Import motion

const Services = () => {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const hoverEffect = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }, // Slightly increase the scale on hover
  };

  return (
    <section className="py-5" id='Services'>
      <motion.div
        className="text-center text-white"
        variants={fadeIn} // Set the variants for fade-in effect
        initial="hidden" // Initial state
        animate="visible" // Animate to visible
        transition={{ duration: 0.5 }} // Transition properties
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Services</span> We Offer
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          We offer the best services around - from installations to <br /> repairs, maintenance, and more!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center mx-10 gap-6">
        {SERVICES_DATA.map(service => (
          <motion.div
            key={service.id}
            className="text-white text-center border border-green-300 rounded-lg py-20 px-8 mx-2"
            variants={hoverEffect} // Set the hover effect variants
            initial="rest" // Initial state
            whileHover="hover" // Animate to hover state
            transition={{ type: 'spring', stiffness: 300 }} // Transition properties
          >
            <img src={service.img} alt={service.title} className="mx-auto" />
            <h2 className="py-2 mt-4 text-2xl font-bold">{service.title}</h2>
            <p className="py-2 text">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
