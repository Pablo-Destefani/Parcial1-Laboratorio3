
console.log(crearArrayProductos());
agregarDatostabla();

function agregarDatostabla(){

  let productos =crearArrayProductos();
  productos.forEach(function(producto){
    agregarProductoEnTabla(producto);
  });

}

function agregarProductoEnTabla(producto){
  var productoTr = construirTr(producto);
  var tabla = document.querySelector("#tablaProducto");
  tabla.appendChild(productoTr);
}

function construirTr(producto){
  //Crear los tds (campos) y un tr (fila)
  var productoTr = document.createElement("tr");
  productoTr.classList.add("producto");

  //Asignar los td al tr,
  productoTr.appendChild(construirTd(producto.marca, "info-marca"));
  productoTr.appendChild(construirTd(producto.tipo, "info-tipo"));
  productoTr.appendChild(construirTd(producto.cilindro, "info-cilindro"));
  productoTr.appendChild(construirTd(producto.potencia, "info-potencia"));
  productoTr.appendChild(construirTd("$ "+producto.precio, "info-precio"));

  return productoTr;
}

function construirTd(dato,clase){

  let td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;

  return td;
}


