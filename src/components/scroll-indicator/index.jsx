import { useState, useEffect } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  async function fetchUrl(comingUrl) {
    const response = await fetch(comingUrl);
    const { products } = await response.json();
    setData(products);
    console.log(products);
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return (
    <div>
      <h2>Scroll-Indicator</h2>
      {data.map(({ id, title, category }) => {
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>Category - {category}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ScrollIndicator;
