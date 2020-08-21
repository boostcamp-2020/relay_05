import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ChattingPage from "./pages/ChattingPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import ChannelPage from "./pages/ChannelPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/chat/new">
          <ChattingPage chattingTitle="네이버대학교 19학번 채팅방" />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/channel">
          <ChannelPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
