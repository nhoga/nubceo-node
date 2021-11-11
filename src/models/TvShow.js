import { Schema, model } from "mongoose";

const tvShowSchema = new Schema(
  {
    name: String,
    genre: Array,
    director: String,
    releaseDate: Date,
    episodes: Array,
  },
  { timestamps: true, versionKey: false }
);

export default model("TvShow", tvShowSchema);
