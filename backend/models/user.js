import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    required: true,
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
