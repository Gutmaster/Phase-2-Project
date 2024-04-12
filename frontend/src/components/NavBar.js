import logo from './BookLogo.svg';
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
        <nav>
          <NavLink
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/library"
            className="nav-link"
          >
            Library
          </NavLink>
          <NavLink
            to="/donate"
            className="nav-link"
          >
            Donate
          </NavLink>
        </nav>
    </div>
  );
}

export default NavBar;