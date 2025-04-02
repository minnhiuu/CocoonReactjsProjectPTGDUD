import React from "react";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { fetchApi } from "../../api/fecthAPI";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const { data, error } = await fetchApi("/products");
      if (data) setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  {
    loading && <p>Dang tai du lieu</p>;
  }

  return (
    <>
      {slides.map((slide, index) => (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={index}
        >
          <div className="d-flex justify-content-center gap-3">
            {slide.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
