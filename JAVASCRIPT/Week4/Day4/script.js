
let counter = 0;
let i=99;
function beerSong() {
console.log("99 bottles of beer on the wall");
console.log("99 bottles of beer");
console.log("take 1 down pass it around");
    for (let index = 99; index > 0 ; index--) {

        if (i >= 9)
        {
            
        
       
      
               
           
        
        counter = counter + 1;
        //console.log(counter);
         i = i - counter;
        //console.log(i);
        console.log(`${i} bottles of beer on the wall`);
        console.log(`${i} bottles of beer `);
            if (i>=9) {
        console.log(`take ${counter+1} down, pass it around`);
            }
            else (console.log("take the rest down buy 99 new and start again"));
        }
        }
        
    
   
}

beerSong()