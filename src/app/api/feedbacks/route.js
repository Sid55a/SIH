import { Announcements } from "@/app/models/announcementModel";
import { Feedbacks } from "@/app/models/feedbackModel";
import { connectDb } from "@/helper/dp";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";



export async function GET(request) {
  try {
    const feedbacks = await Feedbacks.find();
    return NextResponse.json(feedbacks, { status: 200 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to fetch Feedbacks !! ", 500, false);
  }
}

export async function POST(request) {
  const { subject, content, images } = await request.json();
  try {
    const feedback = new Feedbacks({
      subject,
      content,
      images,
    });
    const createdFeedback = await feedback.save();
    return NextResponse.json(createdFeedback, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to add Blog !! ", 500, false);
  }
}
