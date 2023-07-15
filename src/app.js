const express = require('express');
const app = express();

// config de la app Express
app.use(express.json());

// prueba del servidor
app.get('/prueba', (req, res) => {
    res.send('es una prueba');
});

// gestion de rutas
app.use('/api', require('./routes/api'));

module.exports = app;