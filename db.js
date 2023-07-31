const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", //Cambiar según su configuración
  host: "localhost",
  database: "prueba", //Cambiar según su configuración
  password: "12345", //Cambiar según su configuración
  port: 5433,
});

pool.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos exitosa.");
});

module.exports = pool;
