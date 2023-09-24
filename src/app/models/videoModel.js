import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
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

export const Video =
  mongoose.models.videos || mongoose.model("videos", VideoSchema);
