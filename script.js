/* //Ejemplo de IF:

let nombre = prompt("Ingrese su Nombre").toLowerCase();
let apellido = prompt("Ingrese su Apellido").toLowerCase();
// Solo podrá ingresar si es Omar Rodriguez, independientemente si ingresa en mayúsculas o minúsculas
if (nombre === "omar" && apellido === "rodriguez"){
  alert("Bienvenido Omar Rodríguez");
}else{ 
  alert("No podes ingresar")
} */



/* //Ejemplo de While:

//Se ingresa un valor menor a 20 en la variable "count".
let count = prompt("Ingrese un numero menor a 20");
//Mientras "count" contenga un valor y sea menor a 20, empieza a sumar de a uno. Sino se cierra.
while (count != "" && count < 20) {
    count++;
//Hasta quebrar el bucle al llegar a 19, cargar 19 o sea mayor a 19 
    if (count >= 19) {
        break;
    }
    alert(count);
} */