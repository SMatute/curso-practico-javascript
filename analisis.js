//Helper
function esPar (numero) {
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
         function (valorAcumulado = 0, nuevoElemento){
             return valorAcumulado + nuevoElemento
    }
     )
 
     const promedioLista = sumaLista / lista.length   
     return promedioLista
 }

//Calculadora de mediana
function medianaSalario(lista){
    const mitad = parseInt(lista.length /2)

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista
        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2)
        return mediana 
    }else{
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

  //Mediana General
const salariosCol = colombia.map(
    function (persona){
        return persona.salary
    }
)

const salariosColSorted = salariosCol.sort (
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
)

const medianaGeneralCol = medianaSalario(salariosColSorted)

//Mediana Top 10%
const spliceStar = (salariosColSorted.length * 90) / 100
const spliceCount = salariosColSorted.length - spliceStar  

const salariosColTop10 = salariosColSorted.splice(
    spliceStar,
    spliceCount
)

const medianaTopCol = medianaSalario(salariosColTop10)

console.log({
    medianaGeneralCol,
    mediaTop10
})