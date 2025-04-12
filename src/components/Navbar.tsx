import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            ポートフォリオ
          </Link>
        <div className="space-x-4 flex">
            <Link to="/projects" className="text-gray-600 hover:text-gray-900 w-24 text-center">
              プロジェクト
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 w-24 text-center">
              自己紹介
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 