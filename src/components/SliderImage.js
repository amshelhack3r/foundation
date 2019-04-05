import React from "react";

export default function SliderImage(props) {
  if (props.active) {
    return (
      <div className="carousel-item active">
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + props.src}
          alt={props.alt}
        />
        <div class="carousel-caption d-none d-md-block">
          <p>{props.caption}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="carousel-item ">
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + props.src}
        alt={props.alt}
      />
      <div class="carousel-caption d-none d-md-block">
        <p>{props.caption}</p>
      </div>
    </div>
  );
}
