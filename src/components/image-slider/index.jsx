import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);

  async function fetchUrl(comingUrl) {
    try {
      const response = await fetch(comingUrl);
      const data = await response.json();
      setImage(data);
      console.log(data);
    } catch (e) {}
  }

  useEffect(() => {
    console.log(image);
    if (url != "") fetchUrl(`${url}?page=${page}&limit=${limit}`);
  }, [url]);

  return (
    <div className="container">
      <h2>Image-Slider</h2>
      <div className="slideContainer">
        <BsArrowLeftCircleFill className="arrow left-arrow" />
        {image && image.length
          ? image.map((eachItem) => {
              const { id, download_url } = eachItem;
              return (
                <div key={id}>
                  <img
                    className="current-slide"
                    src={download_url}
                    alt="image-slides"
                  />
                </div>
              );
            })
          : null}
        <BsArrowRightCircleFill className="arrow right-arrow" />
        <span className="indicators">
          {image && image.length
            ? image.map((_, index) => {
                return (
                  <button className="current-indicator" key={index}></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
}
