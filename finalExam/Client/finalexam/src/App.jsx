 '/vite.svg'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ROUTER } from "./routes/Router.jsx";
import BasketContext from './context/basketContext.jsx';
import { useState } from 'react';

function App() {
 const routes=createBrowserRouter(ROUTER)
 const localBasket = JSON.parse(localStorage.getItem("basket"));
  if (!localBasket) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
    const [basket, setBasket] = useState(localBasket || []);
  
  return (
    <BasketContext.Provider value={{basket,setBasket}}>
     <RouterProvider router={routes}/>
    </BasketContext.Provider>
  )
}

export default App
