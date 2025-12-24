"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.refresh();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="p-8 rounded shadow-md border border-gray-200  w-full max-w-sm text-center">
        <h1 className="text-2xl text-black font-bold mb-2">Auth App</h1>
        <p className="text-gray-600 mb-6">Welcome to the application</p>

        <div className="flex flex-col gap-4">
          {isLoggedIn ? (
            <>
              <p className="text-green-600 font-medium">You are logged in!</p>

              <Link
                href="/users"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                View Users
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
