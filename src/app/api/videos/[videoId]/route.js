import { Video } from "@/app/models/videoModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params?.videoId;
  try {
    const video = await Video.findById(id);
    if (video) {
      return NextResponse.json(video, { status: 200 });
    } else {
      throw new Error();
    }
  } catch (error) {
    return getResponseMessage("Failed to get Video by this ID !! ", 500, false);
  }
}

export async function DELETE(request, { params }) {
  const id = params?.videoId;

  try {
    await Video.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Video deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return getResponseMessage("Failed to delete Video !! ", 500, false);
  }
}

export async function PUT(request, { params }) {
  const id = params?.videoId;
  const { title, img, url, thumbnail, addedDate } = await request.json();

  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      id,
      {
        title,
        img,
        url,
        thumbnail,
        addedDate,
      },
      { new: true }
    );
    return NextResponse.json(updatedVideo, { status: 200 });
  } catch (error) {
    return getResponseMessage("Failed to edit the Video !! ", 500, false);
  }
}
