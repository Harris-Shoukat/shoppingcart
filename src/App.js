import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cartpage from "./pages/Cartpage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App relative">
          <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            top: '400px', // Adjust this value as needed
          }
        }}
      />
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
