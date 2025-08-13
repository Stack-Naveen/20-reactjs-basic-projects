export default function StarRating({ stars = 5 }) {
  const handleClick = (comingIndex) => {
    console.log(comingIndex);
  };
  const handleHover = (comingIndex) => {
    console.log(comingIndex);
  };
  const handleLeave = (comingIndex) => {
    console.log(comingIndex);
  };

  return (
    <div className="stars">
      {Array.from({ length: stars }).map((_, index) => (
        <Icon
          key={index}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleHover(index)}
          onMouseLeave={() => handleLeave(index)}
          size={40}
        />
      ))}
    </div>
  );
}

function Icon({ onClick, onMouseMove, onMouseLeave, size }) {
  return (
    <button
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        borderRadius: "50px",
        width: "50px",
        height: "50px",
        marginTop: "50px",
      }}
    ></button>
  );
}
