import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom'
import {Login, Register, Home, Profile} from './pages'
import {Navbar, Leftbar, Rightbar} from './components'


function App() {

  const currentuser = true;

  const Layout = () => {
    return (
      <div className='dark:bg-gray-950'>
        <Navbar/>
        <div className='flex'>
          <Leftbar className='sm:flex hidden'/>
          <div className='flex-[6]'>
          <Outlet/>
          </div>
          <Rightbar className='sm:flex hidden'/>

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
      path:'/login',
      element: <Login/>
    },
    {
      path:'/register',
      element: <Register/>
    },
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
        },
      ]
    },
    
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
