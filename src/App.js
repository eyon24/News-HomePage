import logo from "./images/logo.svg";
import mobilePicture from "./images/image-web-3-mobile.jpg";
import desktopPicture from "./images/image-web-3-desktop.jpg";

function App() {
  return (
    <main className="App">
      <header>
        <img id="header-logo" src={logo} alt="logo" />
        {/* hamburger-menu */}
      </header>
      <div className="body">
        <div className="article">
          <img src="mobilePicture" alt="" />
          <span>The Bright Future of Web 3.0?</span>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
        <div className="new">
          {/* title */}
          <div className="new-articles">{/* for each articles */}</div>
        </div>
        <div className="top-three">{/* loop component for article */}</div>
      </div>
    </main>
  );
}

export default App;
