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

const mockData = [
  {
    nickname: 'yejin',
    text: 'commmmmmmmmmmmmmmmmmmment',
    time: '2020.7.7 21:00',
  },
  {
    nickname: 'kim',
    text: 'blabla~~~~',
    time: '2020.7.7 22:00',
  }
]; //이전 대화기록입니다.

const ChattingPage = ({ chattingTitle }) => {
  const [comments, setComments] = useState(mockData);

  const date = new Date();

  const addComment = useCallback(
    comment => {
      if (comment.length === 0) return;
      const newMessageData = {
        nickname: 'User',
        text: comment,
        time: date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
      };
      console.log('comments is ', comments);
      setComments([...comments, newMessageData]);
    },
    [comments],
  );

  return (
    <Page>
      <MainMenu />
      <ChattingBlock>
        <div className='chatting-header'>
          <div className='chatting-title'>{chattingTitle}</div>
        </div>
        <div className='content'>
          {comments.map((comment, i) => (
            <ChattingContent comment={comment} key={i} />
          ))}
          <ChattingInput addComment={addComment} />
        </div>
      </ChattingBlock>
    </Page>
  );
};

export default ChattingPage;