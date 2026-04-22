
// Event Bubbling

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");


// form.addEventListener("click",function(e)
// {
//     console.log("form");
//     e.stopPropagation();
// });

// cardBody.addEventListener("click",function(e)
// {
//     console.log("card body");
//     e.stopPropagation();
// });

// card.addEventListener("click",function(e)
// {
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click",function(e)
// {
//     console.log("container");
//     e.stopPropagation();
// });

//Sen en içteki form elemanına tıkladığında, olay bir su kabarcığı gibi yukarı doğru çıkar ve yol üstündeki tüm ebeveynlerin (card-body, card, container) tıklama dinleyicilerini de tetikler.
//e.stopPropagation(); ile önle



// Event Capturing

// form.addEventListener("click",function(e)
// {
//     console.log("form");
// },true);

// cardBody.addEventListener("click",function(e)
// {
//     console.log("card body");
// },true);

// card.addEventListener("click",function(e)
// {
//     console.log("card");
// },true);

// container.addEventListener("click",function(e)
// {
//     console.log("container");
// },true);

//Burada e.stopPropagation(); yaparsak forma tıklasak bile en dıştaki container yazacak consoleda

// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item)
// {
//     item.addEventListener("click",function(e)
// {
//     console.log(e.target);
// })
// });

const ul = document.querySelector("ul");

ul.addEventListener("click",function(e)
{
    if(e.target.className === "fas fa-times")
    {
        e.target.parentElement.parentElement.remove();
    }
})
