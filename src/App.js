import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/navbar/Navbar";
import Shop from "./components/pages/shop/Shop";
import Cart from "./components/pages/cart/Cart";
import { ShopContextProvider } from "./components/context/shopContext";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
