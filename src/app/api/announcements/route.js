import { Announcements } from "@/app/models/announcementModel";
import { connectDb } from "@/helper/dp";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
  try {
    const announcements = await Announcements.find();
    return NextResponse.json(announcements, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to create announcement !! ", 500, false);
  }
}

export async function POST(request) {
  try {
    const { title, content, tags } = await request.json();
    const announcement = new Announcements({
      title,
      content,
      tags,
    });
    const createdAnnouncement = await announcement.save();
    return NextResponse.json(createdAnnouncement, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to create announcement !! ", 500, false);
  }
}
