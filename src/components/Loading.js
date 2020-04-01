import React from "react";
import "./styles/loading.css";

export default function Loading() {
  return (
    <div className="lds-dual-ring__container">
      <div className="lds-dual-ring"></div>
    </div>
  );
}
