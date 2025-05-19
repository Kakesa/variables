// Objet

const ticket = {
  nomFilm: "Avatar",
  prix : 10,
  nomSalle : "Salle 1",
  dateProjection : "10-01-2023 à 09:30", 
}

let nom = "Jean Dupont";

let texteAffichage = "Bonjour " + nom + " votre film " + ticket.nomFilm + " est dans la " + ticket.nomSalle + " est le sera projection " + ticket.dateProjection ;

console.log(texteAffichage);