import React from "react";
import "./MenuItem.css";

export default function MenuItem({ image, title, price, desc }) {
  return (
    <div className="menu-item">
      <div className="image-box">
        <img src={image} alt="#"/>
      </div>

      <div className="info-box">
        <div className="top">
          <span className="title">{title}</span>
          <span className="price">{price}</span>
        </div>
        <div className="bottom">{desc}</div>
      </div>
    </div>
  );
}
