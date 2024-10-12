import Slider from "react-slick";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";

const Articles = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const articles = [
    {
      profileDate: "30/5/2023",
      profileName: "Abhivibha Kanmani",
      profileImg: profile1,
      type: "Investment",
      title: "How to Boost Your Website Traffic",
      summary:
        "Learn various strategies to increase traffic to your website using SEO and marketing techniques.",
      img: card3,
    },
    {
      profileDate: "30/5/2023",
      profileName: "John Doe",
      profileImg: profile2,
      type: "Forex Trading",
      title: "Swing Trading Definition?",
      summary:
        "Our platform is not only about trading—it is also a hub for knowledge and learning. We provided.",
      img: card2,
    },
    {
      profileDate: "30/5/2023",
      profileName: "Jane Smith",
      profileImg: profile3,
      type: "Investment",
      title: "Options Trading business?",
      summary:
        "Security is our top priority, and we employ robust measures to ensure the safety of your funds.",
      img: card1,
    },
  ];

  return (
    <section className="py-5 mx-20" id="Blog">
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-12 pb-6">
          <span className="text-green-500">Product</span> Roadmap
        </h1>
        <p className="text sm:text-xl lg:text-1xl mb-8">
          A product roadmap shows the path ahead, helps teams <br /> plan, and
          guides the delivery of the product.
        </p>
      </div>

      <div className="pt-20 pb-5">
        <Slider {...settings}>
          {articles.map((article, index) => (
            <div
              key={index}
              className="mx-2 p-5 py-8 border border-gray-300 rounded-lg profile-slider" // Adjusted for visibility and spacing
              style={{ width: '95%' }} // Consistent width for all cards
            >
              <img src={article.img} alt={article.title} className="mb-4 text-white" />
              <div className="flex items-center mb-2">
                <p className="text-white px-5 py-2 rounded-lg font-semibold bg-green-500">{article.type}</p>
              </div>
              <h3 className="text-xl font-bold text-white">{article.title}</h3>
              <p className="mb-4 text-white">{article.summary}</p>

              <div className="mt-4 flex items-center mb-2">
                <img
                  src={article.profileImg}
                  alt={article.profileName}
                  className="w-10 h-10 rounded-full mr-3 "
                />
                <div>
                  <p className="font-bold text-white">{article.profileName}</p>
                  <p className="text-sm text-white">{article.profileDate}</p>
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

export default Articles;
