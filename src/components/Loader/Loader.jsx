import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="lds-dual-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
