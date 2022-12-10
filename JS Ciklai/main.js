/*1 uzd. Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.*/
/*const myName = 'Ana';
let i = 3;
while (i > 0) {
  console.log(myName);
  i--;
}



/*Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus ciklą į combo prisirašo Jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ). 
Sukurkite programą, kur bus kintamasis (let times = 5), kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas Jūsų vardas. 
Jei times skaičius 0 arba mažiau - vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
Pvz:
times = 0; combo = "Petras"
times = 1; combo = "Petras"
times = 2; combo = "PetrasPetras"
times = 3; combo = "PetrasPetrasPetras"*/


let combo = '';
const anaName = 'Ana';
let times = 5;
do {
  combo += anaName;
  times--;
} while (times > 0);
console.log(combo);