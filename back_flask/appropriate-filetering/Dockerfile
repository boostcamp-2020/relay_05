FROM python:3.7
COPY ./ /workspace
WORKDIR /workspace

EXPOSE 5000

RUN pip install --upgrade pip && pip3 install pipenv==2018.10.13 && pipenv install

CMD ["pipenv", "run", "python", "api.py"]
