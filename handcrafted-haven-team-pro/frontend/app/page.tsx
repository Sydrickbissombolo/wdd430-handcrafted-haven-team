import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <section className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover Unique Handmade Treasures
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Support artisans from around the world and bring creativity into your everyday life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-3 border border-black text-black rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Become a Seller
            </Link>
          </div>
        </section>

        {/* Illustration */}
        <section className="flex justify-center md:justify-end">
          <Image
            src="/images/marketplace-hero.jpeg"
            alt="Handcrafted Haven Hero Illustration"
            width={500}
            height={400}
            className="w-full h-auto max-w-md"
            priority
          />
        </section>
      </div>
    </main>
  );
}