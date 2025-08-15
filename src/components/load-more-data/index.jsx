import { useEffect, useState } from "react";
const LoadMoreData = () => {
  const [products, setProducts] = useState([]);

  const url = `https://dummyjson.com/products?limit=10&select=title,price,thumbnail`;

  async function fetchUrl(comingUrl) {
    const response = await fetch(comingUrl);
    const { products } = await response.json();
    setProducts(products);
    console.log(products);
  }
  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return (
    <div>
      <div className="entire-container">
        {products.map((eachItem) => {
          const { id, title, price, thumbnail } = eachItem;
          return (
            <div>
              <div className="products-container" key={id}>
                <div>{title}</div>
                <img src={thumbnail} alt="product-thumbnail" />
                <div>{price}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="loadBtn">Load More</button>
    </div>
  );
};
export default LoadMoreData;
