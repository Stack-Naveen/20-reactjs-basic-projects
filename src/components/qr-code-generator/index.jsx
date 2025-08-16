import { useState } from "react";
import { QRCode } from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qr, setQr] = useState("");

  const handleQr = () => {
    setQr(input);
    setInput("");
  };
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

        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQr}
        >
          Generate
        </button>
      </div>
      <div style={{ background: "white", padding: "30px" }}>
        <QRCode id="qr-code" value={qr} size={300} bgColor="#bac3f6ff" />
      </div>
    </div>
  );
};
export default QrCode;
