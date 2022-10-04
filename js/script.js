/*-----------------------------------------------DESAFIO OBLIGATORIO 1-------------------------------------------------*/
/* -----------------------------------------------Simulador interactivo -----------------------------------------------*/

/* let montoTotal = 0;
let precioProducto = 0;
let sumarProducto = 0;

alert("Bienvenido a Shibumi! Vamos a cargar precios de artículos y al final devolveremos el monto total y cantidad de artículos cargados.");

function ingresarPrecio() {
  precioProducto = Number(prompt(`Ingrese el precio del Producto N° ${sumarProducto + 1}`));

  while (precioProducto > 0){
    montoTotal = calcularTotal(precioProducto);
    sumarProducto++;
    precioProducto = Number(prompt(`Ingrese el precio del Producto N° ${sumarProducto + 1}`));
  }

  if (precioProducto <= 0 || isNaN(precioProducto)) {
    alert("Ha introducido un precio o caracter inválido, por lo que detendremos la operación.");
  }
}

function calcularTotal(precioProducto) {
  return montoTotal + precioProducto;
}

function mostrarTotal() {
  alert(`Ha cargado una cantidad de ${sumarProducto} productos.`);
  alert(`El monto total acumulado es de $${montoTotal}`);
}

ingresarPrecio();
mostrarTotal(); */

/* __________________________________________________________________________________________________________________ */
/*---------------------------------------------DESAFIO COMPLEMENTARIO 2-----------------------------------------------*/
/* ------------------------------------------------Incorporar Arrays -------------------------------------------------*/

/*Carga de valores en un objeto Producto con Funcion Constructora*/

/* function Producto(prod){
  this.nombre = prod.nombre;
  this.nico = prod.nico;
  this.tamano = prod.tamano;
  this.precio = prod.precio;
  this.cantidad = prod.cantidad;
};

const producto1 = new Producto ({
  nombre: prompt("Ingrese el nombre del producto"),
  nico: prompt("Ingrese la cantidad de Nicotina: 0, 3 o 6"),
  tamano: prompt("Ingrese el tamano: 30, 60 o 120"),
  cantidad: prompt("Ingrese la cantidad de unidades"),
});

alert(`Usted ha cargado ${producto1.cantidad} unidades de ${producto1.nombre}, con ${producto1.nico}mg de Nicotina en envase/s de ${producto1.tamano}ml.`); */

/*Incorporar Arrays*/

/* function Producto(id, nombre, nico, tamano, precio, cantidad){
  this.id = id;
  this.nombre = nombre;
  this.nico = nico;
  this.tamano = tamano;
  this.precio = precio;
  this.cantidad = cantidad;
};

const productos = [];

  productos.push(new Producto(productos.length +1, "Cherry Pop", 3, 120, 1490, 3));
  productos.push(new Producto(productos.length +1, "Crème à Menthe", 6, 30, 1490, 1));
  productos.push(new Producto(productos.length +1, "Frozen Fruit", 0, 60, 1490, 2));

for (Producto of productos){
  console.log(Producto);
}; */

/* for (let index = 0; index < productos.length; index++) {
  console.log (productos[index].nombre);  
} */
  

/*Carga de valores en un objeto Producto con Class*/

/* class Producto{
  constructor(nombre, nico, tamano, cantidad){
    this.nombre = nombre;
    this.nico = nico;
    this.tamano = tamano;
    this.cantidad = cantidad;
  }
};

let nombre = prompt("Ingrese el nombre del producto");
let nico = prompt("Ingrese la cantidad de Nicotina: 0, 3 o 6");
let tamano = prompt("Ingrese el tamano: 30, 60 o 120");
let cantidad = prompt("Ingrese la cantidad de unidades");

const producto1 = new Producto (nombre, nico, tamano, cantidad);

alert(`Usted ha cargado ${cantidad} unidades de ${nombre}, con ${nico}mg 
de Nicotina en envase/s de ${tamano}ml.`); */

/* ___________________________________________________________________________________________________________________ */
/*------------------------------------------------PRIMERA PRE-ENTREGA--------------------------------------------------*/

