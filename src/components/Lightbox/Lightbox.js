import { useState } from "react";

const Lightbox = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxModalOpen, setIsLightBoxModalOpen] = useState(false);

  const handlePreviousImage = () => {
    setCurrentImage((curr) => (curr === 0 ? curr : curr - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((curr) => (curr < images.length - 1 ? curr + 1 : curr));
  };

  const handleSetCurrentImage = (imageIndex) => {
    setCurrentImage(imageIndex);
  };

  const handleToggleLightboxModal = () => {
    setIsLightBoxModalOpen((curr) => !curr);
  };

  return (
    <>
      <div className="lightbox">
        <div className="lightbox__main-image">
          <button
            onClick={handleToggleLightboxModal}
            className="lightbox-modal__open-button"
          ></button>
          <img
            src={images[currentImage].imageSource}
            alt={images[currentImage].imageAlt}
          />
        </div>
        {currentImage < images.length - 1 ? (
          <button onClick={handleNextImage} className="lightbox__next-image">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : null}
        <div className="lightbox__previews">
          {images.map((image, i) => (
            <div
              key={image.imageNumber}
              className={`lightbox__previews-item ${
                i === currentImage ? "active" : ""
              }`}
            >
              <img
                onClick={() => handleSetCurrentImage(i)}
                src={image.imageSource}
                alt={image.imageAlt}
              ></img>
            </div>
          ))}
        </div>
        {currentImage === 0 ? null : (
          <button
            onClick={handlePreviousImage}
            className="lightbox__previous-image"
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      {isLightboxModalOpen && (
        <div className="lightbox-modal">
          <div className="lightbox-modal-content">
            <button
              onClick={handleToggleLightboxModal}
              className="lightbox-modal__close-button"
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            {currentImage === 0 ? null : (
              <button
                onClick={handlePreviousImage}
                className="lightbox-modal__previous-image"
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            )}
            {currentImage === 0 ? null : (
              <button
                onClick={handlePreviousImage}
                className="lightbox__previous-image"
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            )}
            <img src={images[currentImage].imageSource} alt="" />
            {currentImage < images.length - 1 ? (
              <button
                onClick={handleNextImage}
                className="lightbox-modal__next-image"
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            ) : null}
            <ul className="lightbox-modal__previews">
              {images.map((image, i) => (
                <li
                  key={image.imageNumber}
                  className={`lightbox-modal__previews-item ${
                    i === currentImage ? "active" : ""
                  }`}
                >
                  <img
                    onClick={() => handleSetCurrentImage(i)}
                    src={image.imageSource}
                    alt={image.imageAlt}
                  ></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;
