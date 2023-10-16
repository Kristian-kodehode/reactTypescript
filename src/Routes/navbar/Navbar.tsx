import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Main</Link>

      <Link to="/secondary">Secondary</Link>

      <Link to="/nav3">Nav 3</Link>
    </nav>
  );
};

export default Navbar;
