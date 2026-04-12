// alert("Welcome to my web site for learning javascript");
// console.log("Welcome")
// console.log(123)
// console.error("Hata oluştu")
// console.warn("Uyarı aldınız")
// console.clear() =======> konsolu temizledik

// ----------------------------------------------------------------------------------------

// Değişkenler
// var password;
// console.log(password) // undefined yazar

// password = "burak"
// console.log(password)

// yas = 25;
// console.log(yas)


// Değişken Tanımlama Kuralları

// 1-) Değişken isimleri rakam ile başlayamaz
// 2-) Değişken isimlerinde komut isimleri kullanılamaz (if,for vb.)
// 3-) Değişken isimlerinde türkçe karakter kullanılmamalı

// var adSoyad = "Burak Özyurt"
// console.log(adSoyad)

// const email = "12345@gmail.com"
// console.log(email)

// email = "4342@gmail.com"  // burda hata verir üstte const yapmıştık
// console.log(email)

// ----------------------------------------------------------------------------------------
  
// Değişken Türleri

// Primitive Types

// String
// let firstName = "Burak";
// console.log(typeof firstName)

// Number
// let age = 21;
// console.log(typeof age)

// Boolean
// let kredi_kullanimi = false;
// console.log(typeof kredi_kullanimi)

// Undefined
// let phone;
// console.log(typeof phone)


// Reference Types (Objects)

// Array
// let liste = ["Döndü", "Muhammet", "Nisa", "Burak"]
// console.log(typeof liste)

// Object Literals
// let address = {
//     city: "İstanbul",
//     country: "Türkiye",
// }
// console.log(typeof address)

// Function
// var hesapla = function(){
//     return 0;
// }
// console.log(typeof hesapla)

// ----------------------------------------------------------------------------------------

// Operatörler
// let veri;
// const a = 20;
// const b = 10;
// let c = 5;

// 1-) Aritmetik Operatörler

// veri = a+b;
// veri = a-b;
// veri = a*b;
// veri = a/b;
// veri = c++;   //burda artıyo değeri ama hala 5 yazar
// veri = ++c;   //burda direkt 6 yazar
// veri = c--;
// veri = --c;
// 2-) Atama Operatörleri

// veri = a;
// veri += a;   // veri = veri + a;
// veri -= a;   // veri = veri - a;
// veri *= a;   // veri = veri * a;
// veri /= a;   // veri = veri / a;
// veri %= a;   // veri = veri % a;

// 3-) Karşılaştırma Operatörleri

// veri = a==b;  // false
// veri = 5=="5";   //true sayıya bakıyor
// veri = 5==="5";   //false hem sayıya hem de türe bakıyo
// veri = a!=b;
// veri = a!==b;
// veri = a>b;
// veri = b<c;
// veri = 5>=5;
// veri = b<=c;

// 4-) Mantıksal Operatörler

// && (and)
//veri = (a>b) && (a>c);

// || (or)
// veri = (b>a) || (a>c);

// /  !(not) 
// veri = !(a>b);

// console.log(veri);
// console.log(typeof veri);


// ----------------------------------------------------------------------------------------


// Date Object

// let zaman = new Date();
// let birthday = new Date(2004,9,4);

// Set Methods
// zaman.setDate(25);   //ayın 25i oldu
// zaman.setMonth(3);   // 0 ocak ona göre
// zaman.setFullYear(2030);  
// zaman.setHours(20);


// Get Methods
// console.log(zaman.getMonth()); //0dan başlıyor
// console.log(zaman.getDate());  //ayın kaçı
// console.log(zaman.getFullYear());  //yılı gösterir
// console.log(zaman.getDay());   //pazar 0 ona göre artıyor
// console.log(zaman.getHours());   //saati gösterir
// console.log(zaman.getMinutes());   //dakikayı gösterir
// console.log(zaman.getSeconds());   //saniyeyi gösterir
// console.log(zaman.getMilliseconds());  //milisaniyeyi gösterir

