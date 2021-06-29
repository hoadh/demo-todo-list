let todoList = ["Việc 1", "Việc 2", "Việc 3"];

showList();

function add() {
    // lấy dữ liệu từ input
    let todo = document.getElementById("todo").value; // lấy giá trị từ input
    // xoá text trên input
    document.getElementById("todo").value = "";

    if (todo !== "") {
        todoList.push(todo);
        showList();
    }

}

function showList() {
    // thêm vào <ul>
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];

        let liElement = document.createElement("li");
        liElement.id = i;
        liElement.draggable = true;
        liElement.addEventListener("click", remove);
        liElement.addEventListener("drop", dropTodo);
        liElement.addEventListener("dragstart", dragTodo);
        liElement.addEventListener("dragover", dropTodo);
        liElement.innerHTML = todo;
        list.appendChild(liElement);
    }
    
}


function remove(event) {
    // xoá phần tử trong mảng todoList tại index đã cho
    let liElement = event.target;
    let index = liElement.id;
    todoList.splice(index, 1); // xóa todo khỏi todoList (mảng)
    showList();
}

function dragTodo(event) {
    let li = event.target;

    let index = li.id;       // vị trí
    let todo = li.innerHTML; // hiển thị

    event.dataTransfer.setData("index", index);
    event.dataTransfer.setData("todo", todo);
}

function dropTodo(event) {
    event.preventDefault();

    let oldIndex =  event.dataTransfer.getData("index");
    let oldTodo =  event.dataTransfer.getData("todo");

    let currentIndex = event.target.id;

    console.log(oldIndex, oldTodo, currentIndex);
    insertTodo(oldIndex, oldTodo, currentIndex);    
}

function allowTodo(event) {
    event.preventDefault();
}

function insertTodo(oldIndex, oldTodo, currentIndex) {

    const indexNumber = parseInt(oldIndex);
    console.log(indexNumber);
    if (isNaN(indexNumber)) return;

    todoList.splice(oldIndex, 1);
    todoList.splice(currentIndex, 0, oldTodo);

    console.log(todoList);
    showList();
}

// 1. Click vào 1 todo nào đó thì sẽ hoàn thành (xóa, hoặc gạch ngang todo đấy)
// 2. Lưu todo-list vào bộ nhớ (để mở lần sau thì vẫn thấy được danh sách việc cần làm)
// 3. Sửa style của app (CSS)