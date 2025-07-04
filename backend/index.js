import express from 'express';
import { pool } from './db.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/pacientes', async (req, res) => {
    const { nombre, apellido, peso, talla, diagnostico } = req.body;
    try {
        await pool.query(
            'INSERT INTO pacientes (nombre, apellido, peso, talla, diagnostico) VALUES ($1, $2, $3, $4, $5)',
            [nombre, apellido, peso, talla, diagnostico]
        );
        res.status(201).send({ message: 'Usuario registrado' });
    } catch (error) {
        console.error('Error al guardar en DB:', error);
        res.status(500).send({ error: 'Error al guardar datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
