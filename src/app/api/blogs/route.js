import { Blogs } from "@/app/models/blogModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const blogs = await Blogs.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to fetch Blogs !! ", 500, false);
  }
}

export async function POST(request) {
  const { title, desc, content, images, tags } = await request.json();
  try {
    const blog = new Blogs({
      title,
      desc,
      content,
      images,
      tags,
    });
    const createdBlog = await blog.save();
    return NextResponse.json(createdBlog, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to add Blog !! ", 500, false);
  }
}
