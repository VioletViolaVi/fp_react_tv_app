/* 
NOTES:
    - data.map((singleObj, index) => {...})
    - 'index' parameter means index position number of elements
*/

import React from "react";
import ShowCard from "./components/ShowCard";

import "./App.css";

const data = [
  {
    id: 1,
    title: "Switched at Birth",
    description:
      "Babies switched at birth. Raised by different families until 16 years old.",
    rating: 7.5
  },
  {
    id: 2,
    title: "Empire",
    description:
      "Hip hop family who rap, sing and are all about the money. No matter how they get it.",
    rating: 9.1
  },
  {
    id: 3,
    title: "Tweenies",
    description:
      "They teach you the best in life. They are kind, sweet and all about teaching the ways of life. You ready? You better strap up kids!",
    rating: 8.4
  }
];

const App = () => {
  return (
    <>
      {data.map((singleObj) => {
        return (
          <ShowCard
            key={singleObj.id}
            title={singleObj.title}
            description={singleObj.description}
            rating={singleObj.rating}
          />
        );
      })}
    </>
  );
};

export default App;
