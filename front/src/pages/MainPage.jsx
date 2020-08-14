import React from "react";
import { useCookies } from "react-cookie";

import MainPosts from "../components/MainPosts";
import MainAd from "../components/MainAd";
import MainMenu from "../components/MainMenu";

import styled from "styled-components";

const Page = styled.div`
  display: flex;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);

  if (!cookies.login) {
    window.location.href = "/login";
  }
  //쿠키 확인
  //redirect to login

  return (
    <Page>
      <MainMenu />
      <Contents>
        <MainAd />
        <MainPosts />
      </Contents>
    </Page>
  );
}
