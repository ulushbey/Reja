console.log("Jack Ma maslahatlari");
const list = [
  "Yaxshi talaba bo'ling", //0-20
  "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
  "o'zingizda ishlashizni boshlang", // 30-40
  "siz kuchli bo'lgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yo'q endi", //60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("Passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR", err);
  else {
    console.log(data);
  }
});
console.log("Passed here 1");
//Asynch function
//  async function maslahatBering (a) {
//     if(typeof a !== "number") throw new Error ("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise ((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5])
//             }, 1000);

//             // setTimeout(() => {
//             //     resolve(list[5])
//             // }, 5000);
//         });

//      }
// }

// maslahatBering(10, (err, data) => {
//     if(err) console.log("ERROR", err);
//     console.log("Javob:", data);
// })

// //then & catch methodlari
// console.log("Passed here 0");
// maslahatBering(25).then((data) => {
//     console.log("javob:", data);

// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });

// console.log("passed here 1");

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     // javob = await maslahatBering(70);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob);
// }

// run();

//Task A

// function countLetter(x, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase() === x.toLowerCase()){
//             count++;
//         }
//     }

//     return count;
// }

// const x = 'e';
// const word = 'engineer';
// const sanash = countLetter(x, word);
// console.log(`"${x}" harfi bu "${word}" so'zida ${sanash} marta takrorlanadi.`);
