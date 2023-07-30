const pool = require("../db");

const getOptions = async () => {
  const query = `SELECT * FROM option WHERE name NOT LIKE 'Renta de peliculas' `;
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = {
  getOptions,
};
