var WebSocketServer = require('ws')
const DBComments = require('../db/DBComments');

module.exports = class WSConnector {

  static async connect() {
    this.WSS = new WebSocketServer.Server({ port: 3250 })

    await this.defaultData()
  }

  static async defaultData() {
    this.WSS.on("connection", async (ws, req) => {
      var data = {}
      // data['comments'] = await DBComments.getAllComments()
      ws.send(JSON.stringify(data))
      ws.on('message', (message) => {
        let sendData = { event: 'res', data: null };
        message = JSON.parse(message);
        switch (message.event) {
          case "req":
            sendData.data = message.data;
            this.WSS.clients.forEach((client) => {
              if (client.readyState == WebSocketServer.OPEN && client != ws) {
                client.send(JSON.stringify(sendData));
              }
            })
            break;
          default:
        }
      });
    })
  }

  static async broadcast(key, value) {
    if (!this.WSS) {
      await this.connect()
    }
    var data = {}
    data[key] = value
    this.WSS.clients.forEach((client) => {
      if (client.readyState == WebSocketServer.OPEN) {
        client.send(JSON.stringify(data))
      }
    })
  }
}
