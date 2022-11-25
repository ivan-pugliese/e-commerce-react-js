import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function ItemDetail({ data, alt }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <>
      <div className="Card-detail">
        <img src={data.img} alt={alt} />
        <div>
          <h4>{data.name}</h4>
          <p>Precio: ${data.price}</p>
          <p>Stock: {data.stock}</p>
          <div className="Buttons-detail">
            {goToCart ? (
              <Link to="/cart">
                <button className="Finish">Ir al carrito</button>
              </Link>
            ) : (
              <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
            )}
            <div className="Send">
              <p>Envíos gratis!</p>
              <LocalShippingIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
