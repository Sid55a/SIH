import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "employee",
  },
  image: {
    type: String,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export const Users =
  mongoose.models.users || mongoose.model("users", UserSchema);
