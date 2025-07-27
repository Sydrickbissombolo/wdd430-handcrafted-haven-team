const Review = require('../models/review');

// Add a new review
exports.addReview = async (req, res) => {
  try {
    const { productId, userId, rating, comment } = req.body;
    const newReview = new Review({ productId, userId, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};

// Update an existing review
exports.updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body, { new: true });
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review', error });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error });
  }
};

// Fetch reviews for a specific product
exports.getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ productId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};