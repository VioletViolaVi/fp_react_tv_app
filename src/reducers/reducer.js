const initState = {
  watchlist: [],
  loading: true,
  showData: [],
  error: ""
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
        watchlist: state["watchlist"].filter((s) => s.id != action.payload)
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "LOAD_SHOWS":
      return {
        ...state,
        loading: false,
        showData: action.payload,
        error: ""
      };

    // EVERY REDUCER NEEDS A DEFAULT!!!
    default:
      return state;
  }
};

export default reducer;
