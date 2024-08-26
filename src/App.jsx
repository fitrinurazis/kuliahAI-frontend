import { Route, Routes } from "react-router-dom";
import Kuliah from "./pages/Kuliah/Kuliah";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TeknikInformatika from "./pages/Prody/Teknikinformatika";
import SistemInformasi from "./pages/Prody/SistemInformasi";
import SistemKomputer from "./pages/Prody/SistemKomputer";
import DesainKomunikasiVisual from "./pages/Prody/DesainKumunikasiVisual";
import Akuntansi from "./pages/Prody/Akuntansi";
import Management from "./pages/Prody/Management";
import Bisnis from "./pages/Prody/Bisnis";
import Hukum from "./pages/Prody/Hukum"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kuliah" element={<Kuliah />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ti" element={<TeknikInformatika />} />
      <Route path="/Si" element={<SistemInformasi />} />
      <Route path="/sk" element={<SistemKomputer />} />
      <Route path="/dkv" element={<DesainKomunikasiVisual />} />
      <Route path="/ak" element={<Akuntansi />} />
      <Route path="/mm" element={<Management />} />
      <Route path="/bsn" element={<Bisnis />} />
      <Route path="/hk" element={<Hukum />} />
      
      
    </Routes>
  );
}

export default App;
