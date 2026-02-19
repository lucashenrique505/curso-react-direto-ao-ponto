import { memo } from "react";

import "./styles.css";

const Child = ({ counter, incrementCounter }) => {
  console.log("Componente está sendo renderizado");
  return (
    <div className="child">
      <h2>Componente filho: {counter}</h2>
      <button onClick={incrementCounter}>+1</button>
    </div>
  );
};

export default memo(Child);
