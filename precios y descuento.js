//const precio = 100
//const descuento = 15

function precioReal (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento  
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100  
    return precioConDescuento
}


function onclickBotonPrecioDesc() {
    const inputprice = document.getElementById('inputPrice')
    const priceValue = inputprice.value

    const inputdesc = document.getElementById('inputDesc')
    const DescValue = inputdesc.value

const precioDescuento = precioReal(priceValue, DescValue)


const resultP = document.getElementById('resultPrice')
resultP.innerText = 'El precio con descuento es $' + precioDescuento

}

function clearFields (){
    const inputprice = document.getElementById('inputPrice');
    inputprice.value = null;

    const inputdesc = document.getElementById('inputDesc');
    inputdesc.value = null;
}

