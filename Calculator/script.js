// calculator program

const display = getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(console.error();){
        display.value="error";
    }
}