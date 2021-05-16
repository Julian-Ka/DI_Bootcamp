let quotesArr = [
                {
                    id: 0,
                    author: "Duke Nukem",
                    quote: "It’s time to kick ass and chew bubble gum… and I’m all outta gum.",
                    likes: 0
                }, 
                {
                    id:1, 
                    author: "Castlevania", 
                    quote:"What is a man? A Miserable little pile of secrets!",
                    likes: 0
                }, 
                {
                    id:2,
                    author:"G-man (Half Life 2)",
                    quote:"The right man in the wrong place can make all the difference in the world.",
                    likes: 0
                },
                {
                    id: 3,
                    author: "Fallout",
                    quote: "War… war never changes",
                    likes: 0
                }, 
                {
                    id: 4,
                    author: "The Legend of Zelda",
                    quote: "It’s dangerous to go alone, take this!",
                    likes: 0
                }, 
                {
                    id: 5,
                    author: "Dark Souls",
                    quote: "Praise the sun!",
                    likes: 0
                }, 
                {
                    id: 6,
                    author: "GTA IV",
                    quote: "War is where the young and stupid are tricked by the old and bitter into killing each other.",
                    likes: 0
                }, 
                {
                    id: 7,
                    author: "Bioshock",
                    quote: "A man chooses; a slave obeys.",
                    likes: 0
                }, 
                {
                    id: 8,
                    author: "Deckard Cain",
                    quote: "Stay awhile and listen!",
                    likes: 0
                },
                {
                    id: 9,
                    author: "Resident Evil: Umbrella Chronicles",
                    quote: "The only thing that can defeat power, is more power",
                    likes: 0
                }, 
                {
                    id: 10,
                    author: "Dark Souls",
                    quote: "What is bravery, without a dash of recklessness?",
                    likes: 0
                },
                {
                    id: 11,
                    author: "Dark Souls",
                    quote: "You died!",
                    likes: 0
                },  
            ]





                  console.log(quotesArr)
let test;
function generateQuote() {
let randomNumber = Math.floor(Math.random() * (quotesArr.length));
console.log(randomNumber)
test = randomNumber;
test = test+2;
console.log(test)
test = Math.floor(Math.random() * (quotesArr.length));
console.log(test)
console.log("------------------------------------------"),
document.getElementById('Quotes').innerHTML = quotesArr[test].quote
document.getElementById('Author').innerHTML = quotesArr[test].author
document.getElementById('likes').innerHTML='';

}

//generateQuote();

let meow;

function addQuote() {
    let newID = quotesArr.length 
    let a = document.getElementById('newQuote').value
    let b = document.getElementById('newAuthor').value
    let c = 0
    let meow = {id: newID, quote:a, author:b, likes:c}
    quotesArr.push(meow);
    document.getElementById('newQuote').value='';
    document.getElementById('newAuthor').value='';
}


const countCharsSpace = () => {

    let numberChars = (quotesArr[test].quote.length)
    alert(`This Quote has ${numberChars} characters. Including space`)


}
let count = 0;

const countChars = () => {
    for (let i = 0; i < quotesArr[test].quote.length; i++) {
        if (quotesArr[test].quote[i] !== ' ')
         count++;
        
    }
    alert(`This Quote has ${count} characters. Excluding space`)
}

const numWords = () => {
    let numOfWords = quotesArr[test].quote.split(" ")
    alert(`This Quote has ${numOfWords.length} words!`)
}

const likes = () => {

let like = 0
like = quotesArr[test].likes ++
console.log(like)
document.getElementById('likes').innerHTML = quotesArr[test].likes
}


let test6 = [];
let test5;
const searchAuthor = () => {
    
        test5 = document.getElementById('searchAuthor').value
        document.getElementById('searchResult').innerHTML = "";
       for (let i = 0; i < quotesArr.length; i++) {

           if (test5 == quotesArr[i].author) {
               test6.push(quotesArr[i].quote)

               document.getElementById('searchResult').innerHTML = (` quote by the author ${test5} is.... ${test6[0] }`)
           }
           

       }
       //test6.length = 0;
}
let n = 0;
const nextQuote = () => {
    // for (let n = 0; n < 1; n++) {
    //     document.getElementById('searchResult').innerHTML = (`another quote by author ${test5} is ${test6[n]}`)
        
    // }
    n = n+1
    if (n < test6.length) {
    document.getElementById('searchResult').innerHTML = (`another quote by author ${test5} is ${test6[n]}`)
    }
    else(document.getElementById('searchResult').innerHTML = ("no next quote"))
}

const prevQuote = () => {
    n = n-1
    if (n >= 0) {
        document.getElementById('searchResult').innerHTML = (`quote by the author ${test5} is ${test6[n]}`)  
    }
   else(document.getElementById('searchResult').innerHTML = ("no prev quote"))
   
}
