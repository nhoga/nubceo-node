import User from "../models/User";

export const getUsers = async (req, res) => {
  const Users = await User.find();
  res.json(Users);
};

export const deleteUsers = async (req, res) => {
  await User.findByIdAndDelete(req.params.userId);
  res.status(204).json();
};
