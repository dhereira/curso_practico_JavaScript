console.log("hello world!")

//Este es el código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: "+ladoCuadrado+"cm");
const perimetroCuadrado = ladoCuadrado*4;
console.log ("el perímetro del cuadro mide: "+perimetroCuadrado+"cm");
const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log ("el área del cuadro mide: "+areaCuadrado+"cm^2");
console.groupEnd();

//Este es el código del tríangulo
console.group("Triángulo");
const ladoTriangulo1 = 3;
const ladoTriangulo2 =4;
const baseTriangulo = 5;
const alturaTriangulo = 1.2;
console.log("los lados del triángulo miden: "+ladoTriangulo1+"cm, "
             +ladoTriangulo2+"cm, "
             +baseTriangulo+"cm");
console.log("la altura del triángulo mide: "+alturaTriangulo+"cm")             
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("el perímetro del triángulo mide: "+perimetroTriangulo+"cm");
const areaTriangulo = alturaTriangulo*baseTriangulo/2;
console.log("la área del triángulo es: "+areaTriangulo+"cm^2");
console.groupEnd();

console.group("Círculo");
const radioCirculo = 4;
const diametroCirculo =2*radioCirculo;
const PI = Math.PI;
console.log("el radio de la círculo mide: "+radioCirculo+"cm");
const perimetroCirculo = diametroCirculo*PI;
console.log("el perímetro del círculo mide: "+perimetroCirculo+"cm");
const areaCirculo = PI*radioCirculo*radioCirculo;
console.log("el área del círculo mide:"+areaCirculo+"cm^2");
console.groupEnd();
