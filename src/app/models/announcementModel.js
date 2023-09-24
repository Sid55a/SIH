import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
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

export const Announcements =
  mongoose.models.announcements ||
  mongoose.model("announcements", AnnouncementSchema);
