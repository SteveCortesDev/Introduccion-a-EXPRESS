import express from 'express';
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
   res.send('Aprendiendo express, con la ficha 3407181 y con un homesexual llamado Torres.');
});

app.listen(port, () => {
   console.log('Servidor en funcionamiento en el puerto: ' + port);
});