import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import MainPage from './pages/MainPage';

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/chat/new'>
            <MainPage />
          </Route>
          <Route exact path='/'>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Routes;