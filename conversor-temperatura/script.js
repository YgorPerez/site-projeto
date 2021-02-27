var res = document.getElementById('res');
function temp() {
    res.innerHTML = '';
    var txtop = document.getElementById('txtop').value;
    var op = Number(txtop);
    var txtn = document.getElementById('txtn').value;
    var num = Number(txtn);
    var con = num;
    if (txtn.length == 0 || txtop.length == 0) {
        res.innerHTML = 'Digite um número e uma opção para começar';
    }
    else {
        switch (op) {
            case 1:
                if (num < -273.15) {
                    res.innerHTML = 'O zero absoluto de celsius é -273.15, digite um número maior';
                }
                else {
                    con = (con * 9 / 5) + 32;
                    res.innerHTML = num + "\u00B0C \u00E9 igual \u00E1 " + con + "\u00B0F ";
                }
                break;
            case 2:
                if (num < -273.15) {
                    res.innerHTML = 'O zero absoluto de celsius é -273.15, digite um número maior';
                }
                else {
                    con += 273.15;
                    res.innerHTML = num + "\u00B0C \u00E9 igual \u00E1 " + con + "\u00B0K ";
                }
                break;
            case 3:
                if (num < -460) {
                    res.innerHTML = 'O zero absoluto do farenheit é -460, digite um número maior';
                }
                else {
                    con = (con - 32) * 5 / 9;
                    res.innerHTML = num + "\u00B0F \u00E9 igual \u00E1 " + con + "\u00B0C ";
                }
                break;
            case 4:
                if (num < -460) {
                    res.innerHTML = 'O zero absoluto do farenheit é -460, digite um número maior';
                }
                else {
                    con = (con - 32) * 5 / 9 + 273.15;
                    res.innerHTML = num + "\u00B0F \u00E9 igual \u00E1 " + con + "\u00B0K ";
                }
                break;
            case 5:
                if (num < -0.15) {
                    res.innerHTML = 'O zero absoluto do kelvin é -0,15, digite um número maior';
                }
                else {
                    con -= 273.15;
                    res.innerHTML = num + "\u00B0K \u00E9 igual \u00E1 " + con + "\u00B0C ";
                }
                break;
            case 6:
                if (num < -0.15) {
                    res.innerHTML = 'O zero absoluto do kelvin é -0,15, digite um número maior';
                }
                else {
                    con = (con - 273.15) * 9 / 5 + 32;
                    res.innerHTML = num + "\u00B0K \u00E9 igual \u00E1 " + con + "\u00B0F ";
                }
                break;
            default: {
                res.innerHTML = 'Digite um dos números das opções';
            }
        }
    }
}
