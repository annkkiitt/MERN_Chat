const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDb = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());
dotenv.config();
// dotenv.config({ path: path.resolve('.env') });
connectDb();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Started on server ${PORT}`));
