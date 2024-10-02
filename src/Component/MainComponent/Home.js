import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides in one row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slidesData = [
    {
      img: "https://via.placeholder.com/150",
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description for Product 2",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "Description for Product 3",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Product 4",
      description: "Description for Product 4",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Product 5",
      description: "Description for Product 5",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Product 6",
      description: "Description for Product 6",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Product 7",
      description: "Description for Product 7",
    },
  ];


  const shopsData = [
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 1",
      rating: 4,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 2",
      rating: 5,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 3",
      rating: 3,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 4",
      rating: 4,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 5",
      rating: 5,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 6",
      rating: 4,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 7",
      rating: 3,
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Shop 8",
      rating: 5,
    },
  ];
  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center" style={{ color: "#9A292F" }}>
          Order Fresh Chicken & Egg Online In Your City{" "}
        </h2>
        <Slider {...settings}>
          {/* <h1>sfgbfnvkmc</h1> */}
          {slidesData.map((slide, index) => (
            <div key={index} className="slide-item text-center">
              {/* Circular Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="circular-image"
              />
              {/* Content Below Image */}
              <h5 className="mt-3">{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mt-5">
        <h2 className="text-center" style={{ color: "#9A292F" }}>
          Shop Cards
        </h2>
        <div className="row">
          {shopsData.map((shop, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card shop-card shadow">
                <img src={shop.img} alt={shop.name} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{shop.name}</h5>
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < shop.rating ? "text-warning" : "text-secondary"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
