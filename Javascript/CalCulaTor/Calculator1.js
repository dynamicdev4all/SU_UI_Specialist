window.addEventListener("load" , initEvents);

var resultBox;
var exp;

function initEvents(){
    resultBox = document.querySelector("#resultBox");
    resultBox.setAttribute("readonly", "true");

    document.querySelector(".res").addEventListener("click" , calc);
    document.querySelector(".clear").addEventListener("click" , clearData);

    var btn_arr = document.querySelectorAll(".num");
    for(var i of btn_arr){
        i.addEventListener("click" , appendNum);
    }

    var opr_arr = document.querySelectorAll(".opr")
    for(var i of opr_arr){
        i.addEventListener("click" , appendOpr);
    }
}

function appendNum(){
    resultBox.value += this.innerHTML;
    exp = resultBox.value
}

function appendOpr(){
    resultBox.value = exp + this.innerHTML;
}

function calc(){
    if(resultBox.value ==""){
        alert("Please enter some data");
    }
    else{
        resultBox.value = eval(resultBox.value);
    }
}

function clearData(){
    resultBox.value = 0;
}