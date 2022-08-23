import React, { useState } from "react";

const SearchForm = ({ handleSearchSubmission }) => {
  const [inputValue, setInputValue] = useState("");

  function handleInput(event) {
    const newInput = event.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearchSubmission(inputValue);
  }

  return (
    <>
      <form action="#" id="searchForm" onSubmit={handleSubmit}>
        <label htmlFor="searchBox">Query: </label>
        <input
          type="text"
          onChange={handleInput}
          value={inputValue}
          id="searchBox"
          required
          name=""
        />
        <input type="submit" value="Send Off" />
      </form>
    </>
  );
};

export default SearchForm;
