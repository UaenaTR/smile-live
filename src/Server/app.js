const http = require('http')
const Koa = require('koa2')
const app = new Koa()
const socketio = require('socket.io')
const SocketServer = http.createServer(app.callback())

const io = socketio(SocketServer)

io.on('connection', (socket) => {
  socket.on('emitMsg', (data) => {
    console.log(data)
    io.emit('backMsg', data)
  })
})

SocketServer.listen(3000, () => {
  console.log('success')
})
