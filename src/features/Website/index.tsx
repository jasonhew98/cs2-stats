import React from 'react';
import { Outlet } from 'react-router';
import { NavBar } from '@/features/Website/components/NavBar';

const Website: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Website;
