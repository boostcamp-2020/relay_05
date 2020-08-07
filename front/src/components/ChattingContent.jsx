import React, { useState } from 'react';
import styled from 'styled-components';
import FaceIcon from '@material-ui/icons/Face';

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

const ChattingContent = ({ comment }) => {
  const { name, text } = comment;
  return (
    <ChattingContentBlock>
      <FaceIcon style={{ fontSize: "5em" }}/>
      <div className='user-content'>
        <div className='user-id'>{name}</div>
        <div className='user-comment'>{text}</div>
      </div>
    </ChattingContentBlock>
  );
};

export default ChattingContent;