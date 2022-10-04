const express = require('express');
const useSocket = require('socket.io');

const app = express();
const server = require('http').Server(app);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    rooms.set("hello", "privet");
    res.json(rooms);
});

app.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log("server is alredy started");
});