import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = inputText;

  div.appendChild(p);

  li.appendChild(div);

  document.getElementById("impomplete-list").appendChild(li);

  // console.log(li);
};

// document.getElementById("add-button").addEventListener("click", () => {
//   onClickAdd();
// });

document.getElementById("add-button").addEventListener("click", onClickAdd);
