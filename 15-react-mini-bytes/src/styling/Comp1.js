import React from "react";
// import "./Comp1.css";
import styles from "./Comp1.module.css";

export default function Comp1() {
  return (
    <div
      //   style={{
      //     width: "100px",
      //     height: "100px",
      //     backgroundColor: "red",
      //     textAlign: "center",
      //   }}
      // className="container"
      className={styles.container}
    >
      Comp-1
    </div>
  );
}
