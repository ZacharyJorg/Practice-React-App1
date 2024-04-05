import Nav from "./components/Navbar";
import Body from "./components/Body";
import Menu from "./components/Menu";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div>
      <Nav />
      <Body />
      <Menu />
    </div>
  );
}

export default App;
