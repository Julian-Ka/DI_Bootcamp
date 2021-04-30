let a;
let numNum=[];
let largest=0;
let words = prompt(" Enter some words seperated by commas").split(",");
console.log(words);
for (let index = 0; index < words.length; index++) {
    a = words[index].length;
    numNum.push(a)
    largest=(Math.max(...numNum));   
}

for (let index = 0; index < words.length; index++) {
    console.log(words[index]);  
}


console.log(largest);
let star = [];
for (let i = -3; i <= largest; i = i+2) {
    star.push("*");  
}
console.log(star);

let newStar = star.join("*");
console.log(newStar);
 
 for (let index = 0; index < words.length; index++) {
    
    //console.log(`* ${words[index]} *`);  
    let newWord = words[index].padEnd(largest);
    console.log(`* ${newWord} *`);
}
console.log(newStar);

