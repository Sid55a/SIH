import { Users } from "@/app/models/userModel";
import { connectDb } from "@/helper/dp";
import { getResponseMessage } from "@/helper/getResponseMessage";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
  const { userName, password } = await request.json();
  try {
    const user = await Users.findOne({ userName });
    if (user === null) {
      throw new Error("User not found !!");
    }

    const matched = bcrypt.compareSync(password, user?.password);
    if (!matched) {
      throw new Error("Password not matched !!");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      user: user,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to Login !! ", 500, false);
  }
}
