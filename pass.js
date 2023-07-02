let slider = document.getElementById("slider");
let passLength = document.getElementById("passLength");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genButton = document.getElementById("genButton");
let copy = document.getElementById("copy");
strength1=document.getElementById("rec1");
strength2=document.getElementById("rec2");
strength3=document.getElementById("rec3");
strength4=document.getElementById("rec4");




passLength.textContent = slider.value;
slider.addEventListener('input', ()=>{
    passLength.textContent = slider.value;
});

genButton.addEventListener('click', ()=>{
    passbox.value = generatePassword();
    
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";


function generatePassword(){
    let genPassword = "";
    let allChars = "";
    updateStrengthBar();

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    
    let i = 1;
    while(i<=slider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword; 
}

function updateStrengthBar(){
    var divs=[strength1,strength2,strength3,strength4];
    for(let i=0;i<4;i++){
        divs[i].style.backgroundColor="black";
    }
    if (slider.value>= 4) {
        var numChecked = 0;
        if (lowercase.checked) {
          numChecked++;
        }
        if (uppercase.checked) {
          numChecked++;
        }
        if (numbers.checked) {
          numChecked++;
        }
        if (symbols.checked) {
          numChecked++;
        }
      
        if (numChecked > 0) {
          for (var i = 1; i <= numChecked; i++) {
            document.getElementById("rec" + i).style.backgroundColor = "#A4FFAF";
          }
        }
    }
} 

copy.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copy.innerText = "check";
        copy.title = "Password Copied";

        setTimeout(()=>{
            copy.innerHTML = "content_copy";
            copy.title = "";
        }, 3000)
    }
});