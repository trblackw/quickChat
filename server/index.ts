const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const routes = require('./routes');
const http = require('http');
const app = express();

//config
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use('/api', routes);

const port = process.env.PORT || 8080;
const server = http.createServer(app);

//set up socket.io
const io = require('socket.io')(server);

// constants
const CONNECTION: 'connection' | 'connect' = 'connection';
const PING = 'ping';
const PONG = 'pong';
const newMessageToServer = 'newMessageToServer';
const newMessageFromServer = 'newMessageFromServer';
const emitMessageToConnections = 'emitMessageToConnections';

io.on(CONNECTION, (socket: any): void => {
   // socket.emit(newMessageFromServer, { message: `hey from server, here's the socket.id: ${socket.id}` });
   socket.on(newMessageToServer, ({ message }: any): void => {
      io.emit(emitMessageToConnections, message);
   });
});

io.on(PING, () => console.log('PING FROM SERVER'));
io.on(PONG, () => console.log('PONG FROM SERVER'));

server.listen(port, (): void => {
   console.log(`server running on port ${port}`);
});
