import React, { useState, useCallback } from "react";
import styled from "styled-components";

export default function LoginCotent() {
  const [userName, setUserName] = useState("");

  const login = async () => {
    if (!userName) {
      alert("아이디와 패스워드를 입력하세요");
      return;
    }

    const response = await fetch("http://localhost:3200/user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName }),
    });
    if (response.ok) {
      window.location.href = "/";
      return;
    }
    const { error } = await response.json();
    console.log(error);
    alert("컹스..");

  };

  const onChange = useCallback((e) => {
    setUserName(e.target.value);
  });

  // const submit = useCallback((e) => {
  //   login(userName);
  //   window.location.href = "/";
  // });

  return (
    <LoginContainer>
      <LoginText>이름을 입력해주세요</LoginText>
      <LoginInput placeholder="name" onChange={onChange} />
      <SubmitButton onClick={async () => {await login();}}>
        제출
      </SubmitButton>
    </LoginContainer>
  );
}

const LoginInput = styled.input`
  width: 30rem;
  height: 3rem;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  margin-left: 1rem;
  border-radius: 10px;
  width: 5rem;
  height: 3rem;
`;

const LoginContainer = styled.div`
  margin: 3rem;
  position: absolute;
  left: 30%;
  top: 30%;
  align-items: center;
  justify-content: space-between;
  width: 50rem;
  height: 5rem;
`;

const LoginText = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`;