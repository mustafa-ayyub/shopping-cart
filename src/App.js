import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
