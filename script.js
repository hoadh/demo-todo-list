let todoList = [];

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
        liElement.addEventListener("click", remove);
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


// 1. Click vào 1 todo nào đó thì sẽ hoàn thành (xóa, hoặc gạch ngang todo đấy)
// 2. Lưu todo-list vào bộ nhớ (để mở lần sau thì vẫn thấy được danh sách việc cần làm)
// 3. Sửa style của app (CSS)