// This code is written By Himanshu Gupta
// NOT GATE

function getnotans() {
    var notin = document.getElementById("notin").value;
    var ans = "";
    var found = true;
    if(notin.length == 0){
        alert("Pahle Input Karo, NOT GATE input section me");
        return ;
    }
    for (var i = 0; i < notin.length; i++) {
        if (notin[i] == "0") ans += "1";
        else if (notin[i] == "1") ans += "0";
        else {
            found = false;
            break;
        }
    }
    if (!found)
        alert("Wrong input data type");
    else 
        document.getElementById("notoutputdisp").innerHTML = " " + ans;
}

// OR GATE

function getorans() {
    var orin1 = document.getElementById("orin1").value;
    var orin2 = document.getElementById("orin2").value;
    var ans = "";
    var found = true;
    if(orin1.length == 0 ){
        alert("Pahle Input Karo , first input section of OR GATE ");
        return ;
    }
    if(orin2.length == 0){
        alert("Pahle Input Karo, second input section of OR GATE ");
        return ;
    }
    if(orin1.length != orin2.length){
        alert("OR Gate Input length is not same");
        return ;
    }
    for (var i = 0; i < orin1.length; i++) {
        var x = orin1[i];
        var y = orin2[i];
        x = x - '0';
        y = y - '0';
        if(x + y == 0)
        ans += '0';
        else if((x + y == 1 ) || ( x + y == 2))
        ans += '1';
        else{
            found = false;
            break;
        }
    }
    if (!found)
        alert("Wrong input data type");
    else 
        document.getElementById("oroutputdisp").innerHTML = " " + ans;
}

// NOR Gate 

function getnorans() {
    var norin1 = document.getElementById("norin1").value;
    var norin2 = document.getElementById("norin2").value;
    var ans = "";
    var found = true;
    if(norin1.length == 0 ){
        alert("First Input, first input section of NOR GATE ");
        return ;
    }
    if(norin2.length == 0){
        alert("First Input, second input section of NOR GATE ");
        return ;
    }
    if(norin1.length != norin2.length){
        alert("NOR Gate Input length is not same");
        return ;
    }
    for (var i = 0; i < norin1.length; i++) {
        var x = norin1[i];
        var y = norin2[i];
        x = x - '0';
        y = y - '0';
        if(x + y == 0)
        ans += '1';
        else if((x + y == 1 ) || ( x + y == 2))
        ans += '0';
        else{
            found = false;
            break;
        }
    }

    if (!found)
        alert("Wrong input data type");
    else 
        document.getElementById("noroutputdisp").innerHTML = " " + ans;
}

// XOR GATE

function getxorans() {
    var xorin1 = document.getElementById("xorin1").value;
    var xorin2 = document.getElementById("xorin2").value;
    var ans = "";
    var found = true;
    if(xorin1.length == 0 ){
        alert("First Input, first input section of XOR GATE ");
        return ;
    }
    if(xorin2.length == 0){
        alert("First Input, second input section of XOR GATE ");
        return ;
    }
    if(xorin1.length != xorin2.length){
        alert("XOR Gate Input length is not same");
        return ;
    }
    for (var i = 0; i < xorin1.length; i++) {
        var x = xorin1[i];
        var y = xorin2[i];
        x = x - '0';
        y = y - '0';
        if(x == y)
        ans += '0';
        else if((x == 1 && y == 0) || ( x == 0 && y == 1))
        ans += '1';
        else{
            found = false;
            break;
        }
    }
    if (!found)
        alert("Wrong input data type");
    else 
        document.getElementById("xoroutputdisp").innerHTML = " " + ans;
}

// AND GATE

function getandans() {
    var andin1 = document.getElementById("andin1").value;
    var andin2 = document.getElementById("andin2").value;
    var ans = "";
    var found = true;
    if(andin1.length == 0 ){
        alert("First Input, first input section of AND GATE ");
        return ;
    }
    if(andin2.length == 0){
        alert("First Input, second input section of AND GATE ");
        return ;
    }
    if(andin1.length != andin2.length){
        alert("AND Gate Input length is not same");
        return ;
    }
    for (var i = 0; i < andin1.length; i++) {
        var x = andin1[i];
        var y = andin2[i];
        x = x - '0';
        y = y - '0';
        if(x*y == 0)
        ans += '0';
        else if(x == 1 && y == 1)
        ans += '1';
        else{
            found = false;
            break;
        }
    }
    if (!found)
        alert("Wrong input data type");
    else 
        document.getElementById("andoutputdisp").innerHTML = " " + ans;
}

// NAND GATE

function getnandans() {
    var nandin1 = document.getElementById("nandin1").value;
    var nandin2 = document.getElementById("nandin2").value;
    var ans = "";
    var found = true;
    if(nandin1.length == 0 ){
        alert("First Input, first input section of NAND GATE ");
        return ;
    }
    if(nandin2.length == 0){
        alert("First Input, second input section of NAND GATE ");
        return ;
    }
    if(nandin1.length != nandin2.length){
        alert("AND Gate Input length is not same");
        return ;
    }
    for (var i = 0; i < nandin1.length; i++) {
        var x = nandin1[i];
        var y = nandin2[i];
        x = x - '0';
        y = y - '0';
        if(x*y == 0)
        ans += '1';
        else if(x == 1 && y == 1)
        ans += '0';
        else{
            found = false;
            break;
        }
    }
    if (!found)
        alert("Wrong input data type");
    else 
        document.getElementById("nandoutputdisp").innerHTML = " " + ans;
}

function instructions(){
    alert("Input Binary Numbers Only");
}