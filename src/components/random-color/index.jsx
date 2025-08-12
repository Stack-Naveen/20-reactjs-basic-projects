import React, { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("black");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button>HEX-COLOR</button>
      <button>RGB-COLOR</button>
      <button>GENERATE COLOR</button>
    </div>
  );
}
