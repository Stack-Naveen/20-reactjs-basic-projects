import { useState, useEffect } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUrl(comingUrl) {
    setLoading(true);
    try {
      const response = await fetch(comingUrl);
      const { products } = await response.json();
      setData(products);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  if (loading) return <h3>Loading . . .</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Scroll-Indicator</h2>
      {data && data.length
        ? data.map(({ id, title, category }) => {
            return (
              <div key={id}>
                <h3>{title}</h3>
                <p>Category - {category}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default ScrollIndicator;
