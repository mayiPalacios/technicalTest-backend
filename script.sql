-- Script para crear la tabla "películas"
CREATE TABLE movie (
  movie_id VARCHAR(36) PRIMARY KEY,
  movie_name VARCHAR(255) NOT NULL,
  budget INTEGER NOT NULL,
  release_date DATE NOT NULL,
  duration INTEGER NOT NULL,
  secure__url_img VARCHAR(255) NOT NULL
);


-- Script para crear la tabla "opciones"
CREATE TABLE option (
  option_id SERIAL PRIMARY KEY,
  option_name VARCHAR(255) NOT NULL
);

