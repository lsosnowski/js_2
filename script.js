// typy proste:string, number 

let isAdmin = false;
let isBanned = true;


// INstrukcje warunkowe


// if (isAdmin === true) {
//     console.log("Witaj w panelu admina");
// }

// else if(isBanned === true) {
//     console.log("Konto zablokowane");
// }

// else {
//     console.log("Brak uprawnień");
// }




// && - logiczne "i"
// || - logiczne "lub"
// <> - znaki większości i mniejszości

// let num = 7
// if(num === 7 || num === 9){
//     console.log("Liczba sie zgadza");
// }
// else if (num > 8){
//     console.log("Liczba większa od 8");
// }



// if (isAdmin === true && isBanned === false){
//     console.log("Witaj w panelu Admina");
// } 
// else {
//     console.log("Brak uprawnień, bądź użytkownik zablokowany");
// }


const loginBtn = document.getElementById("Login");
const nicknameField = document.getElementById("Nickname");
const passwordField = document.getElementById("Password");
const pagePanel = document.getElementById("Panel");

const adminNick = "admin00";
const adminPass = "admin";


// console.log(nicknameField.value)

const login = () => {
    console.log(nicknameField.value);
    console.log(passwordField.value);

    if(nicknameField.value === adminNick && passwordField.value === adminPass){
        pagePanel.textContent = "Witaj w panelu admina";
    }
    else {
        pagePanel.textContent = "NIeprawidłowe hasło lub nazwa uzytkownika";
    }
}

loginBtn.addEventListener("click", login);


// admin, user, moderatpr, banned

let me