import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Login from './Pages/Login/Login';
import HomeAdm from './Pages/HomeAdm/HomeAdm';
import AlunosCadastrados from './Pages/AlunosCadastrados/AlunosCadastrados';
import AdminLayout from '../src/components/AdminLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProximosVencimentos from './Pages/ProximosVencimentos/ProximosVencimentos';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />
      },
      {
        path: "homeAdm",
        element: <AdminLayout><HomeAdm /></AdminLayout>
      },
      {
        path: "alunosCadastrados",
        element: <AdminLayout><AlunosCadastrados /></AdminLayout>
      },
      {
        path: "proximosVencimentos",
        element: <AdminLayout><ProximosVencimentos /></AdminLayout>
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
