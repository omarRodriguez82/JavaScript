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
mostrarTotal();