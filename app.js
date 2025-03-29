//  OBJECTS IN JAVASCRIPTS

// function Car (model, year){
//     this.model = model;
//     this.year = year;
//     this.start = function(){
//         return model + "is going to drop the boss";
//     }
// }

//    document.write([car1,car2]);

// let car1 = new Car ("honda", 2024);
// let car2 = new Car ("toyota", 2020);



let person = {
    firstName: "shoaib",
    lastName: "khan",
    age: 23,
    education: "bscs",
}
    console.log(person.firstName)
    
    lastName = "akhtar";

    console.log(person.lastName)



    const myArr = [0, 1, 2, 3, 4, 5];
    console.log(myArr[2]);

    myArr.push(6);
    console.log(myArr)

    myArr.push(7);
    console.log(myArr)

    myArr.pop();
    console.log(myArr)

    myArr.shift();
    console.log(myArr)

    myArr.unshift(9);
    console.log(myArr)
    
    console.log(myArr.includes(8));
    console.log(myArr.indexOf(4));
    console.log(myArr.length)