import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
