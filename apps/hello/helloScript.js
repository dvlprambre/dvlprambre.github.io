function sayHello() {
   
    var nameText = document.getElementById("nameTextField").value;
    var birthyear = document.getElementById("birthTextField").value;
    var today = new Date();
    var age = today.getFullYear() - birthyear;
    var displayString = "Hello, " + nameText + " you are " + age + " today!";
    document.getElementById("resultLabel").innerHTML = displayString;
}