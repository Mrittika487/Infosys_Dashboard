require('dotenv').config(); // Load env vars from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors());   // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/wastezero', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Register routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/admin/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/admin/users', userRoutes);

const pickupRoutes = require('./routes/pickupRoutes');
app.use('/api/admin/pickups', pickupRoutes);

const opportunityRoutes = require('./routes/opportunityRoutes');
app.use('/api/admin/opportunities', opportunityRoutes);

const reportRoutes = require('./routes/reportRoutes');
app.use('/api/admin/reports', reportRoutes);

// Root route for health check
app.get('/', (req, res) => res.send('API running'));

// Generic error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
