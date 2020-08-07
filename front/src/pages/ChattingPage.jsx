import React, { useState, useCallback } from 'react';

import ChattingContent from '../components/ChattingContent'
import ChattingInput from '../components/ChattingInput';
import MainMenu from '../components/MainMenu';

import styled from 'styled-components';

const ChattingBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .chatting-header {
    border-bottom: 0.1em solid ;
    .chatting-title {
      padding: 1.5em;
      font-size: 2em;
    }
  }

  .content {
    margin-top: auto;
    padding: 1em;
  }
`;

const Page = styled.div`
  display: flex;
`

const ChattingPage = ({ comments, chattingTitle }) => {
  const [Comments, setComments] = useState([
    {
      name: 'yejin',
      text: 'commmmmmmmmmmmmmmmmmmment',
    },
    {
      name: 'kim',
      text: 'blabla~~~~',
    }
  ]);

  const addComment = useCallback(
    comment => {
      if (comment.length === 0) return;
      const temp = {
        name: 'jin',
        text: comment,
      };
      setComments([...Comments, temp]);
    },
    [Comments],
  );

  return (
    <Page>
      <MainMenu />
      <ChattingBlock>
        <div className='chatting-header'>
          <div className='chatting-title'>{chattingTitle}</div>
        </div>
        <div className='content'>
          {Comments.map(comment => (
            <ChattingContent comment={comment} key={comment.name} />
          ))}
          <ChattingInput addComment={addComment} />
        </div>
      </ChattingBlock>
    </Page>
  );
};

export default ChattingPage;