import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          //   className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <br />
        <NavLink to="/animalList">Animals</NavLink>
        <br />
        <NavLink to="/map">Map</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
