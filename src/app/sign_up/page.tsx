"use client";

import React, { useState } from "react";
import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "sonner";
import { signup } from "../../lib/actions";
import Button from "../../components/buttons/Button";

type ResponseType = { success: boolean; error: boolean; message: string };

const errorClassName = " text-red-500 font-semibold";
const successClassName = " text-green-700 font-semibold";

function Register() {
  const [status, setStatus] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const className = status == "success" ? successClassName : errorClassName;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border rounded-xl shadow-2xl">
      <div className="hidden md:flex flex-col gap-2 items-center justify-center bg-blinkblue rounded-l-xl text-white">
        <h2 className="text-xl font-bold">Welcome!</h2>
        <p className="text-wrap text-center p">
          Already registered? Sign in to continue.
        </p>
        <Link
          href="/sign_in"
          className="rounded-full border-2 px-4 py-1 border-white text-white hover:bg-blue-950"
        >
          SIGN IN
        </Link>
      </div>
      <div className="p-2">
        <h1 className="text-center font-bold text-xl">Create Your Account</h1>
        <form
          action={async (formData: FormData) => {
            const { success, error, message }: ResponseType = await signup(
              formData
            );
            if (success) toast.success(message);
            if (error) toast.error(message);
            success == true && error == false
              ? setStatus("success")
              : setStatus("error");
            message ? setMessage(message) : "";
          }}
          className="mb-3 flex flex-col gap-4"
        >
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
            <label
              className="font-semibold mb-3"
              id="password"
              htmlFor="password"
            >
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
        <section className="md:hidden mb-3 flex flex-row gap-2 items-center justify-center">
          <span className="border w-6"></span>
          <span className="text-gray-400 text-sm">OR</span>
          <span className="border w-6"></span>
        </section>
        <section className="md:hidden mb-3 flex flex-row justify-center items-center">
          <Link
            href="/sign_in"
            className="text-gray-600 underline cursor-pointer"
          >
            Login
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Register;
