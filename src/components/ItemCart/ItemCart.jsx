import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

export default function ItemCart({ product }) {
  const { removeProduct } = useCartContext();

  return (
    <section className="Card-cart-container">
      <div className="Card-cart">
        <img src={product.img} alt={product.name} />
        <div>
          <h4>{product.name}</h4>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio: ${product.price}</p>
          <p>Subtotal: ${product.quantity * product.price} </p>
          <button
            onClick={() => removeProduct(product.id)}
            className="Btn-delete"
          >
            Eliminar
          </button>
        </div>
      </div>
    </section>
  );
}
