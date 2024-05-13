import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./Redux/store.js"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import Products from './Pages/Products.jsx'
import SearchPage from './Pages/SearchPage.jsx'
import NotFound from './Pages/NotFound.jsx'
import FAQ from './Pages/FAQ.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
       <Route path="/" element={<App />}>
       <Route index element={<Home />}/>
       <Route path="cart" element={<Cart />} />
      <Route path="product-detalis/:ID" element={<ProductPage />} />

      <Route path="products" element={<Products />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />


 
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
