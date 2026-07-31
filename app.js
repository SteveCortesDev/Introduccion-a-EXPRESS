import express from 'express';
import {configDotenv} from "dotenv" 
configDotenv()

const app = express();
const port = process.env.PUERTO || 5050

app.get('/', (_req, res) => {
   res.send(`Aprendiendo express, con la ficha 3407181, ADSO en el Sena`);
});



app.listen(port, () => {
   console.log('Servidor en funcionamiento en el puerto: ' + port);
});