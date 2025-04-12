import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                ポートフォリオ
              </Link>
              <div className="space-x-4">
                <Link to="/projects" className="text-gray-600 hover:text-gray-900">
                  プロジェクト
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  自己紹介
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-white border-t mt-8">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600">
              © 2024 ポートフォリオ. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 