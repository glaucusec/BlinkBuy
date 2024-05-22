"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";
import Button from "../../components/buttons/Button";
import { login } from "../../lib/actions";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";

type ResponseType = {
  success: boolean;
  error: boolean;
  message: string;
  data: object;
};

const errorClassName = " text-red-500 font-semibold";
const successClassName = " text-green-700 font-semibold";

function LoginPage() {
  const { setValueHandler } = useContext(AuthContext);

  const router = useRouter();
  const [status, setStatus] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const className = status == "success" ? successClassName : errorClassName;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border rounded-xl shadow-2xl">
      <div className="hidden md:flex flex-col gap-2 items-center justify-center bg-blinkblue rounded-l-xl text-white">
        <h2 className="text-xl font-bold">Welcome Back!</h2>
        <p className="text-wrap text-center p">
          Don't have an account? Sign up and start your journey with us.
        </p>
        <Link
          href="/sign_up"
          className="rounded-full border-2 px-4 py-1 border-white text-white text-sm hover:bg-blue-950"
        >
          SIGN UP
        </Link>
      </div>
      <div className="p-2">
        <h1 className="text-center font-bold text-xl">Login to Your Account</h1>
        <form
          action={async (formData: FormData) => {
            const { success, error, message, data }: ResponseType = await login(
              formData
            );
            if (success) toast.success(message);
            if (error) toast.error(message);
            success == true && error == false
              ? setStatus("success")
              : setStatus("error");
            message ? setMessage(message) : "";
            // on successful login, update the authcontext

            if (success) {
              setValueHandler(data.userId);
              router.push("/");
            }
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
          <Button text={"Login"} />
        </form>
        <section className="md:hidden mb-3 flex flex-row gap-2 items-center justify-center">
          <span className="border w-6"></span>
          <span className="text-gray-400 text-sm">OR</span>
          <span className="border w-6"></span>
        </section>
        <section className="md:hidden mb-3 flex flex-row justify-center items-center">
          <Link
            href="/user/sign_up"
            className="text-gray-600 underline cursor-pointer"
          >
            Register
          </Link>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;
