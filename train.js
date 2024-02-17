//MIT Task D

function check(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(check("ulugbek", "bekulug"));

// //Task C

// class Shop {
//   // State
//   non;
//   lagmon;
//   cola;

//   // Constructor
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // Methods
//   qoldiq1() {
//     const now = new Date();
//     console.log(`Hozirgi vaqtda ${now.toLocaleTimeString()} bizda ${this.non} dona non, ${this.lagmon}ta lagmon, va ${this.cola} dona kola mavjud`);
//   }

//   sell(product, quantity) {
//     const now = new Date();
//     switch(product) {
//       case 'non':
//         this.bread -= quantity;
//         break;
//       case 'lagmon':
//         this.lagmon -= quantity;
//         break;
//       case 'cola':
//         this.cola -= quantity;
//         break;
//       default:
//         return;
//     }
//     console.log(`Hozirgi vaqt soat ${now.toLocaleTimeString()}da ${quantity}ta ${product} sotildi.`);
//   }

//   accept(product, quantity) {
//     const now = new Date();
//     switch(product) {
//       case 'non':
//         this.bread += quantity;
//         break;
//       case 'lagmon':
//         this.lagmon += quantity;
//         break;
//       case 'cola':
//         this.cola += quantity;
//         break;
//       default:
//         return;
//     }
//     console.log(`Soat ${now.toLocaleTimeString()}da ${quantity} dona ${product} qabul qilindi.`);
//   }

//   qoldiq2() {
//     const now = new Date();
//     console.log(`Hozir ${now.toLocaleTimeString()}da ${this.non} dona non,  ${this.lagmon}ta lag'mon va ${this.cola} dona kola qoldi`);
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq1();
// shop.sell('non', 3);
// shop.accept('cola', 4);
// shop.qoldiq2();

// //Task B

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//       if (str[i] >= '0' && str[i] <= '9') {
//           count++;
//       }
//   }
//   return count;
// }

// const str = "kmkwdwkmkwelm3455"
// console.log("result:", countDigits(str));

// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba bo'ling", //0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "o'zingizda ishlashizni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yo'q endi", //60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("Passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("Passed here 1");
// //Asynch function
// //  async function maslahatBering (a) {
// //     if(typeof a !== "number") throw new Error ("insert a number");
// //     else if (a <= 20) return list[0];
// //     else if (a > 20 && a <= 30) return list[1];
// //     else if (a > 30 && a <= 40) return list[2];
// //     else if (a > 40 && a <= 50) return list[3];
// //     else if (a > 50 && a <= 60) return list[4];
// //     else {
// //         return new Promise ((resolve, reject) => {
// //             setInterval(() => {
// //                 resolve(list[5])
// //             }, 1000);

// //             // setTimeout(() => {
// //             //     resolve(list[5])
// //             // }, 5000);
// //         });

// //      }
// // }

// // maslahatBering(10, (err, data) => {
// //     if(err) console.log("ERROR", err);
// //     console.log("Javob:", data);
// // })

// // //then & catch methodlari
// // console.log("Passed here 0");
// // maslahatBering(25).then((data) => {
// //     console.log("javob:", data);

// // })
// // .catch((err) => {
// //     console.log("ERROR:", err);
// // });

// // console.log("passed here 1");

// // async function run() {
// //     let javob = await maslahatBering(65);
// //     console.log(javob);
// //     // javob = await maslahatBering(70);
// //     // console.log(javob);
// //     // javob = await maslahatBering(41);
// //     // console.log(javob);
// // }

// // run();

// //Task A

// // function countLetter(x, word) {
// //     let count = 0;
// //     for (let i = 0; i < word.length; i++) {
// //     if (word[i].toLowerCase() === x.toLowerCase()){
// //             count++;
// //         }
// //     }

// //     return count;
// // }

// // const x = 'e';
// // const word = 'engineer';
// // const sanash = countLetter(x, word);
// // console.log(`"${x}" harfi bu "${word}" so'zida ${sanash} marta takrorlanadi.`);
