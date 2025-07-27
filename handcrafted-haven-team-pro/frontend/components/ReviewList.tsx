import React from 'react';

interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-item border-b py-4">
            <h3 className="font-semibold">{review.author}</h3>
            <p className="text-gray-600">{review.content}</p>
            <div className="rating">
              {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;