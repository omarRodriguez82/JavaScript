/* DEASAFIO OBLIGATORIO 1

let montoTotal = 0;
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

/* ___________________________________________________________________________________________________________________ */
/*DESAFIO COMPLEMENTARIO 2*/
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
  console.log(productos);
}; */
  

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

const productos = [];
const carrito = [];

function Producto (id, nombre, nico, tamano, precio, stock) {
  this.id = id;
  this.nombre = nombre;
  this.nico = nico;
  this.tamano = tamano;
  this.precio = precio;
  this.stock = stock;
  };

const producto1 = new Producto(1, "Cherry Pop", 3, 120, 3900, 100);
productos.push(producto1);
const producto2 = new Producto(2, "Crème à Menthe", 6, 60, 2390, 100);
productos.push(producto2);
const producto3 = new Producto(3, "Frozen Fruit", 0, 30, 1490, 100);
productos.push(producto3);
const producto4 = new Producto(4, "Frozen Grape", 3, 120, 3900, 100);
productos.push(producto4);
const producto5 = new Producto(5, "Nicholai", 6, 60, 2390, 100);
productos.push(producto5);
const producto6 = new Producto(6, "Kuroi Washi", 0, 30, 1490, 100);
productos.push(producto6);
const producto7 = new Producto(7, "Mr Hel", 6, 120, 3900, 100);
productos.push(producto7);
const producto8 = new Producto(8, "Yawaraki", 0, 60, 2390, 100);
productos.push(producto8);


let mensaje="";
productos.forEach(item => {
  mensaje += `${item.id} - ${item.nombre}, Nicotina: ${item.nico}, Tamaño: ${item.tamano} Precio: $${item.precio} \n `;
});
alert(` Bienvenidos a Shibumi! \n Nuestros productos son: \n \n ${mensaje}`);


let encontrar = prompt("Ingrese el nombre de un producto que desea buscar");
let encontrado = productos.find(producto => producto.nombre === encontrar);
if(encontrado !== undefined) {
  alert(`Si! El producto ${encontrar} se encuentra disponible en nuestra tienda`);
}else{
  alert(`Lamentablemente, el producto ${encontrar} no se encuentra disponible en nuestra tienda`);
};

function comprar(){
  
  let compra = Number(prompt(" Agregue productos al Carrito, o bien salga presionando el número 0: \n 1- Cherry Pop \n 2- Creme a Menthe \n 3- Frozen Fruit \n 4- Frozen Grape \n 5- Nicholai \n 6- Kuroi Washi \n 7- Mr Hel \n 8- Yawaraki"));

  while (compra !== 0) {
    let resultado;

    switch (compra) {

      case 1:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      case 2:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      case 3:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      case 4:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      case 5:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      case 6:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      case 7:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;
        
      case 8:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);
        break;

      default:
        alert("Ingrese un N° de Producto válido");
    }
    compra = Number(prompt(" Agregue productos al Carrito, o bien salga presionando el número 0: \n 1- Cherry Pop \n 2- Creme a Menthe \n 3- Frozen Fruit \n 4- Frozen Grape \n 5- Nicholai \n 6- Kuroi Washi \n 7- Mr Hel \n 8- Yawaraki"));
  }
};


function verCarrito(){

  carrito.forEach((producto) => {alert(`Usted ha cargado ${producto.nombre} por un monto de $${producto.precio}.`)});

  let confirmar = Number(prompt("Desea confirmar la compra? \n 1- Si \n 2- No"));

  switch (confirmar) {

    case 1:
      let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
      alert(`Muchas gracias por comprar en Shibumi! \nEl monto total de su compra es de $${total}`);
      break;

    case 2:
      carrito.splice(0, carrito.length);
      alert("Acaba de vaciar su carrito!");
      console.log(carrito);
      break;
  }
};


comprar();
verCarrito();


/* _______________PRACTICAS BOOKLET______________________ */

/*function saludar(nombre, edad, altura){
  let mensaje = `Hola ${nombre}, usted tiene ${edad} años de edad y mide ${altura} mts.`;
  alert (mensaje);
}

nombre = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");
altura = prompt("Ingrese su altura en metros");

saludar(nombre, edad, altura); */




/* let nombre = "Homero";
let apellido = "Simpson";
let edad = 50;

console.log(` Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}`); */

/* 
let precio = Number(prompt("Ingrese el precio"));
descuento20 = precio * 20 / 100;
descuento50 = precio * 50 / 100;
precioFinal20 = precio - descuento20;
precioFinal50 = precio - descuento50;
alert(`El precio final con 20% de descuento es de $${precioFinal20}`);
alert(`El precio final con 50% de descuento es de $${precioFinal50}`); */

/* _______________________________________________

let nombre = prompt("Ingrese un nombre");

if(nombre === "Gus"){
  alert("Fui yo");
}else{
  alert("Yo no fui")
} */


/* let tecla = prompt("Presione un tecla");

while (tecla != ""){

if (tecla === "y" || tecla === "Y"){
  alert("Correcto")
}else{
  alert("Incorrecto")
};

tecla = prompt("Presione un tecla");

} */



/* let numero = prompt("Ingrese un numero entre 1 y 5");

if (numero == 1){
  alert("Elegiste a Homero")
}else if (numero == 2){
  alert("Elegiste a Marge")
}else if (numero == 3){
  alert("Elegiste a Bart")
}else if (numero == 4){
  alert("Elegiste a Lisa")
}else if (numero == 5){
  alert("Elegiste a Maggie")
}else{
  alert("No elegiste un número entre 1 y 5")
}; */




/* let numero = prompt("Ingresa un número y te diremos si es un precio bajo, medio o alto");

if (numero <= 1000){
  alert("El presupuesto es bajo")
}else if(numero >= 1001 && numero <= 3000){
  alert("El presupuesto es medio")
}else if(numero >= 3001){
  alert("EL presupuesto es alto")
} */



/*Actividad 28*/

/* let producto1 = prompt("Ingrese el Producto 1");
let producto2 = prompt("Ingrese el Producto 2");
let producto3 = prompt("Ingrese el Producto 3");
let producto4 = prompt("Ingrese el Producto 4");

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != ""){
  alert(`Usted ha cargado ${producto1}, ${producto2}, ${producto3}, y ${producto4}`)
} else if(producto1 == "" || producto2 == "" || producto3 == "" || producto4 == ""){
  alert("Recuerde cargar todos los productos")
}; */



/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "zapato", precio: 1000 },
];
 */
/* productos.forEach(item => {
console.log(item.id, item.nombre, item.precio);
}); */
/* let nombre = prompt("Ingrese el nombre del producto");

let encontrado = productos.find(ropa => ropa.nombre === nombre);
let mostrar = `
   nombre: ${encontrado.nombre}
   $${encontrado.precio}
 `; */

/*  const productos = [
  { id: 1, nombre: "camisa", precio: 700 },
  { id: 2, nombre: "pantalon", precio: 1500 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 2000 },
];

let filtro = prompt("Ingrese un producto a filtrar");

let resultado = productos.filter( producto => productos.includes("camisa")); */


/* const filtrado = productos.filter(producto => producto.precio > 800); */