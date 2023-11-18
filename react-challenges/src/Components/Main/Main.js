import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container-cnt">
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
        <Link to="/table-colorizer" className="link-cls">
          Table Colorizer
        </Link>
        <Link to="/guess-number" className="link-cls">
          Guess Number
        </Link>
        <Link to="/pagination" className="link-cls">
          Pagination
        </Link>
        <Link to="/stack" className="link-cls">
          Stack
        </Link>
        <Link to="/word-count" className="link-cls">
          Word Count
        </Link>
        <Link to="/convert-temparature" className="link-cls">
          Convert Temparature
        </Link>
        <Link to="/telephone-formatter" className="link-cls">
          Telephone Formatter
        </Link>
        <Link to="/string-transformers" className="link-cls">
          String Transformers
        </Link>
        <Link to="/tictaktoe" className="link-cls">
          Tic tac toe
        </Link>
        <Link to="/expenses-tracker" className="link-cls">
          Expenses Tracker
        </Link>
        <Link to="/traffic-lights" className="link-cls">
          Traffic Lights
        </Link>
      </div>
    </div>
  );
}

export default Main;
