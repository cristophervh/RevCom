/*
Funcion1
*/
function increase() {
    var a = 1;
    var textBox = document.getElementById("text");
    textBox.value++;
}    

function decrease() {
    var textBox = document.getElementById("text");
    textBox.value--;
}  


/*Funcion 1 Duplicada */
function increasen() {
  var a = 1;
  var textBox = document.getElementById("text2");
  textBox.value++;
}    

function decreasen() {
  var textBox = document.getElementById("text2");
  textBox.value--;
  var valor = textBox.value;
  if (valor < 0 ){
		textBox.value = 0;    
  }
}  


/*
Funcion2
*/

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }


  /*Funcion2 Duplicada para comision*/

  function increaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    
    if (value > 30) {
		value = 30;    
    }
    document.getElementById('number2').value = value;
	 document.getElementById("comision").textContent=value + "%";
	 var barra = document.getElementById("barra");
	 barra.value =  value;
  }
  
  function decreaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    //value < 5 ? value = 5 : '';
    value--;
    
    if (value < 4) {
		value = 4;    
    }
    
    document.getElementById('number2').value = value;
    document.getElementById("comision").textContent=value + "%";
    var barra = document.getElementById("barra");
	 barra.value =  value;
  }

  

  /*Funcion3*/

  $(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
              
                // Increment
            
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });
  
  });