import React from "react";
import GoodsCard from "./GoodsCard.js";
import './Gallery.css';

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: "Apple",
      image: "/images/apple.png",
      price: "$1.99 per pound",
    },
    {
      id: 2,
      name: "Lime",
      image: "/images/lime.png",
      price: "$0.50 each",
    },
    {
      id: 3,
      name: "Mango",
      image: "/images/mango.png",
      price: "$2.99 each",
    },
    {
      id: 4,
      name: "Peach",
      image: "/images/peach.png",
      price: "$2.49 per pound",
    },
    {
      id: 5,
      name: "Strawberry",
      image: "/images/strawberry.png",
      price: "$3.99 per pound",
    },
    {
      id: 6,
      name: "Watermelon",
      image: "/images/watermelon.png",
      price: "$0.39 per pound",
    },
  ];

  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
