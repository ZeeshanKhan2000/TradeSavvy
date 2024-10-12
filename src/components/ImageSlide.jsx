import Slider from "react-slick";
import { SLIDER_IMAGES } from "../constants"; // Importing the images

const ImagSlider = () => {
  const settings = {
    dots: false, // Disable dots
    arrows: false, // Disable arrows
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="py-10">
      <div className=" py-5 border-t-4 border-b-4 border-green-900">
        <div className="px-10 py-4 bg-green-900">
          <div className="slider-container">
            <Slider {...settings}>
              {SLIDER_IMAGES.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-12 md:w-auto   mx-0"
                    style={{ margin: "0px", padding: "0px" }} // Manually setting margin to 0
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagSlider;
