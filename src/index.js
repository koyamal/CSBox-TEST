const val = 0;

console.log(val);

// val = 1;

const val2 = { id: "1", name: "tom" };
console.log(val2);

val2.id = 100;
console.log(val2);

const name = "Tom";
const age = 43;

console.log(`My name is ${name}. ${age} years old.`);

let val3 = 10;
console.log(val3);
val3 = 11;
console.log(val3);

function func1() {
  console.log("This is func1");
}

func1();

const func2 = function () {
  console.log("This is func2");
};

func2();

const func3 = () => console.log("This is func3");

func3();

const myProfile = {
  nameA: "Tom",
  ageA: 43
};

const message1 = `My name is ${myProfile.name}. ${myProfile.age} years old.`;

console.log(message1);

const { nameA, ageA } = myProfile;

const message2 = `My name is ${nameA}. ${ageA} years old.`;
console.log(message2);

const sayHello = (name = "Bob") => {
  console.log(`Hello, ${name}.`);
};

sayHello("Tom");
sayHello();

const arr1 = [1, 3];
// const [a, b, c, d, e] = ...arr1;
console.log(...arr1);

const sumFunc = (num1, num2) => {
  console.log(num1 + num2);
};

sumFunc(...arr1);
