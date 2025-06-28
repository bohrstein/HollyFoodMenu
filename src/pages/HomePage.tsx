import React from 'react';
import { categories } from '../data/menuData';
import CategoryCard from '../components/CategoryCard';
import {Instagram} from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="relative bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white py-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-1 leading-tight">
            <span className="block text-amber-200">HollyFood'a hoşgeldiniz!</span>
          </h1>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Ürün kategorilerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bayılarak yiyeceğiniz ürünlerimize geniş bir bakış atın!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-2xl font-bold mb-4">HollyFood</h3>
      <p className="text-gray-300 mb-6">
        Gününüzü güzelleştirecek lezzet!
      </p>

      {/* Açık Saatler */}
      <div className="flex flex-col items-center space-y-4 text-sm text-gray-400">
        <span>Açık saatlerimiz: 08.30 - 23.30</span>

        {/* Sosyal Medya */}
        <div>
          <p className="mb-2 text-white font-semibold">Sosyal Medya Hesaplarımız</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/hollyfood27/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-amber-500 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
};

export default HomePage;