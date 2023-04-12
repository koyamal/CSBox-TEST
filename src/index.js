import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  inputToIncompleteList(inputText);
};

// document.getElementById("add-button").addEventListener("click", () => {
//   onClickAdd();
// });

const inputToIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeText = completeButton.parentNode.childNodes[0].innerText;
    const p = document.createElement("p");
    p.innerText = completeText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      inputToIncompleteList(text);
    });

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");

    div.appendChild(p);
    div.appendChild(backButton);

    li.appendChild(div);

    document.getElementById("complete-list").appendChild(li);
    deleteFromIncompleteList(completeButton);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);

  document.getElementById("impomplete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  const deleteTarget = target.parentNode.parentNode;
  document.getElementById("impomplete-list").removeChild(deleteTarget);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
