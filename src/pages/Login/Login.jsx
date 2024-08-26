import { useState } from "react";
import Logo from "/src/assets/logo/logo_light.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.identifier) tempErrors.identifier = "Masukkan Email atau NIM";
    if (!formData.password) tempErrors.password = "Masukkan Password";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/login",
          formData
        );
        console.log(response.data);
        setMessage("Login successful");
        // Handle successful login (e.g., redirect to dashboard)
      } catch (error) {
        console.error(error);
        setMessage("Login failed. Check your email/NIM and password.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 pt-6 pb-8 mx-2 mb-4 bg-white shadow-md rounded-xl ">
        <div className="flex justify-center">
          <img src={Logo} alt="Kuliah AI" className="pb-5 w-[430px]" />
        </div>
        <div className="mb-4 text-center ">
          <h2 className="text-4xl font-bold text-gray-800">
            Selamat Datang Kawan
          </h2>
          <p className="py-5 text-sm text-gray-600">
            Lanjutkan masuk menggunakan email atau NIM dan password
          </p>
        </div>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="indentifier"
              type="text"
              value={FormData.identifier}
              placeholder="Email atau NIM"
              onChange={handleChange}
            />
            {errors.identifier && (
              <p className="mt-1 text-sm text-red-500">{errors.identifier}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between"></div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white rounded-lg bg-sky-700 hover:bg-sky-500 focus:outline-none focus:shadow-outline"
            >
              Masuk
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link
              className="text-sm text-sky-700 hover:text-sky-500"
              to="/lupa_password"
            >
              Lupa Password?
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <p className="text-sm">
              Hubungan masalah teknis login, dan operasional.{" "}
            </p>
            <div className="flex gap-5">
              <Link to="https://api.whatsapp.com/send/?phone=6281382923343">
                <button className="flex items-center px-3 py-1 text-sm text-white bg-green-600 rounded-md">
                  <FaWhatsapp />
                  <span>081382923343</span>
                </button>
              </Link>
              <Link to="https://api.whatsapp.com/send/?phone=6281578375430">
                <button className="flex items-center px-3 py-1 text-sm text-white bg-green-600 rounded-md">
                  <FaWhatsapp />
                  <span> 081578375430</span>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
