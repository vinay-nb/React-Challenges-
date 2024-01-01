import { useEffect, useRef, useState } from "react";
import Trie from "./trie";

export const useAutoComplete = (suggestionsList) => {
  const suggestionLength = 5;
  const [userText, setUserText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionFocus, setSuggestionFocus] = useState(null);
  const trie = useRef(new Trie(suggestionsList));

  const handleInput = (e) => {
    const text = e.target.value;
    console.log(e.target.value);
    setUserText(e.target.value);
    setSuggestions(
      text ? trie.current.getWordsFromTrie(text, suggestionLength) : []
    );
    setSuggestionFocus(null);
  };

  useEffect(() => {
    if (suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
    }
  }, [suggestionFocus, suggestions]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
      setSuggestions([]);
      setSuggestionFocus(null);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSuggestionFocus((prevFocus) => {
        if (prevFocus === null || prevFocus === suggestions.length - 1) {
          return 0;
        } else {
          return prevFocus + 1;
        }
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSuggestionFocus((prevFocus) => {
        if (prevFocus === null || prevFocus === 0) {
          return suggestions.length - 1;
        } else {
          return prevFocus - 1;
        }
      });
    }
  };

  const handleClick = (selectedSuggestion) => {
    setUserText(selectedSuggestion);
    setSuggestions([]);
    setSuggestionFocus(null);
  };

  const handleSuggestionFocus = (index) => {
    setSuggestionFocus(index);
  };

  return [
    userText,
    handleInput,
    suggestionFocus,
    suggestions,
    handleKeyDown,
    handleClick,
    handleSuggestionFocus,
  ];
};
