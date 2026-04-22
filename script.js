
// Keyboard Eventleri

const text = document.getElementById("txtTaskName");


// focus eventi
//text.addEventListener("focus",run);   // elemana input girişinde


// blur eventi
//text.addEventListener("blur",run);    // focustan sonra dışarı dokununca


// paste eventi
//text.addEventListener("paste",run);


// copy eventi
//text.addEventListener("copy",run);


// cut eventi
//text.addEventListener("cut",run);


// select eventi
//text.addEventListener("select",run);


// keydown eventi
//text.addEventListener("keydown",run);   // tuşa basış anı


// keyup eventi
text.addEventListener("keyup",run);     // tuşun bırakılması



function run(e)
{
    console.log(e.type);
    console.log(e.target.value);
}