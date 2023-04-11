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

const func3 = () => {
  console.log("This is func3");
};

func3();
