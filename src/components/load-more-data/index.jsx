import { useEffect, useState } from "react";
import "./styles.css";
const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);

  const url = `https://dummyjson.com/products?limit=20&skip=${skip}`;

  async function fetchUrl(comingUrl) {
    setLoading(true);
    try {
      const response = await fetch(comingUrl);
      const { products } = await response.json();

      setLoading(false);
      if (products && products.length) {
        setProducts((prevData) => [...prevData, ...products]);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  useEffect(() => {
    if (products && products.length >= 100) setDisableBtn(true);
  }, [products]);

  const handleLoad = () => {
    if (products.length < 100) {
      setSkip(skip + 20);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="entire-container">
      <h2>Load - Products</h2>
      <div className="products-container">
        {products && products.length
          ? products.map((eachItem, index) => {
              const { id, title, price, thumbnail } = eachItem;
              return (
                <div key={`${id}-${index}`}>
                  <div className="product">
                    <div>{title}</div>
                    <img src={thumbnail} alt={title} />
                    <div>{price}</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div>{loading && <p>Loading data...</p>}</div>

      <div className="btn-container">
        <button
          onClick={handleLoad}
          disabled={disableBtn || loading}
          className="loadBtn"
        >
          {disableBtn ? "No more" : "Load More"}
        </button>
        {disableBtn ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};
export default LoadMoreData;
