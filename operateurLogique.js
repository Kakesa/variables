// quelques operateurs logiques
// && // and
// || // or
// ! // not


// exemple de condition
let age = 5;

if(typeof age === "number" && age >= 0 && age <= 100) {
    if (age >= 18) {
        console.log("Vous etes majeur");
    }else {
        console.log("Vous etes mineur");
    }
}else {
    console.log("L'age doit etre un nombre entre 0 et 100");
}