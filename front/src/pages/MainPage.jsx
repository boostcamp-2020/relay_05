import React from "react";
import { useCookies } from "react-cookie";

import MainPosts from "../components/MainPosts";
import MainAd from "../components/MainAd";
import MainMenu from "../components/MainMenu";

import styled, { keyframes } from "styled-components";

const Page = styled.div`
  display: flex;
  background: linear-gradient(
    135deg,
    violet,
    blue,
    cyan,
    green,
    yellow,
    orange,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
`;

const animation = keyframes`
  100%{
    background-position:-2000px -5000px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://user-images.githubusercontent.com/67293994/90859815-df239380-e3c3-11ea-9205-5acc4cd16fe2.jpg");
  animation-name: ${animation};
  animation-duration: 15s;
  ${"" /* animation-timing-function: linear; */}
  animation-iteration-count: infinite;
`;

const Dedan = styled.div`
  background-image: url("https://user-images.githubusercontent.com/67293994/90864817-552bf880-e3cc-11ea-8a74-0d1ba00e0e62.PNG");
  position: absolute;
  top: 150px;
  left: 600px;
  width: 450px;
  height: 450px;
`;

export default function MainPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);

  if (!cookies.login) {
    window.location.href = "/login";
  }

  return (
    <Page>
      <MainMenu />
      <Contents>
        <MainAd />
        <MainPosts />
      </Contents>
      <Dedan />
    </Page>
  );
}
