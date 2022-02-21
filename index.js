function getValue(topNumber, firstNumber, secondNumber, thirdNumber, lastNumber) {
    x = document.getElementById("topNumber").value;
    a = document.getElementById("firstNumber").value;
    b = document.getElementById("secondNumber").value;
    c = document.getElementById("thirdNumber").value;
    d = document.getElementById("lastNumber").value;

}
function v() {

    getValue();
    sum = Number(a) + Number(b) + Number(c);
    document.getElementById("total-expenses").innerText = +sum;
    document.getElementById("balance").innerText = +sum;
    sumValue = +sum;


    getValue();
    sub = Number(x) - sumValue;
    document.getElementById("balance").innerText = +sub;
    subValue = +sub;
}
function w() {
    getValue();
    div = Number(d) / 100 * Number(x);
    document.getElementById("saving").innerText = +div;
    divValue = +div;

    getValue();
    sub = Number(x) - sumValue - divValue;
    document.getElementById("remaining-balance").innerText = +sub;
    subValue = +sub;
}








