# Relay_05

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
