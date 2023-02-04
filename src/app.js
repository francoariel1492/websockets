const {Server} =require('socket.io')

const app = require('./index')

const port = 3000

const httpServer = app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})

const io = new Server(httpServer)

io.on('connection', socket => {
    console.log(`New Client with id: ${socket.id}`)

    socket.on('messageFromClient', data =>{
        console.log(data)
    })

    socket.emit('messageFromServer', 'Este es un mensaje para todos')

    socket.on('chatFromClient', data =>{
        io.emit('messageForChat', data)
    })
})