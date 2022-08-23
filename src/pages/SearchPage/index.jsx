/* 
NOTES:
    - data.map((singleObj, index) => {...})
    - 'index' parameter means index position number of elements
    - u'll get blocked for NOT doing this '...}, []);' as u'd be sending requests to the api too many times!
*/

import React, { useState, useEffect } from "react";
import axios from "axios";

import { ShowCard, SearchForm, Header } from "../../components";

const SearchPage = () => {
  const [showData, setShowData] = useState([]);
  const [searchString, setSearchString] = useState("Friends");

  useEffect(() => {
    async function searchAPI() {
      const result = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      setShowData(result.data);
    }

    searchAPI();
  }, [searchString]);

  function handleSearch(userInput) {
    setSearchString(userInput);
  }

  return (
    <>
      <Header />
      <SearchForm handleSearchSubmission={handleSearch} />
      {showData.map((s) => (
        <ShowCard key={s["show"]["id"]} data={s["show"]} />
      ))}
    </>
  );
};

export default SearchPage;
