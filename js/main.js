var removeItemButtons = document.getElementsByClassName('delete')
for(var i = 0; i < removeItemButtons.length; i++){
    var button = removeItemButtons[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()

    })
}
var quantityInputs = document.getElementsByClassName('input')
for(var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change',quantityChanged)
}
function updateCartTotal(){
    var cartItems = document.getElementsByClassName('items')[0]
    var cartItem = cartItems.getElementsByClassName('Item')
    var total = 0
    for(var i = 0; i < cartItem.length; i++){
        var cartItem = cartItem[i]
        var priceElemnt =cartItem.getElementsByClassName('price')[0]
        var quantityElement =cartItem.getElementsByClassName('input')[0]
        var price =parseFloat(priceElemnt.innerText.replace('TND',''))
        var quantity = quantityElement.value
        total= total + (price*quantity) 
    }
    document.getElementsByClassName('finalPrice')[0].innerText = total +'TND'
}
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }

 updateCartTotal()   
}
