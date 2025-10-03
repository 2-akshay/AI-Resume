import React, { useContext, useState } from "react";
import Navbar from "../components/Navabar.jsx";
import { AuthContext } from "../pages/AuthContext.jsx"

const AuthPage = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [inputUser, setInputUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputUser.trim()) {
      login(inputUser.trim());
      setInputUser("");
    }
  };

  return (
    <div className="min-h-screen bg-back-100">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-20">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          {!isLoggedIn ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Login
              </h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    value={inputUser}
                    onChange={(e) => setInputUser(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="Enter your username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Login
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                You are already logged in 🎉
              </h2>
              <p>Use the navbar to logout if needed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
