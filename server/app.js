require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const authRoutes = require('./routes/authRoutes')
const postsRoutes = require('./routes/postsRoutes')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')

const app = express();

// middleware
app.use(express.static('public'));
// allows us to recieve data as JSON in req.body
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:8080' }));

// database connection
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser)
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use(authRoutes)
app.use(postsRoutes)

