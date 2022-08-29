/* -----------CREO LAS CONSTANTES PRODUCTOS Y CARRO--------*/

const productos = [
  {
    id: 0,
    nombre: "Serum intense",
    marca: "Avene",
    categoria: "Hidratación",
    precio: "$6.893",
    img: "https://cdn.idealo.com/folder/Product/6090/1/6090105/s11_produktbild_gross_2/avene-serum-hidratante-hydrance-intense-30-ml.jpg",
  },
  {
    id: 1,
    nombre: "Tolerance",
    marca: "Avene",
    categoria: "Hidratación",
    precio: "$4.875",
    img: "https://farmaciajimenez.com/storage/products/avene-tolerance-extreme-crema-50-ml/avene-tolerance-extreme-crema-rica-50-ml-1440.jpg",
  },
  {
    id: 2,
    nombre: "Sensibio H2O",
    marca: "Bioderma",
    categoria: "Limpieza",
    precio: "$4.488",
    img: "https://farmaciajimenez.com/storage/products/bioderma-sensibio-h2o-pump-solucion-micelar-piel-sensible-dosificador-500-ml/bioderma-sensibio-h2o-pump-solucion-micellar-500-ml-1440.jpg",
  },
  {
    id: 3,
    nombre: "Sensibio Ar",
    marca: "Bioderma",
    categoria: "Atopica",
    precio: "6.741",
    img: "https://cdn.shopify.com/s/files/1/0615/5527/8059/products/1-2022-02-25T230537.224_1024x.png?v=1645851992",
  },
  {
    id: 4,
    nombre: "Mineral 89",
    marca: "Vichy",
    categoria: "Hidratación",
    precio: "$5.236",
    img: "https://www.vichyca.com/site/pages/showImageResized.aspx?EncMediaId=Y0o2MVlzQUxKZkFQdWhHTUJ4ZkhjQT09&ImageFormatAppCode=IMAGEFORMAT_ORIGINAL&v=20210804125734",
  },
  {
    id: 5,
    nombre: "Liftactiv",
    marca: "Vichy",
    categoria: "Anti Age",
    precio: "$6.408",
    img: "https://selmadigital.com/wp-content/uploads/2022/05/vichy-liftactiv-specialist-serum-b3-antimanchas-30ml.jpg",
  },
];

let carrito = [];

/* -----------CREO LAS FUNCIONES--------*/
function mostrarProductos() {
  let html = "";
  for (let i = 0; i < productos.length; i++) {
    html =
      html +
      `<div class="card" style="width: 18rem;">
        <img src="${productos[i].img}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${productos[i].nombre}</h5>
         <p class="card-text">Marca: ${productos[i].marca}</p>
         <p class="card-text"> Categoria: ${productos[i].categoria}</p>
         <p class="card-text"> Precio: ${productos[i].precio}</p>
         <a href="#" class="btn btn-primary" onclick="agregar(${productos[i].id});">Agregar</a>
       </div>
      </div> `;
  }
  document.getElementById("productos").innerHTML = html;
}

function mostrarCarro() {
  let html = "";
  for (let i = 0; i < carrito.length; i++) {
    html =
      html +
      `<div class="card" style="width: 18rem;">
        <img src="${carrito[i].img}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${carrito[i].nombre}</h5>
         <p class="card-text">Marca: ${carrito[i].marca}</p>
         <p class="card-text"> Categoria: ${carrito[i].categoria}</p>
         <p class="card-text"> Precio: ${carrito[i].precio}</p>
         <a href="#" class="btn btn-danger" onclick="eliminar(${i});">Eliminar</a>
    </div>`;
  }
  document.getElementById("carrito").innerHTML = html;
}

function agregar(id) {
  const encontrarProducto = productos.find((item) => item.id == id);
  carrito.push(encontrarProducto);
  mostrarCarro();
}

function eliminar(id) {
  carrito.splice(id, 1);
  mostrarCarro();
}

mostrarProductos();
