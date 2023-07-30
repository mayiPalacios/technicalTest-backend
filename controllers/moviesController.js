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
    const movies = await Movies.getMovies();
    const total = await Movies.getTotalMovies();

    res.json({
      movies: movies,
      total: total,
    });
  } catch (error) {
    res.status(500).json({ error: "Error obtener las películas" });
  }
};

module.exports = {
  createMovie,
  getMovie,
};
