import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container">
      <div className="card">
        <Link to="/star-rating" className="link-cls">Star rating </Link>
      </div>
    </div>
  );
}

export default Main;
