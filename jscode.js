document.getElementById("proTitle").addEventListener("mouseover", mouseOver);
document.getElementById("proTitle").addEventListener("mouseout", mouseOut);
                
function mouseOver() {
    document.getElementById("proTitle").style.color = "blue";
    document.getElementById("proTitle").innerHTML = "In Training at Academy Xi! (2021)";
}
                
function mouseOut() {
    document.getElementById("proTitle").style.color = "black";
    document.getElementById("proTitle").innerHTML = "Full-Stack Software Engineer";
}

function changeBackground() {
    const text = document.getElementById("contact").style.backgroundColor="silver";
}

function backToNormal(){
    const text = document.getElementById("contact").style.backgroundColor="";
}



