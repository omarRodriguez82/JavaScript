import { traerProductos } from "../DB/traerProductos.js";

//Aplico Sweet Alert al Inicio
Swal.fire({
  text: 'Este sitio es para mayores de 18 años.',
  background: '#000',
  imageUrl: 'https://i.ibb.co/8bnWH24/logo.png',
	imageWidth: '300px',
	imageAlt: 'Imagen Logo',
  confirmButtonColor: '#198754',
  confirmButtonText: 'Entendido!',
  allowOutsideClick: false  
});

//traigo nodos por ID
const contenedorCarrito = document.getElementById('contenedor-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contador');
const precioTotal = document.getElementById('precio-total');
const restarBtn = document.getElementById("restar"+id);
const sumarBtn = document.getElementById("sumar"+id);
const eliminarBtn = document.getElementById("eliminar"+id);

//declaro el array carrito y lo dejo vacío
let carrito = [];

//el "if" para traer el localStorage se ejecuta despues de que cargue la pagina
document.addEventListener('DOMContentLoaded', () =>{
  traerProductos();
  if(localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'));
     actualizarCarrito();
 }
})

//declaro la funcion constructora de objetos
function Producto (id, nombre, imagen, descripcion, tamano, precio) {
  this.id = id;
  this.nombre = nombre;
  this.imagen = imagen;
  this.descripcion = descripcion;
  this.tamano = tamano;
  this.precio = precio;
};

//Llamo al array de productos
let productos = await traerProductos()

//Renderizo las cards de la página de productos
//Aplico Desestructuración
productos.forEach(producto => {
  const {nombre, imagen, descripcion, precio, id} = producto
  let renderizar = document.createElement('div')
  renderizar.innerHTML = `
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 cardColor rounded" style="width: 20rem">
        <h5 class="card-title pt-2 text-center text-primary">${nombre}</h5>
        <img src="${imagen}" alt="Cherry-Pop" class="card-img-top"/>            
        
        <div class="card-body">
          <p class="card-text text-white-50 description">${descripcion}</p>
          <h5 class="text-primary mb-3">Precio: <span>$ </span><span id="labelPrecio" class="precio">${precio}</span></h5>
          <div class="d-grid gap-2">
            <button id=${id} class="btn btn-primary button">
              Añadir a Carrito
            </button>
          </div>
        </div>
        
      </div>            
    </div>
  `
  //subo el renderizado al sitio
  div.append(renderizar)

  //traigo el nuevo ID de productos rendereizados
  const boton = document.getElementById(id)

  //funcion para agregar productos al carrito (+ si no existe)
  //Aplico Spread y Toastify
  boton.addEventListener ('click', () => {
    Toastify ({
      text: `Se ha agregado ${nombre} al carrito`,
      duration: 2000,
      style:{
        background: '#0d6efd'
      }
    }).showToast()
    let productoExiste = carrito.find(item => item.id === id)
    if (productoExiste === undefined){
      carrito.push({
        ...producto,
        cantidad: 1,
      })    
    }else{
      productoExiste.precio = productoExiste.precio + precio
      productoExiste.cantidad = productoExiste.cantidad + 1
    }
    actualizarCarrito();
  })
})

//funcion para renderizar los productos agregados al carrito dentro del modal de Carrito
//Aplico Desestructuración
const actualizarCarrito = () => {
contenedorCarrito.innerHTML='';

carrito.forEach(producto => {
  const {nombre, imagen, cantidad, precio, id} = producto
  const carritoActualizado = document.createElement('div');
     carritoActualizado.innerHTML =`
  <div class="card bg-dark mb-3" style="max-width: 400px;">
    <div class="row g-0">
        <div class="col-md-4 align-items-center imagen-carrito">
          <img src="${imagen}" class="img-fluid rounded" alt="Imagen Producto"/>
        </div>
        <div class="col-md-8">
          <div class="card-body card-carrito">
            <h5 class="card-title text-white">${nombre}</h5>

            <div class="input-group mt-4 mb-2">

              <button class="btn btn-outline-secondary text-white" type="button" id="restar${id}"> - </button>

              <input type="text" class="form-control" placeholder="${cantidad}" aria-label=" " aria-describedby="button-addon1">

              <button class="btn btn-outline-secondary text-white" type="button" id="sumar${id}"> + </button>

            </div>

            <h6 class="card-text"><small class="text-white">Precio: $${precio}</small></h6>                      
            <button id="eliminar${id}" class="eliminarItem rounded"><i class="fas fa-trash-alt mr-2 text-white"></i></button>
          </div> 
        </div>
    </div>
  </div>
`
//renderizo el modal con los productos añadidos         
contenedorCarrito.appendChild(carritoActualizado)

restarBtn.addEventListener('click', () => botonRestar(id));
sumarBtn.addEventListener('click', () => botonSumar(id));
eliminarBtn.addEventListener('click', () => borrarItem(id));

//se sube el nuevo localStorage
localStorage.setItem('carrito', JSON.stringify(carrito))
})

//suma articulos nuevos al carrito y lo muestro en números al costado del ícono del carrito en el nav-menu
contadorCarrito.innerText = (' '+carrito.length)

//suma los precios de los totales por articulo del carrito
precioTotal.innerText = carrito.reduce((acum, producto) => acum + producto.precio, 0)
}

//Borro productos elegidos del carrito
//Aplico Toastify
const borrarItem = (prodId) => {
  const item = carrito.find(prod=> prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
  localStorage.setItem('carrito', JSON.stringify(carrito))
  Toastify ({
    text: `Se ha eliminado el producto del carrito`,
    duration: 2000,
    style:{
      background: '#dc3545'
    }
  }).showToast()
}

//boton Sumar items en Cantidad - Modal Carrito
const botonSumar = (prodId) => {
  const item = carrito.find(prod=> prod.id === prodId)
  let precio = productos.find(prod=> prod.id === prodId)
  item.cantidad = item.cantidad + 1
  item.precio = item.precio + precio.precio
  actualizarCarrito()
}

//boton Restar items en Cantidad - Modal Carrito
const botonRestar = (prodId) => {
  const item = carrito.find(prod=> prod.id === prodId)
  let precio = productos.find(prod=> prod.id === prodId)
  if (item.cantidad <= 1){
      borrarItem(prodId)
      actualizarCarrito()
  }else{
  item.cantidad = item.cantidad - 1
  item.precio = item.precio - precio.precio
  actualizarCarrito()
}}

//vacia el carrito y lo pone en cero
//Aplico Toastify
vaciarCarrito.addEventListener('click', ()=> {
  carrito.length = 0
  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarCarrito()
  Toastify ({
    text: `Ha vaciado el Carrito!`,
    duration: 2000,
    style:{
      background: '#dc3545'
    }
  }).showToast()
})