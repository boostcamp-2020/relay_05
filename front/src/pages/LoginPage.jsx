import React from "react";

import LoginContent from "../components/LoginContent";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function LoginPage() {
  return (
    <Page>
      <Contents>
        <LoginContent></LoginContent>
      </Contents>
    </Page>
  );
}
