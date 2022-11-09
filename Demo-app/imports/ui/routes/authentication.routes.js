import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Authentication = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route
               path='/signup'
               element={<SignUp />}
            />
         </Routes>
      </>
   );
};

export default Authentication;
