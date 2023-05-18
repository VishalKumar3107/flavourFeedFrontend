import React from "react";

import slide1 from "./images/book.jpg";
import slide2 from "./images/one.jpg";
import slide3 from "./images/two.jpg";
import slide4 from "./images/three.jpg";
import slide5 from "./images/four.jpg";
import slide6 from "./images/five.jpg";
import "./aboutslides.css";

const images = [ slide1, slide2, slide3, slide4, slide5, slide6 ];
const delay = 3500;

export default function Aboutslide() {
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
    <div className="aboutslideshow">
      <div className="aboutslideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((imageUrl, index) => (
          <div className="slideA" key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} style={{ width: "100%", height: "auto" }}/>
          </div>
        ))}
      </div>
    </div>
  );
}