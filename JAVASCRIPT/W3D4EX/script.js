let x = 5;
let y = 2;

if (x > y) 
	{console.log ("x is the biggest number");	};


let newDog = "Chihuahua";
let n = newDog.length;
console.log(n);

let lower = newDog.toLowerCase();
console.log(lower);
let upper = newDog.toUpperCase();
console.log(upper);

if (newDog === "Chihuahua") 
{
	console.log("I love Chihuahuas, it's my favorite dog breed")
}
else {console.log("I dont care, i prefer cats")}


	let h = parseInt( prompt("Please enter a number:"));
if (h % 2 == 0) 
{
	console.log(`${h} is an even number`);
}
else {console.log(`${h} is an odd number`)};


let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "tim" , "fred","jim"];

if (users.length == 0) 
{
	console.log("no one is online");
}

else if (users.length == 1) 
{
	console.log(`${users[0]} is online`);
}

else if (users.length == 2) 
{
	console.log(`${users[0]} and ${users[1]} are online`);
}

else if (users.length > 2) 
{
	console.log(`${users[0]} , ${users[1]} and ${users.length = users.length - 2} more are online`);
}

