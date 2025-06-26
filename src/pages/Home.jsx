import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          My Small Projects in React
        </h2>

        <div className="space-y-4">
          <Link
            to="/counterApp"
            className="block w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            🚀 Counter App
          </Link>
          <p className="text-gray-500 text-sm">More projects coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
