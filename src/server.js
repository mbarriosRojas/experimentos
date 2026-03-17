// Importamos express
const express = require('express');
const app = express();
const port = 3000;

// Configuramos express para que pueda parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creamos un arreglo de mensajes para almacenar los mensajes enviados
let mensajes = [];

// Endpoint para enviar mensajes
app.post('/mensaje', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  // validamos que los campos sean correctos
  if (!nombre || !email || !mensaje) {
    res.status(400).send('Faltan campos en el mensaje');
    return;
  }
  
  // Agregamos el mensaje al arreglo
  mensajes.push({ nombre, email, mensaje });
  res.send('Mensaje enviado con éxito');
});

// Endpoint para obtener todos los mensajes
app.get('/mensajes', (req, res) => {
  res.send(mensajes);
});

// Inicializamos el servidor
app.listen(port, () => {
  console.log(`Server empezó en puerto ${port}`);
});
