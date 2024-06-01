import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-black">
              Search
            </Link>
          </div>
        </div>
        <div className="hidden items-center space-x-6 text-black lg:flex">
          <Link to="/login" className="">
            Login
          </Link>
          <Link
            to="/register"
            className="rounded px-8 py-3 pt-5 font-bold hover:opacity-70"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
