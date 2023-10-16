import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/secondary">Secondary</Link>
      </li>
      <li>
        <Link to="/nav3">Nav 3</Link>
      </li>
    </nav>
  );
};

export default Navbar;
