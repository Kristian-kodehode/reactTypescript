const isLogged = (
  state: boolean = true,
  action: { type: string } | undefined
) => {
  switch (action?.type) {
    case "SIGNIN":
      return !state;
    default:
      return state;
  }
};

export default isLogged;
