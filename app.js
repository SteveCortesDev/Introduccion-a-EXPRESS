//const express = require("express")
import express from 'express';

//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();
const port = process.env.PUERTO || 5050;
//uso de middleware para leer el body en formato json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send(`Aprendiendo express, ficha 3407181, ADSO en el curso de desarrollo web el 31 de julio de 2026`);
});

//otro endpoint
app.get("/otraruta", (req, res) => {
  //usando template string
  res.send(`<h1>Hola desde otra ruta</h1>,
    <h2>end point con res.send</h2>`);
});

app.get("/ruta2", (req, res) => {
  res.json({
    nombre: "Juan Daniel",
    apellido: "Pulido Vargas",
    cargo: "aprendiz",
  });
});


app.get("/ruta3/:aprendiz/:otrodato", (req, res) => {
  const dato_aprendiz = req.params.aprendiz;
  const otro_dato = req.params.otrodato;
  res.json({"nombre":dato_aprendiz, "otro_dato":otro_dato});
});
  

app.get("/ruta4", (req, res) => {
  //capturar la el parametro de consulta query
  const orden = req.query.orden || "sin ordenar";
  const pagina = req.query.pagina || 1;
  res.send(`<h1>listado de aprendices</h1>
    <p>lista de orden ${orden}</p>
    <p>pagina ${pagina}</p>`);
});

//endpoint para envio de datos formato json
app.post("/ruta2", (req, res)=>{
  const todosDatos = req.body
  const miNombre= req.body.nombre1
  const miApellido= req.body.apellido2
  const miCargo= req.body.cargo3
  res.status(200).json({Mensaje : "Datos recibidos", nombre: miNombre, apellido: miApellido, cargo: miCargo})
})

app.post("/login", (req, res)=>{

  if(usuario == "user" && password == "1234"){
    return res.status(200).json({
      mensaje: "Bienvenido al sistema"
    });
}
  return res.status(403).json({
    mensaje: "Usuario no autorizado"
  });
});

  app.post("/formulario", (req, res)=>{
  const datosForm = req.body
  const miNombre = req.body.nombre1
  const miApellido = req.body.apellido2
  const miCargo = req.body.cargo3
  res.status(200).json({Mensaje: "Datos recibidos", nombre: miNombre, apellido: miApellido, cargo: miCargo})
})

  app.listen(port, function() {
  console.log(`SERVIDOR: http://localhost:${port}`);
});