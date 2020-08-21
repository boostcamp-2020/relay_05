import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";

import ChattingContent from "../components/ChattingContent";
import ChattingInput from "../components/ChattingInput";
import MainMenu from "../components/MainMenu";

import styled from "styled-components";

const ChattingBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .chatting-header {
    border-bottom: 0.1em solid;
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
`;

const ChattingPage = ({ chattingTitle }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);
  const [comments, setComments] = useState([]);
  const [ws, setWS] = useState(null);

  const addComment = useCallback(
    (data) => {
      const date = new Date();
      let newMessageData = {};
      if (data.length === 0) return;
      if (typeof data == "string") {
        newMessageData["nickname"] = user.userName;
        newMessageData["text"] = data;
        newMessageData["time"] =
          date.getFullYear() +
          "." +
          date.getMonth() +
          "." +
          date.getDate() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes();
      } else {
        newMessageData["nickname"] = data.nickname;
        newMessageData["text"] = data.message;
        newMessageData["time"] =
          date.getFullYear() +
          "." +
          date.getMonth() +
          "." +
          date.getDate() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes();
      }
      setComments([...comments, newMessageData]);
    },
    [comments]
  );
  const user = cookies.login;

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3555");
    ws.onmessage = (event) => {
      console.log("on message", event.data);
      let recData = JSON.parse(event.data);

      addComment(recData.data);
    };
    setWS(ws);
  }, []);

  useEffect(() => {
    if (!ws) return;
    ws.onmessage = (event) => {
      console.log("on message", event.data);
      let recData = JSON.parse(event.data);
      addComment(recData.data);
    };
  }, [ws, addComment]);

  return (
    <Page>
      <MainMenu />
      <ChattingBlock>
        <div className="chatting-header">
          <div className="chatting-title">{"채팅방"}</div>
        </div>
        <div className="content">
          {comments.map((comment, i) => (
            <ChattingContent comment={comment} key={i} />
          ))}
          <ChattingInput addComment={addComment} ws={ws} />
        </div>
      </ChattingBlock>
    </Page>
  );
};

export default ChattingPage;
