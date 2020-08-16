# 데모 URL or 시연영상

```
https://youtu.be/80hUMnzRVyA
```





# 체크포인트

```
- 닉네임 기반 로그인
- 마이페이지 / 이미지 업로드
- flask 서버에 이미지 변환 요청
- 변환된 이미지 front 전송
- 이미지 파일 카툰화

 자세한 내용은 아래 프로젝트 소개를 참고해주세요
```





# 프로젝트 소개

# 🙌🏻 다모여

### 카툰화 기능
마이 페이지에서 프로필 사진 업로드 시, 카툰 이미지로 변경

### 시스템 구조
![image](https://user-images.githubusercontent.com/26537048/89733480-c0063700-da90-11ea-9281-3c438178f6f9.png)







BEFORE : 

![image_before](https://user-images.githubusercontent.com/33947168/90343770-8e700b80-e04e-11ea-9daa-62604f523fc6.png)

AFTER : 

![cartoonized_image](https://user-images.githubusercontent.com/33947168/90343774-8fa13880-e04e-11ea-9b60-48586dc8c2ea.png)





## 💻 FrontEnd

### 프로젝트 시작하기

```bash
git clone https://github.com/boostcamp-2020/relay_05.git
cd front
npm install
npm start
```

socket.io 통신을 위해 서버를 실행해주세요
```bash
cd back
npm install
npm start
```

### 사용 기술
`React.JS` `WebSocket` `styled-components` `material-ui`<br>

### 구현
- 닉네임 기반 로그인
- 마이페이지 / 이미지 업로드



## 🔧 Server - node
### 개발환경 세팅

### 사용 기술
`Node.js` `Express.js` `pm2` `MySQL` `WebSocket`

### 구현
- flask 서버에 이미지 변환 요청
- 변환된 이미지 front 전송

### 

## ⚗ Server - Flask
### 환경 구축

- Use python 3.7

```
cd appropriate-filetering
pip install flask
pip install flask_cors
pip install opencv-python
pip install tensorflow==1.13.1
pip install keras==2.2.4

pip install https://download.pytorch.org/whl/cu100/torch-1.2.0-cp37-cp37m-win_amd64.whl

python api.py
```

- Use docker

```
docker pull kidevelop/appropriate-filetering
docker run -p 5000:5000 -d kidevelop/appropriate-filetering
```

### 사용 기술
`Flask` `python` 

### 구현
- express서버 요청을 받아서 이미지 변경
- GAN을 이용한 cartoonized 이미지 생성

### 참조

https://github.com/SystemErrorWang/White-box-Cartoonization





### 🚴 Week3 릴레이 프로젝트 참여자
| FrontEnd  | BackEnd | Flask |
| - | - | - |
| J092_박진용 | J094_서광근 | J044_김성환 |
| J093_백지영 | J173_임현유 | J043_김선우 |
| J215_한승래 | J183_정부용 | J027_김도균 |
| J199_주지수|| J070_문창주 |

