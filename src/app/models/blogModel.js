import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  tags: {
    type: [String],
    default: ["miscellaneous"],
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  userId: {
    type: mongoose.ObjectId,
  },
});

export const Blogs =
  mongoose.models.blogs || mongoose.model("blogs", BlogSchema);
