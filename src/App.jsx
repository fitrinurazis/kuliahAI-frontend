import { Route, Routes } from "react-router-dom";
import Kuliah from "./pages/Kuliah/Kuliah";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TeknikInformatika from "./pages/TeknikInformatika/Teknikinformatika";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kuliah" element={<Kuliah />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ti" element={<TeknikInformatika />} />
    </Routes>
  );
}

export default App;
