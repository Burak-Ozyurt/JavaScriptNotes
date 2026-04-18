
// Fonksiyonlar

// function merhaba()
// {
//     console.log("Merhaba");  // burda ekranda yazmaz
// }

// merhaba();


// function merhaba(name,age)
// {
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Burak",21);
// merhaba("Nisa",20);


// function yasHesapla(dogumYili)
// {
//      return 2026 - dogumYili;
// }

// console.log(yasHesapla(2004)); // böyle de olur

// let ageBurak = yasHesapla(2004);
// let ageNisa = yasHesapla(2005);

// console.log(ageBurak);
// console.log(ageNisa);


// function ehliyetDurumu(dogumYili,isim)
// {
//     let yas = yasHesapla(dogumYili);
//     let ehliyet = 18 - yas;

//     if (ehliyet>0)
//     {
//         console.log(`${isim} ehliyet alabilmen için ${ehliyet} yıl kaldı`);
//     }
//     else
//     {
//         console.log(`${isim} ehliyet alabilirsin!`);
//     }
// }

// ehliyetDurumu(2004,"Burak");
// ehliyetDurumu(2021,"Eylül");



// Window Objesi


//veri = window;

//console.log(veri);   // window içine veri atıldı


// alert

//alert("Merhaba!");


// prompt

//var data = prompt("Adınızı Giriniz: ");


// confirm

// data2 = confirm("Çıkmak İstediğinizden Emin Misiniz?");

// if(data2)     // if(data2 == true) aynısı
// {
//     console.log("Çıkış Gerçekleşti!");
// }
// else
// {
//     console.log("Çıkış Gerçekleşmedi!");
// }
//console.log(data2);    // false veya true döndürür


// location

//veri = window.location;         // hepsini verir
//veri = window.location.href;   // sadece server adı
//veri = window.location.hostname;  //127.0.0.1
//veri = window.location.protocol;  //http:

//window.location.href="https://www.udemy.com";
//window.location.reload();   //siteyi sürekli sürekli yükler

//window.navigator ===> tarayıcının "kimlik kartı" gibidir. Ziyaretçinin hangi tarayıcıyı kullandığı, işletim sistemi, dil ayarları ve hatta pil durumu gibi donanımsal bilgilerine ulaşmanı sağlar.
//window.document ===> sitenin html yapısına erişirsin
// bu iki yöntemi console'dan yaz

//console.log(veri); 



// Scope

// Global Scope

var veri1 = 5;  // global
let veri2 = 10;
const veri3 = 15;

// function fonksiyon()
// {
//     var veri1 = 30;
//     let veri2 = 40;
//     const veri3 = 50;

//     console.log(veri1,veri2,veri3);   // 30 40 50
// }
// fonksiyon();


// console.log(veri1,veri2,veri3);       // 5 10 15

if(true)
{
    var veri1 = 30;
    let veri2 = 40;
    const veri3 = 50;

    console.log(veri1,veri2,veri3);    // 30 40 50
}
console.log(veri1,veri2,veri3);        // 30 10 15 var blokta değişir

//console.log(a);
//console.log(b);    // blok içinde var kullandıysak geçerliliğini blok dışında da sürdürür ama let ve const sürdürmez
//console.log(c);    // hem blok içi hem blok dışı için var kullan


var admin_password = "1111";
// globalde 1111 ama blokta değişiyor. O yüzden burada var yerine let veya const kullan
// let ve const kullan
if(true)
{
    var admin_password = "2222";
}