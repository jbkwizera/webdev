const clearAll = () => {
    localStorage.clear();
    loadList();
}
const saveItem = () => {
    let keyName = document.getElementById('todoTag');
    let keyvalue = 'To do item';
    localStorage.setItem(keyName.value, keyValue);

    keyName.value = "";
    loadList();
}
const loadList = () => {
    let N = localStorage.length;
    myToDo = [];
    for (let i = 0; i < N; i++)
        myToDo[i] = localStorage.key[i];
    myToDo.sort();
}
