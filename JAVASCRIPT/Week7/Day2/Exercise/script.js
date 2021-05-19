// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ------2------
// const country = "USA";
// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//Exercise 2

// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

            
    //    const greetingUser = users.map((item) => {
    //         const container = `hello ${item.firstName}`

    //         return container;

    //    });
    //    console.log(greetingUser)

    //    const filterUser = users.filter((item) => {
    //         return item.firstName && item.role == 'Full Stack Resident';
            
    
    //    });

    //   console.log(filterUser)

    //   filterUser.forEach(element => {
    //       console.log(`congratulations ${element.firstName}`)
          
    //   });

    //Exercise 3 

    // let epic = ['a ', 'long ', 'time ', 'ago ', 'in a ', 'galaxy ', 'far far ', 'away'];

    // const starWars = epic.reduce ((item, nextitem) => {
    //         return item + nextitem;

    // })
    // console.log(starWars)

    //Exercise 4
    let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

             const filterStudent = student.filter((item) => {
                        return item.name && item.isPassed === true

             });
             console.log(filterStudent);

             filterStudent.forEach(element => {
                       console.log(`congratulations ${element.name}`)
                      
                  });