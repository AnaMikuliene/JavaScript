/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274
Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const formElement = document.querySelector("form");
const enterKilograms = document.querySelector("#search");
const output = document.querySelector("#output");
formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const lb = enterKilograms.value * 2.2046;
    const g = enterKilograms.value / 0.001;
    const oz = enterKilograms.value * 35.274;
    output.innerHTML = `<p>lb: <span>${lb}</span></p><p>g: <span>${g}</span></p><p>oz: <span>${oz}</span></p>`
})   