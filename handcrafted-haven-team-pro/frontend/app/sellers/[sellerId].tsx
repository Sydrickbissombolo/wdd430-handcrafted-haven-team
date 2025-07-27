"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SellerProfile from '../../components/SellerProfile';
import ReviewList from '../../components/ReviewList';

type Seller = {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
  products: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
  }>;
};

const SellerPage = () => {
  const router = useRouter();
  const { sellerId } = router.query;
  const [seller, setSeller] = useState<Seller | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sellerId) {
      const fetchSellerData = async () => {
        try {
          const response = await fetch(`/api/sellers/${sellerId}`);
          const data = await response.json();
          setSeller(data);
        } catch (error) {
          console.error('Error fetching seller data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchSellerData();
    }
  }, [sellerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!seller) {
    return <div>Seller not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <SellerProfile seller={seller} />
      <h2 className="text-2xl font-bold mt-8">Products by {seller.name}</h2>
      <Link href="/sellers" className="mt-4 inline-block text-blue-500">
        Back to Sellers
      </Link>
    </div>
  );
};

export default SellerPage;