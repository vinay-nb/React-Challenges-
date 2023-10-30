import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container">
      <div className="card">
        <Link to="/star-rating" className="link-cls">
          Star rating{" "}
        </Link>
        <Link to="/image-gallery" className="link-cls">
          Image Gallery{" "}
        </Link>
        <Link to="/accordion" className="link-cls">
          Accordion{" "}
        </Link>
        <Link to="/background-changer" className="link-cls">
          Background Changer{" "}
        </Link>
        <Link to="/change-theme" className="link-cls">
          Change Theme{" "}
        </Link>
        <Link to="/qr-generator" className="link-cls">
          QR Generator
        </Link>
      </div>
    </div>
  );
}

export default Main;
