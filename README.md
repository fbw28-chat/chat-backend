# Socket.io

## Snippets for setup


```
npm i socket.io-client // install Socket IO client for React
npm i socket.io // install socket io in Express
```

```
// FRONTEND setup
import socketIo from "socket.io-client";
const MESSAGE_SERVER_URL = process.env.REACT_APP_API_URL = "http://localhost:5000";

// connect on load...
useEffect(() => {
  const socket = socketIo(MESSAGE_SERVER_URL);
  // const socket = socketIo(MESSAGE_SERVER_URL, { transports: ['websocket'] }) 
    // last one works even without CORS set in backend

  socket.on("welcome", message => {
    setResponse(message); // push welcome response message into state
  });
}, []);
```

```
// BACKEND setup

const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 5000;
const server = http.createServer(app);

  // warning: this will fail for React connections, because of CORS
const io = socketIo(server); // wrap HTTP server by socket => "extend API by socket routes"

  // configure for usage from other origin
const io = socketIo(server, {
  cors: { // configure CORS
    origin: "*" 
  }  
}) 


```