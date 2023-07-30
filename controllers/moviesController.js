const Movies = require("../models/movies");
const cloudinary = require("../modules/cloudinary.service");

const createMovie = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.img.tempFilePath);

    const movie = await Movies.createMovie(req.body, result.secure_url);

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la película" });
  }
};

const getMovie = async (req, res) => {
  try {
    const movies = await Movies.getMovies(req.query.limit, req.query.offset);
    const total = await Movies.getTotalMovies();

    res.json({
      movies: movies,
      total: total,
    });
  } catch (error) {
    res.status(500).json({ error: "Error obtener las películas" });
  }
};

const getDistinctYear = async (req, res) => {
  try {
    const years = await Movies.getDistinctYears();
    res.json({ years: years });
  } catch (error) {
    console.error("Error getting years:", error);
    res.status(500).json({ error: "An error occurred while getting years" });
  }
};

const getMovieByYear = async (req, res) => {
  const year = req.params.year;
  try {
    const movies = await Movies.getMoviesByYear(year);
    res.json(movies);
  } catch (error) {
    console.error("Error getting movies by year:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting movies by year" });
  }
};

module.exports = {
  createMovie,
  getMovie,
  getDistinctYear,
  getMovieByYear,
};
