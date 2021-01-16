const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async () => {
    try {
        const data = await fetchData(API);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(`${character.origin.url}`);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch(err) {
        console.error(err);
    }
}

console.log('before');
anotherFunction();
console.log('after');