import React from "react";
import ProductList from "./ProductList";

const Home = ({ product }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-11">
      {product.map((item, index) => (
        <ProductList item={item} key={index} />
      ))}
    </div>
  );
};

export default Home;
