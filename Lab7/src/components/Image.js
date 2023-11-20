import React, { useState } from "react";
import "./Image.css";

function Image() {
  const [displayImage, setDisplayImage] = useState(true);
  const [imageWidth, setImageWidth] = useState(200);

  const toggleImageDisplay = () => {
    setDisplayImage(true);
  };

  const enlargeImage = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const reduceImage = () => {
    setImageWidth((prevWidth) => prevWidth - 50);
  };

  const deleteImage = () => {
    setDisplayImage(false);
  };

  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/Sviatohirsk">
        {displayImage && (
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e3/75/6d/20180929-181647-largejpg.jpg?w=500&h=300&s=1"
            alt="svyatogorsk_photo"
            id="image"
            style={{
              display: displayImage ? "inline" : "none",
              width: `${imageWidth}px`,
            }}
          />
        )}
      </a>
      <div>
        <button onClick={toggleImageDisplay} id="add">
          Add
        </button>
        <button onClick={enlargeImage} id="enlarge">
          Enlarge
        </button>
        <button onClick={reduceImage} id="reduce">
          Reduce
        </button>
        <button onClick={deleteImage} id="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Image;
