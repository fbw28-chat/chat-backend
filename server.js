const express = require("express")
const app = express()
const socketIo = require("socket.io")

const PORT = process.env.PORT || 5000

// save instance of the started server
const server = app.listen(PORT, () => console.log("API server started up", PORT))

// setup socket server here...
const io = socketIo(server, {
  cors: {
    origin: "*" // allow all origins connecting
  }
}) // io = input output

app.get("/", () => {
  res.json({ message: "Hello" })
})

// start listening for incoming socket connections
  // runs once for every connecting client
io.on("connection", (socket) => {

  // socket = direct channel / line between frontend & backend
  console.log("Someone connected...")

  // emit event (message) to frontend! 
  // socket.emit('message', { message: "Welcome my friend" })

  // listen for incoming mesages
  socket.on('message', (chatMsg) => {
    console.log(chatMsg)
    socket.broadcast.emit('message', chatMsg) // here we omit the sender
  })

})




