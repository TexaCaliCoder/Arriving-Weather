// External Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Internal Dependencies
import Home from './Components/Home';
const  App: React.FC = () =>(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
);

export default App;
