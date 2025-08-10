import data from "./data";
import React, { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingle = (comingId) => {
    console.log(comingId);
    setSelected(comingId === selected ? null : comingId);
  };

  return (
    <div>
      <div>
        {data && data.length > 0 ? (
          data.map((eachItem) => {
            const { id, question, answer } = eachItem;
            return (
              <div>
                <div className="card" onClick={() => handleSingle(id)}>
                  <h3>{question}</h3>
                  <span>+</span>
                  {selected===id?<p>{answer}</p>:<p>{null}</p>}
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
