/* 
NOTES:
    - data.map((singleObj, index) => {...})
    - 'index' parameter means index position number of elements
    - u'll get blocked for NOT doing this '...}, []);' as u'd be sending requests to the api too many times!
*/

import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
// for better structuring (below)
import { ShowCard, SearchForm } from "./components";

const App = () => {
  const [showData, setShowData] = useState([]);
  const [searchStr, setSearchStr] = useState("Friends");
  //   console.log(showData);

  useEffect(() => {
    async function searchApi() {
      const result = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchStr}`
      );
      setShowData(result.data);
    }
    searchApi();
  }, [searchStr]);

  function handleSearch(userInput) {
    // console.log("I am a function passed a prop that calls my original parent");
    // console.log(searchStr);
    setSearchStr(userInput);
  }

  return (
    <>
      <SearchForm handleSearchSubmission={handleSearch} />

      {showData.map((singleObj) => {
        return <ShowCard key={singleObj.show.id} data={singleObj.show} />;
      })}
    </>
  );
};

export default App;

// const data = [
//   {
//     id: 1,
//     title: "Switched at Birth",
//     description:
//       "Babies switched at birth. Raised by different families until 16 years old.",
//     rating: 7.5
//   },
//   {
//     id: 2,
//     title: "Empire",
//     description:
//       "Hip hop family who rap, sing and are all about the money. No matter how they get it.",
//     rating: 9.1
//   },
//   {
//     id: 3,
//     title: "Tweenies",
//     description:
//       "They teach you the best in life. They are kind, sweet and all about teaching the ways of life. You ready? You better strap up kids!",
//     rating: 8.4
//   }
// ];
