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



// let person = {
//     firstName: "shoaib",
//     lastName: "khan",
//     age: 23,
//     education: "bscs",
// }
//     console.log(person.firstName)
    
//     lastName = "akhtar";

//     console.log(person.lastName)



//     const myArr = [0, 1, 2, 3, 4, 5];
//     console.log(myArr[2]);

//     myArr.push(6);
//     console.log(myArr)

//     myArr.push(7);
//     console.log(myArr)

//     myArr.pop();
//     console.log(myArr)

//     myArr.shift();
//     console.log(myArr)

//     myArr.unshift(9);
//     console.log(myArr)

//     myArr.slice(1, 3);
//     console.log(myArr)

//     console.log(myArr.includes(8));
//     console.log(myArr.indexOf(4));
//     console.log(myArr.length)

// const name = prompt("enter your name");
// const age = prompt("enter your age");
// const mathsMarks = +prompt("enter your maths marks");
// const urduMarks = +prompt("enter your maths urdu");
// const englishMarks = +prompt("enter your maths english");



// const totalMarks = 300;
// alert(totalMarks);
// const obtainedMarks = mathsMarks + englishMarks + urduMarks;
// alert(obtainedMarks);
// const percentage = obtainedMarks * 100 / totalMarks;
// alert(percentage);


// if (percentage >= 90 && percentage <= 100){
//     alert("A+ Grade");
//     if (percentage >= 90){
//         alert("Reward him 10k")
//     }
// } else if (percentage >= 80 && percentage <= 89){
//     alert("A Grade");
// } else if (percentage >= 60 && percentage <= 79){
//     alert("B grade");
// } else if (percentage >= 50 && percentage <= 69){
//     alert("C grade");
// } else if (percentage <50){
//     alert("FAiled");
// }

// for (let i = 0; i <= 10; i++){
//     const element = i;
//     if (element == 6){
//         console.log("6 is best number");
//     }
//     console.log(element)
// }

// for (let i = 1; i <= 100; i++){
//     console.log(`outer loop : ${i}`);
//     for (let j = 1; j <= 10; j++){
//        console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }

for (let index = 1; index <= 20; index++){
    console.log(index);
    if (index == 8){
        console.log("number 8 is detected");
        continue
    }
}








