import NavBar from "./components/Nav/Nav.jsx";
import Main from "./screens/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import Login from "./screens/Login";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
