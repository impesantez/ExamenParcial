import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    user: 'admin',
    host: 'db',
    database: 'tarea_db',
    password: 'admin',
    port: 5432,
})