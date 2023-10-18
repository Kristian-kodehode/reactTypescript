const isLoggedReducer = (
  state: boolean = false,
  action: { type: string } | undefined
) => {
  switch (action?.type) {
    case "SIGN IN":
      return !state;
  }
};

export default isLoggedReducer;
