import React from "react";

function AboutFunction() {
  const [car, setCar] = React.useState({
    brand: "Tesla",
    model: "Model x",
    color: "Red",
  });

  const changeTheModel = () => {
    setCar({ model: "Model 3" });
  };

  const changeTheColor = () => {
    setCar({ color: "Green" });
  };

  return <div>
    <h1>This is form Function component {car.brand}</h1>
    <p>
      This brand and model such as {car.model} and color{" "}
      {car.color}
    </p>
    <button onClick={changeTheModel}>Change the Model</button>
    <button onClick={changeTheColor}>Change the Model</button>
  </div>;
}

export default AboutFunction;
