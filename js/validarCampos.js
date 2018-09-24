//seleccionar el formulario a travez de la id
var formulario = document.getElementById("form1");


//asociar funcion validar al hacer click

window.onload=iniciar;//sin parentesis

//funcion iniciar 
function iniciar(){

    document.getElementById("enviar").addEventListener('click',validar,false);
}

//seleccion de elementos 

function validaNombre(){

    var nombre=document.getElementById("nombre");
    if(nombre.value == ""){
        alert("el nombre debe ser completado.");
        return false;
    }
    return true;
}


function validarCorreo(){

var correo=document.getElementById("correo").value;
var expresion = /\w+@\w+\.+[a-z]/;
if(correo.value ==""){

    alert("el correo esta vacio");
    return false;
}else if (!expresion.test(correo)) {

    alert("formato de correo invalido");
    return false;


}
return true;
}



function validarRut(){

var correo= document.getElementById("rut");
if (!correo.checkValidity()){

    alert("el rut es invalido");
    return false;
}
return true;
}

function validarVivienda(){

    
}

function validatelefono(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}


//funcion que valida elementos 
function validar(e){

    if(validaNombre()&&validarCorreo()&&validarRut()&&confirm("pulsar si desea confirmar envio.")){
        alert("registro realizado");
        return true;
       
    }else{
        alert("registro no  realizado");
        e.preventDefault();
        
        return false;
    }
}