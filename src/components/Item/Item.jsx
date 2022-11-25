import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ info }) {
  return (
    <div className="Card">
      <img src={info.img} alt={info.name} />
      <div>
        <h4>{info.name}</h4>
        <p>Precio: ${info.price}</p>
        <Link to={`/item/${info.id}`}>
          <button className="Btn-info">+ Info</button>
        </Link>
      </div>
    </div>
  );
}
