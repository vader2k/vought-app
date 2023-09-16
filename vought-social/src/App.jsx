import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom'
import {Login, Register, Home, Profile} from './pages'
import {Navbar, Leftbar, Rightbar} from './components'


function App() {

  const currentuser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div className='flex'>
          <Leftbar/>
          <div className='flex-[6]'>
          <Outlet/>
          </div>
          <Rightbar/>

        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) =>{
    if (!currentuser){
      return <Navigate to = '/login'/>
    }
    return(children)
  };

  const router = createBrowserRouter([
    {
      path:'/',
      element:
        (
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        ),
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/profile/:id',
          element: <Profile/>
        }
      ]
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/register',
      element: <Register/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
