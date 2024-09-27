import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Searchpanel = () => {
  const { name } = useParams();
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      setResponseData(response.data.meals);
    };
    getData();
  }, []);

  if (!responseData) {
    return (
      <h1 className="text-center font-bold text-3xl">
        We dont have a products {name}
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-3">
      {responseData.map((item, index) => (
        <div
          className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-9"
          key={index}
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src={item.strMealThumb}
              alt="meal image"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
              <h2 className="text-lg font-bold text-white">{item.strMeal}</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="flex space-x-8">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Ingredients
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>{item.strIngredient1}</li>
                  <li>{item.strIngredient2}</li>
                  <li>{item.strIngredient3}</li>
                  <li>{item.strIngredient4}</li>
                  <li>{item.strIngredient5}</li>
                  <li>{item.strIngredient6}</li>
                  <li>{item.strIngredient7}</li>
                  <li>{item.strIngredient8}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Measures</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>{item.strMeasure1}</li>
                  <li>{item.strMeasure2}</li>
                  <li>{item.strMeasure3}</li>
                  <li>{item.strMeasure4}</li>
                  <li>{item.strMeasure5}</li>
                  <li>{item.strMeasure6}</li>
                  <li>{item.strMeasure7}</li>
                  <li>{item.strMeasure8}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href={item.strYoutube}
                target="_blank"
                className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                🍴 Watch Cooking Tutorial 🍴
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchpanel;
