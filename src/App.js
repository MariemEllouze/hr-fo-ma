import React from 'react';
import SiderDemo from './components/layouts/MainLayouts/SiderDemo';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './components/pages/acceuil/Acceuil';
import Candidats from './components/pages/condidat/Candidats';
import Postes from './components/pages/poste/Postes';

console.log("******************* App.js *****************")


function App() {
  require('dotenv').config();


  return (
    <>
      <Router>

        <SiderDemo>
          <Switch >
            <Route exact path='/Accueil'  >
              <Accueil></Accueil>
            </Route>
            <Route path='/Condidat'  >
              <Candidats></Candidats>

            </Route>
            <Route path='/PosteBanque'  >
              <Postes></Postes>

            </Route>
            <Route path='/poste/:id'  >
              <Postes></Postes>

            </Route>

          </Switch>
        </SiderDemo>



      </Router>



    </>
  );
}

export default App;
