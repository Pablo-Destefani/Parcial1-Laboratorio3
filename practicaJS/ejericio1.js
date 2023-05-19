
function ejercicio1(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

function impresion(){

    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");

    numero1 = parseInt(num1.value,10);
    numero2 = parseInt(num2.value,10);

    document.getElementById("resultado").textContent=ejercicio1(numero1,numero2);
    console.log(ejercicio1(numero1,numero2));
}