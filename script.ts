var res = document.getElementById('res')
var txtop = (<HTMLInputElement>document.getElementById('txtop'));
var txtn = (<HTMLInputElement>document.getElementById('txtn'));
document.querySelector('body').addEventListener('keydown', (event) => {
    var tecla = event.keyCode;
    if(tecla == 13 && txtn.value.length != 0) {
        txtop.focus()
        temp()
    }
})
function temp() {
    res.innerHTML = ''
    txtop = (<HTMLInputElement>document.getElementById('txtop'));
    var op = Number(txtop.value)
    txtn = (<HTMLInputElement>document.getElementById('txtn'));
    var num = Number(txtn.value)
    var con = num
    if (txtn.value.length == 0) {
        res.innerHTML = 'Digite um número para começar'
    }
    else if(txtop.value.length == 0) {
        res.innerHTML = 'Digite uma das opções de [1] a [6]'
    }
    else {
        switch (op) {
            case 1:
                if (num < -273.15) {
                    res.innerHTML = 'O zero absoluto de celsius é -273.15, digite um número maior'
                }
                else {
                    con = (con*9/5) + 32
                    res.innerHTML = `${num}°C é igual á ${con}°F `
                }
                break;
            case 2:
                if (num < -273.15) {
                    res.innerHTML = 'O zero absoluto de celsius é -273.15, digite um número maior'
                }
                else {
                    con += 273.15
                    res.innerHTML = `${num}°C é igual á ${con}°K `
                }
                break;
            case 3: 
            if (num <= -459.7) {
                res.innerHTML = 'O zero absoluto do farenheit é -460, digite um número maior'
            }
            else {
                con = (con-32) *5 /9
                res.innerHTML = `${num}°F é igual á ${con}°C `
            }
            break;
            case 4: 
            if (num < -460) {
                res.innerHTML = 'O zero absoluto do farenheit é -460, digite um número maior'
            }
            else {
                con = (con-32) *5/9 + 273.15
                res.innerHTML = `${num}°F é igual á ${con}°K `
            }
            break;
            case 5: 
            if (num < -0.15) {
                res.innerHTML = 'O zero absoluto do kelvin é -0,15, digite um número maior'
            }
            else {
                con -= 273.15
                res.innerHTML = `${num}°K é igual á ${con}°C `
            }
            break;
            case 6: 
            if (num < -0.15) {
                res.innerHTML = 'O zero absoluto do kelvin é -0,15, digite um número maior'
            }
            else {
                con = (con-273.15) *9/5 + 32
                res.innerHTML = `${num}°K é igual á ${con}°F `
            }
            break;
            default: {
                res.innerHTML = 'Digite uma das opções de [1] a [6]'
            }
        }
        txtn.value = ''
        txtop.value = ''
        txtn.focus()
    }
}