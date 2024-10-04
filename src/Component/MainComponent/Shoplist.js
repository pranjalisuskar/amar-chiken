import React from 'react';
import { useParams } from 'react-router-dom';

// Sample shops data
const shopsData = [
  {
    img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
    name: "Shop 1",
    rating: 4,
  },
  {
    img: "https://img.freepik.com/premium-vector/colorful-fried-chicken-shop-cartoon-vector-design_1080480-126900.jpg?semt=ais_hybrid",
    name: "Shop 2",
    rating: 5,
  },
  // ...other shops
];

function Shoplist() {
  const { shopName } = useParams(); // Get the shop name from the URL
  const shop = shopsData.find((shop) => shop.name === shopName); // Find the shop data

  if (!shop) {
    return <div>Shop not found</div>; // Handle case where shop is not found
  }

  return (
    <div className="container mt-5">
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
          <p className="mt-3">This is the detail page for {shop.name}.</p>
        </div>
      </div>
    </div>
  );
}

export default Shoplist;
