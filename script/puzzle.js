
let pieces = ['p00.png', 'p01.png', 'p02.png', 'p10.png', 'p11.png', 'p12.png', 'p20.png', 'p21.png', 'p22.png'];
let prvElem = document.getElementById('p22.png');

/* shuffle */
const shuffle = () => {
    for (let i = 0; i < 9; i++) {
        let r = Math.floor(Math.random()*(i + 1));
        let t = pieces[r];
        pieces[r] = pieces[i];
        pieces[i] = t;
    }
    imgElems = document.getElementsByTagName('img');
    for (let i = 0; i < 9; i++) {
        imgElems[i].src = './media/puzzle/' + pieces[i];
        imgElems[i].style.border = 'none';
        if (pieces[i] == 'p22.png')// reset the pos of blank
            prvElem = imgElems[i];
    }
}
document.getElementById('shuffle-btn').addEventListener('click', shuffle);

// shuffle to reset
document.getElementById('reset-btn').addEventListener('click', shuffle);

// handling solution button.
document.getElementById('solution-btn').addEventListener('click', event => {
    pieces.sort();
    let imgElems = document.getElementsByTagName('img');
    for (let i = 0; i < 9; i++)
        imgElems[i].src = './media/puzzle/' + pieces[i];
});

Array.prototype.forEach.call(document.getElementsByTagName('img'), imgElem => {
    imgElem.addEventListener('click', function() {
        let i = parseInt(imgElem.id[1]);
        let j = parseInt(imgElem.id[2]);
        let m = parseInt(prvElem.id[1]);
        let n = parseInt(prvElem.id[2]);
        if ((i == m && (j == n-1 || j == n+1)) ||
            (j == n && (i == m-1 || i == m+1))) {
            prvElem.src = imgElem.src;
            imgElem.src = './media/puzzle/p22.png';
            prvElem = imgElem;
        }
    })
})
