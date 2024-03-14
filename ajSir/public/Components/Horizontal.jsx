import { React, useState } from "react";
// import styles from "./Horizontal.module.css";
export default function Horizontal() {
  const [numb, setNumb] = useState();

  useState(() => {
    const number = [];
    for (let i = 100; i < 200; i++) {
      number.push(i);

      console.log(number);
    }

    setNumb(number);
  });

  return (
    <>
      {/* <p>{numb}</p> */}

      {numb.map((numbs) => (
        <p>{numbs}</p>
      ))}
    </>
  );
}
