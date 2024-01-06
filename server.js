const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send("Pagina Inicial")
})

const server = app.listen(PORT, () => {
  console.log("Server running on port: ", PORT)
})
