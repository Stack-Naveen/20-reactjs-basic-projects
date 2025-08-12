import React, { useState, useEffect } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("black");
  const [typeOfColor, setTypeOfColor] = useState("HEX");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  }

  function handleRgb() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "RGB") handleRgb();
    else handleHex();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("HEX")}>
        {typeOfColor === "HEX" ? "HEX-Enabled" : "HEX-COLOR"}
      </button>
      <button onClick={() => setTypeOfColor("RGB")}>
        {typeOfColor === "RGB" ? "RGB-Enabled" : "RGB-COLOR"}
      </button>
      <button onClick={typeOfColor === "HEX" ? handleHex : handleRgb}>
        GENERATE COLOR
      </button>
    </div>
  );
}
