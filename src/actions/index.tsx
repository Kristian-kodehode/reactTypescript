export const decrement = (number: number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};
export const increment = (number: number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const isLogged = () => {
  return {
    type: "SIGNIN",
  };
};
