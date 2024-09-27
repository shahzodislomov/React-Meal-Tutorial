import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ item }) => {
  return (
    <div className="">
      <Link to={`product/${item.strMeal}`}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {item.strMeal}
            </h3>
            <p className="text-gray-600 mt-2 max-h-20 overflow-auto">
              {item.strInstructions}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
