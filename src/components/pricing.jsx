import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="py-10" id="Our-pricing">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Our</span> Pricing
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          We offer the best pricings around - from installations to <br /> repairs, maintenance, and more!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-10 gap-6">
        {/* Basic Plan */}
        <motion.div
          className="p-6 rounded-lg price-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl text-white font-bold py-2">Basic</h1>
          <h4 className="text-2xl text-white font-bold py-2">
            <span className="text-green-500">$99</span> /Monthly
          </h4>
          <ul className="py-5 mt-4 border-t-2 border-green-950">
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Weekly online meeting</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Unlimited learning access</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> 24/7 technical support</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Personal training</li>
          </ul>
          <button className="border-green-500 border rounded-md w-full px-6 mt-4 py-2 text-white text-base font-bold">Price Plan</button>
        </motion.div>

        {/* Standard Plan */}
        <motion.div
          className="p-6 rounded-lg price-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl text-white font-bold py-2">Standard</h1>
          <h4 className="text-2xl text-white font-bold py-2">
            <span className="text-green-500">$149</span> /Monthly
          </h4>
          <ul className="py-5 mt-5 border-t-2 border-green-950">
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Weekly online meeting</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Unlimited learning access</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> 24/7 technical support</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Personal training</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Business analysis</li>
          </ul>
          <button className="border-green-500 border rounded-md w-full px-6 mt-4 py-2 text-white text-base font-bold">Price Plan</button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          className="p-6 rounded-lg price-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-3xl text-white font-bold py-2">Premium</h1>
          <h4 className="text-2xl text-white font-bold py-2">
            <span className="text-green-500">$200</span> /Monthly
          </h4>
          <ul className="py-5 mt-4 border-t-2 border-green-950">
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Weekly online meeting</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Unlimited learning access</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> 24/7 technical support</li>
            <li className="flex items-center gap-3 text-white text-base py-2"><span className="text-green-500 text-xl"><FaCheckCircle /></span> Personal training</li>
          </ul>
          <button className="border-green-500 border rounded-md w-full px-6 mt-4 py-2 text-white text-base font-bold">Price Plan</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
