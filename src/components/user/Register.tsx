import React from "react";
import signup from "./actions";
import Button from "./Button";

type LoginPropsType = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

type ResponseType = { success: boolean; error: boolean; message: string };

function Register({ setStatus, setMessage }: LoginPropsType) {
  return (
    <form
      action={async (formData: FormData) => {
        const { success, error, message }: ResponseType = await signup(
          formData
        );
        success == true && error == false
          ? setStatus("success")
          : setStatus("error");
        message ? setMessage(message) : "";
      }}
      className="flex flex-col gap-4"
    >
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
      <div className="flex flex-col">
        <label
          className="font-semibold mb-3"
          id="password2"
          htmlFor="password2"
        >
          Confirm Password
        </label>
        <input
          className="p-2 rounded-xl focus:border-blinkblue border-2 outline-none"
          id="password2"
          type="password"
          name="password2"
        />
      </div>
      <Button text={"Register"} />
    </form>
  );
}

export default Register;
