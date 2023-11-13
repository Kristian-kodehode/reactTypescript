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
interface RootState {
  counter: number;
  isLogged: boolean;
}

const Main = () => {
  const [data, setData] = useState<Product[]>([]);
  const counter = useSelector((state: RootState) => state.counter);
  const isLoggedIn = useSelector((state: RootState) => state.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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

      <button onClick={() => dispatch(isLogged())}>Login</button>

      {isLoggedIn ? (
        <div className="logged-in">
          <h2>Items in cart: {counter}</h2>
          <div className="gradient-overlay-left "></div>
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
                <div className="buttons-container">
                  <button onClick={() => dispatch(decrement(1))}>Remove</button>
                  <button onClick={() => dispatch(increment(1))}>Add</button>
                </div>
                {/* <h3>{product.title}</h3> */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        "You are not allowed to view products"
      )}
    </div>
  );
};

export default Main;
