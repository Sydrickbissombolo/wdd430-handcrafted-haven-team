const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/sellers', sellerRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;