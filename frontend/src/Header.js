import logo from './BookLogo.svg';
import { NavLink } from "react-router-dom";
import './App.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default Header;