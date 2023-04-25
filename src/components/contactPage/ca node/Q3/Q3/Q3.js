const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.get('/support', (req, res) => {
  res.sendFile(__dirname + '/support.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', 'Server: Hi, how can I help?');
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server started on port 3000');
});