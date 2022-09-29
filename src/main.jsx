import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import App from './App'
import './index.css'

import ToDoList from "./TodoList";
import Admin from "./Admin";
import AdminProducts from './AdminProducts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <App /> } >
          <Route path="todolist" element={ <ToDoList /> } />
        </Route>
        <Route path="/admin" element={ <Admin /> } >
          <Route path="products" element={ <AdminProducts /> } />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)