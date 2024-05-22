"use server";

import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import prisma from "./prisma";

import { SignUpSchema, LoginSchema } from "./definitions";
import { createSession } from "./session";
import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.errors; // returns an array of error objects
    return { success: false, error: true, message: errors[0].message };
  }
  const data = validatedFields.data;
  // fetch the password hash and email
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) {
    return {
      success: false,
      error: true,
      message: "Email not found. Please check your email and try again.",
    };
  }
  // check if the passwords match
  try {
    const hashedPassword = user?.password;
    const match = await bcrypt.compare(data.password, hashedPassword);
    if (match) {
      // if passwords match, set the cookie and return the response
      await createSession(user.id);
      return {
        success: true,
        error: false,
        message: "Login successful. Welcome back!",
        data: { userId: user.id },
      };
    } else {
      return {
        success: false,
        error: true,
        message:
          "Incorrect password. Please check your password and try again.",
      };
    }
  } catch (err) {
    return {
      success: false,
      error: true,
      message:
        "An error occurred while creating your account. Please try again later.",
    };
  }
}

export async function signup(formData: FormData) {
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    password2: formData.get("password2"),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.errors; // returns an array of error objects
    return { success: false, error: true, message: errors[0].message };
  }
  const data = validatedFields.data;

  // check if the email is already registered
  const existingUser = await prisma.user.findUnique({
    where: { email: validatedFields.data.email },
  });
  if (existingUser !== null) {
    return {
      success: false,
      error: true,
      message:
        "This email is already associated with an account. Please log in or use another email.",
    };
  }

  try {
    // hash the password
    const hashedPassword: string = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        id: nanoid(),
        email: data.email,
        password: hashedPassword,
      },
    });
    return {
      success: true,
      error: false,
      message:
        "Your account has been successfully created. Please check your email to verify your account.",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: true,
      message:
        "An error occurred while creating your account. Please try again later.",
    };
  }
}

export async function signout() {
  cookies().delete("session");
  return { success: true, error: false, message: "Logged Out!" };
}
