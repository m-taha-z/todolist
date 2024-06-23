let btn = document.getElementsByClassName("button")[0];
let form = document.getElementsByTagName("form")[0];
console.log(form);
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let waper = document.querySelector(".waper");
renderInUI();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = {
    title: e.target.name.value,
    id: generateUIID(),
    isfinesht: false,
  };
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderInUI(todos);
  form.reset();
});
function renderInUI() {
  waper.innerHTML = "";

  todos.forEach((todo) => {
    let div = document.createElement("div");
    div.innerHTML = "";
    div.innerHTML = `
        <div class="card">
            <div class="p">
                <h2>${todo.title}</h2>
            </div>
            <div class="btn">
                <div class="ok">
                    <i class="fa-regular fa-square-check"></i>
                </div>
                <div class="delete" id='${todo.id}'>
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
        </div>`;
    waper.appendChild(div);
  });
}
btn.classList.contains;
delet();
function delet() {
  waper.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      console.log(e.target.id);
      let id = e.target.id;
      todos = todos.filter((item) => item.id != id);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderInUI();
    }
  });
}
function generateUIID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
