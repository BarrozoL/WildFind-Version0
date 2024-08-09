import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
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
          <br />
          <NavLink to="/add">Add a Sighting</NavLink>
          <br />
          <NavLink to="/watchList">View your Watchlist</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
