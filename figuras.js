//codigo del cuadrado
console.group('Cuadrad0')
//const ladoCuadrado = 5
 //console.log('los lados del cuadrado miden:'  +ladoCuadrado + 'cm')

function perimetroCuadrado (lado){
    return lado * 4 
    }

    //console.log('el perimetro cuadrado es:'  + perimetroCuadrado + 'cm')


function areaCuadrado (lado){
    return lado * lado
}
//console.log('el area del cuadrado es:'  + areaCuadrado +'cm²')
console.groupEnd()


//codigo del triagulo
console.group('Triangulo')
//const ladoTriangulo1 = 6
//const ladoTriangulo2 = 6
//const baseTriangulo = 4
//const alturaTriangulo = 5.5
 //console.log('los lados del triangulo miden:'  + ladoTriangulo1 + 'cm, ' +ladoTriangulo2 + 'cm, '+ baseTriangulo + 'cm')
 //console.log('la altura del triangulo mide:'  + alturaTriangulo+ 'cm')
 
 function perimetroDelTriangulo (lado1, lado2, base){ 
    return lado1 + lado2 + base
 }
 //console.log('el perimetro del triangulo es' + perimetroDelTriangulo + 'cm')

 function areaTriangulo (base, altura) {
 return (base * altura)/2
 }
 //console.log('El area del triangulo es:' +alturaTriangulo+'cm²')
 console.groupEnd()


 //codigo del circulo
 console.group('circulo')
 //const radioCirculo = 4
 // console.log('El radio del circulo es:' +radioCirculo+'cm')

function diametroCirculo (radio) {
    return radio * 2
    }
  //console.log('El diametro del circulo es:'+diametroCirculo+'cm²')

const PI = Math.PI
  //console.log('El valor de PI es:'+PI)

function perimetroCirculo (radio) {
    const diamtro = diametroCirculo(radio)
 return (diamtro* PI).toFixed(2)
} 
//  console.log('El perimetro del circulo es:'+perimetroCirculo+'cm')
 
function areaDelCirculo (radio) {
    return ((radio * radio) * PI).toFixed(2)
}
  //console.log('El area del circulo es:'+areaDelCirculo+'cm²')
 console.groupEnd()
 

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)

}

function calcularareaCuadrado(){
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)

}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}


