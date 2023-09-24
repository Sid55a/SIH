import { Announcements } from "@/app/models/announcementModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { tag } = params;
  console.log(tag);
  try {
    var announcements;
    if (tag === "all") {
      announcements = await Announcements.find();
    } else {
      announcements = await Announcements.find({ tags: tag });
    }
    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    console.log(error);
    return getResponseMessage(
      "Failed to fetch Announcements with given tag !! ",
      500,
      false
    );
  }
}
