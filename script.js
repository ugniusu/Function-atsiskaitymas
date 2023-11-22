///////////////////////////////////////////////////////////////////////
// 1)
// const hello = (sveiks) => {
//   console.log(sveiks);
//   return sveiks;
// };
// let saveName = hello("hello");

// const greeting = (firstName) => {
//   console.log(`${saveName} ${firstName}`);
// };
// greeting("John");
// greeting("Jason");
/////

// 2)
// const sk1 = parseInt(prompt("Pirmas skaicius:"));
// const sk2 = parseInt(prompt("Antras skaicius:"));

// const higherLower = (sk1, sk2) => {
//   const lygu = sk1 + sk2;
//   if (sk1 > sk2) {
//     console.log("Pirmas skaicius didesnis");
//   } else if (sk2 > sk1) {
//     console.log("Antras skaicius didesnis");
//   } else {
//     console.log(`skaiciai lygus ir ju suma ${lygu}`);
//   }
//   return lygu;
// };
// let saveLygu = higherLower(sk1, sk2);

// higherLower(sk1, sk2);

// 3)
// function fizzAndBuzz(string) {
//   let answer;
//   if (string == "fizz") {
//     answer = "buzz";
//   } else if (string == "buzz") {
//     answer = "fizz";
//   } else {
//     answer = "Priimu tik fizz ir buzz";
//   }
//   return answer;
// }

// console.log(fizzAndBuzz("buzz"));

// 4)
// const triangle = (a, b, c) => {
//   if (a > b && a < c) {
//     console.log("Imanomas trikampis");
//   } else if (b > a && b < c) {
//     console.log("Trikampis imanomas");
//   } else if (c > a && c > a) {
//     console.log("Imanomas trikampis");
//   } else {
//     console.log("Neimanomas trikampis");
//   }
// };

// triangle(4, 5, saveLygu);

// 5)
// const kokiaFigura = prompt("Pasirinktie figura (kvadratas, trikampis)");
// const atsakymas = (kokiaFigura) => {
//   return kokiaFigura;
// };

// const area = (kazkas) => {
//   if (kazkas == "kvadratas") {
//     const kvadA = parseInt(prompt("Koks kvadrato a krastines ilgis ?"));
//     const kvadB = parseInt(prompt("Koks kvadrato b krastines ilgis ?"));
//     const kvadPlot = kvadA * kvadB;
//     // console.log(`Tavo kvadrato plotas yra ${kvadPlot}`);
//     alert(`Tavo kvadrato plotas yra ${kvadPlot}`);
//     return kvadPlot;
//   } else if (kazkas == "trikampis") {
//     const triA = parseInt(prompt("Koks trikampio pagrindo ilgis ?"));
//     const triB = parseInt(prompt("Koks trikampio aukstines ilgis ?"));
//     const triPlot = (1 / 2) * triA * triB;
//     alert(`Tavo trikampio plotas yra ${triPlot}`);
//     return triPlot;
//   } else {
//     console.log("Blogai ivedete figura");
//   }
// };
// area(kokiaFigura);

// 6)
// function isSeven(x) {
//   const ats = x === 7 ? true : false;
//   console.log(ats);
//   return ats;
// }
// isSeven(7);

// 8)
// const belekas = (prob, prize, pay) => {
//   const equal = prob * prize > pay ? true : false;
//   console.log(equal);
//   return equal;
// };
// belekas(4, 6, 23);

// 7)
const isEqual = (par1, par2) => {
  const right = par1 === par2 ? true : false;
  console.log(right);
  return right;
};
isEqual("labas", "ka tu");

// 9)
// const minSec = (minutes) => {
//   const minToSec = minutes * 60;
//   console.log(`${minutes} min = ${minToSec} s`);
// };

// minSec(12);

// 10)
// const art = prompt("Koki aritmetini veiksma norite atlikti? (+, -, /, *)");
// const sk1 = parseInt(prompt("Iveskite pirmaji skaiciu"));
// const sk2 = parseInt(prompt("Iveskite antraji skaiciu"));

// const math = (sk1, sk2) => {
//   if (art == "+") {
//     const sum = sk1 + sk2;
//     alert(`Jusu skaiciu suma = ${sum}`);
//   } else if (art == "-") {
//     const subtraction = sk1 - sk2;
//     alert(`Jusu skaiciu atimtis = ${subtraction}`);
//   } else if ((art == "/" && sk1 === 0) || sk2 === 0) {
//     alert(`Jusu skaiciu dalyba negalima`);
//   } else if (art == "/") {
//     const divide = sk1 / sk2;
//     alert(`Jusu pirma skaiciu padalinus is antro = ${divide}`);
//   } else if (art == "*") {
//     const multiplication = sk1 * sk2;
//     alert(`Jusu skaiciu sandauga = ${multiplication}`);
//   } else {
//     console.log("Blogai pasirinkote aritmetini veiksma");
//   }
// };

// math(sk1, sk2);
