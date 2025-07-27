import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl, price, rating }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${id}`}>
        <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-lg text-gray-700 mb-2">${price.toFixed(2)}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">{'★'.repeat(Math.floor(rating))}</span>
            <span className="text-gray-400">{'★'.repeat(5 - Math.floor(rating))}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;