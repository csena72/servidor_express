const express = require('express');

/*
Consigna: 

Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080:

Ruta get '/items':
     que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }

Ruta get '/item-random':
     que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo 'productos.txt'. El formato de respuesta será: { item: {producto} }

La ruta get '/visitas': 
    1. devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 
    2. Contestar con el formato:  { visitas : { items: cantidad, item: cantidad } }

    Usar 'productos.txt' del desafío anterior.

*/

 const app = express();
 
 const puerto = 8080;

 app.get('/items', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'items!' });
});

app.get('/item-random', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'item-random!' });
});

app.get('/visitas', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'visitas!' });
});


 const server = app.listen(puerto, () => {
     console.log(`servidor escuchando en http://localhost:${puerto}`);
 });


 server.on('error', error => {
     console.log('error en el servidor:', error);
 });