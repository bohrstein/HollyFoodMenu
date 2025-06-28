import React from 'react';
import { Leaf, Wheat, Heart } from 'lucide-react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover"
        />
        {item.popular && (
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <Heart className="w-4 h-4 mr-1 fill-current" />
            Popular
          </div>
        )}
        <div className="absolute top-4 right-4 flex space-x-1">
          {item.vegetarian && (
            <div className="bg-green-500 text-white p-2 rounded-full">
              <Leaf className="w-4 h-4" />
            </div>
          )}
          {item.glutenFree && (
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <Wheat className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">
            {item.name}
          </h3>
          <span className="text-2xl font-bold text-amber-600">
            ₺{item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {item.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
          {item.vegetarian && (
            <div className="flex items-center">
              <Leaf className="w-3 h-3 mr-1 text-green-500" />
              Vegetarian
            </div>
          )}
          {item.vegan && (
            <div className="flex items-center">
              <Leaf className="w-3 h-3 mr-1 text-green-600" />
              Vegan
            </div>
          )}
          {item.glutenFree && (
            <div className="flex items-center">
              <Wheat className="w-3 h-3 mr-1 text-blue-500" />
              Gluten Free
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;