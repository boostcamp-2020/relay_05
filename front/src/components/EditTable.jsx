import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


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

  .container td, .container th {
    padding:15px; 
    color: #fff;
  }

  /* Background-color of the odd rows */
  .container tr:nth-child(odd) {
      background-color: #8DC3E2;
  }

  /* Background-color of the even rows */
  .container tr:nth-child(even) {
      background-color: #73B6DC;
  }

  .container th {
    background-color: #fff;
    text-align: center;
  }

  .container td:first-child { 
    text-align: center;
    color: #fff; 
    width:30%;
    font-weight:bold;
  }

  .save{
    color: #fff;
    background-color: #8DC3E2;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .save:hover{
      background-color: #73B6DC;
  }

`;

const ImageUploadForm = styled.div`
  display: flex;
  justify-content: flex-start;

  .wrapper{
    display: flex;
    width:100%;
    text-align: center;
    justify-content: center; 
  }

  .box_file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
   

  .filelabel{
    color: #fff;
    background-color: #8DC3E2;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .filelabel:hover{
      background-color: #73B6DC;
  }
  .filelabel svg {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      fill: currentColor;
      margin-top: -0.25em;
      margin-right: 0.25em;
  }

  .file_info{
    margin:10px;
    display: inline-block;
  }

`;


const EditTable = ({nickname,checked,image}) => {
  const [file,sendImg] = useState();
  const [fileName,setFileName] = useState("?");
  const [fileView,setFile] = useState({
      backgroundColor: '#eee',
      width: '100px',
      height: '100px',
      margin: '10px',
      position: 'relative'
  });
  
  const changeImage = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('하나의 이미지만 가능합니다.');
    }
    else{
      sendImg(files[0]);
      setFile(() =>({
        width: '150px',
        height: '150px',
        position: 'relative',
        backgroundImage: 'url( '+ window.URL.createObjectURL(files[0]) +')',
        outline : 'none',
      backgroundSize:'100% 100%'
      }))
      setFileName(files[0].name);
    }
  }

  const upload = async() =>{
    let formData = new FormData();
    formData.append('img',file);
  
    axios.post('http://localhost:3200/user/image',formData)
    .then(response =>{
      checked(false);
      console.log("dir : " + __dirname);
      image("cartoonImg.jpg");
      return ;
    });
  }
 
  return (
    <UserInfoTable>
      <form class="box" id="image_form" method="post">
      <table class="container">
          <thead>
            <tr>
              <th>
                <ImageUploadForm>
                  <div class="wrapper">
                    <div style={fileView}>
                      <input type="file" class="box_file" id = 'file'  onChange={changeImage}/>
                    </div>

                    <div class="file_info">
                        <label for="file">
                            <label for="file">
                              <div class="filelabel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                                </svg>
                                <span>업로드</span>
                              </div>
                            </label>
                        </label>
                        <p class="fileName" style={{color:"#000"}}>{fileName}</p>
                    </div> 
                  </div>
                </ImageUploadForm>
              </th>
              <th><h1>{nickname}</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>아아이이디디</td>
            </tr>
            <tr>
              <td>닉네임</td>
              <td>닉닉네네임임</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>이이메메일일</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>주주소소</td>
            </tr>
            <tr>
              <td>핸드폰</td>
              <td>핸핸드드폰폰</td>
            </tr>
            <tr>
              <td>그룹</td>
              <td>학학교교</td>
            </tr>
          </tbody>
        </table>
        </form>
        <input type="submit" class="save" value="저장" onClick = {upload}/>
      </UserInfoTable>
  );
};

export default EditTable;
