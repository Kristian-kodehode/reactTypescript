import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/layout/Layout";
import Main from "./Routes/main/Main";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
