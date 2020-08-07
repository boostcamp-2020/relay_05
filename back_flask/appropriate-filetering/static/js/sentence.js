async function addSentence() {
    if(event.keyCode == 13){
        let sentence = document.getElementById('ori-sentence-input').value;
        document.getElementById('ori-sentence-list').innerHTML += '<div class="ori-sentence">' + sentence  + '</div>';
        let result = await sentenceClassification(sentence);
        console.log(result)
        if(result['data'] === -1) {
            document.getElementById('result-sentence-list').innerHTML += '<div class="ori-sentence">에러가 발생하였습니다.</div>';
        } else if(result['data'] === 0) {
            document.getElementById('result-sentence-list').innerHTML += '<div class="ori-sentence good">' + result['text'] + '</div>';
        } else if(result['data'] === 1 ) {
            document.getElementById('result-sentence-list').innerHTML += '<div class="ori-sentence bad">' + result['text'] + '</div>';
        }
        document.getElementById('ori-sentence-list').scrollTop = document.getElementById('ori-sentence-list').scrollHeight;
        document.getElementById('result-sentence-list').scrollTop = document.getElementById('result-sentence-list').scrollHeight;
        document.getElementById('ori-sentence-input').value = '';
   }
}

async function sentenceClassification (data) {
    try {
      let res = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/chk',
        timeout: 8000,
        data: { text: data }
      })
      if (res.status !== 200) {
        return -1
      }
      console.log(res.data)
      let result = 0
      if (res.data == "욕아님") {
        result = 0
      } else if (res.data == "욕") {
        result = 1
      }
      return { data: result, text: data }
    } catch (err) {
      console.error(err)
      return -1
    }
  }