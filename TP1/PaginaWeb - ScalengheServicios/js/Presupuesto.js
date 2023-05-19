let objetosPresupuesto =[];
crearProductos();
ocultarPresupuesto();



function agregarProducto(){

    const myModal = document.getElementById("myModal");
    myModal.style.display = "block";

}

function cerrarModal(){

    const myModal = document.getElementById("myModal");
    myModal.style.display = "none";
}

function crearProductos(){

    let productos =crearArrayProductos();
    productos.forEach(function(producto){
      crearOpcion(producto);
    });
}

function crearOpcion(producto){

    let comboBox = document.querySelector("#CBProductos");
    let opcion = document.createElement("option");
    opcion.value = producto.id;
    opcion.text = stringProducto(producto);
    comboBox.appendChild(opcion);
}


function stringProducto(producto){
    let str = "Motor: " + producto.marca +  ". Tipo:" + producto.tipo + ". Cilindros: " + producto.cilindro + "-Potencia: " + producto.potencia;                                     
    return str;
}

function agregarProductoAPresupuesto(){


    let comboBox = document.querySelector("#CBProductos");
    let cantidad = document.querySelector("#cantidadPresupuesto");
    if (cantidad.value>0){
        let produc ={
            producto: crearArrayProductos()[comboBox.value],
            cantidad: cantidad.value
        };
        objetosPresupuesto.push(produc);
        comboBox.selectedIndex = 0;
        cantidad.value = null;
        cerrarModal();
    }
    imprimirPresupuesto();
    ocultarPresupuesto();
}

function limpiarPresupuesto(){
    let tabla = document.querySelector("#tablaProducto");
    while (tabla.rows.length > 1) {
        tabla.deleteRow(tabla.rows.length-1);
      }
    let resultado = document.querySelector("#resultadoPresupuesto");
    try {
        resultado.remove();
    }catch (e) {
    };

    
}
function reiniciarPresupuesto(){
    limpiarPresupuesto();
    objetosPresupuesto=[];
    ocultarPresupuesto();
}


function imprimirPresupuesto(){

    limpiarPresupuesto();

    objetosPresupuesto.forEach(function(producto){
        agregarProductoEnTabla(producto);
      });
      totalPresupuesto();
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
    productoTr.appendChild(construirTd(stringProducto(producto.producto), "producto"));
    productoTr.appendChild(construirTd(producto.cantidad, "producto"));
    productoTr.appendChild(construirTd("$"+producto.producto.precio, "producto"));
    productoTr.appendChild(construirTd("$"+producto.producto.precio*producto.cantidad, "producto"));
    return productoTr;
  }

  function construirTd(dato,clase){

    let td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
  
    return td;
  }

function totalPresupuesto(){
  
    let div = document.getElementById("tablaProducto");
    let total =0;
    objetosPresupuesto.forEach(function(productosPresupuesto){
        total += parseInt(productosPresupuesto.cantidad)*parseInt(productosPresupuesto.producto.precio);
    });
    
    let resultado = document.createElement("p");
    resultado.textContent = "TOTAL PRESUPUESTO ESTIMADO: $" + total;
    resultado.id = "resultadoPresupuesto";
    div.appendChild(resultado);
}

function ocultarPresupuesto(){
    let div = document.getElementById("tablaProducto");
    if(objetosPresupuesto.length == 0){
        div.style.display="none";
    }else{
        div.style.display="block";
    }

}

