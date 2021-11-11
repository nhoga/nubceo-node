import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    name: String,
    genre: Array,
    director: String,
    releaseDate: Date,
    productionCompanies: Array,
  },
  { timestamps: true, versionKey: false }
);

export default model("Movie", movieSchema);
