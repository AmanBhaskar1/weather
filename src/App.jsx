import React from "react";
import TopButtons from "./component/TopButtons";
import Input from "./component/Input";
import TimeandLocation from "./component/TimeandLocation";
import TempandDetails from "./component/TempandDetails";
import Forcast from "./component/Forcast";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <Input />
      <TimeandLocation />
      <TempandDetails />
      <Forcast />
      <Forcast />
    </div>
  );
};

export default App;
