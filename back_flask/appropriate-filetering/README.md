## 자연어 처리

> 자연어 처리를 이용하여 비속어 필터링 구현

- 사용 언어
  - Python

- 가상 환경
  - Flask 프레임워크 

- `api.py` 
  - 메인 서버에서 `localhost:5000`으로 필터링 된 채팅을 `request`
  - Flask 서버는 필터링 되지 않은 채팅  `text` 데이터를  `json` 형식으로 수신
  - API를 이용하여 자연어 처리를 통해 채팅 내 욕설 및 비속어를 `아잉♥`으로  필터링
  - 필터링 된 `text` 데이터를 다시 메인 서버로 전송


## 환경 구축

- Use python 3.7

```
cd appropriate-filetering
pip3 install pipenv==2018.10.13 
pipenv install
pipenv run python api.py
```

- Use docker

```
docker pull kidevelop/appropriate-filetering
docker run -p 5000:5000 -d kidevelop/appropriate-filetering
```


## 결과

- 필터링 결과 console 캡처


<a href='https://ifh.cc/v-DTvO7q' target='_blank'><img src='https://ifh.cc/g/DTvO7q.png' border='0'></a>

- POSTMAN 결과 캡쳐

![flask json 캡처](https://user-images.githubusercontent.com/60880904/89636669-ee92df00-d8e3-11ea-8ab3-563a6d4033da.PNG)



참여 인원 : 고병화, 조항래, 고석호

[비속어 필터링 출처](https://github.com/hjh010501/appropriate-filetering)