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
import DigitalTransformation from '../pages/areas/digitalTransformation/DigitalTransformation';
import Client from '../pages/areas/digitalTransformation/axes/Client';
import DigitalStrategy from '../pages/areas/digitalTransformation/axes/Strategy';
import DigitalCulture from '../pages/areas/digitalTransformation/axes/Culture';
import DigitalTechnology from '../pages/areas/digitalTransformation/axes/Technology';
import Industry from '../pages/areas/industry4.0/Industry';
import IndustryTechnology from '../pages/areas/industry4.0/axes/Technology';
import IndustryPersons from '../pages/areas/industry4.0/axes/Persons';
import IndustryStrategy from '../pages/areas/industry4.0/axes/Strategy';
import IndustrySkills from '../pages/areas/industry4.0/axes/IndustrySkills';
import IndustryResults from '../pages/areas/industry4.0/IndustryResults';
import DigitalResults from '../pages/areas/digitalTransformation/DigitalResults';

const UserRoutes = () => {
   return (
      <Routes>
         <Route
            path='/projects/:projectName/industry4.0/results'
            element={<IndustryResults />}
         />
         <Route
            path='/projects/:projectName/industry4.0/digitalSkills'
            element={<IndustrySkills />}
         />
         <Route
            path='/projects/:projectName/industry4.0/strategy'
            element={<IndustryStrategy />}
         />
         <Route
            path='/projects/:projectName/industry4.0/persons'
            element={<IndustryPersons />}
         />
         <Route
            path='/projects/:projectName/industry4.0/technology'
            element={<IndustryTechnology />}
         />
         <Route
            path='/projects/:projectName/industry4.0'
            element={<Industry />}
         />
         <Route
            path='/projects/:projectName/digitalTransformation/results'
            element={<DigitalResults />}
         />
         <Route
            path='/projects/:projectName/digitalTransformation/technology'
            element={<DigitalTechnology />}
         />
         <Route
            path='/projects/:projectName/digitalTransformation/culture'
            element={<DigitalCulture />}
         />
         <Route
            path='/projects/:projectName/digitalTransformation/strategy'
            element={<DigitalStrategy />}
         />
         <Route
            path='/projects/:projectName/digitalTransformation/client'
            element={<Client />}
         />
         <Route
            path='/projects/:projectName/digitalTransformation'
            element={<DigitalTransformation />}
         />
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
