import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Header.js';
import reportWebVitals from './reportWebVitals';
import DonationForm from './DonationForm';
import Library from './Library.js';

// Step 1. Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Library />
  },
  {
    path: "/library",
    element: <Library />
  },
  {
    path: "/donate",
    element: <DonationForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();