import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";
import App from './App'
import './index.css'

import ToDoList from "./TodoList";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/todolist" element={ <ToDoList /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)