// const val = 0;

// console.log(val);

// // val = 1;

// const val2 = { id: "1", name: "tom" };
// console.log(val2);

// val2.id = 100;
// console.log(val2);

// const name = "Tom";
// const age = 43;

// console.log(`My name is ${name}. ${age} years old.`);

// let val3 = 10;
// console.log(val3);
// val3 = 11;
// console.log(val3);

// function func1() {
//   console.log("This is func1");
// }

// func1();

// const func2 = function () {
//   console.log("This is func2");
// };

// func2();

// const func3 = () => console.log("This is func3");

// func3();

// const myProfile = {
//   nameA: "Tom",
//   ageA: 43
// };

// const message1 = `My name is ${myProfile.name}. ${myProfile.age} years old.`;

// console.log(message1);

// const { nameA, ageA } = myProfile;

// const message2 = `My name is ${nameA}. ${ageA} years old.`;
// console.log(message2);

// const sayHello = (name = "Bob") => {
//   console.log(`Hello, ${name}.`);
// };

// sayHello("Tom");
// sayHello();

// const arr1 = [1, 3];
// // const [a, b, c, d, e] = ...arr1;
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [39, 50];

// const arr6 = arr4;
// const arr7 = [...arr4];

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// arr7[0] = 200;
// console.log(arr7);
// console.log(arr4);

// const arr77 = [...arr4, ...arr7];
// console.log(arr77);

// const nameArr = ["Tom", "Bob", "Jhon"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// nameArr.map((name, index) => console.log(`${index}: ${name}`));

// const newNameArr = nameArr.map((name) =>
//   name === "Tom" ? name : "Mr. " + name
// );

// console.log(newNameArr);
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "Input number";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "under 100";
// };

// console.log(checkSum(100, 11));
// console.log(checkSum(10, 11));

console.log(0 || 10);
console.log(20 || 0);

console.log(1 && 2);
console.log(0 && 100);
