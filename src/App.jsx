import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Kuliah from "./pages/Kuliah/Kuliah";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Akuntansi from "./pages/Prody/Akuntansi";
import Bisnis from "./pages/Prody/Bisnis";
import DesainKomunikasiVisual from "./pages/Prody/DesainKumunikasiVisual";
import Hukum from "./pages/Prody/Hukum";
import Management from "./pages/Prody/Management";
import SistemInformasi from "./pages/Prody/SistemInformasi";
import SistemKomputer from "./pages/Prody/SistemKomputer";
import TeknikInformatika from "./pages/Prody/Teknikinformatika";
import Dashboard from "./pages/Dashboard/Dashboard";
import AboutMe from "./pages/AboutMe/AboutMe";
import SupportMe from "./pages/SupportMe/SupportMe";
import UnavailablePage from "./pages/Unavailable/UnavailablePage";
import Profile from "./pages/Profile/Profile";
import EditFoto from "./components/Profile/EditFoto";

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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/profil/editfotoprofil" element={<EditFoto />} />
      <Route path="/tentang-kami" element={<AboutMe />} />
      <Route path="/dukung-kami" element={<SupportMe />} />
      <Route path="/halaman-tidak-ada" element={<UnavailablePage />} />
    </Routes>
  );
}

export default App;
