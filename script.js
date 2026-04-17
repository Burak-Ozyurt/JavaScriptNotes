
// Döngüler (Loops)


// while

// let i = 0;
// while (i < 10)   // sonsuz döngü olur
// {
//     console.log(i);
//     i++; // i+=1
// }

// let i = 10;
// while (i > 0)
// {
//     console.log(i);
//     i--;
// }

// break ve continue

// let i = 0;
// while (i < 10)
// {
//     console.log(i);
//     if (i == 6)
//     {
//         break;
//     }
//     i++;
// }

// let i = 0;
// while (i < 10)
// {
//     if (i == 6)
//     {
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// do while

// let i = 0;
// do
// {
//     console.log(i);
//     i++;
// }
// while(i < 10);


// for

// for (let i=0;i<10;i++)
// {
//     console.log(i);
// }

// for (let i=0;i<10;i++)
// {
//     if (i==3)
//     {
//         console.log("Seçilen rakam:" + i);
//         break;
//     }
//     console.log(i);
// }

// let toplam = 0;

// for (let i=1;i<10;i++)
// {
//     toplam+=i;
// }
// console.log("Toplam: " + toplam);

// let sonuc = 1;

// for (let i=1;i<6;i++)
// {
//     sonuc*=i;
// }
// console.log("Sonuç: " + sonuc)



// Dizi ve Objelerde Döngüler


let cities = ["İstanbul","Konya","Ankara","Sakarya","İzmir"];

let users = 
[
    {firstName: "Burak",lastName:"Özyurt"},
    {firstName: "Nisa",lastName:"Koçak"},
    {firstName: "Hasan",lastName:"Demir"},
    {firstName: "Utku",lastName:"Çal"},
    {firstName: "Ahmet",lastName:"Yiğit"}
]

// Diziler

// for(let i=0;i<cities.length;i++)
// {
//     console.log(cities[i]);
// }


// for-in metodu

// for (let i in cities)
// {
//     console.log(`index: ${i} value: ${cities[i]}`);
// }

// cities.forEach(function(item){
//     console.log(item);
// });

// for (let i=0;i<users.length;i++)
// {
//     console.log(users[i].firstName);
// }

// for (let i in users)
// {
//     console.log(`index: ${i} value: ${users[i].firstName}`);
// }


// map metodu (dizilerde)

// let veri = users.map(function(item)
// {
//     return item.firstName + " " + item.lastName;
// });
// console.log(veri);

let numbers = [1,3,5,6,8,9,12,43];
let num = numbers.map(function(n)
{
    return n*n;
});
console.log(num);