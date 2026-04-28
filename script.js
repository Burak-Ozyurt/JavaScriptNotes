
// To-do Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;


// itemleri yükleme

loadItems();


eventListeners();

function eventListeners() {
    // submit eventi
    form.addEventListener("submit", addNewItem);

    // delete eventi
    taskList.addEventListener("click", deleteItem);

    // delete all eventi
    btnDeleteAll.addEventListener("click", deleteAllItems);

}


function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    });
}


// get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));   // arraye dönüştürmek için
    }
    return todos;
}


// set item to local storage
function setItemToLS(newTodo)
{
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function createItem(newTodo) {
    // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo));


    // a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
}


function addNewItem(e) {
    if (input.value.trim() === '') {
    alert("yeni item girin!");
    return; // Fonksiyonun devam etmesini engeller
}


    // item oluşturma

    createItem(input.value);

    setItemToLS(input.value);


    input.value = "";

    e.preventDefault();
}


// Eleman Silme 

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek İstediğinize Emin Misiniz?")) {
            //console.log(e.target);
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}


// Tüm Elemanları Silmek

function deleteAllItems(e) {
    if (confirm("Tüm Elemanları Silmek İstediğinize Emin Misiniz?")) {
        // taskList.childNodes.forEach(function (item) {
             //console.log(item);
        //     if (item.nodeType === 1) {
        //         item.remove();
        //     }
        // });
    }

    // Alternatif
       taskList.innerHTML = ""; 
}