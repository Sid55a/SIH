import { Announcements } from "@/app/models/announcementModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const announcement = await Announcements.findById(id);
    if (announcement) {
      return NextResponse.json(announcement, { status: 201 });
    } else {
      throw new error();
    }
  } catch (error) {
    console.log(error);
    return getResponseMessage(
      "Failed to get announcement with thid ID !! ",
      500,
      false
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await Announcements.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Announcemnt deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return getResponseMessage("Failed to delete Announcement !! ", 500, false);
  }
}

export async function PUT(request, { params }) {
  const { id } = params;

  const { title, content, tags } = await request.json();

  try {
    const updatedAnnouncement = await Announcements.findByIdAndUpdate(
      id,
      {
        title,
        content,
        tags,
      },
      { new: true }
    );
    return NextResponse.json(updatedAnnouncement, { status: 200 });
  } catch (error) {
    return getResponseMessage(
      "Failed to edit the Announcement !! ",
      500,
      false
    );
  }
}
