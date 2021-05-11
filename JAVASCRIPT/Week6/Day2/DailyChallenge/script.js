const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   //1. Create an array using forEach that contains all the usernames from
   // GameInfo Array + added ! to the end of every username
// let userNameArray = [];
//    gameInfo.forEach(element => {
//        let b = element.username + "!";
//        userNameArray.push(b);
    
//    });
//    console.log(userNameArray);


//2. Create an array usiing forEach that contains the usernames of all players with a score
// bigger then 5
//    let userNameArray = [];
//    gameInfo.forEach((element ) => {

//     if (element.score > 5) {
//        let b = element.username + "! " + "Score:" + element.score;
//        userNameArray.push(b);
//     }
//     else return;
     
    
// });
//    console.log(userNameArray);


//3. Find and display the total score of the users
//   let b = 0;
//    gameInfo.forEach(element => {
//          b = b +  element.score;
        
        

//     });
//     console.log(b);