const pool = require("../db");

const createMovie = async (movie, img) => {
  const { name, budget, date, duration } = movie;
  console.log(name);

  // Utilizar marcadores de posición en la consulta SQL
  const query = `INSERT INTO movie (id, name, budget, date, duration, secure__url_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

  // Pasar los valores como un array en el orden correspondiente a los marcadores de posición
  const values = [12, name, parseInt(budget), date, parseInt(duration), img];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error("Error al insertar la película:", error);
    throw error;
  }
};

module.exports = {
  createMovie,
};
