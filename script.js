console.log('toto');

// Etape 1 - Sélectionner nos éléments
// sélectionnez moi les différents éléments du formulaire.

let input = document.getElementById('price');
let form = document.getElementById('form');
let error = document.getElementById('error');
let instruction = document.getElementById('instruction')



// Etape2 - Masquer le message d'erreur
//  Essayez de me cacher ce message d'erreur

error.style.display = 'none';



// Etape3 - Générer un nombre aléatoire
// Générer un nombre aléatoire comprit entre 0 et 1000

let randomNumber = Math.floor((Math.random() * 1001));
//1001 car sinon il prend pas 1000
console.log(randomNumber);

//Etape 5
let numberTry = 0;
let chosenNumber;


// Etape4 - Vérifier que l'utilisateur donne bien un nombre.
// Nous allons afficher un message d'erreur de façon dynamique.
// Comment afficher un message de façon dynamique sur un formulaire?
// A chaque fois que l'utilisateur tape dans l'input de notre 
// formulaire, nous allons pouvoir faire en sorte d'exécuter 
// un événement :

form.addEventListener('keyup', () =>{
    if (isNaN(input.value)) {
        error.style.display = 'block';
    }else{
        error.style.display = 'none'
    }
})

// Etape5 - Agir à l'envoie du formulaire
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    // console.log(e)
    if (isNaN(input.value) || input.value == ""){
        input.style.border = "solid red"
    } else {
        input.style.border = "solid silver"
        numberTry++;
        chosenNumber =input.value;
        // reinitialiser l'input pour pouvoir mettre d'autres chiffres
        input.value = '';
        //etape 6
        //on veut verifier si les nombres son bons
        check (chosenNumber);
    }

})

// Etape6 - Créer la fonction pour véifier
// Créons la fonction check qui va prendre en paramètre le nombre 
// choisi de notre utilisateur

let check = (chosenNumber) =>{
    // Créons un élément, car à chaque vérification, nous allons 
    // ajouter un élément à notre navigaleur. Ce sera un div 
    // avec 2 classes (instruction more / instructoin et less / 
    // instruction et winner)
    // Ajoutons une condition pour vérifier chosenNumber et randomNumber
    let otherInstruction = document.createElement('div');
    if (chosenNumber < randomNumber){
        // Afficher : c'est plus
        // Affichons # leNombreDeCoups leNombreChoisi : C'est plus
        otherInstruction.textContent = "#" + numberTry + " ( " + chosenNumber + " ) " + "C'est plus"; 
        // Ajoutons les classes instruction et plus
        otherInstruction.className = "instruction more"

    } else if ( chosenNumber > randomNumber){
        otherInstruction.textContent = "#" + numberTry + " ( " + chosenNumber + " ) " + "C'est moins" ;

        otherInstruction.className = "instruction less"
    } else {
        otherInstruction.textContent = "#" + numberTry + " ( " + chosenNumber + " ) " + "Félicitation !" 

        otherInstruction.className = "instruction winner"
        // à faire en dernier: desactiver le formulaire une fois que l'utilisateur à gagner
        input.disabled = true;

    }
    // on veut mettre les massage les un au dessus des autres 
    // Ajouter l'élément devant les autres précédemment ajoutés.
    // prepend ajoute en premier
    document.querySelector('#instruction').prepend(otherInstruction);
}



