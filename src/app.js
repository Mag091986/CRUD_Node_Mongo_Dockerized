const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();

const bookRoutes = require('./routes/book.routes');

// Usamos express para configurar middlewares
const app = express();
app.use(express.json()); // Parseador de body nativo

// Conectamos la Base de Datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

// Rutas
app.use('/books', bookRoutes);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutado en puerto ${port}`);
});
