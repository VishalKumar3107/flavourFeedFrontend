import React from "react";

import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import "./slides.css";

const images = [ slide1, slide2, slide3, slide4 ];
const delay = 2500;

export default function Slide() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((imageUrl, index) => (
          <div className="slide" key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} style={{ width: "500px", height: "auto" }}/>
          </div>
        ))}
      </div>
    </div>
  );
}