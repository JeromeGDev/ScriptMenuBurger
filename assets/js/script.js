// décommenter les console.log pour débugger

/* ================================================================*/
/* ============ Déclaration de toutes les variables: ============= */

/* ======= Variables pour le fonctionnement du menu Burger ======== */

/* 1 - Sélection du déclencheur de modification du burger*/
let menuOpener = document.querySelector( '#buttonBurger' );
/*console.log( "burgerContainer", burger );*/

/* 2-1 - Sélection du menu à faire apparaitre */
let mainNav = document.querySelector( '.mainNav' );
/*console.log( "mainNav", mainNav );*/

/* 2-1 - Sélection du bouton burger à faire disparaitre */
let burgerContainer = document.querySelector( '.burgerContainer' );
/*console.log( "mainNav", mainNav );*/

/* Séclection de la fermeture du menu */
let menuCloser = document.querySelector( ".closerBtn" );

/* Sélection des boutons du menu de la barre latéral */
/* Sélection de tous les boutons */
let leftMenuButton = document.querySelector( ".leftNavUlLi" );

/*Sélection des boutons ayant des sous menu*/
let withChild = document.querySelector( ".hasChildren::after" );

/* Sélection des boutons sans enfant */
let withoutChild = document.querySelector( ".hasNoChildren" );
/* Sélection des enfants à montrer*/
let childToShow = document.querySelector( ".leftNavFirstSubLevel" );
/* =================================================================*/
/* ========================== Fonctions =========================== */

/* =============== fonctionnement du menu Burger ================ */

/* Ajout de l'écouteur d'évènement qui surveille le clic sur le burger */
buttonBurger.addEventListener( "click", openMenu );

/* Ajout de l'écouteur d'évènement qui surveille le clic sur la croix qui ferme le menu*/
menuCloser.addEventListener( "click", closeMenu )
mainNav.addEventListener( "click", closeMenu )
/* Création de la fonction d'apparition du menu et disparition du bureger */ 
function openMenu() {
    mainNav.classList.add( "showMenu" );
    burgerContainer.classList.add( "hide" );
    menuCloser.classList.remove( "hide" );
    menuCloser.classList.add( "show" );
}

/* Création de la fonction de fermeture du menu et de réapparaition du burger */
function closeMenu() {
    mainNav.classList.remove( "showMenu" );
    burgerContainer.classList.add( "show" );
}

/* Transformation des boutons */

leftMenuButton.addEventListener( 'mouseenter', openChildren );
function openChildren() {
if ( leftMenuButton.classList.contains( "hasChildren" ) == true ) {
        childToShow.classList.remove( "hide" );
    }
}
