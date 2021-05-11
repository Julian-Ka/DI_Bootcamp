//Exercise 1
// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
    
// }
// Solution a=3

 //#2
//  var a = 0;
//  function q2() {
//      a = 5;
//  }


//  function q22() {
//      alert(a);
//  }
//Solution a = 5;

// //#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
//Solution popup saying hello

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// Solution pop up saying test


// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

//Solution popup saying 5 and another popup saying 5

//Exercise 2

// function winBattle(){
//     return true;
// }


   
//   let experiencePoints;
// winBattle() ? experiencePoints = 10 : experiencePoints = 1;
    
  
// console.log(experiencePoints);

//Exercise 3

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// let n = colors.includes("Violet");
// console.log(n);


// for (let index = 0; index < colors.length; index++) {
//     let b = index+1
//     console.log(`${b}# choice is ${colors[index]}`)
    
// }

//Exercise 4

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// for (let index = 0; index < color.length; index++) {
//     // console.log(color[index]);
//     b = index+1;
//     switch (index) {
//         case 0:
//             console.log(`${b}${ordinal[1]} choice is ${color[index]}`);
//             break;

//         case 1:
//         console.log(`${b}${ordinal[2]} choice is ${color[index]}`);
//         break;

//         case 2:
//             console.log(`${b}${ordinal[3]} choice is ${color[index]}`);
//             break;
    
//         default:
//             console.log(`${b}${ordinal[0]} choice is ${color[index]}`);
//             break;
//     }
    
// }

//Exercise 5

// let c = "hello"
//let c = 3;
// let c = ["apple", "oranges", "cucumber"];

// console.log(typeof(c))

// function checkIfString() {
//    if (typeof(c) == 'string') {
//        alert(true);
       
//    }
//    else(alert(false))
// }

// checkIfString(c);

//Exercise 6

//Create a global variable called bankAmount which value is the amount of money currently in your account.
//Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
//Create an array with all your monthly expenses - both positive and negative (money made and money spent).
//Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
//Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will 
//include taxes (multiply each expense by the VAT).
//Display your current bankAccount standing at the end of the month.

let bankAmount = 30000;
let vat = 0.17;
let details = [+200, -100, +146, +167, -2900];
console.log(details)
let vatIncDetails = [];
let taxAdded;

for (let index = 0; index < details.length; index++) {
    
    taxAdded = vat * details[index];
    vatIncDetails.push(taxAdded)
    //console.log(taxAdded)
    //console.log(vatIncDetails)
    
}
console.log(vatIncDetails)
let finalArray = [];
for (let i = 0; i < vatIncDetails.length; i++) {
    
    let complete = details[i] + vatIncDetails[i];
    finalArray.push(complete)
    console.log(complete)
    console.log(finalArray)
}

let c = 0;
for (let a = 0; a < finalArray.length; a++) {
    c += finalArray[a]
    console.log(c)
}
console.log(c)

let endAmount = bankAmount + c;
console.log(endAmount)
alert(`Your Bankaccount has an amount of ${endAmount}`);