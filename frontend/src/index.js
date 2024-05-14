import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate
} from "react-router-dom";
import ErrorPage from './components/Error_page';
import NavBar from "./components/navbar";
import OrderForm from './components/orderForm';
import OrderPage from "./components/orderPage";

const Action = () =>{
    return redirect('/');
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/orders"/>
            },{
                path: "/orders",
                element: <App/>
            },{
                path: "/add_order",
                element: <OrderForm />,
                action: Action
            },{
                path:"/order/:id",
                element: <OrderPage/>,
                action: Action
            }

        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
