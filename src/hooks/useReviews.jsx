import { useState, useEffect } from 'react';
import { getReviews, createReview as createReviewService } from '../service/ReviewService';

const useReviews = (monsterId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const data = await getReviews(monsterId);
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const createReview = async (newReview) => {
    try {
      const createdReview = await createReviewService(newReview);
      setReviews((prevReviews) => [...prevReviews, createdReview]);
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  useEffect(() => {
    if (monsterId) {
      fetchReviews();
    }
  }, [monsterId]);

  return { reviews, createReview, loading };
};

export default useReviews;
