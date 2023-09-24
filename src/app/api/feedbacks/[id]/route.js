import { Feedbacks } from "@/app/models/feedbackModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const feedback = await Feedbacks.findById(id);

    if (feedback !== null) {
      return NextResponse.json(feedback, { status: 200 });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    return getResponseMessage(
      "Failed to fetch Feedback with this ID !! ",
      500,
      false
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await Feedbacks.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Feedback deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return getResponseMessage("Failed to delete Feedback !! ", 500, false);
  }
}

export async function PUT(request, { params }) {
  const { id } = params;

  const { subject, content, images } = await request.json();

  try {
    const updatedFeedback = await Feedbacks.findByIdAndUpdate(
      id,
      {
        subject,
        content,
        images,
      },
      { new: true }
    );
    return NextResponse.json(updatedFeedback, { status: 200 });
  } catch (error) {
    return getResponseMessage("Failed to edit the Feedback !! ", 500, false);
  }
}
