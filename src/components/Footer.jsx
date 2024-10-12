const Footer = () => {
    return (
      <section className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-10 px-6 md:px-10 lg:px-20 items-start">
          
          {/* Personal Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold py-2">TradeSavvy</h2>
            <p className="text-base py-2">
              Welcome to our trading site! We offer the best, most affordable products and services around. Shop now and start finding great deals!
            </p>
            <button className="bg-green-500 text-base text-white rounded-lg px-8 py-2 mt-4 transition duration-300 hover:bg-green-600">
              Download App
            </button>
          </div>
          
          {/* Quick Links Section */}
          <div className="pl-6 sm:pl-10">
            <h2 className="font-bold text-xl pb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="text-base transition duration-300 hover:text-green-400">About Us</li>
              <li className="text-base transition duration-300 hover:text-green-400">Teams</li>
              <li className="text-base transition duration-300 hover:text-green-400">Services</li>
              <li className="text-base transition duration-300 hover:text-green-400">Features</li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div className="pl-6 sm:pl-10">
            <h2 className="font-bold text-xl pb-4">Support</h2>
            <ul className="space-y-2">
              <li className="text-base transition duration-300 hover:text-green-400">Terms & Conditions</li>
              <li className="text-base transition duration-300 hover:text-green-400">Privacy Policy</li>
              <li className="text-base transition duration-300 hover:text-green-400">FAQs</li>
              <li className="text-base transition duration-300 hover:text-green-400">Support Center</li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="pl-6 sm:pl-10">
            <h2 className="font-bold text-xl pb-4">Company</h2>
            <ul className="space-y-2">
              <li className="text-base transition duration-300 hover:text-green-400">Careers</li>
              <li className="text-base transition duration-300 hover:text-green-400">Updates</li>
              <li className="text-base transition duration-300 hover:text-green-400">Jobs</li>
              <li className="text-base transition duration-300 hover:text-green-400">Announcements</li>
            </ul>
          </div>
  
        </div>
  
        {/* Footer Bottom Section */}
        <div className="text-center py-5 border-t border-gray-700">
          <p className="text-sm">&copy; {new Date().getFullYear()} Zeeshan Afzal. All rights reserved.</p>
        </div>
      </section>
    );
  };
  
  export default Footer;
  