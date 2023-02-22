import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(9);

  const [tempColor, setTempColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperature === 45) {
      return;
    }
    const newTemperature = temperature + 1;
    setTemperature(newTemperature);

    if (newTemperature >= 15) {
      setTempColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperature === -25) {
      return;
    }
    const newTemperature = temperature - 1;
    setTemperature(newTemperature);

    if (newTemperature < 15) {
      setTempColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button className="btn-cold" onClick={decreaseTemperature}>
          -
        </button>
        <button className="btn-hot" onClick={increaseTemperature}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
