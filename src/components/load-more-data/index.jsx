import { useEffect, useState } from "react";
const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const url = `https://dummyjson.com/products?limit=20&skip=${skip}`;

  async function fetchUrl(comingUrl) {
    try {
      const response = await fetch(comingUrl);
      const { products } = await response.json();

      if (products && products.length) {
        setProducts((prevData) => [...prevData, ...products]);
      }
    } catch (e) {}
  }
  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  const handleLoad = () => {
    if (products.length < 100) {
      setSkip(skip + 20);
    }
  };

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

      <div>
        <button onClick={handleLoad} className="loadBtn">
          Load More
        </button>
      </div>
    </div>
  );
};
export default LoadMoreData;
