//defino mi lista de productos
let productos = [
  {
    id: 1,
    imagenURL: "/assets/images/relojes/reloj1.jpg",
    nombre: "Reloj rolex 4000",
    precio: 360,
  },
  {
    id: 2,
    imagenURL: "/assets/images/relojes/reloj2.jpg",
    nombre: "Reloj rolex 5000",
    precio: 470,
  },
  {
    id: 3,
    imagenURL: "/assets/images/relojes/reloj3.jpg",
    nombre: "Reloj rolex 6000",
    precio: 580,
  },
  {
    id: 4,
    imagenURL: "/assets/images/relojes/reloj4.jpg",
    nombre: "Reloj rolex 7000",
    precio: 690,
  },
  {
    id: 5,
    imagenURL: "/assets/images/relojes/reloj5.jpg",
    nombre: "Reloj rolex 8000",
    precio: 700,
  },
  {
    id: 6,
    imagenURL: "/assets/images/relojes/reloj6.jpg",
    nombre: "Reloj rolex 9000",
    precio: 810,
  },
  {
    id: 7,
    imagenURL: "/assets/images/relojes/reloj1.jpg",
    nombre: "Nuevo objeto",
    precio: 2000,
  },
];


//guardo en el session storage
sessionStorage.setItem("listaProductos", JSON.stringify(productos));