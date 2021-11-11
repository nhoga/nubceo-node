import Movie from "../models/Movie";
import Director from "../models/Director";

export const createMovie = async (req, res) => {
  const { name, genre, director, releaseDate, productionCompanies } = req.body;

  const newMovie = new Movie({
    name,
    genre,
    director,
    releaseDate,
    productionCompanies,
  });
  const newDirector = new Director({
    name: director,
  });
  await newDirector.save();
  const movieSaved = await newMovie.save();

  res.status(201).json(movieSaved);
};

export const getMovies = async (req, res) => {
  const Movies = await Movie.find();
  res.json(Movies);
};

export const getMoviesAlphabetical = async (req, res) => {
  const Movies = await Movie.find();
  const AlphabeticalMovies = Movies.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  res.json(AlphabeticalMovies);
};

export const getMovieByID = async (req, res) => {
  const movie = await Movie.findById(req.params.movieId);
  res.status(200).json(movie);
};

export const getProductionCompanies = async (req, res) => {
  const movie = await Movie.findById(req.params.movieId);
  res.status(200).json(movie.productionCompanies);
};

export const updateMovie = async (req, res) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    req.params.movieId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedMovie);
};

export const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.movieId);
  res.status(204).json();
};
