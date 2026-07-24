import express from 'express';
const app = express();
const port = process.env.PUERTO || 3000

app.get('/', (_req, res) => {
   res.send('Aprendiendo express, con la ficha 3407181');
});

app.listen(port, () => {
   console.log('Servidor en funcionamiento en el puerto: ' + port);
});