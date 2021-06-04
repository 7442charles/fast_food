
//var purchase = document.getElementById('purchase');
function purchaseConfirm() {
  window.confirm("Proceed to make the Purchase?");
}
 var removeCartItemsButton = document.getElementsByClassName('btn-danger');
 console.log(removeCartItemsButton);
 for (var i = 0; i < removeCartItemsButton.length; i++) {
   var button = removeCartItemsButton[i];
   button.addEventListener('click', function() {
     console.log("clicked");
   });
 }
