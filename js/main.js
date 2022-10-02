function mostrarProductos() {
  fetch("../js/data.json")
    .then((res) => res.json())
    .then((json) => {
      let html = "";
      json.forEach((productos) => {
        html += `
          <div class="card text-center m-1" style="width: 18rem;">
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
      `<div class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div>
              <img
                src="${carrito[i].img}"
                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
            </div>
            <div class="ms-3">
              <h5>${carrito[i].nombre}</h5>
              <p class="small mb-0">Marca: ${carrito[i].marca},  Categoria: ${carrito[i].categoria}</p>
            </div>
          </div>
          <div class="d-flex flex-row align-items-center">
            <div style="width: 50px;">
              <h5 class="fw-normal mb-0">2</h5>
            </div>
            <div style="width: 80px;">
              <h5 class="mb-0"> Precio: ${carrito[i].precio}</h5>
            </div>
            <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt" onclick="eliminar(${i});""></i></a>
          </div>
        </div>
      </div>
    </div>`;
  }
  document.getElementById("carrito").innerHTML = html;
  document.getElementById("valor").innerHTML = carrito.length;
  document.getElementById("subtotal").innerHTML = carrito.reduce(
    (acc, i) => acc + i.precio,
    0
  );
  document.getElementById("total").innerHTML = precio + 400;
}

/*-------sweet alert---------*/
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
/*----------------*/
mostrarProductos();
