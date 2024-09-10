import React, { useState, useEffect } from "react";
import TopButtons from "./component/TopButtons";
import Input from "./component/Input";
import TimeandLocation from "./component/TimeandLocation";
import TempandDetails from "./component/TempandDetails";
import Forcast from "./component/Forcast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "sikar" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(
        `Successfully feteched data for ${data.name}, ${data.country}`
      );
      setWeather(data);
    });
  };
  useEffect(() => {
    getWeather();
  }, [query, units]);
  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) {
      return "from-cyan-600 to-blue-700";
    } else {
      return "from-yellow-600 to-orange-700";
    }
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Input setUnits={setUnits} setQuery={setQuery} />
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <TempandDetails weather={weather} units={units} />
          <Forcast title="3 hour step forecast" data={weather.hourly} />
          <Forcast title="daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={2000} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
