CREATE TABLE IF NOT EXISTS pacientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    peso NUMERIC NOT NULL,
    talla NUMERIC NOT NULL,
    diagnostico VARCHAR(512) NOT NULL,
)