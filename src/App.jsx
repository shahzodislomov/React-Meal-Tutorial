import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import axios from "axios";
import SingleProduct from "./components/SingleProduct";
import Searchpanel from "./components/Searchpanel";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
      );
      setProducts(result.data.meals);
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home product={products} />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route
          path="search/:name"
          element={<Searchpanel product={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
