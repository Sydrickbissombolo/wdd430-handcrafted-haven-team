"use client";

import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

type Product = {
  id: string | number;
  [key: string]: any;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={String(product.id)}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            rating={product.rating}
            // add other props as needed
          />
        ))}
      </div>
    </main>
  );
}