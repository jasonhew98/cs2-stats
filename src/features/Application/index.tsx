import React from 'react';
import { Outlet } from 'react-router';
import { NavBar } from '@/features/Application/components/NavBar';

const Application: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Application;
