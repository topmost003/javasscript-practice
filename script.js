  

// let greet = (Button = greeting)

// function changeButton(){ 
//  let greeting = document.getElementById(`hello`)
// let Button =   document.getElementById(`change`)
// // let Button2 = "thanks for coming"

// if (greeting.innerText === "welcome back")
//    {
//      greeting.innerText =`welcome back`}
   
// else
// {
//      greeting.innerText = `THANKS FOR COMiiING`

// }
 
// }
//  let box = document.getElementById (`box`)
//     var animation;

// function epicMovement(){
   
//   movementAmount += 5,
//   box.style.left = movementAmount  + `px`;
//   console.log (box.style.left);

// animation = setTimeout (epicMovement,20);
// }

//  epicMovement()


// ACCEPTING USER INPUT

// function checkEmail(email) {
//     if(email.includes("@gmail.com")){
//         console.log( "true")
//     } 
//     else {console.log(false)}

// }

// checkEmail("topmost@gmail.com")



// let myName = "fadipe quadri abiodun"
// let age = 10

// document.getElementById ("user").textContent = `my name is ${myName}`
// document.getElementById ("userAge").textContent =  age


// document.getElementById(`myName`)
// document.getElementById(`input`)
// document.getElementById(`submit`)



// function userName(user) {
//   user =  document.getElementById(`input`).value,
//   // console.log(user) 
// document.getElementById(`myName`).innerText = (`welcome ${user}`)
// }


// //  document.getElementById(`submit`)
//  document.getElementById(`input`)
//  document.getElementById(`input1`)
 

// function userName(){
//   user = document.getElementById(`input`).value,
//   console.log(user)

//   password = document.getElementById(`password`).value,
//   console.log(password.includes(`@`))

//   document.getElementById(`myName`).innerText = (`welcome ${user}`)

// }


// TYPE OF

// let a = 10
// console.log ( typeof a)

// let b = "10"
// b = Number(b)
// console.log ( typeof b)


// CONST (calculating a circumference)

// const pi = 22/7
// const radius =  parseFloat(prompt(`enter the radius`))
// circumference = pi * radius * 2

// console.log(circumference)

const pi = 3.142
let circumference;
let radius;

function calculate(){
let radius = document.getElementById (`input`).value;
radius = Number(radius);
let circumference = 2 * pi * radius;
console.log(circumference);

document.getElementById (`answer`).innerText = circumference

} 


