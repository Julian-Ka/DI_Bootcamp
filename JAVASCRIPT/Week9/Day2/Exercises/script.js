// //Exercise 1

// const compareToTen = (num) => {
//         let p = new Promise( (resolve, reject) => {
//                 if(num > 10) {
//                     resolve(`${num} is greater then 10, success`)
//                 }
//                 else {
//                     reject(`${num} is less then 10, error!`)
//                 }
    
//         })
//         return p;
//     }

//     compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


//Exercise 2
 //let promise1 = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         resolve('success')
        
//     },4000)



//Exercise 3

// Promise.resolve(3).then(function(value) {
//     console.log(value); // "Success"
//   }, function(value) {
//     // not called
//   });

// Promise.reject(new Error('Boo!')).then(function(error) {
//     // nicht aufgerufen
//   }, function(error) {
//     console.log(error); // Stacktrace
//   });


