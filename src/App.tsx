import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/layout/Layout";
import Main from "./Routes/main/MainPage";
import Secondary from "./Routes/secondary/Secondary";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path="/secondary"
            element={<Secondary />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
