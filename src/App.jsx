import React from 'react'
import Aside from './Components/Aside'
import Main from './Components/Main'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login'
import Television from './Components/Television/Television'
import Radio from './Components/Radio/Radio'
import Sports from './Components/Sports/Sports'
import Category from './Components/Category/Category'
import MovieDes from './Components/Movie description/MovieDes'
import TvDes from './Components/Tv show descripton/TvDes'
const App = () => {

      const BASE_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = '376a7b56bf7b28c1457c230c2ebbd63a'

  const myRouters = createBrowserRouter([
    {
      path: '/login',
      element : <><Aside/><Login/></>
    },
    {
      path: '/',
      element: <><Aside/><Main/></>
    },
    {
      path: '/television',
      element: <><Aside/><Television/></>
    },
    {
      path: '/radio',
      element: <><Aside/><Radio/></>
    },
    {
      path: '/sports',
      element: <><Aside/><Sports/></>
    },
    {
      path: '/category',
      element: <><Aside/><Category/></>
    },
    {
      path:'/movie/:id',
      element:<><Aside/><MovieDes BASE_URL={BASE_URL} API_KEY = {API_KEY} /></>
    },
    {
      path :'/tv/:id',
      element:<><Aside/><TvDes BASE_URL={BASE_URL} API_KEY = {API_KEY} /></>
    }
  ])

  return (
    <div className='flex' >
      <RouterProvider router={myRouters} />
    </div>
  )
}

export default App
