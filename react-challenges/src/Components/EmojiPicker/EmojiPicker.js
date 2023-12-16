import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
const access_key = "eb3aa13df1b14cc7bc614fc2d7f894f41b09d68a";

function EmojiPicker() {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [search, setSearch] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadAllEmojis();
    loadCategories();
    window.scrollTo(0, 0);
  }, []);

  const loadAllEmojis = () => {
    axios
      .get(`https://emoji-api.com/emojis?access_key=${access_key}`)
      .then((res) => {
        setEmojis(res.data);
        setFilteredEmojis(res.data);
      });
  };

  const loadCategories = () => {
    axios
      .get(`https://emoji-api.com/categories?access_key=${access_key}`)
      .then((res) => {
        setCategory(res.data);
      });
  };

  const getIconTitle = (title) => {
    const [_, ...value] = title.split(" ");
    return value.join(" ");
  };

  const onChange = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue);
    let filteredIcons = emojis.filter((icon) =>
      icon.unicodeName.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
    setFilteredEmojis(filteredIcons);
  };

  const categoryChange = (e) => {
    setSearch("");
    setFilteredEmojis([]);
    setEmojis([]);
    if (e.target.value === "all") {
      loadAllEmojis();
    } else {
      axios
        .get(
          `https://emoji-api.com/categories/${e.target.value}?access_key=${access_key}`
        )
        .then((res) => {
          setEmojis(res.data);
          setFilteredEmojis(res.data);
        });
    }
  };

  const copyToClipBoard = (id) => {
    let range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    setToastMessage("Copied Successfully!");
    setTimeout(() => {
      setToastMessage("");
    }, 1500);
  };

  return (
    <>
      <div className="topSection">
        <div>
          <select className="select" onChange={categoryChange}>
            <option>all</option>
            {category.map((item) => {
              return (
                <option value={item.slug} key={item.slug}>
                  {item.slug.replace("-", "")}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="tex"
            placeholder="Search"
            onChange={onChange}
            value={search}
            className="inputField"
          />
        </div>
        <div
          className={`copyText ${
            filteredEmojis === null || filteredEmojis?.length === 0
              ? "hidden"
              : ""
          }`}
        >
          Click on an Emoji to Copy
        </div>
      </div>

      <div className="container-emoji">
        {filteredEmojis?.length === 0 && search.trim() === "" && (
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        )}
        {filteredEmojis?.map((icon, index) => (
          <span
            className="iconContainer"
            key={index}
            onClick={() => copyToClipBoard(icon.unicode + "_" + index)}
          >
            <span className="icon" title={getIconTitle(icon.unicodeName)}>
              {icon.character}
            </span>
          </span>
        ))}
      </div>
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </>
  );
}

export default EmojiPicker;
