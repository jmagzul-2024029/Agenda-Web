//obtener parametros de la URL           Esto es lo que lo obtiene: ?nombre=Juan Pérez&tel=5555-1234&correo=juan@email.com
const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre"); //busca el parámetro con id nombre
const telefono = params.get("tel");//busca el parámetro con id tel
const correo = params.get("correo");//busca el parámetro con id correo
const cumpleaños = params.get("cumple");//busca el parámetro con id cumple
const empresa = params.get("emp");//busca el parámetro con id emp

//Mostrar los datos en la pantalla
document.getElementById("nombre").textContent = nombre; //busca el elemento en el html con por su id
document.getElementById("telefono").textContent =  "Teléfono: " + telefono;
document.getElementById("correo").textContent =  "Correo: " + correo;
document.getElementById("cumpleaños").textContent =  "Fecha de nacimiento: " + cumpleaños;
document.getElementById("empresa").textContent =  "Empresa de trabajo: " + empresa;