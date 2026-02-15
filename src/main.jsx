import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <App />
  </BrowserRouter>
);
