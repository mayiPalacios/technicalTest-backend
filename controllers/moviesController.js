const Movies = require("../models/movies");
const cloudinary = require("../modules/cloudinary.service");

const createMovie = async (req, res) => {
  try {
    /*  console.log(req.body);
    console.log(req.files.img);*/
    const result = await cloudinary.uploader.upload(req.files.img.tempFilePath);

    const movie = await Movies.createMovie(req.body, result.secure_url);

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la película" });
  }

  /* const movie = await Movies.createMovie();

  movie.forEach((element) => {
    console.log(element);
  });*/
};

module.exports = {
  createMovie,
};
