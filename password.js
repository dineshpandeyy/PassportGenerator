const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "aabcdefghijklmnopqrstuvwxyz"
const num = "1234567890";
const sym = "!@#$%*&(){}[]=<>/,.";

// console.log(upper);
// console.log(lower);
// console.log(number);
// console.log(symbol);
// console.log(password);
// let password = document.getElementById("result");

let passwordLength = document.getElementById("passwordLength").value;

// onclick="my()" 
function my() {
    var x = document.getElementById("passwordLength").value;
    passwordLength = x;
    document.getElementById("ageOutputId").innerHTML = x;
  }

// const input = document.getElementById("passwordLength").value;
// let passwordLength = document.getElementById("passwordLength").value;
let submit = document.getElementById("button");

function main(){
    
    let upper = document.getElementById("includeUpperCase");
    let lower = document.getElementById("includeLowerCase");
    let number = document.getElementById("includeNumbers");
    let symbol = document.getElementById("includeSymbols");
  
    upper = upper.checked;
    lower = lower.checked;
    number = number.checked;
    symbol = symbol.checked;
    let empty = "";

    if(upper === true){
        empty += upperCase;
    }if(lower === true){
        empty += lowerCase
    }if(number === true){
        empty += num
    }if(symbol === true){
        empty += sym
    }

    //code below for generating random password from above string name empty
    let pass = "";
    if(empty.length != 0){
        for (let i = 0; i < passwordLength; i++) {
            pass += empty.charAt(Math.floor(Math.random() * empty.length));
        }
    }else{
        for (let i = 0; i < passwordLength; i++) {
            pass += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
}


    // console.log(pass);
    document.getElementById("nameofid").value = pass;
}


submit.addEventListener("click", main);

// for copying the generated password is written below

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("nameofid");
    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

const button = document.getElementById("submit");
console.log(button);
button.addEventListener("click",myFunction);




























