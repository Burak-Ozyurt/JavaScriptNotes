// Tarayıcıların Depolama Alanları

// Local Storage


// setItem

// localStorage.setItem("programlama","javascript");
// localStorage.setItem("bilgisayar",1221);


// getItem

// const value = localStorage.getItem("bilgisayar");
// console.log(value);
// console.log(typeof value);    //1221 string olarak kayıtta


// clear

//localStorage.clear();


// console.log(localStorage.getItem("klavye"));   //olmazsa değer null yazar

if(localStorage.getItem("klavye") === null)
{
    console.log("Sorgulanan Veri Bulunamadı!");
}
else
{
    console.log("Sorgulanan Veri Bulundu!");
}
    

