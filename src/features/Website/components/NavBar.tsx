import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';

const NavBar: React.FC = () => {
  return (
    <nav className="container relative mx-auto text-white">
      <div className="flex items-center justify-between">
        <Logo className="size-8 fill-primary" />
        <div className="hidden items-center space-x-6 lg:flex">
          <Link
            to="/login"
            className="rounded px-8 py-3 font-bold hover:opacity-70"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded px-8 py-3 font-bold hover:opacity-70"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
