const express = require("express")
const app = express() 
require("dotenv/config")
const port = process.env.puerto
const PUERTO = port || 3030
const sistemaArchivo = require("fs")
const ruta= require("path")
const rutaArchivoJson = ruta.join(__dirname, "datos.json")

app.get("/", function (req, res) {
   res.send("API - Rest Aprendices");
})
app.get("/api/aprendices", function (req, res) {
   //los datos se pueden traer de una base de datos, de un archivo, etc
   sistemaArchivo.readFile(rutaArchivoJson, "utf8", function(error, datos) {
      if (error) {
         return res.json({Error: "No se pudo leer los datos"})
      }
      const listaAprendices = JSON.parse(datos);
      res.json(listaAprendices);
   })
})
//endpoint para crear un aprendiz
app.post("/api/aprendices", function (req, res) {
   res.json({mensaje: "Trabajando en el endpoint "})
})

app.listen(PUERTO, function() {
   console.log(`SERVIDOR  http://localhost:${PUERTO}`);
})