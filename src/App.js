import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cartpage from "./pages/Cartpage";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cartpage" element={<Cartpage/>}/>
        <Route path="/details/:pid"  element={<Detail />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
