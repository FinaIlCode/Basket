function preloadImages() {
	document.body.style.backgroundImage="url('images/Blur_Background.png')";
	document.body.style.backgroundImage="url('images/Background.png')";
}

function openForm() {
    document.getElementById("popupForm").style.display="block";
    document.body.style.backgroundImage="url('images/Blur_Background.png')";
    document.getElementById("entete").style.filter="blur(2px)";
    document.getElementById("accueil").style.filter="blur(2px)";
    document.getElementById("pied").style.filter="blur(2px)";

}

function closeForm() {
    document.getElementById("popupForm").style.display="none";
    document.body.style.backgroundImage="url('images/Background.png')";
    document.getElementById("entete").style.filter="blur(0px)";
    document.getElementById("accueil").style.filter="blur(0px)";
    document.getElementById("pied").style.filter="blur(0px)";
}

function openFormCategorie() {
    document.getElementById("popupFormCat").style.display="block";
    document.body.style.backgroundImage="url('images/Blur_Background.png')";
    document.getElementById("entete").style.filter="blur(2px)";
    document.getElementById("pied").style.filter="blur(2px)";
    document.getElementById("table_categorie").style.filter="blur(2px)";
    document.getElementById("blur").style.filter="blur(2px)";
    document.getElementById("blur2").style.filter="blur(2px)";
    document.getElementById("blur3").style.filter="blur(2px)";

}

function closeFormCategorie() {
    document.getElementById("popupFormCat").style.display="none";
    document.body.style.backgroundImage="url('images/Background.png')";
    document.getElementById("entete").style.filter="blur(0px)";
    document.getElementById("pied").style.filter="blur(0px)";
    document.getElementById("table_categorie").style.filter="blur(0px)";
    document.getElementById("blur").style.filter="blur(0px)";
    document.getElementById("blur2").style.filter="blur(0px)";
    document.getElementById("blur3").style.filter="blur(0px)";
}

function openFormCategorieModif() {
    document.getElementById("popupFormCatMod").style.display="block";
    document.body.style.backgroundImage="url('images/Blur_Background.png')";
    document.getElementById("entete").style.filter="blur(2px)";
    document.getElementById("pied").style.filter="blur(2px)";
    document.getElementById("table_categorie").style.filter="blur(2px)";
    document.getElementById("blur").style.filter="blur(2px)";
    document.getElementById("blur2").style.filter="blur(2px)";
    document.getElementById("blur3").style.filter="blur(2px)";
}
function closeFormCategorieModif() {
    document.getElementById("popupFormCatMod").style.display="none";
    document.body.style.backgroundImage="url('images/Background.png')";
    document.getElementById("entete").style.filter="blur(0px)";
    document.getElementById("pied").style.filter="blur(0px)";
    document.getElementById("table_categorie").style.filter="blur(0px)";
    document.getElementById("blur").style.filter="blur(0px)";
    document.getElementById("blur2").style.filter="blur(0px)";
    document.getElementById("blur3").style.filter="blur(0px)";
}