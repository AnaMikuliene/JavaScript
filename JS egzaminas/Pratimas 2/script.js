/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickMy = document.querySelector('#btn__element');
const rezultClick = document.querySelector('#btn__state');
let a = 0;
clickMy.addEventListener("click", buttonClick);
function buttonClick() {
  a++;
  rezultClick.innerHTML = a;
}