const maCollectionFilms = ["Les Visiteurs", "Le Fabuleux Destin d'Amélie Poulain", "Intouchables", "La La Land", "Inception", "Avatar", "Titanic", "Star Wars", "Harry Potter", "Jurassic Park"];

const nombreFilms = maCollectionFilms.length;
maCollectionFilms.push("Le Seigneur des Anneaux");
console.log(maCollectionFilms.length); // "Les Visiteurs"

maCollectionFilms.pop(); // Retire le dernier film de la collection
console.log(maCollectionFilms.length); 
maCollectionFilms.push("Retour d'un fils")

console.log(maCollectionFilms[10]);
maCollectionFilms.unshift("Le Parrain"); // Ajoute un film au début de la collection 

console.log(maCollectionFilms[10]); // "Le Parrain"


const matrix = [
    [1,4,9],
    [8,7,6],
    [3,2,1] 
];

const result = console.log(matrix[0][0] * matrix[1][1] * matrix[2][2]); // 1
console.log(matrix[1][1]); // 6
console.log(matrix[2][2]); // 2

document.getElementById("demo").innerText = "Le film à l'index 10 est : " + maCollectionFilms[10] + "<br>" 
