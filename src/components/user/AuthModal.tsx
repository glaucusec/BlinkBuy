"use client";
import React, { useState, useEffect } from "react";
import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";
import Login from "./Login";
import Register from "./Register";

const errorClassName = " text-red-500 font-semibold";
const successClassName = " text-green-700 font-semibold";

function AuthModal() {
  const [status, setStatus] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  useEffect(() => {
    setStatus("");
    setMessage("");
  }, [isLoginMode]);

  const handleLoginMode = () => {
    setIsLoginMode((prevState: boolean) => !prevState);
  };

  const className = status == "success" ? successClassName : errorClassName;

  return (
    <div className="p-2 rounded-xl ">
      <section className="mb-3 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold">Delighted to have you!</h2>
        <p className="text-sm font-semibold text-gray-600">
          Enter your email or password to Login / SignUp
        </p>
        <div className="flex flex-col justify-center items-center">
          <p
            className={`text-sm text-center text-pretty min-w-60 max-w-40 ${className}`}
          >
            {message}
          </p>
          {status == "success" ? (
            <IconCircleCheckFilled fill="#15803d" />
          ) : status == "error" ? (
            <IconCircleXFilled fill="#dc2626" />
          ) : null}
        </div>
      </section>
      <section className="mb-3">
        {isLoginMode ? (
          <Login setStatus={setStatus} setMessage={setMessage} />
        ) : (
          <Register setStatus={setStatus} setMessage={setMessage} />
        )}
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
          {isLoginMode ? "Register" : "Login"}
        </span>
      </section>
    </div>
  );
}

export default AuthModal;
