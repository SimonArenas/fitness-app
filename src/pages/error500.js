import React from "react";
import FatalErrorImg from "../img/500.png";
import { Link } from "react-router-dom";
import "../components/styles/500.css"

export default function FatalError() {
  return (
    <div className="Error-500__bg">
      <div className="Error-500__container">
        <div className="Error-500_Text">
          <h1>Error 500: Internal Server Error 😢</h1>
          {/* <Link to="/exercise">
            <button className="error__btn draw-border">Back to exercises</button>
          </Link> */}
        </div>
        <div className="Error-500__img">
          <img src={FatalErrorImg} alt="500 Unexpected Error" />
        </div>
      </div>
    </div>
  );
}
