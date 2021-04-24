let a = "*";
 console.log(a);

for (let index = 0; index < 5; index++) {
    a = a +"*";
    console.log(a);
}


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++")

for (let i = 0; i < 5; i+= 5) {
    let a = "*";
    console.log(a);
    for (let j = 0; j < 5; j++) {
    
        a = a+"*";
        console.log(a);
    }
}