import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cartpage from "./pages/Cartpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
        <Route path="/details"  element={<Detail />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
