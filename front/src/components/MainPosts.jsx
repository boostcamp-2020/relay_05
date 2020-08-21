import React from "react";

import styled, { keyframes } from "styled-components";

export default function MainPosts() {
  const Posts = styled.div`
    display: flex;
  `;
  const anim = keyframes`
  100% {
    transform:rotate(-30deg)
  }
`;
  const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: ${anim};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  `;
  const Title = styled.span`
    fontsize: 40px;
  `;

  return (
    <>
      <Posts>
        <Post>
          <img src="https://user-images.githubusercontent.com/46068738/90863496-1c8b1f80-e3ca-11ea-986d-37e57402d0e0.jpg"></img>
          <span>포로리야</span>
        </Post>
        <Post>
          <img src="https://user-images.githubusercontent.com/46068738/90863496-1c8b1f80-e3ca-11ea-986d-37e57402d0e0.jpg"></img>
          <span>때릴거야?</span>
        </Post>
      </Posts>
    </>
  );
}
