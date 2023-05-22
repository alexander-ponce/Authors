import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Forms from './components/Forms';
import List from './components/List';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route element={<List />} path="/home" default />
          <Route element={<Forms />} path="/authors/add"  />
          <Route element={<Update />} path="/authors/edit/:id"/>
          <Route element={<Navigate to ="/home" />} path="/"/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
