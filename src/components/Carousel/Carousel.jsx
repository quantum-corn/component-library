import { useState } from "react";
import Button from "../Button.jsx";
import Image from "../Image.jsx";

import CarouselLeft from "./carouselLeft.svg?react";
import CarouselRight from "./carouselRight.svg?react";
import CarouselInactive from "./carouselInactive.svg?react";
import CarouselActive from "./carouselActive.svg?react";

import carouselLeft from "./carouselLeft.svg";
import carouselRight from "./carouselRight.svg";
import carouselInactive from "./carouselInactive.svg";
import carouselActive from "./carouselActive.svg";

function Carousel({
  imgset = [
    { src: carouselLeft, alt: "Carousel Left Button" },
    { src: carouselRight, alt: "Carousel Right Button" },
    { src: carouselInactive, alt: "carousel Inactive Marker" },
    { src: carouselActive, alt: "Carousel Active Marker" },
  ],
  Buttons = { left: CarouselLeft, right: CarouselRight },
  Markers = {
    inactive: CarouselInactive,
    active: CarouselActive,
  },
  style = {},
  buttonStyle = {},
  markerStyle = {},
  className = "carousel",
  id,
  key,
}) {
  const [active, setActive] = useState(0);

  const handleButtonClick = function (side) {
    let count = imgset.length;
    let newActive;
    switch (side) {
      case "right": {
        newActive = active + 1;
        setActive(active == count - 1 ? 0 : active + 1);
        break;
      }
      case "left": {
        newActive = active - 1;
        setActive(active == 0 ? count - 1 : active - 1);
        break;
      }
    }
  };

  return (
    <div className={className} id={id} style={style}>
      <Image
        src={imgset[active].src}
        alt={imgset[active].alt}
        className={className.concat("Image".concat(active))}
        id={id.concat("Image".concat(active))}
      />
      <Button
        Content={Buttons.left}
        style={buttonStyle}
        className={className.concat("LeftButton")}
        id={id.concat("LeftButton")}
        onClick={() => {
          handleButtonClick("left");
        }}
      />
      <div
        className={className.concat("Markerset")}
        id={id.concat("Markerset")}
      >
        {imgset.map((img, index) => {
          let Marker;
          if (index != active) Marker = Markers.inactive;
          else Marker = Markers.active;
          return (
            <Button
              Content={Marker}
              style={markerStyle}
              className={className.concat("Marker")}
              id={id.concat("Marker")}
              onClick={() => {
                setActive(index);
              }}
            />
          );
        })}
      </div>
      <Button
        Content={Buttons.right}
        style={buttonStyle}
        className={className.concat("RightButton")}
        id={id.concat("RightButton")}
        onClick={() => {
          handleButtonClick("right");
        }}
      />
    </div>
  );
}

export default Carousel;
