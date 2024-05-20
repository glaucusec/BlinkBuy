import React from "react";
import Button from "./Button";

type LoginPropsType = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

function Login({ setStatus, setMessage }: LoginPropsType) {
  return (
    <form className="flex flex-col gap-4" action="">
      <div className="flex flex-col">
        <label className="font-semibold mb-3" id="email" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 rounded-xl focus:border-blinkblue border-2 outline-none"
          id="email"
          type="email"
          name="email"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-3" id="password" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 rounded-xl focus:border-blinkblue border-2 outline-none"
          id="password"
          type="password"
          name="password"
        />
      </div>
      <Button text={"Login"} />
    </form>
  );
}

export default Login;
