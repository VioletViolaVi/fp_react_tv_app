const initState = {
  watchlist: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SHOW":
      return {
        ...state,
        watchlist: [...state["watchlist"], action.payload]
      };

    case "REMOVE_SHOW": 
      return {
        ...state,
        watchlist: state["watchlist"].filter(s => s.id == action.payload)
      }

    // EVERY REDUCER NEEDS A DEFAULT!!!
    default:
      return state;
  }
};

export default reducer;