/* const productos = [];
const carrito = [];
const cantidades = [];

function Producto (id, nombre, tamano, precio, stock) {
  this.id = id;
  this.nombre = nombre;
  this.tamano = tamano;
  this.precio = precio;
  this.stock = stock;
  };

const producto1 = new Producto(1, "Cherry Pop", 120, 1000);
productos.push(producto1);
const producto2 = new Producto(2, "Crème à Menthe", 60, 1000);
productos.push(producto2);
const producto3 = new Producto(3, "Frozen Fruit", 30, 1000);
productos.push(producto3);
const producto4 = new Producto(4, "Frozen Grape", 120, 1000);
productos.push(producto4);
const producto5 = new Producto(5, "Nicholai", 60, 1000);
productos.push(producto5);
const producto6 = new Producto(6, "Kuroi Washi", 30, 1000);
productos.push(producto6);
const producto7 = new Producto(7, "Mr Hel", 120, 1000);
productos.push(producto7);
const producto8 = new Producto(8, "Yawaraki", 60, 1000);
productos.push(producto8); */


/* et mensaje="";
productos.forEach(item => {
  mensaje += `${item.id} - ${item.nombre}: Tamaño: ${item.tamano}ml, Precio: $${item.precio} \n `;
});
alert(` Bienvenidos a Shibumi! \n Nuestros productos son: \n \n ${mensaje}`); */


/* let encontrar = prompt("Ingrese el nombre de un producto que desea buscar");
let encontrado = productos.find(producto => producto.nombre === encontrar);
if(encontrado !== undefined) {
  alert(`Si! El producto ${encontrar} se encuentra disponible en nuestra tienda`);
}else{
  alert(`Lamentablemente, el producto ${encontrar} no se encuentra disponible en nuestra tienda`);
}; */


/* function comprar(){
  
  let compra = Number(prompt(" Agregue productos al Carrito, o bien salga presionando el número 0: \n 1- Cherry Pop \n 2- Creme a Menthe \n 3- Frozen Fruit \n 4- Frozen Grape \n 5- Nicholai \n 6- Kuroi Washi \n 7- Mr Hel \n 8- Yawaraki"));

  while (compra !== 0) {
    let resultado;
    let cantidad = 0;

    switch (compra) {

      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:        
      case 8:
        resultado = productos.find((producto) => producto.id === compra);        
        cantidad = Number(prompt("ingrese cantidad"));
        while (cantidad <= 0 || isNaN(cantidad)) {
          alert("Ha introducido un precio o caracter inválido, por lo que detendremos la operación.");
          cantidad = Number(prompt("ingrese cantidad"));
          }
        carrito.push(resultado);
        cantidades.push(cantidad);
        break;

      default:
        alert("Ingrese un N° de Producto válido");
    }
    compra = Number(prompt(" Agregue productos al Carrito, o bien salga presionando el número 0: \n 1- Cherry Pop \n 2- Creme a Menthe \n 3- Frozen Fruit \n 4- Frozen Grape \n 5- Nicholai \n 6- Kuroi Washi \n 7- Mr Hel \n 8- Yawaraki"));
  }
};


function verCarrito(){

  for (let index = 0; index < carrito.length; index++) {
    alert(`Usted ha cargado ${cantidades[index]} unidades de ${carrito[index].nombre} de ${carrito[index].tamano}ml, por un monto de $${(carrito[index].precio*cantidades[index])}.`)}    


  let confirmar = Number(prompt("Desea confirmar la compra? \n 1- Si \n 2- No"));

  switch (confirmar) {

    case 1:
      let total = 0;
      for (let index = 0; index < cantidades.length; index++) {
        total = total + (carrito[index].precio*cantidades[index]);        
      }
      alert(`Muchas gracias por comprar en Shibumi! \nEl monto total de su compra es de $${total}`);
      break;

    case 2:
      carrito.splice(0, carrito.length);
      cantidades.splice(0, cantidades.length);
      alert("Acaba de vaciar su carrito!");
      console.log(carrito);
      break;
  };
};


comprar();
verCarrito(); */

