
    const admins = [
        {nom: "Aaron",age: 30, estAdmin: true},
        {nom: "Christelle",age: 25,estAdmin: false},
        {nom: "Charly",age: 35,estAdmin: false},
        {nom: "David",age: 28,estAdmin: false}
    ]; 

    const filtredAdmins = admins.filter(admin => admin.nom);

    const mapAdmins = admins.map((admin) => admin.estAdmin === true);
    console.log(mapAdmins); // Affiche les noms des administrateurs
    console.log(filtredAdmins); // Affiche les administrateurs filtrés
    
