let canvas = document.getElementById('canvas');
canvas.style.border = '1px solid green';
let canvasContext = canvas.getContext('2d');
let centerX = canvas.width/2;
let centerY = canvas.height/2;
let radius  = 100;
canvasContext.clearRect(0, 0, canvas.width, canvas.height);
canvasContext.strokeStyle = 'blue';
canvasContext.beginPath();
canvasContext.moveTo(centerX + radius, centerY);
canvasContext.arc(centerX, centerY, radius, 0, 2*Math.PI);

// hour hand
let hx0 = centerX;
let hy0 = centerY;
let hx1 = centerX;
let hy1 = centerY - radius;
let a = 60;
let r = radius;
const toRadians = degrees => degrees*Math.PI/180;
let d = r*Math.sin(toRadians(a))/Math.sin(toRadians((180-a)/2));

canvasContext.moveTo(hx0, hy0);
canvasContext.strokeStyle = 'red';
canvasContext.lineTo(hx1, hy1);

// arrowhead
canvasContext.lineTo(hx1 - 5, hy1 + 10*Math.sqrt(3));
canvasContext.lineTo(hx1 + 5, hy1 + 10*Math.sqrt(3));
canvasContext.lineTo(hx1, hy1);

const drawMarkers = (angle) => {
    d = r*Math.sin(toRadians(angle))/Math.sin(toRadians((180-angle)/2));
    for (let i = 1; i <= 360/angle; i++) {
        let nx1 = 0, ny1 = 0;
        const sol1 = (hx1, hy1, cx, cy, d, r) => {
            nx1 = 0.5*(cx**3 + cx*cy**2 + cx*d**2 - cx*hx1**2 + hx1**3 + (cx + hx1)*hy1**2 - (cx - hx1)*r**2 - (cx**2 - cy**2 + d**2)*hx1 - 2*(cx*cy + cy*hx1)*hy1 +
                  Math.sqrt((-1)*cx**4 - 2*cx**2*cy**2 - cy**4 - d**4 + 4*cx*hx1**3 - hx1**4 + 4*cy*hy1**3 - hy1**4 - r**4 + 2*(cx**2 + cy**2)*d**2 - 2*(3*cx**2 + cy**2 - d**2)*hx1**2 -
                  2*(cx**2 + 3*cy**2 - d**2 - 2*cx*hx1 + hx1**2)*hy1**2 + 2*(cx**2 + cy**2 + d**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2)*r**2 + 4*(cx**3 + cx*cy**2 - cx*d**2)*hx1 +
                  4*(cx**2*cy + cy**3 - cy*d**2 - 2*cx*cy*hx1 + cy*hx1**2)*hy1)*(cy - hy1))/(cx**2 + cy**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2);
            ny1 = 0.5*(cx**2*cy + cy**3 + cy*d**2 - 2*cx*cy*hx1 + cy*hx1**2 - cy*hy1**2 + hy1**3 - (cy - hy1)*r**2 + (cx**2 - cy**2 - d**2 - 2*cx*hx1 + hx1**2)*hy1 -
                  Math.sqrt((-1)*cx**4 - 2*cx**2*cy**2 - cy**4 - d**4 + 4*cx*hx1**3 - hx1**4 + 4*cy*hy1**3 -
                  hy1**4 - r**4 + 2*(cx**2 + cy**2)*d**2 - 2*(3*cx**2 + cy**2 - d**2)*hx1**2 -
                  2*(cx**2 + 3*cy**2 - d**2 - 2*cx*hx1 + hx1**2)*hy1**2 + 2*(cx**2 + cy**2 +
                  d**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2)*r**2 + 4*(cx**3 + cx*cy**2 -
                  cx*d**2)*hx1 + 4*(cx**2*cy + cy**3 - cy*d**2 - 2*cx*cy*hx1 + cy*hx1**2)*hy1)*(cx - hx1))/(cx**2 + cy**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2);
        }
        const sol2 = (hx1, hy1, cx, cy, d, r) => {
            nx1 = 0.5*(cx**3 + cx*cy**2 + cx*d**2 - cx*hx1**2 + hx1**3 + (cx + hx1)*hy1**2 -
                  (cx - hx1)*r**2 - (cx**2 - cy**2 + d**2)*hx1 - 2*(cx*cy + cy*hx1)*hy1 -
                  Math.sqrt((-1)*cx**4 - 2*cx**2*cy**2 - cy**4 - d**4 + 4*cx*hx1**3 - hx1**4 + 4*cy*hy1**3 -
                  hy1**4 - r**4 + 2*(cx**2 + cy**2)*d**2 - 2*(3*cx**2 + cy**2 - d**2)*hx1**2 -
                  2*(cx**2 + 3*cy**2 - d**2 - 2*cx*hx1 + hx1**2)*hy1**2 + 2*(cx**2 + cy**2 +
                  d**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2)*r**2 + 4*(cx**3 + cx*cy**2 -
                  cx*d**2)*hx1 + 4*(cx**2*cy + cy**3 - cy*d**2 - 2*cx*cy*hx1 + cy*hx1**2)*hy1)*(cy - hy1))/
                  (cx**2 + cy**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2);

            ny1 = 0.5*(cx**2*cy + cy**3 + cy*d**2 - 2*cx*cy*hx1 + cy*hx1**2 - cy*hy1**2 +
                  hy1**3 - (cy - hy1)*r**2 + (cx**2 - cy**2 - d**2 - 2*cx*hx1 + hx1**2)*hy1 +
                  Math.sqrt((-1)*cx**4 - 2*cx**2*cy**2 - cy**4 - d**4 + 4*cx*hx1**3 - hx1**4 +
                  4*cy*hy1**3 - hy1**4 - r**4 + 2*(cx**2 + cy**2)*d**2 - 2*(3*cx**2 +
                  cy**2 - d**2)*hx1**2 - 2*(cx**2 + 3*cy**2 - d**2 - 2*cx*hx1 + hx1**2)*hy1**2 +
                  2*(cx**2 + cy**2 + d**2 - 2*cx*hx1 + hx1**2 - 2*cy*hy1 + hy1**2)*r**2 +
                  4*(cx**3 + cx*cy**2 - cx*d**2)*hx1 + 4*(cx**2*cy + cy**3 - cy*d**2 -
                  2*cx*cy*hx1 + cy*hx1**2)*hy1)*(cx - hx1))/(cx**2 + cy**2 - 2*cx*hx1 +
                  hx1**2 - 2*cy*hy1 + hy1**2);
    }
        const mid1 = (hx0, hy0, hx1, hy1) => {
            let mx1 = 0.5*(hx0**3 - hx0*hx1**2 + hx1**3 + (hx0 + hx1)*hy0**2 -
                    2*(hx0 + hx1)*hy0*hy1 + (hx0 + hx1)*hy1**2 - (hx0**2 - 8000)*hx1 +
                    Math.sqrt((-1)*hx0**4 + 4*hx0*hx1**3 - hx1**4 - hy0**4 + 4*hy0*hy1**3 - hy1**4 -
                    2*(3*hx0**2 - 8200)*hx1**2 -  2*(hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0**2 -
                    2*(hx0**2 - 2*hx0*hx1 + hx1**2 + 3*hy0**2 - 8200)*hy1**2 + 16400*hx0**2 +
                    4*(hx0**3 - 8200*hx0)*hx1 + 4*(hy0**3 + (hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0)*
                    hy1 -64000000)*(hy0 - hy1) - 8000*hx0)/(hx0**2 - 2*hx0*hx1 + hx1**2 + hy0**2 - 2*hy0*hy1 + hy1**2);
            let my1 = 0.5*(hy0**3 - hy0*hy1**2 + hy1**3 + (hx0**2 - 2*hx0*hx1 + hx1**2 - 8000)*hy0 +
                    (hx0**2 - 2*hx0*hx1 + hx1**2 - hy0**2 + 8000)*hy1 - Math.sqrt((-1)*hx0**4 + 4*hx0*hx1**3 - hx1**4 -
                    hy0**4 + 4*hy0*hy1**3 - hy1**4 - 2*(3*hx0**2 - 8200)*hx1**2 - 2*(hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0**2 -
                    2*(hx0**2 - 2*hx0*hx1 + hx1**2 + 3*hy0**2 - 8200)*hy1**2 + 16400*hx0**2 +
                    4*(hx0**3 - 8200*hx0)*hx1 + 4*(hy0**3 + (hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0)*hy1 - 64000000)*
                    (hx0 - hx1))/(hx0**2 - 2*hx0*hx1 + hx1**2 + hy0**2 - 2*hy0*hy1 + hy1**2);
            return [mx1, my1];
        }
        const mid2 = (hx0, hy0, hx1, hy1) => {
            let mx2 = 1/2*(hx0**3 - hx0*hx1**2 + hx1**3 + (hx0 + hx1)*hy0**2 - 2*(hx0 + hx1)*hy0*hy1 + (hx0 + hx1)*hy1**2 -
                    (hx0**2 - 8000)*hx1 - Math.sqrt((-1)*hx0**4 + 4*hx0*hx1**3 - hx1**4 - hy0**4 + 4*hy0*hy1**3 - hy1**4 -
                    2*(3*hx0**2 - 8200)*hx1**2 - 2*(hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0**2 - 2*(hx0**2 - 2*hx0*hx1 +
                    hx1**2 + 3*hy0**2 - 8200)*hy1**2 + 16400*hx0**2 + 4*(hx0**3 - 8200*hx0)*hx1 + 4*(hy0**3 +
                    (hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0)*hy1 - 64000000)*(hy0 - hy1) - 8000*hx0)/(hx0**2 -
                    2*hx0*hx1 + hx1**2 + hy0**2 - 2*hy0*hy1 + hy1**2);

            let my2 = 0.5*(hy0**3 - hy0*hy1**2 + hy1**3 + (hx0**2 - 2*hx0*hx1 + hx1**2 - 8000)*hy0 + (hx0**2 - 2*hx0*hx1 +
                    hx1**2 - hy0**2 + 8000)*hy1 + Math.sqrt((-1)*hx0**4 + 4*hx0*hx1**3 - hx1**4 - hy0**4 + 4*hy0*hy1**3 - hy1**4 -
                    2*(3*hx0**2 - 8200)*hx1**2 - 2*(hx0**2 - 2*hx0*hx1 + hx1**2 - 8200)*hy0**2 - 2*(hx0**2 - 2*hx0*hx1 +
                    hx1**2 + 3*hy0**2 - 8200)*hy1**2 + 16400*hx0**2 + 4*(hx0**3 - 8200*hx0)*hx1 + 4*(hy0**3 + (hx0**2 -
                    2*hx0*hx1 + hx1**2 - 8200)*hy0)*hy1 - 64000000)*(hx0 - hx1))/(hx0**2 - 2*hx0*hx1 + hx1**2 + hy0**2 -
                    2*hy0*hy1 + hy1**2);
            return [mx2, my2]
        }

        let tx1 = 0, ty1 = 0;
        let tx2 = 0, ty2 = 0;

        sol1(hx1, hy1, hx0, hy0, d, r);
        if (Math.round(nx1) == Math.round(hx1) && Math.round(ny1) == Math.round(hy1))
            sol2(hx1, hy1, hx0, hy0, d, r);

        let scos = Math.cos(toRadians(i*angle));
        let ssin = Math.sin(toRadians(i*angle));

        let mids = mid2(hx0, hy0, hx1, hy1);
        console.log(mids[0], mids[1]);
        canvasContext.moveTo(mids[0], mids[1]);
        canvasContext.lineTo(hx1, hy1);
        hx1 = nx1;
        hy1 = ny1;
    }
}
drawMarkers(30);
// arrowhead


// minute hand
canvasContext.stroke();
