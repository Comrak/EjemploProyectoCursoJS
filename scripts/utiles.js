//! funcion para construir tabla de forma dinamica

export function consTabla(productos, elementoDom, valorEnvio, valorIVA) {
  for (let producto of productos) {
    //creo el div principal
    let crearDiv = document.createElement("div");
    //asigno un id unico al div usando el id del producto
    crearDiv.id = `producto_${producto.id}`;
    //reviso si el producto es inpar o par para ver que color de fondo le asigno
    if (producto.id % 2 == 0) {
      crearDiv.className = "layout-inline row row-bg2";
    } else {
      crearDiv.className = "layout-inline row";
    }
    //agrego el html interno al div
    crearDiv.innerHTML = `<div class="col col-pro layout-inline">
                                  <img src=${producto.imagenURL} alt=${
      producto.nombre
    } />
       
                                  <p>${producto.nombre}</p>
                              </div>
      
                              <div class="col col-price col-numeric align-center ">
                                  <p id="precio${producto.id}">${
      producto.precio
    }</p>
                              </div>
      
                              <div class="col col-qty layout-inline">
                                  <a id="minus${
                                    producto.id
                                  }"  class="qty qty-minus">-</a>
                                  <input id="cant${
                                    producto.id
                                  }"type="numeric" value="0" />
                                  <a id="plus${
                                    producto.id
                                  }" class="qty qty-plus">+</a>
                              </div>
      
                              <div class="col col-vat col-numeric">
                                  <p id="IVA${producto.id}">${(
      producto.precio * valorIVA
    ).toFixed(2)}</p>
                              </div>
                              <div class="col col-total col-numeric">
                                  <p id="total${producto.id}">0</p>
                              </div>`;
    //agrego elemento
    tabla.appendChild(crearDiv);
  }
  // al final de mi for agrego mi tabla de total
  let crearFooter = document.createElement("div");
  crearFooter.innerHTML = `<div class="tf">
      <div class="row layout-inline">
          <div class="col">
              <p>Envio: ${valorEnvio}</p>
          </div>
          <div class="col"></div>
      </div>
      <div class="row layout-inline">
          <div class="col">
              <p id=TotalGlobal>Total:</p>
          </div>
          <div class="col"></div>
      </div>
      </div>
      `;
  elementoDom.appendChild(crearFooter);
}

//! funcion para calcular total global
export const totalGlobal = () => {
  let totalGlobal = 0;
  let listaTotal = document.getElementsByClassName("col col-total col-numeric");
  for (let i = 0; i < listaTotal.length; i++) {
    totalGlobal += parseFloat(listaTotal[i].children[0].innerText);
    console.log(listaTotal[i].children[0].innerText);
    console.log("total global:" + totalGlobal);
  }
  document.getElementById("TotalGlobal").innerText =
    "Total: " + totalGlobal.toFixed(2);

  sessionStorage.setItem("total", totalGlobal.toFixed(2));
};
