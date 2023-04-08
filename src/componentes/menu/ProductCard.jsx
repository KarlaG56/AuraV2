import React from "react";
import Aplication from "./Aplication";

const ProductCard = () => {
  return (
    <div className="card" >
      <img src={Aplication[0]} alt="Imagen del producto" className="card-img" />
      <h3 className="card-title">{Aplication[0]}</h3>
      <div className="card-price">Precio: ${Aplication[0]}</div>
    </div>
  );
};

export default ProductCard;
