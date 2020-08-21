# 데모 시연영상

링크 : https://youtu.be/T2qn3pj-9Qw



# 체크포인트

```
- 닉네임 기반 로그인
- 마이페이지 / 이미지 업로드
- flask 서버에 이미지 변환 요청
- 변환된 이미지 front 전송
- 이미지 파일 카툰화

자세한 내용은 아래 프로젝트 소개를 참고해주세요
```



# 릴레이프로젝트 회고 및 소감

```
중심을 잡아줄 프로젝트 경험자가 없어 초심자들끼리 삽질(?)의 연속이었습니다.
프로젝트에 사용 된 기술공부에 몇시간씩 할애해야했던 프로젝트 경험이었고요.
그렇지만 원하는 기능을 구현하게 되어서 뿌듯하기도 합니다.
주말, 월요일 새벽까지도 고생해준 팀원들이 대단한 것 같습니다. 
```



# 프로젝트 소개

# 🙌🏻 다모여

### 카툰화 기능

마이 페이지에서 프로필 사진 업로드 시, 카툰 이미지로 변경

### 시스템 구조

![image](https://user-images.githubusercontent.com/26537048/89733480-c0063700-da90-11ea-9281-3c438178f6f9.png)


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

### 실행

- 로그인 화면
  ![image](https://user-images.githubusercontent.com/60379085/90328922-698e8080-dfdb-11ea-834c-3d27667f9f2e.png)

- 마이페이지 화면
  ![image](https://user-images.githubusercontent.com/60379085/90328987-d43fbc00-dfdb-11ea-8d33-a15cf8707e44.png)

- 이미지 업로드
  ![image](https://user-images.githubusercontent.com/60379085/90329020-1832c100-dfdc-11ea-89a0-4ea4f93119ca.png)



## 🔧 Server - node

### 개발환경 세팅

### 사용 기술

`Node.js` `Express.js` `pm2` `MySQL` `WebSocket`

### 구현

- flask 서버에 이미지 변환 요청
- 변환된 이미지 front 전송

### 실행

- 저장 버튼이 눌리면 nodejs 서버로 이미지파일이 전달되고, 

  flask에 이미지 변환을 요청한 후 카툰화 된 이미지 반환

  ![image](https://user-images.githubusercontent.com/49560745/90347792-5fb55d80-e06d-11ea-99b7-4b83687e2323.png)

- 사용자 프로필 이미지 카툰화 완료!
  ![image](https://user-images.githubusercontent.com/49560745/90347767-401e3500-e06d-11ea-90ef-6d3ef9510fb6.png)


## ⚗ Server - Flask

### 환경 구축

- Use python 3.7

```
2주차 환경설정

cd appropriate-filetering
pip3 install pipenv==2018.10.13 
pipenv install
pipenv run python api.py
-----------------------------------------------------------------------------------------
3주차 환경설정

python=3.7.0
opencv-python=*
tensorflow=1.13.1
keras=2.2.4
pytorch : pip install https://download.pytorch.org/whl/cu100/torch-1.2.0-cp37-cp37m-win_amd64.whl

pip opencv-python tensorflow==1.13.1 keras==2.2.4
pip install https://download.pytorch.org/whl/cu100/torch-1.2.0-cp37-cp37m-win_amd64.whl
pip install flask 
pip install flask_cors
pip install tqdm
```

- Use docker

```
docker pull kidevelop/appropriate-filetering
docker run -p 5000:5000 -d kidevelop/appropriate-filetering
```

### 사용 기술

`Flask` `python` 

### 구현

- 이미지 파일 카투나이징

### 실행

- 이미지 카툰화

![image (1)](https://user-images.githubusercontent.com/49560745/90347400-35fb3700-e06b-11ea-8f58-0f99371bfd6e.png)



### 🚴 Week3 릴레이 프로젝트 참여자

| FrontEnd    | Node        | Flask       |
| ----------- | ----------- | ----------- |
| J092_박진용 | J094_서광근 | J044_김성환 |
| J093_백지영 | J173_임현유 | J043_김선우 |
| J215_한승래 | J183_정부용 | J027_김도균 |
| J199_주지수 |             | J070_문창주 |
| J036_김민식 |             |            |



# Relay_05 - 1주차

### [Background](https://github.com/boostcamp-2020/relay_05/blob/master/background.md)

> 문서 작성 담당 : 윤현우, 유현우<br>
> mockup 담당 : 윤영우, 윤준성, 윤석주, 유지원<br>
> 설계 담당 : 우이산, 유진우, 우승진, 위정훈, 이건홍, 유선규

<br><br>


### 시스템 구조

#### 전체적인 흐름

![](https://user-images.githubusercontent.com/47842964/89014082-f2f15200-d34f-11ea-82a2-5a55f534b731.png)

<br>

#### 기술스택 예시

![](https://miro.medium.com/max/1400/1*_-1gageYjU7cS9MihY0tnw.png)

<br><br><br>

### 공통기능

#### 회원가입 / 로그인

최대한 간단한 폼으로, 이용자가 귀찮지 않게

제약사항

- 시간상 사용자가 실제로 해당 학교를 재학했는지 인증하는 기능은 어려워보임

**DB**

- 회원 정보 table (id, nickname, password, email, profileImg ...)
  - schools -> Foreign Key 로 학교 정보 table 과 연결
- 회원 학교 정보 table (id, userId, elementarySchool, middleSchool, highSchool..)
- 학교 정보 table (id, schoolName, schoolLocation, ...)
- 이미지 파일 자체는 별도의 storage 에 저장

#### 채널 (채팅)

- 학교
- 입학년도 ; 동창
- 동년배
- 자유채널 ; 동아리 등

**DB**

- 채널 목록 table (id, chatTitle, createdAt, updatedAt...)
- 채팅 메시지 table (id, userid, channelId, text, createdAt, updatedAt ...)
- 사용자 채팅 목록 table (id, chatId, createdAt, updatedAt...)

![](https://user-images.githubusercontent.com/47842964/89019866-f3421b00-d358-11ea-8715-e2a19a49bb20.png)

<br>
<br>

### A - NLP

#### 기능 소개

채팅에서 비속어 등장 시 ‘아잉♥’으로 바꿔주기

#### reference

- dataset : https://github.com/kocohub/korean-hate-speech?fbclid=IwAR0Y-FD_LlWp8bXa3LcJ1P1Dx-HcTVisQ_4746ZeMi3TpeHe815-N6kfFJg
- http://www.inven.co.kr/webzine/news/?news=198156 "ㅅ111발" 도 잡아내는 욕설 탐지기, 딥러닝으로 만들기

<br>
<br>

### B - 컴퓨터 비전

#### 기능 소개

나이대와 상관없이 다 젊게 이모지를 만들어서 프로필 사진 만들기.

- 사진 정보를 제공하지 않으면 개발자들이 미리 찍어놓은 사진들을 조합하여 평균 얼굴을 프로필 사진으로 만들어주기. 추후 변경 가능.

#### reference

- https://github.com/dawei6875797/Face-Aging-with-Identity-Preserved-Conditional-Generative-Adversarial-Networks
- https://github.com/fs2019-atml/face-to-cartoon/blob/master/Presentation_FaceToCartoon.pdf

<br>
<br>

### C - 테이블 값 데이터

#### 기능 소개

실시간으로 가장 ‘북적거리는 학교’를 랭킹으로 만들어서 보여주기

- 특히, 서비스 초기 당시에 랭킹을 기반으로 보상을 주는 이벤트를 진행하면 유입에도 도움이 될 것임.
- 랭킹 기준 예시 : 일주일 동안 가장 채팅 수가 많았던 학교

<br>
<br>

### D - sub (선택 사항)

- 채널에 속해있는 사람들을 대상으로 ‘우리 학교 채널의 커버 사진 경진 대회’ 등의 이벤트를 열어서 투표 진행.

<br><br><br>
### 서비스 흐름

#### 1. 초기 화면
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/%5B%EB%A6%B4%EB%A0%88%EC%9D%B4(%EB%9D%BC%EB%96%BC)%5D%20IntroPage.png?raw=true)
<br>

#### 2. 회원 가입
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/%5B%EB%A6%B4%EB%A0%88%EC%9D%B4(%EB%9D%BC%EB%96%BC)%5D%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%ED%8E%98%EC%9D%B4%EC%A7%80.png?raw=t)
<br>

#### 3. 회원 가입 후, 메인 화면
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/%5BCopy%20of%20relay_05%5D%20%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4%20(1).png?raw=true)
<br>

#### 4. 마이페이지
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/My%ED%8E%98%EC%9D%B4%EC%A7%80.PNG?raw=true)
<br>

#### 5. 채널 검색
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/%5BCopy%20of%20relay_05%5D%20%EC%B1%84%EB%84%90%EA%B2%80%EC%83%89.png?raw=true)
<br>

#### 6. 게시판
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/%EA%B2%8C%EC%8B%9C%EB%AC%BC%20%ED%8E%98%EC%9D%B4%EC%A7%80.png?raw=true)
<br>

#### 7. 글 작성
![](https://github.com/boostcamp-2020/relay_05/blob/week1_J09J10_plan/image/%EA%B8%80%EC%9E%91%EC%84%B1%ED%8E%98%EC%9D%B4%EC%A7%80.PNG?raw=true)
<br>
