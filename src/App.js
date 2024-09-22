import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path=""></Route>
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
