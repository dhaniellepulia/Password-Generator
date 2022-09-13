const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password-1")
let firstPassword = ""

let passwordLength = document.getElementById("passwordLength")


function generatePassword(){

    if(passwordLength.value>40){
        alert("Number exceeded! Please input below 40 only.")
        firstPassword = ""
    }
    
    else{
    for(let a = 0; a < passwordLength.value; a++){
        let b = Math.floor(Math.random() * characters.length)
        firstPassword += characters[b] 
        password1.textContent = firstPassword
    }
    firstPassword = ""
}
}