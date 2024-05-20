const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
  const Message='hello'
  res.json({ Message});
});

app.use('/api/auth', require('./auth'));

mongoose.connect(process.env.MONGODB_URI, { })
  .then(() => app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  }))
  .catch(err => console.log(err));



