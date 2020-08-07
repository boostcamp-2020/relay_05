import React from 'react';

import styled from 'styled-components';

export default function MainAd() {

  const Ad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
  `;

  return (
    <Ad>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG2mJJPa4nRc-KmDApwHef8tRXuID3Xpzd7g&usqp=CAU'></img>
      <span>광고입니다</span>
    </Ad>
  );
}