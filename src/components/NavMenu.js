import open from "../images/icon-menu.svg";
import close from "../images/icon-menu-close.svg";
import "../css/Nav.css";

const NavMenu = (props) => {
  const cats = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <div className="nav__container">
      <div className={`nav__blur ${props.menu ? "open" : ""}`}></div>
      <img
        className="nav__button"
        onClick={props.handleMenu}
        src={props.menu ? close : open}
        alt="hamburger icon"
      />
      <div className={`nav__popout ${props.menu ? "opened" : ""}`}>
        <ul className="nav__categories">
          {cats.map((cat) => (
            <li>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
