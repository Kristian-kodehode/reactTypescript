import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decrement, increment, isLogged } from "../../actions";
import { useDispatch } from "react-redux";
// import counterReducer from "../../reducers/Counter";

interface Product {
  id: number;
  title: string;
  image: string;
}
const Main = () => {
  const [data, setData] = useState<Product[]>([]);
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        // const response = await fetch("http://www.colourlovers.com/api/colors");
        console.log(response);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>This is the main page</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(isLogged())}>Login</button>

      {isLoggedIn ? (
        <div className="cards-container">
          {data.map((product) => (
            <div
              key={product.id}
              className="card-item"
            >
              <div className="image-container">
                <img
                  className="image-style"
                  src={product.image}
                  alt={product.title}
                  style={{ width: "200px" }}
                />
              </div>
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        "You are not allowed to view products"
      )}
    </div>
  );
};

export default Main;
