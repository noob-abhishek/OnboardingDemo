import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './Components/Blog/Blog';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home'
import BlogContent from './Components/BlogContent/BlogContent';
const route  =  createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [{
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />

      },
    {
      path:'/BlogContent/:id',
      element: <BlogContent />
    }]
    }
  ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router = {route} />
  

);

