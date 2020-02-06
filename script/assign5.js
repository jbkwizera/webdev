const convertIt = () => {
    let radios = document.getElementsByName("radio-item");
    let x = parseInt(document.getElementById("to-convert").value);

    let res;
    if (radios[1].checked)
        res = x + " Inches convert to " + (x*2.54) + " Centimeters.";
    else
        res = x + " Centimeters convert to " + (x/2.54) + " Inches.";
    document.getElementById("result").innerHTML = res;
}
const updateLabel = () => {
    let radioItems = document.getElementsByName("radio-item");
    let labelItem  = document.getElementById("label");
    if (radioItems[1].checked) label.innerHTML = "Inches";
    else label.innerHTML = "Centimeters";
}
/*-----------------------------------------------------------------------***/
const bullsEye = () => {
    let canvas = document.getElementById('canvas-green');
    let canvasContext = canvas.getContext('2d');
    body = document.getElementsByTagName('body')[0]
    canvas.width = body.clientWidth - 20;
    canvas.height= canvas.width;
    canvas.padding = '10px';

    let brightness = 50 - (document.getElementById('green').value)/2;
    let r3 = canvas.width/2, r2 = 2*r3/3, r1 = r3/3;
    let centerX = canvas.width /2;
    let centerY = canvas.height/2;

    // r3 > r2 > r1
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.strokeStyle = 'hsl(128, 100%, ' + brightness + '%)';
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, r3, 0, 2*Math.PI);
    canvasContext.stroke();
    canvasContext.fillStyle = 'hsl(128, 100%, ' + brightness + '%)';
    canvasContext.fill();

    canvasContext.strokeStyle = 'hsl(128, 100%, ' + brightness*0.8 + '%)';
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, r2, 0, 2*Math.PI);
    canvasContext.stroke();
    canvasContext.fillStyle = 'hsl(128, 100%, ' + brightness*0.8 + '%)';
    canvasContext.fill();

    canvasContext.strokeStyle = 'hsl(128, 100%, ' + brightness*0.6 + '%)';
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, r1, 0, 2*Math.PI);
    canvasContext.stroke();
    canvasContext.fillStyle = 'hsl(128, 100%, ' + brightness*0.6 + '%)';
    canvasContext.fill();
}
/*-------------------------------------------------------------------------*/
const levyCurve = () => {
    let canvas = document.getElementById('canvas-curve');
    let canvasContext = canvas.getContext('2d');
    body = document.getElementsByTagName('body')[0]
    canvas.width = body.clientWidth - 20;
    canvas.height= 3*canvas.width/2;
    canvas.padding = '10px';

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    initializeCurve(canvas, canvasContext);
}
const initializeCurve = (canvas, canvasContext) => {
    let level = document.getElementById('level').value;
    cx = canvas.width/2;
    cy = canvas.height/2;
    drawCurve(canvasContext, cx+cx/2, cy-cy/2, cy, 90, level);
}
const drawCurve = (canvasContext, x, y, z, a, N) => {
    let tx = x;
    let ty = y;
    let tz = z;
    let ta = a;
    let tN = N;
    if (tN > 0) {
        tz /= Math.sqrt(2);
        drawCurve(canvasContext, tx, ty, tz, ta + 45, tN - 1);
        tx += tz * Math.cos(toRadians(ta + 45));
        ty += tz * Math.sin(toRadians(ta + 45));
        drawCurve(canvasContext, tx, ty, tz, ta - 45, tN - 1);
    }
    else {
        let x0 = tx, x1 = tx + tz*Math.cos(toRadians(ta));
        let y0 = ty, y1 = ty + tz*Math.sin(toRadians(ta));
        canvasContext.beginPath();
        canvasContext.strokeStyle = getRandomColor();
        canvasContext.moveTo(x0, y0);
        canvasContext.lineTo(x1, y1);
        canvasContext.stroke();
        canvasContext.closePath();
    }
}
const toRadians = degrees => degrees*Math.PI/180.0;
const getRandomColor = () => {
    let colors = ['red', 'blue', 'green'];
    return colors[Math.floor(Math.random()*3)];
}
// utility functions
const updateOutput = () => {
    document.getElementById('level-out').value = document.getElementById('level').value;
    document.getElementById('green-out').value = document.getElementById('green').value;
}
