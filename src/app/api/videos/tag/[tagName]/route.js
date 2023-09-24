import { Video } from "@/app/models/videoModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { tagName } = params;

  try {
    var videos;
    if (tagName === "all") {
      videos = await Video.find();
    } else {
      videos = await Video.find({ tags: tagName });
    }
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return getResponseMessage(
      "Failed to fetch Videos with given tag!! ",
      500,
      false
    );
  }
}
