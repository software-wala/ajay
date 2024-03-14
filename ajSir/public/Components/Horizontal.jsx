import React, { useState } from "react";
import "./Horizontal.css";
function Horizontal() {
  const [numbers, setNumbers] = useState([]);

  useState(() => {
    const numbersArray = [];
    for (let i = 100; i <= 200; i++) {
      numbersArray.push(i);
    }
    setNumbers(numbersArray);
  });

  return (
    <div>
      <h1>Numbers from 100 to 200:</h1>
      <div className="horizontal">
        {numbers.map((number) => (
          <p key={number}>{number}</p>
        ))}
      </div>
    </div>
  );
}

export default Horizontal;
