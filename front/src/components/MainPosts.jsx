import React from 'react';

import styled from 'styled-components';

export default function MainPosts() {

  const Posts = styled.div`
    display: flex;
  `;

  const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const Title = styled.span`
    fontSize: 40px;
  `

  return (
    <>
    <Posts>
      <Post>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXXm74MZ0kJTcUEzve-HFjAIkDdE-kiv51zg&usqp=CAU'></img>
        <span>포스트1</span>
      </Post>
      <Post>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXXm74MZ0kJTcUEzve-HFjAIkDdE-kiv51zg&usqp=CAU'></img>
        <span>포스트2</span>
      </Post>
    </Posts>
    </>
  );
}