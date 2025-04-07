import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-logo">
        <img src="/images/cocoon1.png" alt="Loading" className="logo-image" />
        <div className="progress-circle"></div>
      </div>
    </div>
  );
}

export default Loading;
