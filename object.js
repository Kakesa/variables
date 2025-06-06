// Objet
const users = [
  {
    name : "Kakesa",
    age : 27,
    size : "1m80",

  },
  {
    name : "Gertrude",
    age : 19,
    size : "1m79"
  }
];

console.log(users.length); // Affiche le nombre d'objets dans le tableau

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  console.log(i, user); 

  
}

