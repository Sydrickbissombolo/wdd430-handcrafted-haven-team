import React from 'react';

interface SellerProfileProps {
  seller: {
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
}

const SellerProfile: React.FC<SellerProfileProps> = ({ seller }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img
          src={seller.profileImage}
          alt={`${seller.name}'s profile`}
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">{seller.name}</h2>
          <p className="text-gray-600">{seller.bio}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">Products by {seller.name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {seller.products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h4 className="text-lg font-semibold">{product.title}</h4>
            <p className="text-gray-800">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProfile;