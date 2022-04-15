window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.padding = "20px 8px";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = "0";
        document.getElementById("blackLineTitle").style.width = "20%";
    } else {
        document.getElementById("navbar").style.padding = "60px 8px";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("blackLineTitle").style.width = "50%";
    }
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.body.style.backgroundColor = "#201b56";
    } else {
        document.body.style.backgroundColor = "#ffe3e3";
    }
}


