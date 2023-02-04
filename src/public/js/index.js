const socket = io()

const message = document.getElementById('message')

socket.emit('messageFromClient','Este es un mensaje del Cliente')

socket.on('messageFromServer', data =>{
    message.innerHTML = data
})


