import { motion } from 'framer-motion';

const Product = () => {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Starts off-screen and invisible
    visible: { opacity: 1, y: 0 },  // Ends up on-screen and visible
  };

  return (
    <section className="py-5 product-section">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Product</span> Roadmap
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          A product roadmap shows the path ahead, helps teams <br /> plan, and guides the delivery of the product.
        </p>
      </div>

      {/* First card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-6">
        <div></div>
        <motion.div
          className="text-white product border-spacing-0 border-green-300 mx-0 sm:rounded-lg p-6 px-8 rounded-lg sm:mx-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Project Research</h1>
            <h6 className="text-2xl font-bold">P1</h6>
          </div>
          <p className="py-8">
            Project research is the backbone of any successful project. It involves gathering information, setting objectives, and analyzing data to ensure the project is achievable. Without proper research, projects can fail due to lack of knowledge.
          </p>
        </motion.div>
      </div>

      {/* Second card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-6">
        <div className="text-white product border-spacing-0 border-green-300 mx-0 sm:rounded-lg p-6 px-8 rounded-lg sm:mx-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Project Planning</h1>
            <h6 className="text-2xl font-bold">P2</h6>
          </div>
          <p className="py-8">
            Project planning is crucial to ensure the project stays on track. It includes defining scope, timelines, and resources needed to achieve project goals.
          </p>
        </div>
        <div></div>
      </div>

      {/* Third card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-6">
        <div></div>
        <motion.div
          className="text-white product border-spacing-0 border-green-300 mx-0 sm:rounded-lg p-6 px-8 rounded-lg sm:mx-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Product Development</h1>
            <h6 className="text-2xl font-bold">P3</h6>
          </div>
          <p className="py-8">
            Product development involves creating the product based on requirements and specifications established during the planning phase.
          </p>
        </motion.div>
      </div>

      {/* Fourth card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-6">
        <div className="text-white product border-spacing-0 border-green-300 mx-0 sm:rounded-lg p-6 px-8 rounded-lg sm:mx-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Testing Phase</h1>
            <h6 className="text-2xl font-bold">P4</h6>
          </div>
          <p className="py-8">
            The testing phase ensures the product functions correctly and meets quality standards. It includes various testing methodologies to validate the product.
          </p>
        </div>
        <div></div>
      </div>

      {/* Fifth card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-6">
        <div></div>
        <motion.div
          className="text-white product border-spacing-0 border-green-300 mx-0 sm:rounded-lg p-6 px-8 rounded-lg sm:mx-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Launch</h1>
            <h6 className="text-2xl font-bold">P5</h6>
          </div>
          <p className="py-8">
            The launch phase is when the product is released to the market. This stage requires careful planning to ensure a successful introduction.
          </p>
        </motion.div>
      </div>

      {/* Sixth card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-6">
        <div className="text-white product border-spacing-0 border-green-300 mx-0 sm:rounded-lg p-6 px-8 rounded-lg sm:mx-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Post-Launch Review</h1>
            <h6 className="text-2xl font-bold">P6</h6>
          </div>
          <p className="py-8">
            After launch, it’s essential to review the product's performance and gather user feedback to make necessary improvements in future iterations.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Product;
