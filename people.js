
const names = require ('./modules/names');
const hobbies = require ('./modules/hobbies');

function namesHobbies(){

    const [name, surname, hobbyOne, hobbyTwo, hobbyThree] = process.argv.slice(2)
    const nameHobbies = {
        fullName: names(name, surname),
        hobbies: hobbies(hobbyOne, hobbyTwo, hobbyThree)
    }
    return nameHobbies


}

const fullObject = namesHobbies();

console.log(fullObject);


