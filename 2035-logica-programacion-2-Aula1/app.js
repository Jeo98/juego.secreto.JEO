//document Objet Mode
/*let titulo = document.querySelector('h1'); 
//document.querySelector es el selector, donde document conecta js con html
titulo.innerHTML = "Bienvenidos al nuevo juego";
//innerHTML establece el valor asignado al objeto de HTML

let parrafo = document.querySelector('p'); 
//EL OBJETO AL QUE HAGO REFERENCIA COMO SELECTOR TIENE QUE IR ENTRE COMILLAS SIMPLES, NO DOBLES!

parrafo.innerHTML = "Ingresa un numero del 1 al 10";

JS posee la gestion de eventos, los eventos son la interaccion con los objetos que hay
La etiqueta de boton se llama button.
Los eventos se colocan seguidos de la etiqueta del boton:

<button onclick=. ...> donde el evento es onclick, es decir, cuando hago click

en la interaccion con botones puedo hacer el llamado a funciones. Estas funciones son definidas en js
Para crear una funcion utilizo la palabra especial "function" seguida del nombre de la funcion, parametros 
y finalmente el bloque de codigo de la funcion.
*/


function setDatosObjetosHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

setDatosObjetosHTML('h1',"Hora del Desafío");
setDatosObjetosHTML('p',"Ingresa un número");

function Intentodeusuario(){

    alert (" Click desde el botón");
}

function crearNumeroSecreto() {

    return Math.floor(Math.random()*10)+1;
    
}
let numeroSecreto=crearNumeroSecreto();
console.log("Numero secreto: " + numeroSecreto);

let intentos=1;
function verificarIntento(){
    
    let numeroUsuario= parseInt(document.getElementById("ingresoNumeroUsuario").value); 
        
        if(numeroUsuario === numeroSecreto){

            setDatosObjetosHTML('p',`ACERTASTE!!\n En ${intentos} ${intentos==1 ? "intento" : "intentos"}`);
           document.querySelector("#reiniciar").removeAttribute("disabled"); 
            // activo boton de "Nuevo juego" cuando jugador acierta el numero secreto
        }
        else{
              
            if(intentos>=4){
                setDatosObjetosHTML('p',"PERDISTE! TE QUEDASTE SIN INTENTOS :(");
                document.querySelector("#reiniciar").removeAttribute("disabled"); 
            // activo boton de "Nuevo juego" cuando jugador pierde
            }
            else{
                if(numeroUsuario < numeroSecreto){ 
                    setDatosObjetosHTML('p',"El numero secreto es mayor");     
                }  
                else{
                    if(numeroUsuario>numeroSecreto){
                        setDatosObjetosHTML('p',"El numero secreto es menor");
                    }
                       
                }
                limpiarCaja();//limpia caja en cada ejecucion  
                intentos++; 
            }
           
         }

        
    }
    function limpiarCaja(){
        //funcion para limpiar contenido de caja en cada interaccion
        /*let valorCaja= document.querySelector("#ingresoNumeroUsuario");
        valorCaja.value=""; // le doy valor vacio a la caja | se puede achicar codigo:*/
        document.querySelector("#ingresoNumeroUsuario").value="";
    }

    function reiniciarJuego(){
        
        document.querySelector("#ingresoNumeroUsuario").value="";//lio caja
        document.querySelector("#reiniciar").setAttribute("disabled","true" );    
        DatosReiniciados();
        
    }
    
    function DatosReiniciados(){

        setDatosObjetosHTML("h1","Hora del desario");// vuelvo al titulo inicial
        setDatosObjetosHTML("p","Ingresa un número entre 1 y 10"); // vuelvo al parrafo inicial
        intentos=1;
        numeroSecreto=crearNumeroSecreto(); // vuelvo a dar valor a numero secret
        }

    DatosReiniciados();
 //---------------------------------------------------------------------------------------------------
/*Desafíos:

*/
//Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log("¡HOla, mundo!");
    return;
}
/*Crear una función que reciba un nombre como parámetro y muestre 
"¡Hola, [nombre]!" en la consola.*/
function nombreHolaMundo(nombre){

    console.log(`"¡Hola, ${nombre}!}`);
    return;
}
/*Crear una función que reciba tres números como parámetros y devuelva 
//su promedio.*/
function promedio(a,b,c){

    return (a+b+c)/3;
}
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(a){
    return 2*a;
}
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(a,b){

    if(a>b){
        return a;
    }
    else{
        return b; //si son iguales o si b es mayor a numero a.
    }
}
/*Crear una función que reciba un número como parámetro y devuelva el resultado de 
multiplicar ese número por sí mismo. */
function multiplicarSiMismo(num){
    return num*num;
}

