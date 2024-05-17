"use client";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function AuthModal() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLoginMode = () => {
    setIsLoginMode((prevState) => !prevState);
  };
  return (
    <div className="p-2 rounded-xl">
      <section className="mb-3 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold">Delighted to have you!</h2>
        <p className="text-sm font-semibold text-gray-600">
          Enter your email or password to Login / SignUp
        </p>
      </section>
      <section className="mb-3">
        {isLoginMode ? <Login /> : <Register />}
      </section>
      <section className="mb-3 flex flex-row gap-2 items-center justify-center">
        <span className="border w-6"></span>
        <span className="text-gray-400 text-sm">OR</span>
        <span className="border w-6"></span>
      </section>
      <section className="mb-3 flex flex-row justify-center items-center">
        <span
          onClick={handleLoginMode}
          className="text-gray-600 underline cursor-pointer"
        >
          {isLoginMode ? "Login" : "Register"}
        </span>
      </section>
    </div>
  );
}

export default AuthModal;
