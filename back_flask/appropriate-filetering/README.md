![](https://github.com/hjh010501/appropriate-filetering/blob/master/images/main.png)

# 인공지능 기반 한국어 비속어 필터링
[![Run on Ainize](https://ainize.ai/static/images/run_on_ainize_button.svg)](http://104.154.113.3/)

Ainize: https://ainize.web.app/redirect?git_repo=github.com/hjh010501/appropriate-filetering

인공지능을 기반으로 하여 문장의 비속어를 파악하는 HTTP API

음소, 음절별로 문장을 분해하여 인공지능을 통해 비속어 여부를 분석 할 수 있습니다.

## Installation

- Use python 3.7

```bash
cd appropriate-filetering
pip3 install pipenv==2018.10.13 
pipenv install
pipenv run python api.py
```

- Use docker
```bash
docker pull kidevelop/appropriate-filetering
docker run -p 5000:5000 -d kidevelop/appropriate-filetering
```

## Usage
### Website
Just join website http://104.154.113.3/

### API
```http
POST /chk
```
***Request**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `json` | **Required**. 비속어 필터링 할 문장 |

**Responses**
욕 or 욕아님