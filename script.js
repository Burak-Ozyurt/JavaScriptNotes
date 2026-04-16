// Koşullu Durumlar (If-Else)

const firstName = "Burak";
const userName = "burakozyurt";
const age = 21;
const isStudent = true;
const school = "university";

if (userName == "burakozyurt") {
    console.log("Merhaba Burak");
}
else {
    console.log("Kullanıcı bulunamadı!");
}

// if (age === 21)    // 3 eşittir hem veriyi hem de tipi sorgular
// {
//     console.log("Yaşınız: 21");
// }

if (isStudent)  // (isStudent === true aynı)
{
    console.log("Hangi bölümde okuyorsun?");
}
else {
    console.log("Hangi mesleği yapıyorsunuz?");
}

if (age >= 18) {
    if (school == "university") {
        console.log("Ehliyet alabilirsin");
    }
    else {
        console.log("Eğitim durumun ehliyet alabilmek için yeterli değil!");
    }
}
else {
    console.log("Ehliyet alacak yaşa daha gelmedin!");
}

let id = "23132";
if (typeof id != "undefined") {
    console.log("id: " + id);
}
else {
    console.log("no id!");
}


// Switch Koşul Yapısı

// let islem = 1;

// switch (islem) {
//     case 1:
//         console.log("1 no'lu işlem yapıldı");
//         break;
//     case 2:
//         console.log("2 no'lu işlem yapıldı");
//         break;
//     case 3:
//         console.log("3 no'lu işlem yapıldı");
//         break;
//     default:
//         console.log("İşlem yapılmadı!");
// }


// let day;

// switch (new Date().getDay())
// {
//     case 0:
//         console.log("Pazar");
//         break;
//     case 1:
//         console.log("Pazartesi");
//         break;
//     case 2:
//         console.log("Salı");
//         break;
//     case 3:
//         console.log("Çarşamba");
//         break;
//     case 4:
//         console.log("Perşembe");
//         break;
//     case 5:
//         console.log("Cuma");
//         break;
//     case 6:
//         console.log("Cumartesi");
//         break;
// }

// console.log(day);


let hour = 16;

switch (true)
{
    case (hour >= 6 && hour <= 12):
        console.log("Günaydın!");
        break;
    case (hour >= 13 && hour <= 18):
        console.log("İyi Günler!");
        break;
    case (hour >= 19 && hour <= 24):
        console.log("İyi Akşamlar!");
        break;
    default:
        console.log("Yanlış Zaman!");
}


// Object Literals

// let name = "Burak";
// let lastName = "Özyurt";
                       // Bu yöntemlerle birden fazla oldu mu karışık oluyor
// let burak = ["Burak","Özyurt",21,];
// let nisa = ["Nisa","Koçak",20];

let veri;
let person = {
    personName : "Burakozyrt",
    personFirstName : "Burak",
    personLastName : "Özyurt",
    personAge : 21,
    hobbies : ["espor","yazılım",],
    address : {
        city : "Konya",
        country : "Türkiye",
        phone : "0500000000",
    }
}

veri = person;
veri = person.address;
veri = person.personFirstName;
veri = person.hobbies;
veri = person.address.city;
veri = person.address.phone;

console.log(veri);
console.log(typeof person);