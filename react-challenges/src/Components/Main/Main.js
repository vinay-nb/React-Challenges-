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
        <Link to="/modal-popup" className="link-cls">
          Modal Popup
        </Link>
        <Link to="/password-strength" className="link-cls">
          Password Strength
        </Link>
        <Link to="/column-table" className="link-cls">
          Column Table
        </Link>
        <Link to="/todo-list" className="link-cls">
          Todo List
        </Link>
        <Link to="/infinite-scroll" className="link-cls">
          Infinite Scroll
        </Link>
        <Link to="/emoji-picker" className="link-cls">
          Emoji Picker
        </Link>
        <Link to="/stop-watch" className="link-cls">
          Stop Watch
        </Link>
        <Link to="/progress-bar" className="link-cls">
          Progress Bar
        </Link>
        <Link to="/nested-dropdown" className="link-cls">
          Nested Dropdown
        </Link>
        <Link to="/otp" className="link-cls">
          Otp
        </Link>
        <Link to="/file-explorer" className="link-cls">
          File Explorer
        </Link>
        <Link to="/auto-complete" className="link-cls">
          Auto Complete
        </Link>
        <Link to="/breadcrumbs" className="link-cls">
          Breadcrumbs
        </Link>
        <Link to="/form-validation" className="link-cls">
          Form Validation
        </Link>
        <Link to="/otp-login" className="link-cls">
          Otp Login
        </Link>
        <Link to="/useeffect-polyfill" className="link-cls">
          useEffect Polyfill
        </Link>
        <Link to="/i18-next" className="link-cls">
          i18 Next
        </Link>
        <Link to="/shuffle-list" className="link-cls">
          shuffle list
        </Link>
        <Link to="/task-app" className="link-cls">
          Task App
        </Link>
        <Link to="/selectable-grid" className="link-cls">
          Selectable Grid
        </Link>
      </div>
    </div>
  );
}

export default Main;
