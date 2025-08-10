import data from "./data";
import React, { useState } from "react";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [activate, setActivate] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingle = (comingId) => {
    console.log(comingId);
    setSelected(comingId === selected ? null : comingId);
  };

  const handleMultiple = (comingId) => {
    console.log(comingId);
    let tempMultiple = [...multiple];
    const findIndex = tempMultiple.indexOf(comingId);

    if (findIndex === -1) tempMultiple.push(comingId);
    else tempMultiple.splice(findIndex, 1);
    setMultiple(tempMultiple);
  };

  return (
    <div>
      <div className="container">
        <button onClick={() => setActivate(!activate)}>
          {activate ? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>
        {data && data.length > 0 ? (
          data.map((eachItem) => {
            const { id, question, answer } = eachItem;
            return (
              <div key={id}>
                <div
                  className="card"
                  onClick={
                    activate ? () => handleMultiple(id) : () => handleSingle(id)
                  }
                >
                  <h3>{question}</h3>
                  <span>
                    {selected === id || multiple.includes(id) ? "-" : "+"}
                  </span>
                  {selected === id ||
                  multiple.includes(id) /* multiple.indexOf(id) !== -1 */ ? (
                    <p>{answer}</p>
                  ) : null}
                </div>
              </div>
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
}
