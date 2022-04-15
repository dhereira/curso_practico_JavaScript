console.log("hello world!")

//Este es el código del cuadrado
//console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: "+ladoCuadrado+"cm");
function perimetroCuadrado (lado)
{
    return  lado*4;
} 
//console.log ("el perímetro del cuadro mide: "+perimetroCuadrado+"cm");
function areaCuadrado (lado)
{
    return lado*lado;
}
//console.log ("el área del cuadro mide: "+areaCuadrado+"cm^2");
//console.groupEnd();

//Este es el código del tríangulo
//console.group("Triángulo");
//const ladoTriangulo1 = 3;
//const ladoTriangulo2 =4;
//const baseTriangulo = 5;
//const alturaTriangulo = 1.2;
//console.log("los lados del triángulo miden: "+ladoTriangulo1+"cm, "
           //  +ladoTriangulo2+"cm, "
          //   +baseTriangulo+"cm");
//console.log("la altura del triángulo mide: "+alturaTriangulo+"cm")            
function perimetroTriangulo (lado1,lado2, base)
{
    return lado1+lado2+base;
}
//console.log ("el perímetro del triángulo mide: "+perimetroTriangulo+"cm");
function areaTriangulo(altura, base)
{
    return (altura*base)/2;
}
//console.log("la área del triángulo es: "+areaTriangulo+"cm^2");
//console.groupEnd();

//console.group("Círculo");
//const radioCirculo = 4;
//const diametroCirculo =2*radioCirculo;
//const PI = Math.PI;
//console.log("el radio de la círculo mide: "+radioCirculo+"cm");
function perimetroCirculo(diametro)
{
   const PI = Math.PI;
   return diametro*PI;
} 

//console.log("el perímetro del círculo mide: "+perimetroCirculo+"cm");
function areaCirculo(radio)
{
    const PI = Math.PI;
    return PI*radio*radio;
}
//console.log("el área del círculo mide:"+areaCirculo+"cm^2");
//console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value =input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value =input.value;
    const area = areaCuadrado(value);
    alert(area);
}
