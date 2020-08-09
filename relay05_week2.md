# 🙌🏻 다모여
### 자연어 처리 기능
채팅에서 비속어 등장 시 ‘아잉♥’으로 바꿔주기

### 시스템 구조
![image](https://user-images.githubusercontent.com/26537048/89733480-c0063700-da90-11ea-9281-3c438178f6f9.png)


## 💻 FrontEnd
### 사용 기술
`React.JS` `WebSocket` `styled-components` `material-ui`<br>

### 실행

- 홈화면
![Screenshot from 2020-08-07 22-59-57](https://user-images.githubusercontent.com/52442237/89653554-33c60980-d902-11ea-9f77-c9287603b33b.png)

- 메뉴 카테고리 클릭(채팅시작)
![Screenshot from 2020-08-07 23-00-00](https://user-images.githubusercontent.com/52442237/89653556-358fcd00-d902-11ea-8b5b-baa10127566e.png)

- 채팅방 접속(이전 채팅기록을 불러온다)
![Screenshot from 2020-08-07 23-00-03](https://user-images.githubusercontent.com/52442237/89653558-358fcd00-d902-11ea-96a8-93735f12e85a.png)

- 채팅입력시 채팅방에 출력
![Screenshot from 2020-08-07 23-00-15](https://user-images.githubusercontent.com/52442237/89653561-37599080-d902-11ea-9d87-3d0ed7d18f56.png)

- 동시에 WebSocket으로 통신
![Screenshot from 2020-08-07 23-00-19](https://user-images.githubusercontent.com/52442237/89653562-388abd80-d902-11ea-9c7d-f2a54f866a7a.png)


## 🔧 Server - node
### 사용 기술
`Node.js` `Express.js` `pm2` `MySQL` `WebSocket`

### 구현

- 채팅 생성
클라이언트에서 post 한 요청을 기반으로 flask서버에 존재하는 욕 필터기를 사용하여, 필터링된 text를 DB에 저장 
![스크린샷 2020-08-07 오후 6 24 20](https://user-images.githubusercontent.com/38158709/89632839-d91ab680-d8dd-11ea-93f3-7af1162f8ac6.png)

- 채팅 보기 
클라이언트가 처음 접속시 DB에 있는 모든 채팅리스트를 전송
![스크린샷 2020-08-07 오후 6 23 42](https://user-images.githubusercontent.com/38158709/89632871-e6d03c00-d8dd-11ea-8216-be9311795cc7.png)

- websocket 을 이용한 broadcasting
채팅이 생성될시, 서버쪽 websocket에서 broadcasting하여 websocket과 연결된 유저들에게 새로 추가된 채팅을 전송


## ⚗ Server - Flask

### 사용 기술
`Flask` `python` 

### 구현
- 메인 서버에서 localhost:5000으로 필터링 된 채팅을 request
- Flask 서버는 필터링 되지 않은 채팅 text 데이터를 json 형식으로 수신
- API를 이용하여 자연어 처리를 통해 채팅 내 욕설 및 비속어를 아잉♥으로 필터링
- 필터링 된 text 데이터를 다시 메인 서버로 전송

### 실행
- 필터링 결과 console 캡처<br>
<a href='https://ifh.cc/v-DTvO7q' target='_blank'><img src='https://ifh.cc/g/DTvO7q.png' border='0'></a>

- POSTMAN 결과 캡쳐
![flask json 캡처](https://user-images.githubusercontent.com/60880904/89636669-ee92df00-d8e3-11ea-8ab3-563a6d4033da.PNG)


### 🚴 Week2 자연어처리 프로젝트 참여자
| FrontEnd  | Node | Flask |
| - | - | - |
| J046_김예진 | J120_우승윤 | J009_고병화 |
| J083_박인서 | J121_우승진 | J010_고석호 |
| J084_박재윤 | J158_이주형 | J196_조항래 |
|| J159_이준희 | |
