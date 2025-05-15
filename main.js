// Declation de variables et constantes avec let et const
let a = 5;
let b = 10;
const c = 15;
let d = a + b + c;

// Affichage des variables dans la console
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);
 


let articlesVendu = 100

articlesVendu += 900

console.log(articlesVendu)
// Objet

var myObject = {
  nom : "Hope",
  age : 30,
  couleur : "black main"
}

myObject.nom
myObject.age
myObject.couleur

myObject.age
console.log(myObject.nom + "vous avez " + myObject.age + " ans, et vous etes un bon " + myObject.couleur )

/*Vous gérez une bibliothèque qui contient 500 livres. Vous décidez de faire les opérations suivantes :

acheter 50 livres de plus ; 

en jeter 10 ;

racheter 5 des livres jetés.

1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres. 

2. Vérifiez le résultat grâce à l’instruction console.log.

3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé. */
let totalLivres = 500;
totalLivres += 50; // acheter 50 livres de plus
totalLivres -= 10; // en jeter 10
totalLivres += 5; // racheter 5 des livres jetés
console.log("Total de livres dans la bibliothèque : " + totalLivres);
// 4. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé.
let affichageTotalLivres = totalLivres;
console.log("Affichage total de livres : " + affichageTotalLivres);
