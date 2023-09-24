import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  subject: {
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
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  userId: {
    type: mongoose.ObjectId,
  },
});

export const Feedbacks =
  mongoose.models.feedbacks || mongoose.model("feedbacks", FeedbackSchema);
