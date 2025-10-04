// ex. 1
// const arr = ["mama", "tata", "frate", "sora"];

// console.log(arr);

// let sentence = (array) => {
//   return array.join(" ");
// };

// console.log(sentence(arr));

//ex 2
// let string1 = "Ana";
// let string2 = "Alex";

// const compareStrings = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return -1;
//   }
//   let num = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) {
//       num++;
//     }
//   }
//   return num;
// };
// console.log(compareStrings(string1, string2));

// ex 3
// const word = "Alexandraa";
// const char = "a";

// const countChar = (str, ch) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === ch.toLowerCase()) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(countChar(word, char));

// ex 4
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];

// const mergeArrays = (a1, a2) => {
//   if (a1.length !== a2.length) {
//     throw new Error("Arrays must have the same length");
//   }

//   const newArray = [];

//   for (const i in a1) {
//     newArray.push(a1[i], a2[i]);
//   }

//   return newArray;
// };

// console.log(mergeArrays(arr1, arr2));

//ex 5

// const numbers = [1, 2, 3, 4, 5];

// const calculateMean = (arr) => {
//   const sum = arr.reduce((acc, el) => acc + el, 0);
//   const arrayLength = arr.length;

//   return sum / arrayLength;
// };
// console.log(calculateMean(numbers));
