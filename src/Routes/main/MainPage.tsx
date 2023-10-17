import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
}
const Main = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>This is the main page</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "200px" }}
            />
            <h3>{product.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
