import React, { useRef } from "react";
import { suggestionsList } from "./countrylist";
import { useAutoComplete } from "./useAutoComplete";

const AutoComplete = () => {
  const [
    userText,
    handleInput,
    suggestionFocus,
    suggestions,
    handleKeyDown,
    handleClick,
    handleSuggestionFocus,
  ] = useAutoComplete(suggestionsList);

  const useInputRef = useRef(null);

  return (
    <div className="autocompleteMain">
      <p>Use up & down arrows to navigate suggestions</p>
      <input
        type="search"
        ref={useInputRef}
        autoComplete="off"
        spellCheck="false"
        placeholder="Search for country"
        aria-label="Search"
        aria-autocomplete="list"
        value={userText}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <ul className="suggestions">
        {suggestions.map((suggestions, index) => (
          <li
            key={index}
            className={suggestionFocus === index ? "highlight" : ""}
            onClick={() => handleClick(suggestions)}
            onMouseOver={() => handleSuggestionFocus(index)}
            onMouseLeave={() => handleSuggestionFocus(null)}
          >
            {suggestions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
