import React, { useState } from 'react';
import {
   BrowserRouter,
   Routes,
   Route,
} from 'react-router-dom';
import Authentication from './authentication.routes';
import PrivateRoutes from './privates.routes';
import PublicRoutes from './public.routes';
import UserRoutes from './user.routes';

const principalRoutes = () => {
   const [routeState, setRouteState] =
      useState(false);

   Accounts.onLogin(() => {
      setRouteState(true);
   });

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route
                  path='/*'
                  element={
                     <PublicRoutes
                        isAuth={routeState}
                     >
                        <Authentication />
                     </PublicRoutes>
                  }
               />
               <Route
                  path='/home/*'
                  element={
                     <PrivateRoutes
                        isAuth={routeState}
                     >
                        <UserRoutes />
                     </PrivateRoutes>
                  }
               />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default principalRoutes;
