import React from "react";
import Product from "../Product/Product";
import products from "../../data/product";

function ProductList() {
  const chunkSize = 3; 
  const slides = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  return (
    <>
      {slides.map((slide, index) => (
        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
          <div className="d-flex justify-content-center gap-3">
            {slide.map((product) => (
            
                <Product product={product} key={product.id}/>
            
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
