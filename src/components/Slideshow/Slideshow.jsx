import { useState } from "react";
import "./slideshow.css";
import ArrowBack from "../../assets/arrow_back.svg";
import ArrowForward from "../../assets/arrow_forward.svg";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0); /* currentIndex = image actuelle */

  /* recule d’une image (boucle au début) */
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  /* avance d’une image (boucle à la fin) */
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {pictures.length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            <img src={ArrowBack} alt="Précédent" />
          </button>
          <button className="arrow right" onClick={nextSlide}>
            <img src={ArrowForward} alt="Suivant" />
          </button>
          <div className="counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
