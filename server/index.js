const server = new (require('ws').Server)({ port: 1492 });

server.on(
  'connection',
  ws => ws.on(
    'message',
    data => server.clients.forEach(socket => socket.send(data))
  )
);
