// Configurando o EXPRESS
const express = require("express");
const server = express();
const path = require('path');

// Configurando o NUNJUCKS
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.use(express.static("public"));


const projetos = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/3057/3057735.png",
    title: "Por que a Terra NÃO é plana?",
    category: "Ciências",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/7504/7504325.png",
    title: "Satélite caseiro",
    category: "Engenharia",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1396/1396673.png",
    title: "O advento de battle royalle, um estudo sobre Free Fire",
    category: "Administração",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1409/1409937.png",
    title: "A compra do Twitter por Elon Musk, em pleno 2022",
    category: "Administração",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
];

// rota padrão da aplicação /
server.get("/", function (req, res) {
  const nome = "Info de dentro do server";
  console.log("Oi do Frontende");
  return res.render("index.html", { projetos });
});

// rota /projects
server.get("/projects", function (req, res) {
  console.log("Oi do Frontende");
  return res.sendFile(__dirname+"/views/projects.html");
});

server.listen(3000);
