document.getElementById('start-btn').addEventListener('click', function(){
    let time = new Date();
    console.log(time);
    document.getElementById('stop-btn').addEventListener('click', function(){
        let currTime = new Date();
        console.log(currTime);
        let seconds = Math.round((currTime - time)/1000);
        let hrs  = Math.floor(seconds/3600);
        let mins = Math.floor((seconds - 3600*hrs)/60);
        let secs = seconds - 3600*hrs - 60*mins;
        res = 'you spent ';
        if (hrs > 0) res += hrs + ' hours';
        if (mins > 0) {
            if (hrs > 0) res += ', ' + mins + ' minutes';
            else res += mins + ' minutes';
        }
        if (secs > 0) {
            if (hrs == 0 && mins == 0)
                res += secs + ' seconds';
            else
                res += ' and ' + secs + ' seconds';
        }
        timeElapsed = res;
        document.getElementById('result').innerHTML = res;
    })
})
document.getElementById('level-beg').addEventListener('click', function() {
    // give a text.
    function readFile(file) {
        let f = new XMLHttpRequest();
        f.open("GET", file, false);
        f.onreadystatechange = function () {
            if(f.readyState === 4) {
                if(f.status === 200 || f.status == 0) {
                    let txt = f.responseText;
                    let words = txt.split('\n');
                    document.getElementById('text-here').innerHTML = words.slice(0, 100).join(' ');
                }
            }
        }
        f.send(null);
    }
    readFile('./data/nw100k.txt');
})
document.getElementById('level-adv').addEventListener('click', function() {
    // give a text.
    function readFile(file) {
        let f = new XMLHttpRequest();
        f.open("GET", file, false);
        f.onreadystatechange = function () {
            if(f.readyState === 4) {
                if(f.status === 200 || f.status == 0) {
                    let txt = f.responseText;
                    let words = txt.split('\n');
                    document.getElementById('text-here').innerHTML = words.slice(words.length - 100).join(' ');
                }
            }
        }
        f.send(null);
    }
    readFile('./data/nw100k.txt');
})
