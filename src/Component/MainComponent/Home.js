import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { Link } from "react-router-dom";

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
      img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
      title: "Egg",
    //   description: "Description for Product 1",
    },
    {
      img: "https://cdn4.volusion.store/etwvu-tkhop/v/vspfiles/photos/420-2.jpg",
      title: "Chinken Wing",
    //   description: "Description for Product 2",
    },
    {
      img: "https://i0.wp.com/www.thegoodeatsdiner.com/wp-content/uploads/2020/08/28_chicken_wings_jumbo.jpg?fit=1000%2C736&ssl=1",
      title: "Boneless Chinken",
    //   description: "Description for Product 3",
    },
    {
      img: "https://fryit.co/wp-content/uploads/2023/04/thawed-chicken-wings_01-mcw.jpg",
      title: "Chinken Curry",
    //   description: "Description for Product 4",
    },
    {
      img: "https://www.inspiredtaste.net/wp-content/uploads/2023/08/Simple-Whole-Roasted-Recipe-Video.jpg",
      title: "Chinken",
    //   description: "Description for Product 5",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/fish-story-647_120617055032.jpg?VersionId=8lgq8R3m73XTGRESTwi9DtI8HKHhsF6K",
      title: "Fish",
    //   description: "Description for Product 6",
    },
    {
      img: "https://media.licdn.com/dms/image/C5612AQHR3R8uD3j21Q/article-cover_image-shrink_600_2000/0/1597008473365?e=2147483647&v=beta&t=AEBARVD2jgRvtbEz_6c1YTxGWLkuR193E3U-BPlsXCo",
      title: "Mutton",
    //   description: "Description for Product 7",
    },
  ];


  const shopsData = [
    {
        img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid", // Use the direct image URL
        name: "Shop 1",
        rating: 4,
      },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Shop 2",
      rating: 5,
    },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Shop 3",
      rating: 3,
    },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Shop 4",
      rating: 4,
    },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Shop 5",
      rating: 5,
    },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Shop 6",
      rating: 4,
    },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
      name: "Shop 7",
      rating: 3,
    },
    {
      img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
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
      <Link to="/dash" > <h2 className="text-center" style={{ color: "#9A292F" }}> 
          Shops To Explore
        </h2></Link>
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
