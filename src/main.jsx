import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Components/Router/router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import PrivateRoute from './Components/Router/PrivateRoute.jsx'

createRoot(document.getElementById('root')).render(

  <AuthProvider>
 
  <StrictMode>
  
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,

  </AuthProvider>
)
