import { useState } from "react";
import "./styles.css";
export default function StarRating({ stars = 5 }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (comingIndex) => {
    setRate(comingIndex);
  };
  const handleHover = (comingIndex) => {
    setHover(comingIndex);
  };
  const handleLeave = () => setHover(0);
  return (
    <div className="rateContainer">
      <h2>Star-Rating</h2>
      <div className="stars" onMouseLeave={handleLeave}>
        {Array.from({ length: stars }).map((_, index) => {
          const starIndex = index + 1;
          return (
            <Icon
              key={starIndex}
              className={starIndex <= (hover || rate) ? "active" : "inActive"}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleHover(starIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}

function Icon({ className, onClick, onMouseEnter }) {
  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      style={{
        borderRadius: "50px",
        width: "50px",
        height: "50px",
        marginTop: "50px",
      }}
    >
      ★
    </div>
  );
}
