import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import AddProductImg from "../../assets/img-add-product.svg";

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <section className="No-products-container">
          <p className="No-products">
            No hay productos para mostrar, arma tu carrito!
          </p>
          <Link to="/">
            <button className="Btn-buy">Realizar compras</button>
          </Link>
          <img src={AddProductImg} alt="Añadir producto" />
        </section>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="Total-clear-container">
        <p className="Total">Total : $ {totalPrice()}</p>
        <button className="Btn-clear" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
      <div className="Finish-container">
        <Link to="/checkout">
          <button className="Finish">Finalizar compra</button>
        </Link>
      </div>
    </>
  );
}
