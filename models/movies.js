const pool = require("../db");

const createMovie = async (movie, img) => {
  const { id, name, budget, date, duration } = movie;
  console.log(name);

  // Utilizar marcadores de posición en la consulta SQL
  const query = `INSERT INTO movie (id, name, budget, date, duration, secure__url_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

  // Pasar los valores como un array en el orden correspondiente a los marcadores de posición
  const values = [id, name, parseInt(budget), date, parseInt(duration), img];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error("Error al insertar la película:", error);
    throw error;
  }
};

const getMovies = async (limit, offset) => {
  // Convert limit and offset to numbers
  const limitNumber = parseInt(limit, 10);
  const offsetNumber = parseInt(offset, 10);

  // Consulta para obtener las películas con paginación
  const query = `SELECT * FROM movie LIMIT $1 OFFSET $2;`;
  const values = [limitNumber, offsetNumber];

  // Ejecutar la consulta y obtener las películas
  try {
    const moviesResult = await pool.query(query, values);
    const movies = moviesResult.rows;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getTotalMovies = async () => {
  // Consulta para obtener el total de películas
  const totalResult = await pool.query("SELECT COUNT(*) FROM movie");
  const total = parseInt(totalResult.rows[0].count);
  return total;
};

module.exports = {
  createMovie,
  getMovies,
  getTotalMovies,
};
