window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.padding = "10px 8px";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = "0";
        document.getElementById("whiteLineTitle").style.width = "10%";
    } else {
        document.getElementById("navbar").style.padding = "40px 8px";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("whiteLineTitle").style.width = "30%";
    }
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.body.style.backgroundColor = "#fc9e9e";
    } else {
        document.body.style.backgroundColor = "#ffe3e3";
    }
}