
// Sección de asignación de valor de notas
var nombre = prompt("Ingrese su nombre");  // Petición de nombre

var spannombre = document.getElementById("spannombre"); // 
spannombre.innerHTML = nombre;

var carrera = prompt("Ingrese su carrera");
var spancarrera = document.getElementById("spancarrera");
spancarrera.innerHTML = carrera;


// Sección de uso de prompt
//Asigna al valor de una variable el input del usuario
var nota1html = prompt("Ingrese la nota 1 html");
var nota2html = prompt("Ingrese la nota 2 html");
var nota3html = prompt("Ingrese la nota 3 html");

var nota1css = prompt("Ingrese la nota 1 css");
var nota2css = prompt("Ingrese la nota 2 css");
var nota3css = prompt("Ingrese la nota 3 css");

var nota1js = prompt("Ingrese la nota 1 js");
var nota2js = prompt("Ingrese la nota 2 js");
var nota3js = prompt("Ingrese la nota 3 js");

//Arreglo de variables para obtener valores decimales

var nota1html = parseFloat(nota1html);
var nota2html = parseFloat(nota2html);
var nota3html = parseFloat(nota3html);

var nota1css = parseFloat(nota1css);
var nota2css = parseFloat(nota2css);
var nota3css = parseFloat(nota3css);

var nota1js = parseFloat(nota1js);
var nota2js = parseFloat(nota2js);
var nota3js = parseFloat(nota3js);

// Cálculo de promedios de notas

var promediohtml = (nota1html+nota2html+nota3html)/3;
var promediocss = (nota1css+nota2css+nota3css)/3;
var promediojs = (nota1js+nota2js+nota3js)/3;
var promediofinal = (promediohtml+promediocss+promediojs)/3;

// Arreglo de variables para obtener sólo dos decimales

var promediohtml = parseFloat(promediohtml);
var promediocss = parseFloat(promediocss);
var promediojs = parseFloat(promediojs);
var promediofinal = parseFloat(promediofinal);


//(Opcional) Arreglo de variables para obtener sólo dos decimales (Gracias Erick :D)

var promediohtml = promediohtml.toFixed(2);
var promediocss = promediocss.toFixed(2);
var promediojs = promediojs.toFixed(2);
var promediofinal = promediofinal.toFixed(2);


// Sección de uso de getElementById para recolección de datos. Asigna el valor de una variable a un id
// input usuario de prompt = variable actualizada = elemento con id correspondiente
// variable = elemento con etiqueta de id correspondiente
var tdnota1html = document.getElementById("nota1html"); 
var tdnota2html = document.getElementById("nota2html");
var tdnota3html = document.getElementById("nota3html");
var tdpromediohtml = document.getElementById("promediohtml");

var tdnota1css = document.getElementById("nota1css");
var tdnota2css = document.getElementById("nota2css");
var tdnota3css = document.getElementById("nota3css");
var tdpromediocss = document.getElementById("promediocss");

var tdnota1js = document.getElementById("nota1js");
var tdnota2js = document.getElementById("nota2js");
var tdnota3js = document.getElementById("nota3js");
var tdpromediojs = document.getElementById("promediojs");

var tdpromediofinal = document.getElementById("promediofinal");


// Sección innerHTML        
// Para mostrar en el documento html los valores de texto almacenados por prompt y getElementById
// variable con id guardado en html = variable del js
tdnota1html.innerHTML = nota1html;
tdnota2html.innerHTML = nota2html;
tdnota3html.innerHTML = nota3html;
tdpromediohtml.innerHTML = promediohtml;

tdnota1css.innerHTML = nota1css;
tdnota2css.innerHTML = nota2css;
tdnota3css.innerHTML = nota3css;
tdpromediocss.innerHTML = promediocss;

tdnota1js.innerHTML = nota1js;
tdnota2js.innerHTML = nota2js;
tdnota3js.innerHTML = nota3js;
tdpromediojs.innerHTML = promediojs;

tdpromediofinal.innerHTML = promediofinal;





















