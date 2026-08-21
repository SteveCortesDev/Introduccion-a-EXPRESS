const express = require("express")
const app = express() 
require("dotenv/config")
const port = process.env.puerto
const PUERTO = port || 3030

app.get("/", function (req, res) {
   res.send("API - Rest Aprendices");
})

app.listen(PUERTO, function() {
   console.log(`SERVIDOR  http://localhost:${PUERTO}`);
})