require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
const cors = require('cors');

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
  // Handle the request logic here
  // For example, you can send a response back to the client
  res.send('Hello from the server!');
});

app.use(authRoutes)

