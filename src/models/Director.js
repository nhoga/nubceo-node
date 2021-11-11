import { Schema, model } from "mongoose";

const directorSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false }
);

export default model("Director", directorSchema);
