import { Blogs } from "@/app/models/blogModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { tagName } = params;

  try {
    var blogs;
    if (tagName === "all") {
      blogs = await Blogs.find();
    } else {
      blogs = await Blogs.find({ tags: tagName });
    }
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return getResponseMessage(
      "Failed to fetch Videos with given tag !! ",
      500,
      false
    );
  }
}
