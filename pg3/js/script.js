window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.padding = "10px 8px";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = "0";
        document.getElementById("blackLineTitle").style.width = "10%";
    } else {
        document.getElementById("navbar").style.padding = "40px 8px";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("blackLineTitle").style.width = "30%";
    }
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.body.style.backgroundColor = "#805044";
    } else {
        document.body.style.backgroundColor = "#ffe3e3";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("opened");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('opened')) {
                openDropdown.classList.toggle('opened');
            }
        }
    }
}
document.querySelector(".dropbtn").innerHTML = "✨";