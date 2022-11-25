import React from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

export default function ItemList({ data }) {
  return (
    <>
      {!data.length && <Loader />}
      {data.map((product) => (
        <Item key={product.id} info={product} />
      ))}
      ;
    </>
  );
}
