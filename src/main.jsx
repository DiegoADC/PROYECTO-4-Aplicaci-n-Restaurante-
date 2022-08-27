import React from 'react';
import ReactDOM from 'react-dom/client';
import { RestaurantApp } from './components/App/RestaurantApp';
import './main.css'
import './firebase/fireBase'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RestaurantApp/>
  </React.StrictMode>
);
