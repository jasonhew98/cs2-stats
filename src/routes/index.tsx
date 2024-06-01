import { createBrowserRouter } from 'react-router-dom';
import Website from '@/features/Website';
import Application from '@/features/Application';
import { Landing } from '@/features/Website/Landing';
import { Dashboard } from '@/features/Application/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Website />,
    children: [{ path: '', element: <Landing /> }],
  },
  {
    path: 'app',
    element: <Application />,
    children: [{ path: '', element: <Dashboard /> }],
  },
]);
