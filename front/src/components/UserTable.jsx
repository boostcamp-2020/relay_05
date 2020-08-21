import React, { useState } from "react";
import FaceIcon from "@material-ui/icons/Face";
import styled from "styled-components";

const UserInfoTable = styled.div`
  text-align: center;

  .container th h1 {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    color: #000;
  }

  .container td {
    font-weight: normal;
    font-size: 18px;
  }

  .container {
    width: 80%;
    text-align: left;
    overflow: hidden;
    margin: 30px auto;
    display: table;
  }

  .container td,
  .container th {
    padding: 15px;
    color: #fff;
  }

  /* Background-color of the odd rows */
  .container tr:nth-child(odd) {
    background-color: #8dc3e2;
  }

  /* Background-color of the even rows */
  .container tr:nth-child(even) {
    background-color: #73b6dc;
  }

  .container th {
    background-color: #fff;
    text-align: center;
  }

  .container td:first-child {
    text-align: center;
    color: #fff;
    width: 30%;
    font-weight: bold;
  }

  .image {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
`;

const UserTable = ({ nickname, image }) => {
  console.log("user", image);
  return (
    <UserInfoTable>
      <table class="container">
        <thead>
          <tr>
            <th>
              {!image ? (
                <FaceIcon style={{ fontSize: "5em", color: "#000" }} />
              ) : (
                <img class="image" src={image} />
              )}
            </th>
            <th>
              <h1>{nickname}</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>닉네임</td>
            <td>{nickname}</td>
          </tr>
          <tr>
            <td>그룹</td>
            <td>부캠고등학교</td>
          </tr>
        </tbody>
      </table>
    </UserInfoTable>
  );
};

export default UserTable;
