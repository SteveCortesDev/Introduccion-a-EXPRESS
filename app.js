import express from 'express';
import {configDotenv} from "dotenv" 
configDotenv()

const app = express();
const port = process.env.PUERTO || 5050

app.get('/', (_req, res) => {
   res.send(`Aprendiendo express, con la ficha 3407181, ADSO en el Sena`);
});

app.get("/otraruta",(req,res)=>{
   res.set(`<h1>Otro ejemplo de ruta</h1>
      <h2>End point con res.send<h2>
      `)
})

app.get("/ruta2",(req,res)=>{
   res.json({"nombre":"Daniel","Apellido":"Pulido","Cargo":"Aprendiz"})
}
)

app.get("/ruta3/:aprendiz/:otrodato",(req,res)=>{
   const dato_aprendiz = req.params.aprendiz
   const otro_dato = req.params.otrodato
   res.json({"nombre": dato_aprendiz, "Otro": otro_dato})
}
)

app.get("/ruta4", (req, res)=>{
   const orden = req.query.orden || "sin ordenar"
   const pagina = req.query.pagina || 1
   res.send(`<h1>Listado de aprendices</h1>
      <p>El lista esta en orden ${orden}<p/>
      <p>Pagina: ${pagina}`

   )
}
)


app.listen(port, () => {
   console.log(`Servidor: http://localhost:${port}`);
});