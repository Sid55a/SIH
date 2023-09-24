import { Users } from "@/app/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await Users.findById(userId);
    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      throw new Error();
    }
  } catch (error) {
    return getResponseMessage(
      "Failed to get the user with this ID !! ",
      500,
      false
    );
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  try {
    const user = await Users.findById(userId);
    if (user) {
     
    } else {
      throw new Error();
    }
  } catch (error) {
    return getResponseMessage(
      "Failed to get the user with this ID !! ",
      500,
      false
    );
  }
}
