import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Input = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center space-x-4">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search by city..."
          className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase text-gray-500"
        />
        <BiSearch
          size={30}
          onClick={handleSearchClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          size={30}
          onClick={handleLocationClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={() => setUnits("metric")}
          className="text-2xl font-medium transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button
          onClick={() => setUnits("imperial")}
          className="text-2xl font-medium transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
