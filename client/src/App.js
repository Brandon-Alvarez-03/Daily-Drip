import {useRef} from "react";
import NavBar from "./components/Nav/Nav.jsx";
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const scrollableRef = useRef(null);
  const navRef = useRef(null);
  const handleScrollToTop = () => {
    navRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      container: scrollableRef.current,
    });
  };

  return (
    <div className="App" ref={scrollableRef}>
      <NavBar ref={navRef} />
      <Main />
      <Footer handleScrollToTop={handleScrollToTop} />
    </div>
  );
}

export default App;
