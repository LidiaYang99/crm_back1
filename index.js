const http = require('http');
const app = require('./src/app');

require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`servidor escuchando en puerto ${3000}`);
})

server.on('error', (err) => {
    console.log(err);
})