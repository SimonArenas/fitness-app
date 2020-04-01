import React from "react";
import Img404 from "../img/404.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="Error__bg">
      <div className="Error__container">
        <div className="Error_Text">
          <h1>Hey! Are you lost?</h1>
          <Link to="/">
            <button className="error__btn draw-border">Back to exercises</button>
          </Link>
        </div>
        <div className="Error__img">
          <img src={Img404} alt="" />
        </div>
      </div>
    </div>
  );
}
