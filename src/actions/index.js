export function addShowAction(show) {
  return {
    type: "ADD_SHOW",
    payload: show
  };
}

export function removeShowAction(id) {
  return {
    type: "REMOVE_SHOW",
    payload: id
  };
}
