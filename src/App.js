import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Works />
      <Newsletter />
    </div>
  );
}

export default App;
