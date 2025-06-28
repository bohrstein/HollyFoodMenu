import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Category } from '../data/menuData';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Circle;

  return (
    <Link
      to={`/category/${category.id}`}
      className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-amber-600" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <IconComponent className="w-5 h-5 text-amber-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-200">
            {category.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {category.description}
        </p>
        <div className="mt-4 flex items-center text-amber-600 font-medium text-sm">
          <span>Menüyü keşfet</span>
          <LucideIcons.ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;