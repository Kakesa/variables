function createUser(nom, age, estConnecté) {
    // Vérification des types pour s'assurer que les valeurs sont correctes
    if (typeof nom !== 'string' || typeof estConnecté !== 'boolean') {
        throw new Error("Invalid input types: nom should be a string and estConnecté should be a boolean.");
    }
    
    // Si age n'est pas un nombre, on le traite comme tel
    if (typeof age !== 'number') {
        age = Number(age); // Convertir en nombre
    }

    // Retourne un objet utilisateur sans lancer d'erreur
    return {
        nom: nom.trim(), 
        age: age >= 0 ? age : 0, // Définit 0 si age est négatif
        estConnecté: estConnecté // Utilise la valeur d'entrée
    };
}

// Exemple d'utilisation
try {
    const utilisateur = createUser("Christian", "ff", true);
    console.log(utilisateur);
} catch (error) {
    console.error(error.message);
}