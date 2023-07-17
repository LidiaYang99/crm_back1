const express = require('express');
const dayjs = require('dayjs');
const cors = require('cors');

const app = express();


// config de la app Express
app.use(cors());
app.use(express.json());


// prueba del servidor
app.get('/prueba', (req, res) => {
    res.send('es una prueba');
});


//Middleware
app.use((req, res, next) => {
    const fechaActual = dayjs().format('DD-MM-YYYY HH:mm.ss');
    console.log(fechaActual);
    next();
});

// gestion de rutas
app.use('/api', require('./routes/api'));


module.exports = app;