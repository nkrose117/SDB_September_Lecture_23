
let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17'
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-01-01'
            },
        ],
        "season two": [/*  */],
        "season three": [/*  */]
    },
    currently_running: true,
    characters: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ]
}

const { characters, seasons} = theSimpsons; // object to right of = 
console.log(characters);
characters.push('Meo'); 
// console.log(theSimpsons);
characters[5] = 'Moe';
console.log(theSimpsons); 

const { currently_running: on_air} = theSimpsons; //on_air stores the value of currently_running

console.log(on_air); // true
console.log(theSimpsons.currently_running); // true


//! Spread with Objects
const simpsonsCharacter = {
    simpsonHouse: [
            'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
        ],
        moesTavern: ['Moe', 'Barney']
};

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const locations = {
    ...simpsonsCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}

// console.log(locations.);
console.log(locations.simpsonHouse);