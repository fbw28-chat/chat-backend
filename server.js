const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("API server started up", PORT))

// setup socket server here...