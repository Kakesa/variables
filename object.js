const personne = {
  name : "Hope",
  lastname : "Kakesa",
  age : 27,
  adresse : {
    rue : "marine",
    numero : 38,
    ville : "Kinshasa",
    couleurVoiture : "Gray"
  },
  fullName : function (){
    return "Je m'appelle " + this.name + " " + this.lastname;
  }
}

document.getElementById("demo").textContent = "Bonjour " + personne.fullName() + " j'habite au numero " + personne.adresse.numero + " de l'avenue " + personne.adresse.rue + " dans la ville de " + personne.adresse.ville + "."