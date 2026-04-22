
// Mouse Eventleri

const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");


// click eventi

// btn.addEventListener("click",run);
// ul.addEventListener("click",run);


// double click eventi

//btn.addEventListener("dblclick",run);    // 2 defa tıklayınca oluyo


// mouse down eventi

//btn.addEventListener("mousedown",run);


// mouse up eventi

//btn.addEventListener("mouseup",run);
// Tıklarken mousedown çalışıyor, bıraktığım an mouseup


// mouse enter eventi

//btn.addEventListener("mouseenter",run);   // üzerine gelince


// mouse leave eventi

//btn.addEventListener("mouseleave",run);   // üzerinden gidince


// mouse over eventi

//ul.addEventListener("mouseover",run);


// mouse out eventi

//ul.addEventListener("mouseout",run);
//Mouseover/out her alt elemanda "kabarcıklanıp" (bubbling) tekrar tekrar tetiklenirken, mouseenter/leave sadece ana kutunun sınırlarını baz alan daha temiz bir kontrol sağlar.


// mouse move eventi

ul.addEventListener("mousemove",run);
//Mousemove, fare eleman üzerinde hareket ettiği her pikselde kesintisiz tetiklenen ve genellikle anlık koordinat takibi (X, Y) yapmak için kullanılan en "hareketli" olaydır.



function run(event)
{
    console.log(`event type: ${event.type}`);
}