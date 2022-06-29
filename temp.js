let celsius = document.getElementById("c");
let fahrenheit = document.getElementById("f");

function C_F(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function F_C(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
}