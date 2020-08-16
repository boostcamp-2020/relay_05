import React, { useState } from 'react';
import styled from 'styled-components';

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

const ImageUpload = () => {
  let file;
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
      file = files[0];
      console.log(files[0].name);
      setFile(() =>({
        width: '150px',
        height: '150px',
        position: 'relative',
        backgroundImage: 'url( '+ window.URL.createObjectURL(files[0]) +')',
        outline : 'none',
      backgroundSize:'100% 100%'
      }))
      setFileName(files => files[0].name);
    }
  }

  
  
  return (
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
  );
};

export default ImageUpload;