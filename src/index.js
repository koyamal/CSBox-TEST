import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  // alert("hello");
};

// document.getElementById("add-button").addEventListener("click", () => {
//   onClickAdd();
// });

document.getElementById("add-button").addEventListener("click", onClickAdd);
