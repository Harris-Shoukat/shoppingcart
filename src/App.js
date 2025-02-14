import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Cartpage from "./pages/Cartpage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import { AuthProvider } from "./firebase/AuthContext";
import Profile from "./pages/Profile";
import CompleteForm from "./pages/CompleteForm";

function App() {
  return (
    <AuthProvider>
      <div className="App relative">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              top: "400px",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/detail/cartpage" element={<Cartpage />} />
          <Route path="/details/:pid" element={<Detail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/completeform" element={<CompleteForm />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
