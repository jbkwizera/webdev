const readFile = file => {
    let textRes = "";
    let f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = function () {
        if(f.readyState === 4) {
            if(f.status === 200 || f.status == 0) {
                textRes = f.responseText;
            }
        }
    }
    f.send(null);
    return textRes.split('\n');
}

let test = '';
let pPassword = '';
let cPassword = '';
const addDigitPassword = digit => {
    if (digit.data != null) {
        pPassword += digit.data;
        cPassword += '*';
        document.getElementById('password').value = cPassword;
        console.log(pPassword, cPassword)
    }
}

const clearPassword = () => {
    let passElement = document.getElementById('password');
    pPassword = '';
    cPassword = '';
    passElement.value = '';
    document.getElementById('txtHint').innerHTML = '';
}
const submitPassword = () => {
    let myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = displayPHPresults();
    myXMLRequest.open('POST', 'lab10bPHP.php?q=' + pPassword, true);
    myXMLRequest.send();
}
const displayPHPresults = () => {
    let output = '';
    let data = this.responseText;
    if (data != 'invalid') {
        let newLocation = location + '#pageMessage';
        window.location = newLocation;
        document.getElementById('secret').innerHTML = data;
    }
    else {
        output = 'The password you entered is invalid. Please try again.';
        document.getElementById('txtHint').innerHTML = output;
    }
}
document.getElementById('password').addEventListener('input', addDigitPassword)
