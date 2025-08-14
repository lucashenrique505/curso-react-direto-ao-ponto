import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const fruits = ["Maçã", "Banana", "Laranja"];
  return (
    <>
      <div>
        {fruits.map((fruit) => (
          <p key={fruit}>{fruit}</p>
        ))}
      </div>

      <hr />

      <h1>{number}</h1>

      <h2 className={number >= 0 ? "positive" : "negative"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>

      <input
        type="number"
        value={number}
        onChange={({ target }) => setNumber(parseInt(target.value))}
      />

      {/* Tabuada */}
      <ul>
        {Array.from({ length: 11 }).map((_, i) => (
          <li>
            {number} x {i} = <strong>{number * i}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
