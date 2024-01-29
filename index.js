document.addEventListener('DOMContentLoaded', function () {
    var svgObjekt = document.getElementById("svgfile");
    var svgInnehall = svgObjekt.contentDocument;

    // Exempel: Ändra färgen på "head" till röd
    var scaffold = svgInnehall.getElementById("scaffold");
    scaffold.setAttribute("fill", "red");
});