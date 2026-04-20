
// -- Çoklu Element Seçimi --

// document.getElementsByClassName()

let veri;

//veri = document.getElementsByClassName("list-group-item");

//veri = document.getElementsByClassName("list-group-item")[0];  // 1.index sadece

//veri = veri[2];   // böyle de çağırılabilir farklı yöntem

// veri[1].style.fontSize = "30px";
// veri[1].style.color = "red";
// veri[2].textContent = "new item";
// veri[2].style.color = "orange";

// for(let i=0;i<veri.length;i++)
// {
//     console.log(veri[i].style.color="brown");
//     console.log(veri[i].textContent="new item");   // foreach yok o yüzden for ile hepsini aynı anda değiştirme 
// }


// document.getElementsByTagName() metodu   ===> Alternatif yöntemi

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");  // bütün a'lar liste içi dışı

//veri = document.getElementById("task-list").getElementsByTagName("a");  // liste içindeki a'lar


// document.querySelectorAll() metodu

veri = document.querySelectorAll("li");

veri.forEach(function(item, index)
{   
    item.textContent=`${index}-) item`;     // NodeList foreach olduğu için
});

console.log(veri);