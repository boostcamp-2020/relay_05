import React from "react";

import styled from "styled-components";

export default function MainAd() {
  const Ad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
  `;

  return (
    <Ad>
      <img src="https://user-images.githubusercontent.com/46068738/90868169-688d9280-e3d1-11ea-9a3a-3b4acf48332d.jpg"></img>
      <span>광고입니디</span>
    </Ad>
  );
}
