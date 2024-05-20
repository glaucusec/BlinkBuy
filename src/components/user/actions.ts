"use server";

import { nanoid } from "nanoid";
import prisma from "../../lib/prisma";

import { SignUpSchema } from "../../lib/definitions";

export default async function signup(formData: FormData) {
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
    const user = await prisma.user.create({
      data: {
        id: nanoid(),
        email: data.email,
        password: data.password,
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
