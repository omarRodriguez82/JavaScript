/*_____________________________________________________________________________________________________________________*/
/*------------------------------------DESAFIO COMPLEMENTARIO - OPERADORES AVANZADOS------------------------------------*/
/*-------------------------------------------DESAFIO OBLIGATORIO - LIBRERIAS-------------------------------------------*/

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

//declaro el array carrito y lo dejo vacío
let carrito = [];

//el "if" para traer el localStorage se ejecuta despues de que cargue la pagina
document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
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

//declaro el array de productos y lo lleno
const productos = [
  {id: 1, nombre: "Cherry Pop", imagen: "https://i.ibb.co/WWc2FdB/Cherry-Pop.webp", descripcion:"Increíble líquido de Cerezas combinadas y un toque de frescura, del Mixer internacional Nachef", tamano: 30, precio: 1490},
  {id: 2, nombre: "Crème à Menthe", imagen: "https://i.ibb.co/XXGPBgQ/Creme-Menthe.webp", descripcion:"Mix de Mentas dulces cremosas y frescas. Receta mágica del Mixer Internacional Nachef", tamano: 30, precio: 1490},
  {id: 3, nombre: "Frozen Fruit", imagen: "https://i.ibb.co/ch96zvK/Frozen-Fruit.webp", descripcion:"Mix de frutas tropicales dulces con un toque de frescura. Un e-liquid inolvidable", tamano: 30, precio: 1490},
  {id: 4, nombre: "Frozen Grape", imagen: "https://i.ibb.co/R9QfWfD/Frozen-Grape.webp", descripcion:"Mix de uvas blancas y negras dulces con un toque de frescura. Una combinacion justa y balanceada del Mixer Internacional Nachef", tamano: 30, precio: 1490},
  {id: 5, nombre: "Nicholai", imagen: "https://i.ibb.co/yQNNZVY/nicholai.webp", descripcion:"Ya dejaste los cigarrillos, pero todavía extrañas ese dulce sabor a tabaco?  Lo podes resolver vapeando este Tabaquil. Intenso y equilibrado", tamano: 30, precio: 1490},
  {id: 6, nombre: "Kuroi Washi", imagen: "https://i.ibb.co/N9HcsMY/kuroi-Washi.webp", descripcion:"Se conjugaron sabores intensos para llegar a un blend único, irrepetible. Se caracteriza por ser aromático y de sabor acaramelado", tamano: 30, precio: 1490},
  {id: 7, nombre: "Mr Hel", imagen: "https://i.ibb.co/9vqVmjt/mrHel.webp", descripcion:"Una maravilla de Max Savage, un mix de sabores complejos de tabaco, frutos secos y crema de vainillas que logra un aroma único", tamano: 30, precio: 1490},
  {id: 8, nombre: "Yawaraki", imagen: "https://i.ibb.co/vmSBVZk/yawaraki.webp", descripcion:"Tabaco Suave, con avellanas, nueces, almendras y maní tostados, notas de rhum y Kahlua. Mucho cuerpo, con una sensación cremosa", tamano: 30, precio: 1490},
];

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
  const boton = document.getElementById(producto.id)

  //funcion para agregar productos al carrito (+ si no existe)
  //Aplico Spread y Toastify
  boton.addEventListener ('click', () => {
    Toastify ({
      text: `Se ha agregado ${producto.nombre} al carrito`,
      duration: 2000,
      style:{
        background: '#0d6efd'
      }
    }).showToast()
    let productoExiste = carrito.find(item => item.id === producto.id)
    if (productoExiste === undefined){
      carrito.push({
        ...producto,
        cantidad: 1,
      })    
    }else{
      productoExiste.precio = productoExiste.precio + producto.precio
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
            <p class="card-text"><small class="text-white">Cantidad: ${cantidad}</small></p>
            <h6 class="card-text"><small class="text-white">Precio: $${precio}</small></h6>                      
            <button id="trash" class="eliminarItem rounded" onclick="borrarItem(${id})"><i class="fas fa-trash-alt mr-2 text-white"></i></button>
          </div>
        </div>
    </div>
  </div>
` 
//renderizo el modal con los productos añadidos         
contenedorCarrito.appendChild(carritoActualizado)

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
  Toastify ({
    text: `Se ha eliminado el producto del carrito`,
    duration: 2000,
    style:{
      background: '#dc3545'
    }
  }).showToast()
}

//vacia el carrito y lo pone en cero
//Aplico Sweet Alert
vaciarCarrito.addEventListener('click', ()=> {
  carrito.length = 0
  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarCarrito()
  Swal.fire({
    icon: 'warning',
    html: '<h3 class="text_color">Ha vaciado el Carrito!</h3>',
    background: '#dc3545',
    timer: '1500',
    showConfirmButton: false,
  });
})