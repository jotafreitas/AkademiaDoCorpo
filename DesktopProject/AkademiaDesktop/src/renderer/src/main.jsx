import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import Login from './Pages/Login/Login'
import HomeAdm from './Pages/HomeAdm/HomeAdm'
import AlunosCadastrados from './Pages/AlunosCadastrados/AlunosCadastrados'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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
        element: <HomeAdm />
      },
      {
        path: "alunosCadastrados",
        element: <AlunosCadastrados />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
