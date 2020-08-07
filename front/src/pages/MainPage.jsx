import React from 'react';

import MainPosts from '../components/MainPosts';
import MainAd from '../components/MainAd';
import MainMenu from '../components/MainMenu';

import styled from 'styled-components';

const Page = styled.div`
  display: flex;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`

export default function MainPage() {

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