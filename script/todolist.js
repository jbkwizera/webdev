function initialize(){
    loadList();
}
function loadList(){
    //task 1: Get the number of key-value pair stored in local storage
    var length = localStorage.length;
    //task 2: create an array to hold the eventual lost of items
    myTodolist = [];
    //task 3: collect each key item and store in the array
    for(var i = 0; i < length; i++){
        myTodolist[i] = localStorage.key(i);
    }
    myTodolist.sort();

    //task 4: build the html code to display
    //(a) add the text element (b) add a delete button
    var markup = "<ul>";
    for(var keyIndex in myTodolist){
        markup += "<li><span>" + myTodolist[keyIndex] + "</span></li>";
    }
    markup +="</ul>";

    //task 5: add the string to the html document
    document.getElementById('itemList').innerHTML = markup;
}

function saveItem(){
    var keyName = document.getElementById("todoTag");
    var keyValue = "To do item";
    localStorage.setItem(keyName.value, keyValue);

    keyName.value = "";
    loadList();
}

function clearItems(){
    localStorage.clear();
    loadList();
}
