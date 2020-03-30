import React from "react";

import addImg from "../img/add.png";
import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <div>
      <div className="addImg">
        <Link to="/exercise/new">
          <img className="hvr-hang" src={addImg} alt="" />
        </Link>
      </div>
    </div>
  );
}
