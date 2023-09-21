const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const { v4: uuidv4 } = require('uuid');

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  console.log('websocket 連線成功');

  const uuid = uuidv4();
  ws.uuid = uuid;

  // 替當前連線的用戶建立一組用戶資料
  const user = {
    context: 'user',
    data: uuid,
  };
  ws.send(JSON.stringify(user));

  ws.on('message', (data, isBinary) => {
    // 推播訊息給不是自己的用戶
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client.uuid !== uuid) {
        const message = JSON.parse(data);
        const sendData = { context: 'message', data: message.data };
        client.send(JSON.stringify(sendData), { binary: isBinary });
      }
    });
  });
});

module.exports = wss;
