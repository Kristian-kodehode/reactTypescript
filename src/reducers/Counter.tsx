const counterReducer = (
  state: number = 0,
  action:
    | {
        payload: number;
        type: string | number;
      }
    | undefined
) => {
  switch (action?.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
