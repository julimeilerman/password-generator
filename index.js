const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const noNumCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPassword1 = ""
let randomPassword2 = ""

let passwordLength = 15

let useSymbol = false
let useNumber = true

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generatePassword1(){
    for (i=0; i < passwordLength ; i ++){
            let random = Math.floor(Math.random()*characters.length)
            randomPassword1 += characters[random]
            }
    password1El.textContent = randomPassword1
}
function generatePassword2(){
    for (i=0; i < passwordLength ; i ++){
        let random = Math.floor(Math.random()*characters.length)
        randomPassword2 += characters[random]
        }
    password2El.textContent = randomPassword2
}

function generatePassword (){
    if(randomPassword1.length < passwordLength + 1 && randomPassword2 < passwordLength + 1){
        generatePassword1()
        generatePassword2()
    } else{
        randomPassword1 = ""
        randomPassword2 = ""
        generatePassword1()
        generatePassword2()
    }
}

 function copyPass1() {
    navigator.clipboard.writeText(randomPassword1)
    alert("Copied to clipboard")
 }

 function copyPass2() {
    navigator.clipboard.writeText(randomPassword2)
    alert("Copied to clipboard")
 }
