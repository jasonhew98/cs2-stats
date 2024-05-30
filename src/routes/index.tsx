import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { LoginPage } from '@/features/Auth/LoginPage';
import { SignUpPage } from '@/features/Auth/SignUpPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <SignUpPage /> },
    ],
  },
]);
