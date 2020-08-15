import React from "react";
import { useCookies } from "react-cookie";

import MainMenu from "../components/MainMenu";
import ImageUpload from "../components/ImageUpload";

import styled from "styled-components";

const Page = styled.div`
  display: flex;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainPage() {
  return (
    <Page>
      <MainMenu />
      <Contents>
        <ImageUpload />
      </Contents>
    </Page>
  );
}
