import express from 'express';
import path from 'path';
require('dotenv').config();

const server = express();
server.use(express.static(path.normalize('../public')));

server.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));

const port: string = process.env.PORT ?? '3000';
server.listen(port, () => console.log(`Listening on port ${port}`));