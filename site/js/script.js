/*function preloadImages() {
    document.body.style.backgroundImage="url('images/Blur_Background.png')";
    document.body.style.backgroundImage="url('images/Background.png')";
}*/

function openForm() {
    document.getElementById("popupForm").style.display="block";
    document.getElementById("background").style.filter="blur(2px)";
    document.getElementById("popupForm").style.filter="blur(0px)";
    document.body.style.pointerEvents="none";
    document.getElementById("popupForm").style.pointerEvents="all";
}

function closeForm() {
    document.getElementById("popupForm").style.display="none";
    document.getElementById("background").style.filter="blur(0px)";
    document.body.style.pointerEvents="all";
}

function openFormMatch(){
    document.getElementById("popupFormMatch").style.display="block";
    document.getElementById("background").style.filter="blur(2px)";
    document.getElementById("popupFormMatch").style.filter="blur(0px)";
}

function closeFormMatch(){
    document.getElementById("popupFormMatch").style.display="none";
    document.getElementById("background").style.filter="blur(0px)";
}


function openFormCategorie() {
    document.getElementById("popupFormCat").style.display="block";
    document.getElementById("background").style.filter="blur(2px)";
    document.getElementById("popupFormCat").style.filter="blur(0px)";

}

function closeFormCategorie() {
    document.getElementById("popupFormCat").style.display="none";
    document.getElementById("background").style.filter="blur(0px)";
}

function openFormCategorieModif(nom, mtn) {
    var element = document.form.select;
    for(var i = 0 ; i<element.length ; i++){
        if(element[i].checked){
            var check=element[i].value;
            break;
        }
    }
    document.getElementById('nomcat1').value=nom;
    document.getElementById('mtnindemnite1').value=mtn;
    document.getElementById('num').value=check;
    document.getElementById("popupFormCatModSuppr").style.display="block";
    document.getElementById("background").style.filter="blur(2px)";
    document.getElementById("popupFormCatModSuppr").style.filter="blur(0px)";

}
function closeFormCategorieModif() {
    document.getElementById("popupFormCatModSuppr").style.display="none";
    document.getElementById("background").style.filter="blur(0px)";
}

function Afficher() {
    if(document.getElementById("myDropdown").style.display=="block"){
        document.getElementById("myDropdown").style.display="none";
    } else {
        document.getElementById("myDropdown").style.display="block";
    }
}

function openFormMatchModif(adresse, date, heure, equipe1, equipe2, arbitre1, arbitre2, mtn1, mtn2, num) {
    document.getElementById('choixSalleMod').selectedIndex=adresse;
    document.getElementById('dateMod').value=date;
    document.getElementById('heureMod').value=heure;
    document.getElementById('choixEquipe1Mod').selectedIndex=equipe1;
    document.getElementById('choixEquipe2Mod').selectedIndex=equipe2;
    document.getElementById('choixArbitre1Mod').selectedIndex=arbitre1;
    document.getElementById('choixArbitre2Mod').selectedIndex=arbitre2;
    document.getElementById('mtn1Mod').value=mtn1;
    document.getElementById('mtn2Mod').value=mtn2;
    document.getElementById('numMatch').value=num;
    document.getElementById("popupFormMatchModSuppr").style.display="block";
    document.getElementById("background").style.filter="blur(2px)";
    document.getElementById("popupFormMatchModSuppr").style.filter="blur(0px)";
}

function closeFormMatchModif() {
    document.getElementById("popupFormMatchModSuppr").style.display="none";
    document.getElementById("background").style.filter="blur(0px)";
}

function disable(num){
    switch(num){
        case 1:
        var input = document.getElementById('choixEquipe1').selectedIndex;
        var opts = document.getElementById('choixEquipe2').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('choixEquipe2').options[j].disabled=true;
            }else{
                document.getElementById('choixEquipe2').options[j].disabled=false;
            }
        }
        document.getElementById('choixEquipe2').options[input].disabled=true;
        alert("test1");
        ajaxTest(document.getElementById('choixArbitre1').selectedIndex;, document.getElementById('choixEquipe1').selectedIndex;, document.getElementById('choixEquipe2').selectedIndex;)

        case 2:
        var input = document.getElementById('choixEquipe2').selectedIndex;
        var opts = document.getElementById('choixEquipe1').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('choixEquipe1').options[j].disabled=true;
            }else{
                document.getElementById('choixEquipe1').options[j].disabled=false;
            }
        }
        document.getElementById('choixEquipe1').options[input].disabled=true;

        case 3:
        var input = document.getElementById('arbitre1').selectedIndex;
        var opts = document.getElementById('arbitre2').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('arbitre2').options[j].disabled=true;
            }else{
                document.getElementById('arbitre2').options[j].disabled=false;
            }
        }
        document.getElementById('arbitre2').options[input].disabled=true;

        case 4:
        var input = document.getElementById('arbitre2').selectedIndex;
        var opts = document.getElementById('arbitre1').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('arbitre1').options[j].disabled=true;
            }else{
                document.getElementById('arbitre1').options[j].disabled=false;
            }
        }
        document.getElementById('arbitre1').options[input].disabled=true;

        case 5:
        var input = document.getElementById('choixEquipe1Mod').selectedIndex;
        var opts = document.getElementById('choixEquipe2Mod').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('choixEquipe2Mod').options[j].disabled=true;
            }else{
                document.getElementById('choixEquipe2Mod').options[j].disabled=false;
            }
        }
        document.getElementById('choixEquipe2Mod').options[input].disabled=true;

        case 6:
        var input = document.getElementById('choixEquipe2Mod').selectedIndex;
        var opts = document.getElementById('choixEquipe1Mod').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('choixEquipe1Mod').options[j].disabled=true;
            }else{
                document.getElementById('choixEquipe1Mod').options[j].disabled=false;
            }
        }
        document.getElementById('choixEquipe1Mod').options[input].disabled=true;

        case 7:
        var input = document.getElementById('choixArbitre1Mod').selectedIndex;
        var opts = document.getElementById('choixArbitre2Mod').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('choixArbitre2Mod').options[j].disabled=true;
            }else{
                document.getElementById('choixArbitre2Mod').options[j].disabled=false;
            }
        }
        document.getElementById('choixArbitre2Mod').options[input].disabled=true;

        case 8:
        var input = document.getElementById('choixArbitre2Mod').selectedIndex;
        var opts = document.getElementById('choixArbitre1Mod').options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            if (j==0) {
                document.getElementById('choixArbitre1Mod').options[j].disabled=true;
            }else{
                document.getElementById('choixArbitre1Mod').options[j].disabled=false;
            }
        }
        document.getElementById('choixArbitre1Mod').options[input].disabled=true;
    }

    function erreur1(){
        alert("Erreur : l'arbitre 1 n'est pas valide");
    }

    function erreur2(){
        alert("Erreur : l'arbitre 2 n'est pas valide");
    }
    function ajaxTest(arbitre1,equipe1,equipe2){
        alert("test2");
        var result = cnx().ajax.phpPostSyn("./modele/bd_basket_arbitres.php","check",arbitre1,equipe1,equipe2);
        if(result){
            document.getElementsByName("formAddMatch").submit();
        } else {
            document.getElementById("erreur1").style.display="block";
        }
    }
}