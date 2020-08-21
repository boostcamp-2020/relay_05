import React, { useState } from "react";

import MainMenu from "../components/MainMenu";
import UserTable from "../components/UserTable";
import EditTable from "../components/EditTable";
import Switch from "@material-ui/core/Switch";
import { useCookies } from "react-cookie";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export default function MainPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);
  const user = cookies.login;
  const nickname = user.userName;
  const [checked, setChecked] = React.useState(false);
  const [image, setImage] = useState();

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Page>
      <MainMenu />
      <Container>
        {/* {!checked?<UserTable nickname={nickname} image={image}/> :  */}
        <EditTable nickname={nickname} checked={setChecked} image={setImage} />
        {/* <Switch checked={checked} onChange={toggleChecked} /> */}
      </Container>
    </Page>
  );
}
