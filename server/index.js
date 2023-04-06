const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

app.listen(5000, () => {
    console.log("server has started on port 5000")
})

// Exporting app and pool
module.exports = {
    app: app,
    pool: pool
};