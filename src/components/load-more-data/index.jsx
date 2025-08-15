import { useEffect, useState } from "react";
const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleLoad = () => {
    if (products.length < 100) {
      setSkip(skip + 20);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="entire-container">
        {products && products.length
          ? products.map((eachItem, index) => {
              const { id, title, price, thumbnail } = eachItem;
              return (
                <div key={`${id}-${index}`}>
                  <div className="products-container">
                    <div>{title}</div>
                    <img src={thumbnail} alt={title} />
                    <div>{price}</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div></div>

      {loading && <p>Loading data...</p>}

      <div>
        <button onClick={handleLoad} className="loadBtn">
          Load More
        </button>
      </div>
    </div>
  );
};
export default LoadMoreData;
