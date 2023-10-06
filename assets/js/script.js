// DECLARATION DES CONSTANTES
//cibler l'element qui va ouvrir et fermer la modal (ici on vise par l'ID et aussi avec la Class)
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('.btnClose');
const modal = document.querySelector('.modalContainer');


//LES FONCTIONS :
//On ouvre la modal au click sur le bouton "voir"
function openModal() {
    //on prend la constance modal déclarée plus haut, on utilise "classList.remove" pour enlever la classe "displayNone" de l'élement  
    modal.classList.remove('displayNone');
}
// Au click sur btnOpen, on déclenche la function openModal
btnOpen.addEventListener("click", openModal);


// On ferme la modal en cliquant sur le bouton X de la modal
function closeModal() {
    modal.classList.add('displayNone');
}
// Au click sur btnOpen, on déclenche la function closeModal
btnClose.addEventListener("click", closeModal);