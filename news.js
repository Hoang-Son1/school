function logo(){
    location.href ='studentportal.html#body'
}
function logo2(){
    location.href ='teacherportal.html#body'
}
function logo3(){
    location.href ='parentportal.html#body'
}
function login(){
    location.href ='login.html'
}
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
        "#loader").style.display = "block";
        document.querySelector(
        "body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
        document.body.style.overflow = 'hidden';
    } else {
        document.querySelector(
        "body").style.visibility = "visible";
        document.querySelector(
        "#loader").style.display = "none";
        document.body.style.overflow = 'visible';
    }
}
function zoom1(){
    var x = document.getElementById("newsno1");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom2(){
    var x = document.getElementById("newsno2");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom3(){
    var x = document.getElementById("newsno3");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom4(){
    var x = document.getElementById("newsno4");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom5(){
    var x = document.getElementById("newsno5");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom6(){
    var x = document.getElementById("newsno6");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom7(){
    var x = document.getElementById("newsno7");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}
function zoom8(){
    var x = document.getElementById("newsno8");
    if (x.style.display == "flex"){
        x.style.display = "none";
    } else{
        x.style.display = "flex";
    }
}