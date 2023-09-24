import { Users } from "@/app/models/userModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
export async function GET(request) {
  try {
    const user = await Users.find();
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to SignUp !! ", 500, false);
  }
}

export async function POST(request) {
  const { userName, password, email, role, image } = await request.json();
  try {
    var salt = bycrypt.genSaltSync(10);
    var hash = bycrypt.hashSync(password, salt);

    const user = new Users({
      userName,
      password: hash,
      email,
      role,
      image,
    });

    const createdUser = await user.save();
    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    return getResponseMessage("Failed to SignUp !! ", 500, false);
  }
}
