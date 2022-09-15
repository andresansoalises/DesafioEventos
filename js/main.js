function mostrarProductos() {
  fetch("../js/data.json")
    .then((res) => res.json())
    .then((json) => {
      let html = "";
      json.forEach((productos) => {
        html += `
          <div class="card" style="width: 18rem;">
        <img src="${productos.img}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${productos.nombre}</h5>
         <p class="card-text">Marca: ${productos.marca}</p>
         <p class="card-text"> Categoria: ${productos.categoria}</p>
         <p class="card-text"> Precio: ${productos.precio}</p>
         <a href="#" class="btn btn-primary" onclick="agregar(${productos.id});">Agregar</a>
       </div>
      </div> `;
      });
      document.getElementById("productos").innerHTML = html;
    });
}

let carrito = [];

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
  fetch("../js/data.json")
    .then((res) => res.json())
    .then((json) => {
      const encontrarProducto = json.find((item) => item.id == id);
      carrito.push(encontrarProducto);
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carro",
        showConfirmButton: false,
        timer: 1500,
      });
      mostrarCarro();
    });
}

function eliminar(id) {
  Swal.fire({
    title: "¿Está seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Eliminado!");
      carrito.splice(id, 1);
      mostrarCarro();
    }
  });
}

mostrarProductos();
