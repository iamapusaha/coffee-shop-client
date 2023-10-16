import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import Root from './components/Root'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AuthProvider from './providers/AuthProvider'
import User from './User'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: "/user",
        element: <User></User>,
        loader: () => fetch('http://localhost:5000/user')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
