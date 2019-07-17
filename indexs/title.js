if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 250);
}
var x = 0;
var titleText = [ "r", "ro", "rob", "ro", "r", "</3", "<3", "</3", "<3", "</3", "<3", "</3", "<3", "</3" ];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
