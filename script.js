
// Event Listener ve Event Objesi

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click",function()
// {
//     console.log("Butona Tıklandı!");
// });


// btn.addEventListener("click",btnClick);    // 2.yöntem daha profesyonel (fonksiyonu dışarıdan çağırmak)
// btn2.addEventListener("click",btnClick);

// function btnClick()
// {
//     console.log("Butona Tıklandı!");
// };


btn.addEventListener("click",function(a)
{
    let value;
    value = a;
    value = a.target;
    value = a.target.id;
    value = a.target.classList;
    value = a.type;

    a.preventDefault();

    console.log(value);
});

