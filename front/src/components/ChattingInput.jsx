import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const ChattingInputBlock = styled.div`
  margin-top: 1em;

  button {
    background: none;
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
  }
`;

const ChattingInput = ({ addComment }) => {
  const [value, setValue] = useState('');
  
  const onChange = useCallback(e => {
    setValue(e.target.value);
  });

  const handleInput = e => {
    if (e.key === 'Enter' && value.length !== 0) {
      console.log('handleInput---value', value);
      addComment(value);
      setValue('');
    }
  };

  const onSubmit = useCallback(
    e => {
      addComment(value);
      setValue('');
      e.preventDefault();
    },
    [addComment, value],
  );

  return (
    <ChattingInputBlock>
      <form className="ChattingInput" onSubmit={onSubmit}>
        <TextField 
          id='input' 
          label='Write comment!' 
          variant="outlined" 
          onChange={onChange}
          onKeyUp={handleInput}
          style={{
            width: '90%'
          }}
        />
        <button type="submit">
          <SendIcon id='send' />
        </button>
      </form>
    </ChattingInputBlock>
  );
};

export default ChattingInput;