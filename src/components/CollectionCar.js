import "../styles.css";
import React from "react";
import weth from "../assets/weth.png";

export default function CollectionCard({ id, name, traits, image }) {
  return (
    <div className="collectionCard">
      <img src={image} alt="test" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="test" />
          <div className="price">{traits[0].value}</div>
        </div>
      </div>
    </div>
  );
}
