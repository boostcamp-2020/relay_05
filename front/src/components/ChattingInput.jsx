import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";

import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import styled from "styled-components";

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

const ChattingInput = ({ addComment, ws }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);

  const user = cookies.login;
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState(user.userName);

  const send = (nickname, message) => {
    console.log(`전송: ${nickname}, ${message}`);
    // 서버로 message 이벤트 전달 + 데이터와 함께
    let sendData = {
      event: "req",
      data: { nickname: nickname, message: message },
    };
    ws.send(JSON.stringify(sendData));
  };

  const onChange = useCallback((e) => {
    setMessage(e.target.value);
  });

  const handleInput = (e) => {
    if (e.key === "Enter" && message.length !== 0) {
      console.log("handleInput---message", message);
      addComment(message);
      setMessage("");
    }
  };

  const onSubmit = useCallback(
    (e) => {
      addComment(message);
      setMessage("");
      send(nickname, message);
      e.preventDefault();
      e.target.reset();
    },
    [addComment, message]
  );

  return (
    <ChattingInputBlock>
      <form className="ChattingInput" onSubmit={onSubmit}>
        <TextField
          id="input"
          label="Write comment!"
          variant="outlined"
          onChange={onChange}
          onKeyUp={handleInput}
          style={{ width: "90%" }}
        />
        <button type="submit">
          <SendIcon id="send" />
        </button>
      </form>
    </ChattingInputBlock>
  );
};

export default ChattingInput;
