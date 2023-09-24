// date title url thumbnail
// img desc title content
// title date text
// userid subject feedback
// userName password email

import { Video } from "@/app/models/videoModel";
import { connectDb } from "@/helper/dp";
import { NextResponse } from "next/server";
connectDb();

export async function GET(request) {
  try {
    const videos = await Video.find();
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to fetch Videos !! ", 500, false);
  }
}

export async function POST(request) {
  const { title, img, url, thumbnail, addedDate, tags } = await request.json();
  try {
    const video = new Video({
      title,
      img,
      url,
      thumbnail,
      addedDate,
      tags,
    });
    const createdVideo = await video.save();
    return NextResponse.json(createdVideo, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to add Video !! ", 500, false);
  }
}
