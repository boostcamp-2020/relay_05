from flask import Flask, request, Response, render_template, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
# from flask_restful import reqparse
from tensorflow import keras
import pickle
from keras.preprocessing import sequence
#from embedding import to_index_array, padding, decompose_string
import base64
import json
#from . import cartoonize
import cartoonize as cart
import os
import shutil

app = Flask(__name__)
CORS(app)

MAX_LEN = 681

with open('jamo.pydict', 'rb') as f:
    jamodict = pickle.load(f)

def encode_review(text):
    text = decompose_string(text)
    text = to_index_array(text, jamodict)
    text = padding(text, MAX_LEN)
    return text


def predict(text):
    model = tf.keras.models.load_model('models/latest-yok-detect-model.h5')
    graph = tf.get_default_graph()

    indices = encode_review(text)
    indices = np.array([indices])
    with graph.as_default():
        result = model.predict_classes(indices)
    poornag = ''
    if result == 0:
        poornag = '욕 아님'
    else:
        poornag = '욕'
    return poornag

# @app.route('/chat', methods=['GET'])
# def upload_train():
#     data = request.get_json()
#     print(data['text'])
#     poornag = predict(data['text'])
#
#     response = Response()
#     response.headers[
#         'Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization'
#     response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
#
#     return poornag, 200

@app.route('/chk', methods=['POST'])
def upload_train():
    # data_test = reqparse.RequestParser()
    # print(data_test['text'])
    data = request.get_json()
    print(data)
    print(request)
    # print(data['text'])
    # poornag = predict(data['text'])

    textArray = data['text'].split(' ')

    for i in range(len(textArray)):
        if predict(textArray[i]) == '욕':
            textArray[i] = '아잉❤️'

    text = (" ").join(textArray)
    print(text)

    predictedData = {
        'text': text,
    }
    print(jsonify(predictedData))
    return jsonify(predictedData)

    # response = Response()
    # response.headers[
    #     'Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization'
    # response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
    #
    # return poornag, 200

    
    

@app.route('/cartoonize', methods=['GET','POST'])
def cartn():
    # json to .jpg file
    img = request.get_json()
    convert_and_save(img['img'])
    
    # cartoonzie
    cart.cartoonizeImg()
    
    # get cartoonize Image
    data = {}
    os.chdir('../../')
    imgpath = os.getcwd()
    imgpath = os.path.join(imgpath,"front/cartoonImg.jpg")
    
    
    with open("back_flask/appropriate-filetering/cartoonized_images/cartoonImg.jpg", mode='rb') as file:
        img = file.read()
        data['img'] = base64.encodebytes(img).decode("utf-8")
    shutil.copyfile("back_flask/appropriate-filetering/cartoonized_images/cartoonImg.jpg",imgpath)
    # .jpg to json file
    rootPath=os.getcwd()
    rootPath=os.path.join(rootPath,"back_flask/appropriate-filetering")
    os.chdir(rootPath)
    
    return json.dumps(data)


def convert_and_save(b64_string):
    with open("test_images/cartoonImg.jpg", "wb") as fh:
        fh.write(base64.b64decode(b64_string.encode()))
    

@app.route('/')
def index():
    return render_template('index.html')

# node.js 와 host IP 맞춰야 함
app.run(port=5000, host='127.0.0.1', debug=True)