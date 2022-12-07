import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectsPage from '../pages/Projects';
import Project from '../pages/Project';
import Innovation from '../pages/areas/innovation/Innovation';
import Strategy from '../pages/areas/innovation/axes/Strategy';
import Leadership from '../pages/areas/innovation/axes/Leadership';
import HumanResources from '../pages/areas/innovation/axes/HumanResources';
import Investigation from '../pages/areas/innovation/axes/Investigation';
import Culture from '../pages/areas/innovation/axes/Culture';
import Technology from '../pages/areas/innovation/axes/Technology';
import InnovationResults from '../pages/areas/innovation/InnovationResults';

const UserRoutes = () => {
   return (
      <Routes>
         <Route
            path='/projects/:projectName/innovation/results'
            element={<InnovationResults />}
         />
         <Route
            path='/projects/:projectName/innovation/technology'
            element={<Technology />}
         />
         <Route
            path='/projects/:projectName/innovation/culture'
            element={<Culture />}
         />
         <Route
            path='/projects/:projectName/innovation/investigation'
            element={<Investigation />}
         />
         <Route
            path='/projects/:projectName/innovation/humanResources'
            element={<HumanResources />}
         />
         <Route
            path='/projects/:projectName/innovation/leadership'
            element={<Leadership />}
         />
         <Route
            path='/projects/:projectName/innovation/strategy'
            element={<Strategy />}
         />
         <Route
            path='/projects/:projectName/innovation'
            element={<Innovation />}
         />
         <Route
            path='/projects/:projectName'
            element={<Project />}
         />
         <Route
            path='/projects'
            element={<ProjectsPage />}
         />
         <Route path='/' element={<Home />} />
      </Routes>
   );
};

export default UserRoutes;
