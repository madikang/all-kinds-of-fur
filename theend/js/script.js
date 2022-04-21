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
