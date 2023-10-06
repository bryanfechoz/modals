// cibler l'element btn qui va ouvrir la modal (ici on vise par l'ID et aussi avec la Class)
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('.btnClose');

const modal = document.querySelector('.modalContainer');

function openModal() {
    //on prend la constance modal (ligne 4), on utilise "classList.remove" pour enlever la classe "displayNone" de l'élement  (ligne 19 du fichier index.html)
    modal.classList.remove('displayNone');
}


// Au click sur btnOpen, on déclenche la function openModal
btnOpen.addEventListener("click", openModal);

function closeModal() {
    modal.classList.add('displayNone');
}

btnClose.addEventListener("click", closeModal);