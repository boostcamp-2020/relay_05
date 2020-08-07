const DBComments = require('../../db/DBComments')
const WSConnector = require('../../websocket/WSConnector')

exports.create = async (req, res) => {
  const axios = require('axios');

  // time
  var today = new Date()
  var hh = ('0'+(today.getHours())).slice(-2)
  var mm = ('0'+(today.getMinutes())).slice(-2)
  var hhmm = `${hh}:${mm}`

  // const filteredText = await axios.post("localhost:3333",req.body.text)
  const filteredText = req.body.text

  var comment = {
    'nickname': req.body.nickname,
    'text':filteredText,
    'time':hhmm 
  }
  await DBComments.insertComment(comment)
  WSConnector.broadcast('insert comment', comment)
  res.sendStatus(200)
}

exports.get = async (req, res) => {
  const result = await DBComments.getAllComments()
  res.send(result)
}


  
    

  