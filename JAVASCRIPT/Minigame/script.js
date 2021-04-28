let random;
let userInput;
function playTheGame() {
    let choice = confirm("Do you want to play a game?"); 
            if (choice == true) {
                 userInput = prompt("Enter a Number between 0 and 10! ");
                 
                    if (isNaN(userInput)) {
                        alert("Not a number. Bye!");   
                    }
                    else if (userInput > 10) {
                        alert("This is not a good Number. Bye!");
                    }
                    else(
                        test(userInput,random = Math.floor(Math.random() * 11))
                       ) 
                     
            }
            
            else (alert("No Problem Bye!"));
           
            
            
}


function test(userNumber,computerNumber) {

    

    if (userInput == computerNumber) {
        alert("Winner!!!");   
    }

    for (let index = 0; index < 3; index++) {
    console.log(index);
    userInput = prompt("Enter a Number between 0 and 10! ");
    computerNumber = Math.floor(Math.random() * 11);
         
       
    
    if (userInput > computerNumber) {
        alert("Your number is bigger then the computers, guess again");
        //userNumber = prompt("Enter a Number between 0 and 10! ");
        //computerNumber = Math.floor(Math.random() * 11);
       
        
    }
    
    else if (userInput < computerNumber) {
        alert("Your number is smaller then the computers, guess again");
        //userNumber = prompt("Enter a Number between 0 and 10! ");
        //computerNumber = Math.floor(Math.random() * 11);
       
        
    }
    }
    alert("Out of chances");  
}


