//task1

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends.splice(0, num)); // ["Ahmed", "Elham", "Osama"];

//----------------------------------------------------------
//task2

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

// console.log(friends.splice(1, 2)); // ["Eman", "Osama"]

//---------------------------------------------------------
//task3

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrTwo[2].concat(arrOne.reverse(), arrTwo[1], arrTwo[0]);

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//----------------------------------------------------------
//task4

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(2, 6).toUpperCase()); // ZERO

//-------------------------------------------------------------
//Task5

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// if (haystack.includes(needle) === true) {
//   console.log("Found!");
// }

//-------------------------------------------------------------
//Task6

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = arr2.slice(-2).concat(arr1[2]);

// console.log(allArrs.join("")); // Output: "FXY"

//----------------------------------------------------------------
//Task7

// let start = 10;
// let end = 100;
// let exclude = 40;
// for (let i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

//----------------------------------------------------------------
//Task8

// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i > end; i--) {
//   if (i < start) {
//     console.log(`${end}${i}`);
//   } else {
//     console.log(i);
//   }
//   if (i === stop) {
//     break;
//   }
// }

//----------------------------------------------------------------
//Task9

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   for (let j = start; j < end; j++) {
//     if (j % breaker == false) {
//       console.log(`--${j}`);
//     }
//   }
// }

//--------------------------------------------------------------
//Task10

// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index);
//   index -= jump;
//   if (index <= jump) break;
// }

//--------------------------------------------------------------
//Task11

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// for (let i = 0; i < friends.length; i++) {
//   let j = i;
//   if (friends[j] == "Ameer") {
//     j--;
//     continue;
//   }
//   console.log(`${j + 1}=> ${friends[i]}`);
// }

//--------------------------------------------------------------
//Task12
// let start = 0;
// let swappedName = "elZerO";
// let result = "";

// for (let i = 0; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toUpperCase()) {
//     result += swappedName[i].toLowerCase();
//   } else {
//     result += swappedName[i].toUpperCase();
//   }
// }
// console.log(result);

//--------------------------------------------------------------
//Task12

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start++; i < mix.length; i++) {
//   if (typeof mix[i] == "number") {
//     console.log(mix[i]);
//   }
// }

//--------------------------------------------------------------
//Task13

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (
    typeof friends[index] === "string" &&
    friends[index][index].toLowerCase() !== "a"
  ) {
    counter++;
    console.log(`${counter} => ${friends[index]}`);
  }
  index++;
}
