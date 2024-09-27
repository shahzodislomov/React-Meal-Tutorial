import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };
  return (
    <div className="bg-amber-950 flex justify-between px-10 py-7">
      <img src="https://www.themealdb.com/images/logo-small.png" alt="img" />
      <div className="flex items-center space-x-10">
        <Link to={"/"}>
          <button className="text-lg font-medium px-3 rounded-md bg-orange-600 py-1">
            Home
          </button>
        </Link>
        <form action="" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            className="outline-none py-2 px-1 rounded-none text-black font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
