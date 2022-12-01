import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Proyects from '../pages/Proyects';

const UserRoutes = () => {
   return (
      <Routes>
         <Route
            path='/proyects'
            element={<Proyects />}
         />
         <Route path='/' element={<Home />} />
      </Routes>
   );
};

export default UserRoutes;
