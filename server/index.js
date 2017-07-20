const io = require('socket.io')(3000);

const getRandomInt = () => Math.round(Math.random() * 1000);

io.on('connection', socket => {
    setInterval(() => socket.emit('SERVER_SEND_MESSAGE', getRandomInt()), 2000);
});

