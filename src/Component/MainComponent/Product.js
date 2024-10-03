import React from 'react'
// import './Product.css'
const Product = () => {
    const shopsData = [
        {
          img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg",
          name: "Egg",
          price:"144/500gm",
          rating: 4,
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJt99xDUf1rWLt7yfRmke6yt2eKRoVrZsWw07S8intbLjNq5LcZx5uhiXFMld5O3HJ3Q&usqp=CAU/150",
          name: "Chicken",
          price:"144/500gm",
          rating: 5,
        },
        {
          img: "https://meatmachine.co.uk/cdn/shop/products/ChickenWings.jpg?v=1585681489/150",
          name: "Chicken Wing",
          price:"144/500gm",
          rating: 3,
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZnAVxas9Oy_4OHbaxPVqNmXdGsCgtnppZA&s/150",
          name: "Boneless chicken",
          price:"144/500gm",
          rating: 4,
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh0dQvzPjbN0ktAA5tsuZ7ExRkn3X8Ya8Vg&s/150",
          name: "Full Chicken Curry",
          price:"144/500gm",
          rating: 5,
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T4ZYxpTBO4kZUgu5XdlFPpPetC_Bd3f9ucH_ucIyhNRd5JE87wRXmscOFL39EJ06qpg&usqp=CAU/150",
          name: "Chicken Wing",
          price:"144/500gm",
          rating: 4,
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8xcZADYgt7cMntqxo6HUilfYIX6TD4iPfi0YjawEYJs3WhZo0XBnm1UlGqYNBcF2NIo&usqp=CAU/150",
          name: "Boneless Chicken",
          price:"144/500gm",
          rating: 3,
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2heSrp8WJ8GpAVpCXLuKusmQ7QdjIwHfM7Q&s/150",
          name: "Full chicken curry",
          price:"144/500gm",
          rating: 5,
        },
      ];
  return (
    <div>
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#9A292F" }}>
        Shop Cards
      </h2>
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