import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [slide, setSlide] = useState(0);

  async function fetchUrl(comingUrl) {
    const response = await fetch(comingUrl);
    const data = await response.json();
    setImage(data);
    console.log(data);
  }

  useEffect(() => {
    if (url !== "") fetchUrl(`${url}?page=${page}&limit=${limit}`);
  }, [url, limit, page]);

  const handlePrevious = () => {
    setSlide(slide === 0 ? image.length - 1 : slide - 1);
  };

  const handleNext = () => {
    setSlide(slide === image.length - 1 ? 0 : slide + 1);
  };
  console.log(slide);

  return (
    <div className="container">
      <h2>Image-Slider</h2>
      <div className="slideContainer">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow left-arrow"
        />
        {image && image.length
          ? image.map((eachItem, index) => {
              const { id, download_url } = eachItem;
              return (
                <div key={id}>
                  <img
                    className={
                      slide === index
                        ? "current-slide"
                        : "current-slide hide-slide"
                    }
                    src={download_url}
                    alt="image-slides"
                  />
                </div>
              );
            })
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow right-arrow"
        />
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
