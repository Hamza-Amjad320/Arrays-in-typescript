// // functions in typescript

// function add(x : number, y : number){
//     return x+y
// }
// console.log(add(4,8));




// // // array 

// let myname =[
//     "hamza","haris"
// ]
// console.log(myname);

// let num :number[]=[888,
//     22,
//     22,
//     2222222222
// ]
// console.log(num);

// let mixArray: any|unknown = ["hamza", 55, true]
// console.log(mixArray);

// let fruitarray =[
//     ["apple"],
//     ["mango", "sweet and yellow"],
//     ["peach","sweet and sour","orange and yellowish"],
// ]
// console.log(fruitarray);

// let person=[{
//     name: "hamza",
//     class:9,
//     enroll:true

// },
// {
//     name : "ali",
//     class : 7,
//     enroll : false
    
// }














// ]
// console.log(person);
// Anonymous function jis ka koi name nahi hota 
 // let add1 = function(x: number ,y:number) {
 //       console.log(x - y);
      
 // }
 // add1(8,5)

 // immediately function

// (function(name :string) {
//     console.log(`my father name is${name}`);
    
//   }) ("amjad")

// Array
// let myfrndname1:string[]=["hamza","hammad","haris","ali"]
// console.log(myfrndname1[3]);
// console.log(myfrndname1);
// console.log(myfrndname1.length);

// Multi type Array
// let frndname2: (string|number|boolean)[]=[99999999,32,"hamza",true]
// console.log(frndname2[3]);
// console.log(frndname2);
// console.log(frndname2.length);

// Array of Array
// let matrix3:number[][]=[
//     [1,2,3,4
//     ],
//     [5,6,7,8,9],
//     [10,11]
// ]
// console.log(matrix3[2]);
// console.log(matrix3);
// console.log(matrix3.length);

// tuple Array
// let array :[string,number,boolean] =["hamza",32,true]
// console.log(array);


//using the generics
// let ali :Array<string>=[
//     "hamza",
//     "ali",
//     "hammad"
// ]
// console.log(ali.reverse());

//   simple function 
// function add(x:number,y:number) {
//     return (x + y)
// }
// console.log(add(5,8));

// Anonymous function

// let add1=function(x:number,y:number) {
//     return(x-y)
    
// }
//  console.log(add1(2,6));


// function box(name :string,...eidi :number[]) {
//     console.log(...eidi);
//     return name + eidi

    
// }

// console.log(box("hamza",100+60+200+150+30+10))

// ternory operator


// let student = true
// let message = student ? "student" : "not student"
// console.log(`yes, i am a student ${message}. `);


// switch case 

// let day = "monday"
// switch (day) {
//     case "sunday":
//         console.log("today is holyday");
//          break;
//         case "monday":
//             console.log("go to school");
//             break
//     default:
//         console.log("case not match");
        
//         break;
// }


