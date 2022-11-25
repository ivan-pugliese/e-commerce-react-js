import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./Checkout.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import AddProductImg from "../../assets/img-add-product.svg";

export default function Checkout() {
  const { totalPrice, clearCart, cart } = useCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  function finish() {
    const order = {
      buyer: { name, email, tel },
      total: totalPrice(),
      items: cart,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      toast.success(
        `Felicidades ${name}!
            El ID de tu compra es ${id}`,
        {
          position: "top-center",
        }
      );
    });
  }
  const validateForm = (event) => {
    event.preventDefault();
    if (!name || !email) {
      toast.error("Debe completar todos los campos");
    } else {
      finish();
      clearCart();
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {cart.length === 0 ? (
        <section className="No-products-container-2">
          <p className="No-products">
            No hay productos para mostrar, arma tu carrito!
          </p>
          <Link to="/">
            <button className="Btn-buy">Realizar compras</button>
          </Link>
          <img src={AddProductImg} alt="Añadir producto" />
        </section>
      ) : (
        <form className="Checkout-container" onSubmit={validateForm}>
          <h1>🛒 Ingrese sus datos y termine su compra! 🛒</h1>
          <div className="Checkout">
            <input
              type="text"
              placeholder="Ingrese su nombre"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Ingrese su teléfono"
              onChange={(e) => setTel(e.target.value)}
              required
            />
            <button type="submit">Finalizar proceso</button>
          </div>
        </form>
      )}
    </>
  );
}
