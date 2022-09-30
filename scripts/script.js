const burger = document.querySelector(".burger");
const sidebar = document.querySelector("sidebar");

//// Flags de l'affichage des menus ////
let isDisplayedOnTop = false;
let isDisplayedOnSide = false;



//// Cette fonction affiche le menu latéral au clic sur le burger ////
burger.addEventListener('click', function () {
    if (!isDisplayedOnSide) {
        sidebar.style.display = "initial";
    }
    else {
        sidebar.style.display = "none";
    }
    isDisplayedOnSide = !isDisplayedOnSide;
});



////cette fonction fait disparaitre le menu après un clic sur une partie////
sidebar.addEventListener('click', function () {
    if (window.innerWidth < 768) {  //mais seulement sur petit écran (sinon la barre reste affichée)
        if (!isDisplayedOnSide) {
            sidebar.style.display = "initial";
        }
        else {
            sidebar.style.display = "none";
        }
        isDisplayedOnSide = !isDisplayedOnSide;
    }
});



////cette fonction fait apparaitre le menu du haut après le scroll de la première partie...////
window.onscroll = () => {
    if (window.innerWidth > 768) {  //...mais seulement sur version desktop
        if ((scrollY > 600 && !isDisplayedOnTop) || (scrollY < 600 && isDisplayedOnTop)) {
            sidebar.classList.toggle("displaying");
            isDisplayedOnTop = !isDisplayedOnTop;
        }
    }
};