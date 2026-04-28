
// To-do Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
    // submit eventi
    form.addEventListener("submit", addNewItem);

    // delete eventi
    taskList.addEventListener("click", deleteItem);

    // delete all eventi
    btnDeleteAll.addEventListener("click",deleteAllItems);

}


function addNewItem(e) {
    if (input.value == ' ') {
        alert("yeni item ekle!")
        // console.log("submit");
    }

    // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));


    // a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

    input.value = "";

    e.preventDefault();
}


// Eleman Silme 

function deleteItem(e) {
    if (confirm("Silmek İstediğinize Emin Misiniz?")) {
        if (e.target.className === "fas fa-times") {
            //console.log(e.target);
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}


// Tüm Elemanları Silmek

function deleteAllItems(e)
{
    if(confirm("Tüm Elemanları Silmek İstediğinize Emin Misiniz?"))
    {
        taskList.childNodes.forEach(function(item){
            //console.log(item);
            if(item.nodeType === 1)
            {
                item.remove();
            }
        });
    }

 //   taskList.innerHTML = ""; ====> Alternatif olarak
}