// console.log(zaman.getFullYear() - birthday.getFullYear());
  
// console.log(zaman);
// console.log(typeof zaman);


// ----------------------------------------------------------------------------------------

// Numbers

//let sayi;
// sayi = Number("5");
// sayi = parseInt("5");   //böyle de yapılıyor
// sayi = parseFloat("5.5");
// sayi = parseInt("5a");    // sadece 5 yazar
// sayi = parseInt("a5");    //NaN hatası verir
// sayi = isNaN("asd3");       //true verir

// var sayi2 = 15.23424234;
// sayi = sayi2.toPrecision(3);    //soldan 3 basamak
// sayi = sayi2.toFixed(3);        //virgülden sonra 3 basamak

// sayi = Math.PI;
// sayi = Math.round(3.5);         //4e yuvarlar
// sayi = Math.ceil(3.2);          //her şekilde bi üst sayıya yuvarlar
// sayi = Math.floor(8.2);         //her şekilde bi alt sayıya yuvarlar
// sayi = Math.pow(3,4);           //3 üssü 4
// sayi = Math.sqrt(19);           //karekök alma
// sayi = Math.abs(-48);           //mutlak değer
// sayi = Math.min(1,2,5,8,2.1,0.9);
// sayi = Math.max(1,2,5,8,2.1,0.9);
// sayi = Math.random();           //0 ile 1 arası random
// sayi = Math.random()*10;        //0 ile 10 arası
// sayi = Math.floor(Math.random()*10);    //sadece sayıyı

// console.log(sayi);
// console.log(typeof sayi);


// ----------------------------------------------------------------------------------------


// Strings

// const firstname = "Burak";
// const lastname = "Özyurt";
// const age1 = "21";
// const hobbies = "espor love futbol yazılım";

// let result;

// String birleştirme
// result = firstname + " " + lastname;

// result = 'Benim adım ' + firstname + ' ' + lastname + ' yaşım ' + age1 + ' ve Konya\'da yaşıyorum';

// result = firstname.concat(' ', lastname);

// result = result.toUpperCase();
// result = result.toLowerCase();

// result = result.substring(3,7); //3 dahil 7değil
// result = result.slice(3,7);

// result = result.indexOf("r");

// result = result.replace("burak", "nisa");

// result = result.length;

// result = hobbies.split(" ");        //dizinin elemanları gibi ayırdı


// console.log(result)
// console.log(typeof result)


// ----------------------------------------------------------------------------------------


// Diziler

let names = ["burak","nisa","hasan","utku","ahmet"];
let years = [2004,2005,2002,2002,2004];
let mix = ["burak","ozyurt",2004,null,undefined,["programming","espor"]];

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);

// dizi elemanı bulma

console.log(names[0]);

// dizi elemanı değiştirme

names[0]="muhammet";

names[6]="ömer";        //boş yer atlaadığım için empty yazıyor 5.elemanda


names[names.length]="mehmet"; //uzunluğa bakıp sona ekler
console.log(names);

// dizi eleman ekleme

// names.push("ali");   //sona


names.unshift("ali");  //başa
console.log(names);

// dizi eleman silme

years.pop();            //en sondaki yılı siler
console.log(years);

years.shift();          //baştaki yılı siler
console.log(years);


// indexOf metodu

let index = names.indexOf("muhammet");
console.log("index: " + index);

names.reverse();            //diziyi ters çevirir
console.log(names);

years.sort();               //küçükten büyüğe sıralar
console.log(years);

names.sort();               //alfabye göre en sona 'empty'
console.log(names);

let veri = names.concat(years);         //dizileri birleştirme
console.log(veri);

names.splice(2,0,"kamil");          //2.indexe hiçbir şey silinmeden kamil ekle. 
console.log(names);

names.splice(2,2,"zeynep");         //2. indeksten itibaren tam 2 tane elemanı diziden sil
console.log(names);


