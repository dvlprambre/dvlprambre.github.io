function calculate() {
    
    var wage = document.getElementById("wage").value;
    var hours = document.getElementById("hours").value;
    
    var pay = wage*hours;
    var ot = (wage*hours)+((wage*1.5)*(hours-40));
    
    if (hours <= 40) {
    var displayString = "Your pay without overtime is $" + pay;
    
    }
    
    else {
        var displayString = "Your pay with overtime is $" + ot;
    }
            document.getElementById("resultLabel").innerHTML = displayString;

}