/* __________________________________________________________________________________________________________________ */
/*---------------------------------------------DESAFIO COMPLEMENTARIO 3-----------------------------------------------*/
/*--------------------------------------------- DOM Interactuar con HTML ---------------------------------------------*/

  /* function Producto (id, nombre, tamano, precio) {
  this.id = id;
  this.nombre = nombre;
  this.tamano = tamano;
  this.precio = precio;
  };

let productos = [
  {id: 1, nombre: "Cherry Pop", tamano: 120, precio: 1490},
  {id: 2, nombre: "Crème à Menthe", tamano: 60, precio: 1490},
  {id: 3, nombre: "Frozen Fruit", tamano: 30, precio: 1490},
  {id: 4, nombre: "Frozen Grape", tamano: 120, precio: 1490},
  {id: 5, nombre: "Nicholai", tamano: 60, precio: 1490},
  {id: 6, nombre: "Kuroi Washi", tamano: 30, precio: 1490},
  {id: 7, nombre: "Mr Hel", tamano: 120, precio: 1490},
  {id: 8, nombre: "Yawaraki", tamano: 60, precio: 1490},
];

const labelPrecio = document.getElementById("labelPrecio");

let nuevoPrecio = prompt("Ingrese el nuevo precio");

productos.forEach(producto => {
  labelPrecio.innerText = `${nuevoPrecio}`
  labelPrecio.append(span);
}); */


/* -----------------------------------------segundo intento -----------------------------------------*/

/* function Producto (id, nombre, tamano, precio) {
  this.id = id;
  this.nombre = nombre;
  this.tamano = tamano;
  this.precio = precio;
  };

  const productos = [];
  const producto1 = new Producto (1, "Cherry Pop", 120, 1);
  const producto2 = new Producto (2, "Crème à Menthe", 60, 2);
  const producto3 = new Producto (3, "Frozen Fruit", 30, 3);
  const producto4 = new Producto (4, "Frozen Grape", 120, 4);
  const producto5 = new Producto (5, "Nicholai", 60, 5);
  const producto6 = new Producto (6, "Kuroi Washi", 30, 6);
  const producto7 = new Producto (7, "Mr Hel", 120, 7);
  const producto8 = new Producto (8, "Yawaraki", 60, 8);
  productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8);

  const labelPrecio = document.querySelectorAll("#labelPrecio");
  
    for (const item of productos){
    let nuevoPrecio = prompt(`Ingrese el nuevo precio de ${item.nombre}`);
    item.precio = nuevoPrecio;

    const span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = `${productos.precio}`;

      labelPrecio[(item.id)-1].innerHTM= `${nuevoPrecio}`;
      labelPrecio.append();      
  }; */

/*-----------------------------------------------DESAFIO OBLIGATORIO 2-------------------------------------------------*/
/*--------------------------------------------------Incorporar eventos--------------------------------------------------*/
/* function Producto (id, nombre, imagen){
  this.id = id;
  this.nombre = nombre;
  this.imagen = imagen;
  };

let productos = [
  {id: 1, nombre: "Cherry Pop", imagen: "https://i.ibb.co/WWc2FdB/Cherry-Pop.webp"},
  {id: 2, nombre: "Crème à Menthe", imagen: "https://i.ibb.co/XXGPBgQ/Creme-Menthe.webp"},
  {id: 3, nombre: "Frozen Fruit", imagen: "https://i.ibb.co/ch96zvK/Frozen-Fruit.webp"},
  {id: 4, nombre: "Frozen Grape", imagen: "https://i.ibb.co/R9QfWfD/Frozen-Grape.webp"},
  {id: 5, nombre: "Nicholai", imagen: "https://i.ibb.co/yQNNZVY/nicholai.webp"},
  {id: 6, nombre: "Kuroi Washi", imagen: "https://i.ibb.co/N9HcsMY/kuroi-Washi.webp"},
  {id: 7, nombre: "Mr Hel", imagen: "https://i.ibb.co/9vqVmjt/mrHel.webp"},
  {id: 8, nombre: "Yawaraki", imagen: "https://i.ibb.co/vmSBVZk/yawaraki.webp"},
];

//let tamanos = [30, 60, 120];
//let precios = [1490, 2390, 3900];

let div = document.getElementById("div");

productos.forEach(producto => {
  let renderizar = document.createElement("div")
  renderizar.innerHTML = `
          <div class="col d-flex justify-content-center mb-4">
            <div class="card shadow mb-1 cardColor rounded" style="width: 20rem">
              <h5 class="card-title pt-2 text-center text-primary">${producto.nombre}</h5>
              <img src="${producto.imagen}" alt="Cherry-Pop" class="card-img-top"/>            
              
              <div class="card-body">
                <p class="card-text text-white-50 description">Increíble líquido de Cerezas combinadas y un toque de frescura, del Mixer internacional Nachef</p>
                
                <div class="mb-2">                  
                  <fieldset class="single-option-radio fieldset" id="ProductSelect-option-0">
                    <p class="text-white mb-2">Tamaños:</p>
                    <input type="radio" value="30ml" id="30" name="cantidad" class="single-option-selector__radio">
                    <label for="30" class="text-primary">30 ml</label>
                    
                    <input type="radio" value="60ml" id="60" name="cantidad" class="single-option-selector__radio">
                    <label for="60" class="text-primary">60 ml</label>
                    
                    <input type="radio" value="120ml" id="120" name="cantidad" class="single-option-selector__radio">
                    <label for="120" class="text-primary">120 ml</label>             
                  </fieldset>
                </div>
                <h5 class="text-primary mb-3">Precio: <span>$ </span><span id="labelPrecio" class="precio">${producto.precio}</span></h5>
                <div class="d-grid gap-2">
                  <button id="añadir" class="btn btn-primary button">
                    Añadir a Carrito
                  </button>
                </div>
              </div>
              
            </div>            
          </div>  `

  div.append(renderizar)

  const ml30 = document.getElementById("30")
  const ml60 = document.getElementById("60")
  const ml120 = document.getElementById("120")
  const añadir = document.getElementById("añadir")
  
  const elegirMl = () => {
    if(ml30.checked){
      console.log(ml30.value);    
    }else if(ml60.checked){
      console.log(ml60.value);
    }else if(ml120.checked){
      console.log(ml120.value);
  }
}

añadir.addEventListener("click", elegirMl)

}) */