//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
/*
Desafíos:
    
*/

/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de 
su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/
function IMC(altura, peso){
    return peso/(Math.pow(altura,2)); // masa sobre altura al cuadrado
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.


function factorial(num){
    if(num < 0){
        alert("ERROR: INGRESAR VALORES POSITIVOS");//control ingreso dato
    }
    else { 
        if(num == 0){ // caso base o de corte.
            return 1;
        }else{ 
            return num * factorial(num-1); //llamado recursivo 
        
            }
    }
} //console.log("Factorial: " + factorial (4));//ejemplo prueba


/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva 
el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con 
el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.*/
//console.log("conversion: "+ convertDolar(3000));
function convertDolar(num){
    let cotizacion = parseFloat(4.80); // PARA DECIMAL USAR PUNTO NO COMA !!!
    console.log("cotizacion: "+ cotizacion);
    return num/cotizacion;
}

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/
//console.log(areaPerimetroRectangular(3,4));

function areaPerimetroRectangular(alto,ancho){
    let area= ancho * alto;
    let perimetro = 2*alto + 2*ancho;

    alert(`AREA: ${area}`);
    alert(`PERIMETRO: ${perimetro}`);
    return;

}

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function areaPerimetroCirculo(radio){
    const pi=3.14;
    let area= pi * Math.pow(radio,2);
    let perimetro= pi * 2 * radio;
}

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaDeMultiplicar(numero){
   let multiplo=0;
    while(multiplo < 10){

            alert(`${numero} X ${multiplo} = ${multiplo * numero}`);
            multiplo++;
    }
}
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------

/*
Desafíos

    
    
*/
//Crea una lista vacía llamada "listaGenerica".
let lista=[];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
let lenguagesDeProgramacion=["Java","Ruby", "GoLang", "C","Haskell"];
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function verLista(lista1){

    let dimension= lista1.length;
    let indice=0;
    while(indice<dimension){
        console.log(lista1[indice]);
        indice++;
    }
}
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function verListaInversa(lista1){
    let dimension=lista1.length - 1;
    while(dimension > 0 ){

        console.log(lista1[dimension]);
        dimension--;
    }
}

//Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(listanumeros){

    let acumulador=0;
    let dimension = listanumeros.length;
    while(dimension > 0){
        acumulador = acumulador + listanumeros[dimension-1];
        dimension--;
        //sumo cada valor de la lista para luego dividir por la longitud o dimension de la misma
    }
    
    return (acumulador / listanumeros.length);
}
/**let listanum= [1,2,3,4,5,6,7];
promedioLista(listanum);*/

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function valorGrandePequeño(lista){
    let menor=lista[0];
    let mayor=lista[0];
    let dimension=lista.length;
    while(dimension > 0){
        if(lista[dimension-1] > mayor){

            mayor=lista[dimension-1];

        }else if(lista[dimension - 1 ] < menor){
                    menor=lista[dimension - 1];
        }
        dimension--;
    }
   }
/**let lista1=[-1,100,2,3,10,5,-3];
valorGrandePequeño(lista1);*/

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementosLista(lista){

    let indice=lista.length;
    let sumatoria;
    if(typeof(lista[0]) === "string"){

        sumatoria=" ";

    }
    else{
        sumatoria = 0;
    }
    
    let i=0;

    while(i < indice){

        sumatoria= sumatoria + lista[i];
        i++;;
    }
}
//sumaElementosLista(lenguagesDeProgramacion);

/*Crea una función que devuelva la posición en la lista donde se encuentra 
un elemento pasado como parámetro, o -1 si no existe en la lista.*/

function indiceElemento(lista, elem){

    let i=0;
    let test=0;
    while(i < lista.length){

        if(lista[i]==elem)
               return i; // aqui debe terminar funcion y retornar
        else
            i++;
    }
    return -1; // si no se encuentra elemento, entonces retorna -1

}

/*Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.*/

function sumaDosListas(lista1,lista2){
    let newLista=[];
    let i=0;
    while(i < lista1.length){
        newLista[i]=lista1[i] + lista2[i];
        i++;
    }    return newLista;

}

/*Crea una función que reciba una lista de números y devuelva una nueva lista 
con el cuadrado de cada número. */
console.log(powList([1,2,3,4]));

function powList(lista){

    let i=0;
    let pwlist=[];
    while(i < lista.length){

        pwlist[i]= Math.pow(lista[i],2);
        i++;

    }
    return pwlist;
}

