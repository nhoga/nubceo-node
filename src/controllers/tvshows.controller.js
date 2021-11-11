import TvShow from "../models/TvShow";
import Director from "../models/Director";

export const createTvShow = async (req, res) => {
  const { name, genre, director, releaseDate, episodes } = req.body;

  const newTvShow = new TvShow({
    name,
    genre,
    director,
    releaseDate,
    episodes,
  });
  const newDirector = new Director({
    name: director,
  });
  await newDirector.save();
  const tvShowSaved = await newTvShow.save();
  res.status(201).json(tvShowSaved);
};

export const getTvShows = async (req, res) => {
  const tvShows = await TvShow.find();
  res.json(tvShows);
};

export const getTvShowByID = async (req, res) => {
  const tvshow = await TvShow.findById(req.params.tvshowId);
  res.status(200).json(tvshow);
};

export const getEpisode = async (req, res) => {
  const tvshow = await TvShow.findById(req.params.tvshowId);
  res.status(200).json(tvshow.episodes);
};

export const updateTvShows = async (req, res) => {
  const updatedTvShow = await TvShow.findByIdAndUpdate(
    req.params.tvshowId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedTvShow);
};

export const deleteTvShows = async (req, res) => {
  await TvShow.findByIdAndDelete(req.params.tvshowId);
  res.status(204).json();
};
