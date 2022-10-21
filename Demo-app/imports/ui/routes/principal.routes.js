import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './authentication.routes';

const principalRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/*' element={<Authentication />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default principalRoutes;
