import React, { useState } from 'react';

import FaceIcon from '@material-ui/icons/Face';

import styled from 'styled-components';

const ChattingContentBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;

  .user-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-content {
    .user-id {
      font-weight: bold;
    }
  }
`;

const Time = styled.div`
  font-size: 15px;
  color: gray;
  margin-top: 5px;
`

const ChattingContent = ({ comment }) => {
  const { nickname, text, time } = comment;
  return (
    <ChattingContentBlock>
      <FaceIcon style={{ fontSize: "5em" }}/>
      <div className='user-content'>
        <div className='user-id'>{nickname}</div>
        <div className='user-comment'>{text}</div>
        <Time className='user-time'>{time}</Time>
      </div>
    </ChattingContentBlock>
  );
};

export default ChattingContent;