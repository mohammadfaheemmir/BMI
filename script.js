function calculateBMI(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var hm = height/100;
    var bmi = (weight/(hm*hm)).toFixed(2);
    document.getElementById("result").innerHTML = "<p> BMI: " + bmi + "</p>";
}