const express = require("express");
const fs = require("fs");

const app = express();
const puerto = 8080;

let cantidadVisitas1 = 0;
let cantidadVisitas2 = 0;

const getData = () => {
  try {
    let data = fs.readFileSync("./productos.txt", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("error al leer archivo:", error);
  }
};

app.get("/items", (req, res) => {
  cantidadVisitas1++;

  let productos = getData();

  res.json({ items: [productos], cantidad: productos.length });
});

app.get("/item-random", (req, res) => {
  cantidadVisitas2++;

  let productos = getData();

  const random = Math.floor(Math.random() * productos.length);
  const producto = productos[random];

  res.json({ item: { producto } });
});

app.get("/visitas", (req, res) => {
  res.json({ visitas: { items: cantidadVisitas1, item: cantidadVisitas2 } });
});

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on("error", (error) => {
  console.log("error en el servidor:", error);
});
