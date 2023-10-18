const counterReducer = (
  state: number = 0,
  action: { type: string } | undefined
) => {
  switch (action?.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

export default counterReducer;
