import { useEffect, useState } from "react";
import "./styles.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);

  /* URL = "https://picsum.photos/v2/list?page=1&limit=10" */
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
    <div>
      <h2>Image-Slider</h2>
      <div className="slideContainer">
        {image.map((eachItem) => {
          const { id, download_url } = eachItem;
          return (
            <div key={id}>
              <img className="image" src={download_url} alt="image-slides" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
