const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // For handling cross-origin requests  
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If cookies are used
}));
app.use(express.json());  // For parsing JSON requests

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes 
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/comments', authMiddleware, commentRoutes);  // Apply authMiddleware only to comment routes

// Start the server
app.listen(7000, () => console.log('Server running on port 7000'));
