const express = require('express');
const { addReview, updateReview, deleteReview, getReviewsByProduct } = require('../controllers/reviewController');

const router = express.Router();

// Route to add a review
router.post('/', addReview);

// Route to update a review
router.put('/:reviewId', updateReview);

// Route to delete a review
router.delete('/:reviewId', deleteReview);

// Route to get reviews for a specific product
router.get('/product/:productId', getReviewsByProduct);

module.exports = router;