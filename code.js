
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 100
var intaleatoire = 0;
var intsaisi = 0;
let result = true;
let reste = 0;

do {
    intaleatoire = entierAleatoire(1, 100);
for (let pas = 1; pas < 10; pas++) {
    // Ceci sera exécuté 10 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 10, le boucle se terminera.
    intsaisi = parseInt(prompt("Trouver la valeur comprise entre 1 et 100 que le jeu a choisi : ", "1"),10);
    if ((intsaisi>0) && (intsaisi<=100)) {

        if (intsaisi === intaleatoire) {
            result = confirm("Bravo! Vous avez gagné. Pour faire une autre partie cliquer sur OK.")
            if (result == true) {
                // je recommance le jeux
                pas = 10
            } else {
                // J'arrête
                pas = 10
            }
        }
        else {
            reste = 10 - pas
            document.write("<div>Il vous reste encore "+ reste +" chance(s) de réussir!</div>");
            if (intaleatoire > intsaisi) {
                document.write("<p>Le chiffre choisi est supérieur.</p>");
            } else {
                document.write("<p>Le chiffre choisi est inférieur.</p>");
            }
            if (reste == 0) {
                result == false
            }
        }
    }
    else {
        document.write("<div>Vous devez saisir un chiffre en 1 et 100.</div>");
    }
  }
}while (result == true);