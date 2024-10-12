import Slider from "react-slick";
import { Testimonials_cards } from "../constants";

const Testimonials = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000, // Slower speed (higher value means slower)
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Image stays for 3 seconds before sliding
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024, // Medium devices (tablets)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Small devices (landscape phones)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // Extra small devices (portrait phones)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


    
  return (
    <section className="py-5 mx-20">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Connect</span> With Our Clients
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          We love connecting with our clients to hear about their <br />
          experiences and how we can improve.
        </p>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {Testimonials_cards.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 py-10 px-8 my-10  border testimonial-card rounded-lg mx-2 text-white ">
              <p className="mb-4">{testimonial.description}</p>
              <div className="flex items-center  py-5 border-t-2 border-green-800 ">
                <img
                  src={testimonial.personImg}
                  alt={`${testimonial.personName}'s testimonial`}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className=" ">
                  <h4 className="font-bold">{testimonial.personName}</h4>
                  <h6 className="text-sm">{testimonial.personSub}</h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center">
        <button className="border-spacing-0 rounded-lg bg-green-500 px-6 py-2 mt-10 mb-5 text-xl font-bold text-white">
          Load More
        </button>
      </div>
      
    </section>

    
  );
};

export default Testimonials;
