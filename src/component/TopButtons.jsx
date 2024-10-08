import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "Sikar" },
    { id: 2, name: "Tokyo" },
    { id: 3, name: "Gurgaon" },
    { id: 4, name: "Hyderabad" },
    { id: 5, name: "Bangalore" },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.name })}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
