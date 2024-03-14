import React, { useState } from "react";
import "./Vertical.css";

function VerticalSecond() {
  const [numbers, setNumbers] = useState([]);

  useState(() => {
    const numbersArray = [];
    for (let i = 200; i <= 300; i++) {
      numbersArray.push(i);
      console.log(numbersArray);
    }
    setNumbers(numbersArray);
  });

  return (
    <div>
      <h1>Numbers from 200 to 300:</h1>
      <div className="vertical">
        {numbers.map((number) => {
          return (
            <>
              <p>{number}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalSecond;
