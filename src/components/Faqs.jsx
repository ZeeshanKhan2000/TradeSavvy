import { useState } from "react";
import faqImg from "../assets/faq-img.png";

const Faqs = () => {
  // Track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle the accordion
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-5 mx-20 ">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Frequently</span> <br /> Asked
          Questions
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          Hey there! Got questions? We've got answers. Check out our <br /> FAQ
          page for all the deets. Still not satisfied? Hit us up.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-20">
        <div className="">
          <div id="accordion-collapse">
            {/* Accordion 1 */}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                onClick={() => toggleAccordion(1)} // Toggle when clicked
                className="flex items-center justify-between w-full p-5 font-medium text-white bg-gray-800 border border-b-0 border-gray-700 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:hover:bg-gray-700 gap-3 transition duration-300"
                aria-expanded={openAccordion === 1} // Change aria-expanded based on state
                aria-controls="accordion-collapse-body-1"
              >
                <span>What is Flowbite?</span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    openAccordion === 1 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${openAccordion === 1 ? "" : "hidden"}`}
            >
              <div className="p-5 border border-b-0 border-gray-700 bg-gray-800">
                <p className="mb-2 text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS...
                </p>
              </div>
            </div>

            {/* Accordion 2 */}
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                onClick={() => toggleAccordion(2)}
                className="flex items-center justify-between w-full p-5 font-medium text-white bg-gray-800 border border-b-0 border-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:hover:bg-gray-700 gap-3 transition duration-300"
                aria-expanded={openAccordion === 2}
                aria-controls="accordion-collapse-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    openAccordion === 2 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className={`${openAccordion === 2 ? "" : "hidden"}`}
            >
              <div className="p-5 border border-b-0 border-gray-700 bg-gray-800">
                <p className="mb-2 text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software...
                </p>
              </div>
            </div>

            {/* Accordion 3 */}
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                onClick={() => toggleAccordion(3)}
                className="flex items-center justify-between w-full p-5 font-medium text-white bg-gray-800 border border-b-0 border-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:hover:bg-gray-700 gap-3 transition duration-300"
                aria-expanded={openAccordion === 3}
                aria-controls="accordion-collapse-body-3"
              >
                <span>
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    openAccordion === 3 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className={`${openAccordion === 3 ? "" : "hidden"}`}
            >
              <div className="p-5 border border-t-0 border-gray-700 bg-gray-800">
                <p className="mb-2 text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source...
                </p>
              </div>
            </div>

            {/* Accordion 4 (New) */}
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                onClick={() => toggleAccordion(4)}
                className="flex items-center justify-between w-full p-5 font-medium text-white bg-gray-800 border border-b-0 border-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:hover:bg-gray-700 gap-3 transition duration-300"
                aria-expanded={openAccordion === 4}
                aria-controls="accordion-collapse-body-4"
              >
                <span>How to install Flowbite?</span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    openAccordion === 4 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className={`${openAccordion === 4 ? "" : "hidden"}`}
            >
              <div className="p-5 border border-t-0 border-gray-700 bg-gray-800">
                <p className="mb-2 text-gray-400">
                  You can install Flowbite via npm or yarn with the following
                  command: `npm install flowbite`...
                </p>
              </div>
            </div>

            {/* Accordion 5 (New) */}
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                onClick={() => toggleAccordion(5)}
                className="flex items-center justify-between w-full p-5 font-medium text-white bg-gray-800 border border-b-0 border-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:hover:bg-gray-700 gap-3 transition duration-300"
                aria-expanded={openAccordion === 5}
                aria-controls="accordion-collapse-body-5"
              >
                <span>Can I customize Flowbite components?</span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    openAccordion === 5 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              className={`${openAccordion === 5 ? "" : "hidden"}`}
            >
              <div className="p-5 border border-t-0 border-gray-700 bg-gray-800">
                <p className="mb-2 text-gray-400">
                  Yes, Flowbite components can be customized by editing their
                  styles or overriding them using Tailwind CSS classes...
                </p>
              </div>
            </div>

            {/* Accordion 6 (New) */}
            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                onClick={() => toggleAccordion(6)}
                className="flex items-center justify-between w-full p-5 font-medium text-white bg-gray-800 border border-b-0 border-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:hover:bg-gray-700 gap-3 transition duration-300"
                aria-expanded={openAccordion === 6}
                aria-controls="accordion-collapse-body-6"
              >
                <span>Does Flowbite support dark mode?</span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    openAccordion === 6 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-6"
              className={`${openAccordion === 6 ? "" : "hidden"}`}
            >
              <div className="p-5 border border-t-0 border-gray-700 bg-gray-800">
                <p className="mb-2 text-gray-400">
                  Yes, Flowbite fully supports dark mode, and you can toggle it
                  with the help of a toggle component...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Image Section */}
        <div className="faq-image items-center flex justify-center">
          <img src={faqImg} alt="FAQ image" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
