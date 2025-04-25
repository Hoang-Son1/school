function logo(){
    location.href ='studentportal.html'
}
function logo1(){
    location.href ='teacherportal.html'
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