import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import ChattingPage from './pages/ChattingPage';

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/chat/new'>
            <ChattingPage chattingTitle='네이버대학교 19학번 채팅방' />
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