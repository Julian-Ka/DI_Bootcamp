// function infoAboutMe() {
//     console.log("My name is Julian Kassanke I'm 34 years old and my hobbies are playing Videogames and Coding!")
// }


// infoAboutMe();


// //Part II Create a function called infoAboutPerson(personName, personAge, personFavoriteColor)

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
//     console.log(`Your name is ${personName} you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
    
//     for (let index = 0; index < personHobbies.length; index++) {
//         console.log(`Your hobbies are ${personHobbies[index]}`);
        
//     }
    

    
// }

// infoAboutPerson("David", 45, "blue", ["tennis", "painting"]);
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "plazing cards"]);


//Exercise 2 Keyless Car


// let age = prompt("How old are your?");
// console.log(age);

// function checkDriverAge(age) {
//             if (age < 18) {
//                 alert("Sorry, you are too young to drive this car. Powering off")
//             }

//             else if (age == 18) {
//                 alert("Congratulations on your first year of driving. Enjoy the ride!")
//             }
//             else(alert("You are old enough to drive, Powering On. Enjoy the ride!"))



// } 

// checkDriverAge(16);
// checkDriverAge(18);
// checkDriverAge(20);

//Exercise 3 Odd or Even

// function checkNumber() {
//     for (let index = 0; index <= 100; index++) {
//         if (index % 2 == 0 ) {
//             console.log(`the number ${index} is even`)
//         }
//         else(console.log(`the number ${index} is odd`))
//     }
// }

//  checkNumber();

//Exercise 4 Find the Numbers Divisble by 23
// let total= [];
// let sum = 0;
// function isDivisible(divisor) {
//     for (let index = 0; index <= 500; index++) {
//         if (index % divisor == 0) {
//             console.log(`the number ${index} is divisible by ${divisor}`)
//             total.push(index);
            
            
//         }
            
//     }
//     console.log(total); 
//     for (let i = 0; i < total.length; i++) {
//         sum = sum + total[i];
        
//     }
//     console.log(sum);
// }

// //isDivisible(3);
// isDivisible(45);

//Exercise 5 Amazon Shopping

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket() {
//    let check = prompt("Choose an Item:");
//    if (check in amazonBasket === true) {
//        alert(`${check} is already in the Basket`)
//    }
    
// }

// checkBasket();

//Exercise 6 What is in my wallet?
// let itemPrice = 0;
// let change = []

// function changeEnough(change, itemPrice) {
//     console.log(change);
//     console.log(itemPrice);
//     let Quarters = change[0] * 0.25;
//     let Dimes = change[1] * 0.10;
//     let Nickels = change[2] * 0.05;
//     let Pennies = change[3] * 0.01;
//     total = Quarters + Dimes + Nickels + Pennies;
//     console.log(total);
//     if (total > itemPrice) {
//         console.log(true);
        
//     }
//     else(console.log(false));
// }

// changeEnough([25,20,5,0],4.25)
// changeEnough([2,100,0,0], 14.11)

//Exercise 7 Shopping List

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    
    
}