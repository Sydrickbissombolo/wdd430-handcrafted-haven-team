export async function fetchReviews(productId: string | string[] | undefined) {
  if (!productId) return [];
  const res = await fetch(`/api/reviews/${productId}`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();
}