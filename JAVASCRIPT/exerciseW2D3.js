let icecreamShop = {
	address : "Tel Aviv",
	dateOfCreation : 1987,
	flavours : ["vanilla", "chocolate", "caramel"],
	scoops : [1, 2, 3, "bucket"],
	employees : {
		names : ["David", "John"],
		salary : [2000, 1800],
		currency : "$"
	}
};

// console.log (icecreamShop.employees.names[1])

console.log (`${icecreamShop.employees.names[1]} has a salary of ${icecreamShop.employees.currency} ${icecreamShop.employees.salary[1]} `);


icecreamShop.employees.names.push("Franck");
console.log(icecreamShop);
