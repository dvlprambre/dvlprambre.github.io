function convert() {
    
// set endpoint and your access key


// define from currency, to currency, and amount
var currency1 = document.getElementById("currency1");
var currency2 = document.getElementById("currency2");
var amount = document.getElementById('amount');

var field1 = currency1.value;
var field2 = currency2.value;
var funds = amount.value;
   
if (field1 == 'USD' && field2 == 'BTC' ){
    
var converted  = funds/377;
    
        alert("You have " + converted.toFixed(2) + " Bitcoins");

}

else if (field1 == 'BTC' && field2 == 'USD') {
  var converted  = funds/0.0027;
    
        alert("You have $" + converted.toFixed(2));
} else {
 
    
        alert("Please choose different currency rates" );
}
                

     
}

