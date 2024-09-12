import { useState } from "react";
import Logo from "/src/assets/logo/logo_light.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    nama: "",
    nohp: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.nama) tempErrors.nama = "Masukkan nama";
    if (!formData.nim) tempErrors.nim = "Masukkan No. Hanphone";
    if (!formData.email) tempErrors.email = "Masukkan Email";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email tidak valid";
    if (!formData.password) tempErrors.password = "Masukkan password";
    if (formData.password.length < 6)
      tempErrors.password = "Password minimal harus 6 karakter";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords tidak cocok";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/register",
          formData
        );
        console.log(response.data);
        // Handle successful registration (e.g., redirect to login page)
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show error message)
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-800">
      <div className="px-5 pt-6 pb-8 mx-2 mb-4 ">
        <div className="flex justify-center">
          <img src={Logo} alt="Kuliah AI" className="pb-5 w-[430px]" />
        </div>
        <div className="mb-4 text-center ">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">
            Selamat Datang
          </h2>
          <p className="py-5 text-sm text-gray-600 dark:text-gray-100">
            Daftar menggunakan email dan No Hp
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800 ${
                errors.nama ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Nama"
            />
            {errors.nama && (
              <p className="mt-1 text-xs text-red-500">{errors.nama}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800 ${
                errors.nim ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              type="text"
              name="nim"
              value={formData.nim}
              onChange={handleChange}
              placeholder="No Hp"
            />
            {errors.nim && (
              <p className="mt-1 text-xs text-red-500">{errors.nim}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Konfirmasi Password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between"></div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white rounded-lg bg-sky-700 hover:bg-sky-500 focus:outline-none focus:shadow-outline"
            >
              Daftar
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm dark:text-gray-100">
            Sudah punya akun?
            <Link
              to="/Login"
              className="text-sm text-sky-700 hover:text-sky-500"
            >
              <span> Masuk</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
