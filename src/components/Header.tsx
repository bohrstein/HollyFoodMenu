import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center h-24"> {/* h-16 → h-24 */}
          {/* Sol üstteki geri ok */}
          {!isHome && (
            <Link
              to="/"
              className="absolute left-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </Link>
          )}

          {/* Ortalanmış logo */}
          <Link to="/" className="flex items-center justify-center">
            <img
              src="/holyfoodsvg.svg"
              alt="HollyFood Logo"
              width={80}
              height={80} // daha büyük logo
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
