import React, { useEffect, useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="Count">
      <div className="Count-buttons">
        <button disabled={count <= 1} onClick={decrease}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>
          +
        </button>
      </div>
      <div className="Count-add-product">
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
