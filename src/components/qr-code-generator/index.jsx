import { useState } from "react";

const QrCode = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>QR-GENERATOR</h2>
      <div>
        <input
          type="text"
          value={input}
          placeholder="type something . ."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>

        <button>Generate</button>
      </div>
    </div>
  );
};
export default QrCode;
