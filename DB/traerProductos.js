export const traerProductos = async() => {
  let response = await fetch('../DB/productos.json')
  let data = await response.json()
  return data
}


/* export const traerProductos = async() => {
  try {
      let response = await fetch("../DB/productos.json")
      let data = await response.json()
      renderizar(data)
    } catch (error) {
      console.log(error,'Error al cargar el archivo de datos')
  }
} */