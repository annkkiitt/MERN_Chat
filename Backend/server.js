const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDb = require('./config/db');
const path = require('path');

const app = express();
dotenv.config();
// dotenv.config({ path: path.resolve('.env') });
connectDb();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Started on server ${PORT}`));
