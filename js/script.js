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

function Producto (id, nombre, imagen,/* tamano, precio*/) {
  this.id = id;
  this.nombre = nombre;
  this.imagen = imagen;
  /*this.tamano = tamano;
  this.precio = precio;*/
  };


let productos = [
  {id: 1, nombre: "Cherry Pop", imagen: "https://i.ibb.co/WWc2FdB/Cherry-Pop.webp", /* tamano: 120, precio: 1499, */},
  {id: 2, nombre: "Crème à Menthe", imagen: "https://i.ibb.co/XXGPBgQ/Creme-Menthe.webp", /* tamano: 60, precio: 1490,  */},
  {id: 3, nombre: "Frozen Fruit", imagen: "https://i.ibb.co/ch96zvK/Frozen-Fruit.webp", /* tamano: 30, precio: 1490,  */},
  {id: 4, nombre: "Frozen Grape", imagen: "https://i.ibb.co/R9QfWfD/Frozen-Grape.webp", /* tamano: 120, precio: 1490, */},
  {id: 5, nombre: "Nicholai", imagen: "https://i.ibb.co/yQNNZVY/nicholai.webp", /* tamano: 60, precio: 1490,  */},
  {id: 6, nombre: "Kuroi Washi", imagen: "https://i.ibb.co/N9HcsMY/kuroi-Washi.webp", /* tamano: 30, precio: 1490,  */},
  {id: 7, nombre: "Mr Hel", imagen: "https://i.ibb.co/9vqVmjt/mrHel.webp", /* tamano: 120, precio: 1490, */},
  {id: 8, nombre: "Yawaraki", imagen: "https://i.ibb.co/vmSBVZk/yawaraki.webp", /* tamano: 60, precio: 1490,  */},
];


let tamanos = [30, 60, 120];
let precios = [1490, 2390, 3900];


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

})