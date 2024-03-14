import React from "react";
import Horizontal from "./Horizontal";
import styles from "./Master";
export default function Master() {
  return (
    <div>
      <div className={styles.scroll}>
        <h3>Numbers from 100 to 200</h3>
        <Horizontal />
      </div>
    </div>
  );
}
