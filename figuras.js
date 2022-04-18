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
    
    return Number(lado1)+Number(lado2)+Number(base);
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

function calcularPerimetroTriangulo()
{
    const inputA = document.getElementById("InputTrianguloA");
    const inputB = document.getElementById("InputTrianguloB");
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueA = inputA.value;
    const valueB = inputB.value;
    const valueBase = inputBase.value;
    //const ladoA =number(valueA);
    //const ladoB =number(valueB);
    //const ladoBase =number(valueBase);
    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert (perimetro);
}

function calcularAreaTriangulo()
{
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    
    const valueBase = inputBase.value;
    const valueAltura= inputAltura.value;
    
    const area = areaTriangulo(valueBase, valueAltura);
    alert (area);
}

function calcularPerimetroCirculo()
{
    const inputRadio = document.getElementById("InputCirculo");  
    const valueRadio = inputRadio.value;
    const perimetro = perimetroCirculo(2*valueRadio);
    alert(perimetro);
}
function calcularAreaCirculo()
{
    const inputRadio = document.getElementById("InputCirculo");  
    const valueRadio = inputRadio.value;
    const area = areaCirculo(valueRadio);
    alert(area);
}
function calcularAlturaIsoceles()
{
    const inputA =  document.getElementById("inputIsocelesLadoA");
    const valueA = inputA.value;
    const inputB =  document.getElementById("inputIsocelesLadoB");
    const valueB = inputB.value;
    const inputC =  document.getElementById("inputIsocelesLadoC");
    const valueC = inputC.value;

    if(valueA==valueB)
    {
      const altura = Math.sqrt(valueA*valueA - (valueC/2)*(valueC/2));
       alert(altura)
    }
    else if(valueA==valueC)
    {
        const altura = Math.sqrt(valueA*valueA - (valueB/2)*(valueB/2));
        alert(altura)  
    }
    else if(valueB==valueC)
    {
        const altura = Math.sqrt(valueB*valueB - (valueA/2)*(valueA/2));
        alert(altura)  
    }
    else{
        alert("no es un triangulo Isoceles");
    }

}