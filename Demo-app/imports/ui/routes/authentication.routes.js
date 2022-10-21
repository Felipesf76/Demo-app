import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

const Authentication = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Login />} />
            {/* <Route path='/register' element={<Register />} />
            <Route path='/passwordChange' element={<PasswordChange />} /> */}
         </Routes>
      </>
   );
};

export default Authentication;
