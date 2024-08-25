import { useState } from "react";
import Logo from "/src/assets/logo/logo_light.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 pt-6 pb-8 mx-2 mb-4 bg-white shadow-md rounded-xl ">
        <div className="flex justify-center">
          <img src={Logo} alt="Kuliah AI" className="pb-5 w-[430px]" />
        </div>
        <div className="mb-4 text-center ">
          <h2 className="text-4xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="py-5 text-sm text-gray-600">
            Continue login with your email and password
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between"></div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white rounded-lg bg-sky-700 hover:bg-sky-500 focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>
          </div>
          <div className="mt-4 text-center">
            <a className="text-sm text-sky-700 hover:text-sky-500" href="#">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
