import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cartpage from "./pages/Cartpage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App relative">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/detail/cartpage" element={<Cartpage />} />
          <Route path="/details/:pid" element={<Detail />} />
        </Routes>
      </div>
  );
}

export default App;
