const updateTable = () => {
    // clear rows from previous input
    let tableRows = document.getElementsByTagName('tr');
    while (tableRows[0])
        tableRows[0].parentNode.removeChild(tableRows[0]);

    // read input + update running values
    let distElem = document.getElementById('distance');
    let paceElem = document.getElementById('target-pace');
    let dist = parseFloat(distElem.value);

    let time = parsePace(paceElem.value);
    for (let i = 1; i <= Math.floor(dist); i++)
        createTableRow(i, time);
    if (Math.floor(dist) < dist)
        createTableRow(dist, time);
}
const createTableRow = (dist, time) => {
    let tbody = document.getElementsByTagName('table')[0]
                        .getElementsByTagName('tbody')[0];
    let tr  = tbody.insertRow();
    let td0 = tr.insertCell(0);
    let td1 = tr.insertCell(1);

    // populate the row
    td0.appendChild(document.createTextNode('' + dist));
    td1.appendChild(document.createTextNode('' + formatTime(time*dist)));
}
const parsePace = pace => {
    let fields = pace.split(/[^0-9]+/g);
    for (let i = 0; i < fields.length; i++)
        fields[i] = parseInt(fields[i]);

    if (fields.length == 3)
        return fields[0]*60 + fields[1] + fields[2]/60;
    if (fields.length == 2)
        return fields[0] + fields[1]/60;
    return fields[0];
}
const formatTime = time => {
    let hrs = Math.trunc(time/60);
    let mns = Math.trunc(time - 60*hrs);
    let scs = Math.ceil((time - 60*hrs - mns)*60);
    let tme = '';
    if (hrs > 0) {
        if (hrs < 10) tme += '0';
        tme += hrs + ':';
    }
    if (mns > 0) {
        if (mns < 10) tme += '0';
        tme += mns + ':';
    }
    if (scs < 10) tme += '0';
    tme += scs;
    return tme;
}
