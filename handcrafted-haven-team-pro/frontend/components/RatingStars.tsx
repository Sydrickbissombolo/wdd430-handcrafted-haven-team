import React from 'react';

interface RatingStarsProps {
  rating: number;
  totalStars?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, totalStars = 5 }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => {
    const starValue = index + 1;
    return (
      <span key={index} className={starValue <= rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    );
  });

  return <div className="flex">{stars}</div>;
};

export default RatingStars;