import React from 'react';
import { Route } from 'react-router-dom';
import CardContainer from '../../containers/CardContainer/CardContainer';
import FilmReel from '../../components/Video/Video.js';

import Login from '../../containers/Login/Login';

const Routes = () => {
  return (
    <div className="routes">
      <Route 
        exact path='/login'  
        render={props => <Login {...props} />}
      />
      <Route 
        exact path='/register'  
        render={props => <Login {...props} showRegister />}
      />
      <FilmReel />
      <Route path='/' component={CardContainer} />
    </div>
  );
};

export default Routes;