/* ___________________________________________________________________________________________________________________ */
/*------------------------------------------------SEGUNDA PRE-ENTREGA--------------------------------------------------*/

//traigo nodos por ID
const contenedorCarrito = document.getElementById('contenedor-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contador');
const precioTotal = document.getElementById('precio-total');

//declaro el array carrito y lo dejo vacío
let carrito = [];

//traigo el localStorage
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

//A futuro agregar tamaños y precios
/*const precios = [
{id: 30, precio: 1490},
{id: 60, precio: 2490},
{id: 120, precio: 3900},
]; */

//Renderizo las cards de la página de productos
productos.forEach(producto => {
  let renderizar = document.createElement('div')
  renderizar.innerHTML = `
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 cardColor rounded" style="width: 20rem">

        <h5 class="card-title pt-2 text-center text-primary">${producto.nombre}</h5>
        <img src="${producto.imagen}" alt="Cherry-Pop" class="card-img-top"/>            
        
        <div class="card-body">
          <p class="card-text text-white-50 description">${producto.descripcion}</p>

          <h5 class="text-primary mb-3">Precio: <span>$ </span><span id="labelPrecio" class="precio">${producto.precio}</span></h5>
          <div class="d-grid gap-2">
            <button id=${producto.id} class="btn btn-primary button">
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
  boton.addEventListener ('click', () => {
    let productoExiste = carrito.find(item => item.id === producto.id)
    if (productoExiste === undefined){
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
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
const actualizarCarrito = () => {
contenedorCarrito.innerHTML='';

carrito.forEach(producto => {
  const carritoActualizado = document.createElement('div');
     carritoActualizado.innerHTML =`
  <div class="card bg-dark mb-3" style="max-width: 400px;">
    <div class="row g-0">
        <div class="col-md-4 align-items-center imagen-carrito">
          <img src="${producto.imagen}" class="img-fluid rounded" alt="Imagen Producto"/>
        </div>
        <div class="col-md-8">
          <div class="card-body card-carrito">
            <h5 class="card-title text-white">${producto.nombre}</h5>
            <p class="card-text"><small class="text-white">Cantidad: ${producto.cantidad}</small></p>
            <h6 class="card-text"><small class="text-white">Precio: $${producto.precio}</small></h6>                      
            <button id="trash" class="eliminarItem rounded" onclick="borrarItem(${producto.id})"><i class="fas fa-trash-alt mr-2 text-white"></i></button>
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

//borro productos elegidos del carrito
const borrarItem = (prodId) => {
  const item = carrito.find(prod=> prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}

//vacia el carrito y lo pone en cero
vaciarCarrito.addEventListener('click', ()=> {
  carrito.length = 0
  actualizarCarrito()
})