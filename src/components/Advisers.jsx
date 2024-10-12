import AdvisrImg from "../assets/adv-1.png";
import AdvisrImg2 from "../assets/adv-2.png";
import AdvisrImg3 from "../assets/adv-3.png";
import AdvisrImg4 from "../assets/adv-4.png";
import AdvisrImg5 from "../assets/adv-5.png";
import AdvisrImg6 from "../assets/adv-6.png";
import AdvisrImg7 from "../assets/adv-7.png";
import AdvisrImg8 from "../assets/adv-8.png";

const advisersData = [
  { img: AdvisrImg, name: "Diane Russel", role: "Trade Captain" },
  { img: AdvisrImg2, name: "Theresa Wed", role: "Strategic Advisor" },
  { img: AdvisrImg3, name: "Albert Flores", role: "Development Specialist" },
  { img: AdvisrImg4, name: "Courteny Herny", role: "Management Consultant" },
  { img: AdvisrImg5, name: "Daral Steward", role: "Growth Strategist" },
  { img: AdvisrImg6, name: "Wade Warren", role: "Trade Consultant" },
  { img: AdvisrImg7, name: "Cody Fisher", role: "HR Consultant" },
  { img: AdvisrImg8, name: "Bessie Cooper", role: "Financial Advisor" },
];

const Advisers = () => {
  return (
    <section className="py-10" id="Teams">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Meet</span> Our Advisers
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          Hey everyone, meet our amazing advisers! They're here to help <br />
          and guide us through anything.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mt-6 mx-10 gap-6">
        {advisersData.map((adviser, index) => (
          <div key={index} className="relative">
            <div>
              <img src={adviser.img} alt={adviser.name} />
            </div>
            <div className="absolute w-[90%] h-auto p-4 bg-[#00150fcc] backdrop-blur-md left-1/2 bottom-[5%] transform -translate-x-1/2 translate-y-[5%] rounded-2xl">
              <h2 className="text-white text-xl font-bold">{adviser.name}</h2>
              <h6 className="text-white text-base font-semibold">
                {adviser.role}
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="border-spacing-0 rounded-lg bg-green-500 px-6 py-2 mt-10 mb-5 text-xl font-bold text-white">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Advisers;
