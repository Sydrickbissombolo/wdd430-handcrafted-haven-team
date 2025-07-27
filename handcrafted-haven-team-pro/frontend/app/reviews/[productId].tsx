"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReviewList from '../../components/ReviewList';
import { fetchReviews } from '../../utils/api';

const ProductReviews = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      const getReviews = async () => {
        try {
          const data = await fetchReviews(productId);
          setReviews(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };

      getReviews();
    }
  }, [productId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error loading reviews: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ProductReviews;