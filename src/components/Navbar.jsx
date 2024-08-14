import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="nav-img" src="src\assets\images\WildFind-logo-5.png" />
      <nav>
        <ul>
          <NavLink
            to="/"
            //   className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink to="/animal-list">Animals</NavLink>

          <NavLink to="/map">Map</NavLink>

          <NavLink to="/animal-add">Seen a new animal? Add it!</NavLink>

          <NavLink to="/watch">View your Watchlist</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
