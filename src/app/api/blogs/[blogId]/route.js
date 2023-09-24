import { Blogs } from "@/app/models/blogModel";
import { getResponseMessage } from "@/helper/getResponseMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { blogId } = params;
  try {
    const blog = await Blogs.findById(blogId);
    console.log(blog);
    if (blog !== null) {
      return NextResponse.json(blog, { status: 200 });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    return getResponseMessage(
      "Failed to fetch Blog with this ID !! ",
      500,
      false
    );
  }
}

export async function DELETE(request, { params }) {
  const { blogId } = params;

  try {
    await Blogs.findByIdAndDelete(blogId);
    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return getResponseMessage("Failed to delete Blog !! ", 500, false);
  }
}

export async function PUT(request, { params }) {
  const { blogId } = params;

  const { title, desc, content, images, addedDate, tags } =
    await request.json();

  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(
      blogId,
      {
        title,
        desc,
        content,
        images,
        addedDate,
        tags,
      },
      { new: true }
    );
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    return getResponseMessage("Failed to edit the Blog !! ", 500, false);
  }
}
