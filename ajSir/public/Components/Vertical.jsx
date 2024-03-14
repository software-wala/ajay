import React, { useState } from "react";
import "./Vertical.css";
function Vertical() {
  const [numbers, setNumbers] = useState([]);

  useState(() => {
    const numbersArray = [];
    for (let i = 1; i <= 100; i++) {
      numbersArray.push(i);
    }
    setNumbers(numbersArray);
  });

  return (
    <div>
      <h1>Numbers from 1 to 100:</h1>
      <div className="vertical">
        {numbers.map((number) => (
          <p key={number}>{number}</p>
        ))}
      </div>
    </div>
  );
}

export default Vertical;
