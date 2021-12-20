// importo mis funciones de mi biblioteca util
import { consTabla, totalGlobal } from "./utiles.js";
// obtengo la tabla a traves del dom
let tabla = document.getElementById("tabla");
//accedo a mi modelo de productos
let productosStr = sessionStorage.getItem("listaProductos");
// convierto el json en una lista de objetos
let productosObj = JSON.parse(productosStr);
//obtengo elemento de boton Realizar Compra
let btnCompra = document.getElementById("btnComprar");
const valorEnvio = 500;
const valorIVA = 0.14;
//uso mi funcion que esta en utils para construir mi tabla de productos de forma dinamica
consTabla(productosObj, tabla, valorEnvio, valorIVA);
//obtengo la lista de botones +
let botonesSuma = document.getElementsByClassName("qty qty-plus");
//uso un for para anadir eventos
for (let i = 0; i < botonesSuma.length; i++) {
  botonesSuma[i].addEventListener("click", () => {
    let precio = document.getElementById(`precio${i + 1}`).innerText;
    let cantidad = document.getElementById(`cant${i + 1}`).value;
    let IVA = document.getElementById(`IVA${i + 1}`).innerText;
    let total = document.getElementById(`total${i + 1}`);
    document.getElementById(`cant${i + 1}`).value = parseInt(cantidad) + 1;
    cantidad = document.getElementById(`cant${i + 1}`).value;
    total.innerText = (
      (parseFloat(precio) + parseFloat(IVA)) *
      cantidad
    ).toFixed(2);

    totalGlobal();
  });
}
//obtengo la lista de botones -
let botonesResta = document.getElementsByClassName("qty qty-minus");
//uso un for para anadir eventos
for (let i = 0; i < botonesResta.length; i++) {
  botonesResta[i].addEventListener("click", () => {
    let precio = document.getElementById(`precio${i + 1}`).innerText;
    let cantidad = document.getElementById(`cant${i + 1}`).value;
    let IVA = document.getElementById(`IVA${i + 1}`).innerText;
    let total = document.getElementById(`total${i + 1}`);
    document.getElementById(`cant${i + 1}`).value = parseInt(cantidad) - 1;
    if (cantidad <= 0) {
      document.getElementById(`cant${i + 1}`).value = 0;
      total.innerText = null;
    }
    cantidad = document.getElementById(`cant${i + 1}`).value;
    total.innerText = (
      (parseFloat(precio) + parseFloat(IVA)) *
      cantidad
    ).toFixed(2);

    totalGlobal();
  });
}
//anado evento a boton Realizar Compra
btnCompra.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "Felicidades",
    text: `Su compra de ${sessionStorage.getItem(
      "total"
    )} dolares ha sido cobrada y enviada`,
  });
});
