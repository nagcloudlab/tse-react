import React from "react";

export default function Button(props) {
  let { label, primary, secondary, danger } = props;
  let bgColor;
  let textColor;
  if (primary) {
    bgColor = "#007bff";
    textColor = "#fff";
  } else if (secondary) {
    bgColor = "#007b00";
    textColor = "#fff";
  } else if (danger) {
    bgColor = "#ff0000";
    textColor = "#fff";
  } else {
    bgColor = "#fff";
  }

  return (
    <>
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: bgColor,
          color: textColor,
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        {label}
      </button>
    </>
  );
}
