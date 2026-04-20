
// Elementlerin Seçilmesi

// -- Tek Element Seçimi --

// document.getElementById() metodu

let veri;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;
// veri = document.getElementById("header").className;

// veri = document.getElementById("header");  
//veri = veri.id;         // uzun uzun yapmak yerine böyle de olur
//veri = veri.className;

// veri.style.color = "blue";
// veri.style.fontSize = "50px";
//veri.style.fontWeight = "bold";
//veri.style.display = "none";

// document.getElementById("header").innerText = "Yapılacaklar";
// document.getElementById("header").innerText = "<b> Yapılacaklar </b>";  // burda ekranda <b> kısımları da yazıyor. Ondan dolayı innerText yerine innerHTML
// document.getElementById("header").innerHTML = "<b> Yapılacaklar </b>";

// console.log(veri);


// document.querySelector() metodu

//console.log(document.querySelector("#header"));
//console.log(document.querySelector(".card-header"));
//console.log(document.querySelector("div"));

// document.querySelector("li").style.color = "blue";  // ilk elemanı yaptı
// document.querySelector("li:last-child").style.color = "orange";   // son elemanı
// document.querySelector("li:nth-child(2)").style.color = "brown";

document.querySelector("li").className = "list-group-item list-group-item-danger";   // class değişimi

document.querySelector("li").classList.add("active");