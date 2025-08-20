import { useState, useEffect } from "react";
import "./styles.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scroll, setScroll] = useState(0);

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

  function handleScroll() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scroll);
  if (loading) return <h3>Loading . . .</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <div className="top-container">
        <h2>Scroll-Indicator</h2>
        <div className="tracking-container">
          <div
            className="current-position"
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data.length > 0 &&
          data.map(({ id, title, category }) => {
            return (
              <div key={id}>
                <h3>{title}</h3>
                <p>Category - {category}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ScrollIndicator;
