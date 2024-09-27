import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const { id } = useParams();
  const [sProduct, setSProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
      );
      setSProduct(res.data.meals[0]);
    };
    getProduct();
  }, []);

  if (!sProduct) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-9">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={sProduct.strMealThumb}
            alt="meal image"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
            <h2 className="text-lg font-bold text-white">
              {sProduct.strMealName}
            </h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Ingredients</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>{sProduct.strIngredient1}</li>
                <li>{sProduct.strIngredient2}</li>
                <li>{sProduct.strIngredient3}</li>
                <li>{sProduct.strIngredient4}</li>
                <li>{sProduct.strIngredient5}</li>
                <li>{sProduct.strIngredient6}</li>
                <li>{sProduct.strIngredient7}</li>
                <li>{sProduct.strIngredient8}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Measures</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>{sProduct.strMeasure1}</li>
                <li>{sProduct.strMeasure2}</li>
                <li>{sProduct.strMeasure3}</li>
                <li>{sProduct.strMeasure4}</li>
                <li>{sProduct.strMeasure5}</li>
                <li>{sProduct.strMeasure6}</li>
                <li>{sProduct.strMeasure7}</li>
                <li>{sProduct.strMeasure8}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={sProduct.strYoutube}
              target="_blank"
              className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              🍴 Watch Cooking Tutorial 🍴
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
