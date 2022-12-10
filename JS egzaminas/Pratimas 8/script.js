/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
    this.substraction = function () {
        return this.a - this.b;
    }
    this.multiplication = function () {
        return this.a * this.b;
    }
    this.division = function () {
        return this.a / this.b;
    }
}
const sumcalculate = new Calculator(3, 4);
const subscalculate = new Calculator(1, 4);
const multicalculate = new Calculator(3, 6);
const divcalculate = new Calculator(6, 2);

console.log(subscalculate.sum());
console.log(subscalculate.substraction());
console.log(multicalculate.multiplication());
console.log(divcalculate.division());