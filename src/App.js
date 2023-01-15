import logo from "./images/logo.svg";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import CoverArticle from "./components/CoverArticle";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <main className="App">
      <header>
        <div>
          <img id="header-logo" src={logo} alt="logo" />
        </div>
        <NavMenu id="nav-menu" menu={menu} handleMenu={handleMenu} />
      </header>

      <div className="body">
        <CoverArticle />
      </div>
    </main>
  );
}

export default App;
