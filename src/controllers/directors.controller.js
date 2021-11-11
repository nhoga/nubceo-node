import Director from "../models/Director";

export const getDirectors = async (req, res) => {
  const Directors = await Director.find();
  res.json(Directors);
};

export const deleteDirector = async (req, res) => {
  await Director.findByIdAndDelete(req.params.directorId);
  res.status(204).json();
};
