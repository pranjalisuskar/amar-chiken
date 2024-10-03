import React from 'react'
import './Product.css'
const Product = () => {
    const shopsData = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQADIrYbC5agt9OFuvI5I5hieNxIJAEcQHQ&s",
          name: "Egg",
          price:"144/500gm",
          rating: 4,
        },
        {
          img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
          name: "Chicken",
          price:"144/500gm",
          rating: 5,
        },
        {
          img: "https://t4.ftcdn.net/jpg/02/92/77/85/360_F_292778539_JeGMFXajaQtXpq5nRZLo87suJZkqJ7oS.jpg",
          name: "Chicken Wing",
          price:"144/500gm",
          rating: 3,
        },
        {
          img: "https://newzealandfresh.sg/cdn/shop/products/Screen_Shot_2018-08-14_at_12.16.53_AM_grande.png?v=1563071603",
          name: "Boneless chicken",
          price:"144/500gm",
          rating: 4
        },
        {
          img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
          name: "Full Chicken Curry",
          price:"144/500gm",
          rating: 5,
        },
        {
          img: "https://t4.ftcdn.net/jpg/02/92/77/85/360_F_292778539_JeGMFXajaQtXpq5nRZLo87suJZkqJ7oS.jpg",
          name: "Chicken Wing",
          price:"144/500gm",
          rating: 4,
        },
        {
          img: "https://www.shutterstock.com/image-photo/fresh-turkey-poultry-meat-isolated-260nw-2253215017.jpg",
          name: "Boneless Chicken",
          price:"144/500gm",
          rating: 3,
        },
        {
          img: "https://www.shutterstock.com/image-photo/fresh-raw-chicken-basil-isolated-260nw-1064429528.jpg",
          name: "Full chicken curry",
          price:"144/500gm",
          rating: 5,
        },
      ];
  return (
    <div>
    <div className="container mt-5">
    <h2 className="text-center" style={{ color: "#9A292F" }}>
          Order Fresh Chicken & Egg Online In Your City{" "}
        </h2><br/>
      <div className="row justify-content-center">
        {shopsData.map((shop, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shop-card shadow">
              <img src={shop.img} alt={shop.name} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{shop.name}</h5>
                <h5>{shop.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Product