
// Element Silme


const taskList = document.querySelector("#task-list");

//taskList.remove();   // hepsini siler

//taskList.childNodes[7].remove();   // biraz kafa karıştırıcı

//taskList.children[1].remove();   // bu çok daha pratik

//taskList.removeChild(taskList.children[3]);  // bu da var


// Attribute Silme

//taskList.children[1].removeAttribute("class");

for(let i=0;i<taskList.children.length;i++)
{
    taskList.children[i].removeAttribute("class");  // hepsini siler
}

console.log(taskList);