import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
const ImageUploadForm = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;
  .wrapper {
    display: flex;
    width: 100%;
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

  .filelabel,
  .save {
    color: #fff;
    background-color: #8dc3e2;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  .filelabel:hover,
  .save:hover {
    background-color: #73b6dc;
  }
  .filelabel svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    margin-right: 0.25em;
  }
  .file_info {
    margin: 10px;
    display: inline-block;
  }
`;
const ImageUpload = () => {
  let file;
  const [fileName, setFileName] = useState("선택된 파일 없음");
  const [fileView, setFile] = useState({
    backgroundColor: "#eee",
    width: "150px",
    height: "150px",
    margin: "10px",
    position: "relative",
  });
  const changeImage = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
      alert("하나의 이미지만 가능합니다.");
    } else {
      file = files[0];
      console.log(files[0].name);
      setFile(() => ({
        width: "150px",
        height: "150px",
        margin: "10px",
        position: "relative",
        backgroundImage: "url( " + window.URL.createObjectURL(files[0]) + ")",
        outline: "none",
        backgroundSize: "100% 100%",
      }));
      setFileName((files) => files[0].name);
    }
  };
  const upload = () => {
    let formData = new FormData();
    formData.append("file", file);
    axios
      .post("/image", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ImageUploadForm>
      <div class="wrapper">
        <form class="box" id="image_form" method="post">
          <div style={fileView}>
            <input
              type="file"
              class="box_file"
              id="file"
              onChange={changeImage}
            />
          </div>
        </form>
        <div class="file_info">
          <label for="file">
            <label for="file">
              <div class="filelabel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                </svg>
                <span>이미지 업로드</span>
              </div>
            </label>
          </label>
          <p class="fileName">{fileName}</p>
          <input type="submit" class="save" value="저장" onClick={upload} />
        </div>
      </div>
    </ImageUploadForm>
  );
};
export default ImageUpload;
