//Exercise 1

// let colors = ["red", "blue", "yellow", "green", "grey", "black","white","teal","eggshell","a","b","c","d","e","g","h","i","j","k","l","m","n","o"];
// console.log(colors);



// for(i=0; i< colors.length; i++) {
//     let dexy= colors.indexOf(colors[i])+1;

// if (dexy == 1 || dexy == 21 || dexy == 31) {
//     dexy = dexy+"st";
    
// }
// else if (dexy == 2 || dexy == 22 || dexy == 32) {
//     dexy = dexy+"nd";
// }

// else if (dexy == 3 || dexy == 23 || dexy == 33) {
//     dexy = dexy+"rd";
// }

// else { dexy = dexy + "th"}

//     let firstSen = ("My " + dexy);
//     let secondSen = (" choice is " + colors[i]); 
//     let senComp = firstSen + secondSen;
//     console.log (senComp);

    
// }


// //Exercise 2

// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people.indexOf("Mary"));
// people.splice(0,1);
// people.splice(2,1,"Jason");
// people.push("Julian");
// console.log(people);

// for (let index = 0; index < people.length; index++) {
//     console.log(people[index]);

//     if (people[index] == "Jason") {
//         break;
        
//     }
    
// }

// peopleCopy = people.splice(2,3);
// console.log(people);
// let b = people.indexOf("Mary");
// console.log(b);
// console.log(people.indexOf("Foo"));

//  let last = people[people.length - 1];
//  console.log(last);


 //Exercise 3


//  let num = prompt("Please enter a number: ");
//  console.log(num);
//  a = parseInt(num);
//  console.log(a);

//  do{ 
//    a = prompt("Please enter a number: ");
//  }
//  while (a<10);
 
 //Exercise 4

//  let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }

//   let x = prompt ("Please enter your name: ");

//   if (x in guestList) {
//       let firstPart = ("Hi ! I'm "+x);
//       let secondPart = (", and I'm from "+guestList[x]);
//         let completeSent = firstPart + secondPart;
//         console.log(completeSent);
      
//   }
//   else {
//       console.log("Hi! I'm a guest.")
//   }

  //Exercise 5

 let family = {
    john: "Dad",
    johanna: "Mom",
    eve:"Daughter",
    gru:"Son",
    noam:"Second Son",
    shelly: "Pet1",
    bingo:"Pet2"
 }


 let keyArray = Object.keys(family);
 let valueArray = (Object.values(family));
 console.log(keyArray);
 console.log(valueArray);

 for (let i = 0; i < keyArray.length; i++) {
     console.log(keyArray[i]);
     
 }
 
 for (let j = 0; j < valueArray.length; j++) {
    console.log(valueArray[j]);
    
}


//Exercise 6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
 let keysArray = (Object.keys(details));
 console.log(keysArray);
  console.log(keysArray[0]+ " " + details.my+ " " + keysArray[1]+ " " + details.is+ " " + keysArray[2]+ " " + details.the);


  //Exercise 7

  let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

  let firstchar = names[0].charAt(0);
  let secondchar = names[1].charAt(0);
  let thirdchar = names[2].charAt(0);
  let fourthchar = names[3].charAt(0);
  let fifthchar = names[4].charAt(0);
  let sixthchar = names[5].charAt(0);
  let secret = [];
  console.log(firstchar);
  secret.push(firstchar);
  console.log(secondchar);
  secret.push(secondchar);
  console.log(thirdchar);
  secret.push(thirdchar);
  console.log(fourthchar);
  secret.push(fourthchar);
  console.log(fifthchar);
  secret.push(fifthchar);
  console.log(sixthchar);
  secret.push(sixthchar);
  console.log(secret);
  secret.sort();
  console.log(secret);