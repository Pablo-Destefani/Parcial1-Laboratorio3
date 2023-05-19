let nombre;
let telefono1;
let telefono2;
let email1;
let email2;


function validarFormulario(){
    nombre =true;
    telefono1 =true;
    telefono2 =true;
    email1=true;
    email2=true;
    validarNombre();
    validarTelefono();
    validarEmail();
    
    
}

function validarNombre(){
    nombre=agregarClasesCampoVacio("nombre","advertenciaNombre");
}
function validarTelefono(){
    telefono1=agregarClasesCampoVacio("telefono","advertenciaTelefono");
    telefono2=agregarClasesCampoNumerico("telefono", "advertenciaTelefono2");
}
function validarEmail(){
    email1=agregarClasesCampoVacio("email","advertenciaEmail");
    email2=agregarClasesValidacionEmail("email","advertenciaEmail2");
}

function agregarClasesCampoVacio(idInput, idSpan){
    let input = document.getElementById(idInput);
    if(input.value === "" ){
        document.getElementById(idSpan).classList.add("advertencia");
        return false;
    }else{
        document.getElementById(idSpan).classList.remove("advertencia");
        return true;
    }
}

function agregarClasesCampoNumerico(idInput, idSpan){
    let input = document.getElementById(idInput);
    let valor;
    try{
        valor = BigInt(input.value)
    }catch(e){
        valor = input.value;
    };    
    if(typeof valor != "bigint"){
        document.getElementById(idSpan).classList.add("advertencia");
        return false;
    }else{
        document.getElementById(idSpan).classList.remove("advertencia");
        return true;
    }
}

function agregarClasesValidacionEmail(idInput, idSpan){
    let input = document.getElementById(idInput);
    let indice = input.value.indexOf("@");
    if(indice ==-1 && input.value!==""){
        document.getElementById(idSpan).classList.add("advertencia");
        return false;
    }else{
        document.getElementById(idSpan).classList.remove("advertencia");
        return true;
    }
}

function enviarFormulario(){
    validarFormulario()
    if (nombre&&telefono1&&telefono2&&email1&&email2){
        location.reload(true);
    }
}
