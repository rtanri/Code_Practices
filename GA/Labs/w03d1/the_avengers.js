// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     // sub object inside the main object
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     // function
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }

// // // Log Iron Man's third ability
// // console.log(ironMan.abilities[2]);

// // // Log all of Iron Man's abilities by looping through the array
// // for (let i = 0; i < ironMan.abilities.length ; i++){
// //     console.log(ironMan.abilities[i]);
// // }

// // // Log whether or not Iron Man appeared in spiderManHomecoming
// // console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);


// // // Wait, that's not right -- he did appear in that movie! Change 
// // // the value to true without editing the object itself 
// // //and log it again to verify it changed

// // ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// // console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);


// // // Check if jarvis is there by calling on the jarvisAreYouThere function
// // ironMan.jarvisAreYouThere();


// // 2. Assembling other Avengers

// let createCaptain = () => {
//     // must have return to give back OBJECT
//     return {
//         aliases: {
//             superheroName: "Captain America"
//         },
//         abilities: ['Strong Shield', 'Bomeraang Shield', 'peak human strength'],
//         sayPhrase: () => {
//             return "I can do this all day";
//         }
//     }
// }

// console.log(createCaptain().aliases.superheroName);
// console.log(createCaptain().abilities[2]);
// console.log(createCaptain().sayPhrase());


// let blackWidow = {
//         aliases: {
//             realName: "Natalia Alianovna Romanova",
//             otherNotableAliases: ["Good Lady", "Natalie Rushman"]
//         }    
// }

// console.log(blackWidow.aliases.realName);
// console.log(blackWidow.aliases.otherNotableAliases[1])



// 3. Avengers Nested

const theAvengers = [
    { name: 'Tony Stark', superheroName: 'Iron Man'},
    { name: 'Steve Rogers', superheroName: 'Captain America' },
    { name: 'Bruce Banner', superheroName: 'The Hulk'},
    { name: 'Thor' },
    { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
    { name: 'Clint Barton', superheroName: 'Hawkeye' }
]

// // loop through it and log just their name
// for (let key in theAvengers){
//     console.log(theAvengers[key].name);
// }

// // method by Mentor
// for (let i = 0; i < theAvengers.length; i++){
//     // let currentObj = theAvengers[i];
//     console.log(theAvengers[i].name)
// }




// // 4. Use 2 loops to print out all MCU movies

// const mcuMovies = [
//     ['ant-man', 'ant-man and the wasp'],
//     ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
//     ['black panther'],
//     ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
//     ['doctor strange'],
//     ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
//     ['the hulk'],
//     ['iron man', 'iron man 2', 'iron man 3'],
//     ['spiderman: homecoming'],
//     ['thor', 'thor: the dark world', 'thor: ragnarok']
// ]

// // loop 1st array then loop 2nd array, then log the value
// for (let firstArray in mcuMovies){
//     for(let secondArray in mcuMovies[firstArray]){
//     console.log(mcuMovies[firstArray][secondArray]);
//     }
// }

// // work by Mentor
// for (let row = 0; row < mcuMovies.length; row++){

//     // set a variable for current inner array
//     let currentInnerArr = mcuMovies[row];

//     for (let col = 0; col < currentInnerArr.length; col++){
//         console.log(currentInnerArr[col]);
//     }
// }



// // 5. Instrument Data

// const instruments = {
//     banjo: ["1920 gibson", "deering", "washburn"],
//     guitar: {
//       acoustic: ["martin", "taylor", "santa cruz", "gibson"],
//       electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
//       nylon: ["baldwin", "cordoba"]
//     },
//     mandolin: ["eastman", "weber", "collings"]
// }

// // Log all following:
// // telecaster
// console.log(instruments.guitar.electric[1]);

// // santa cruz
// console.log(instruments.guitar.acoustic[2]);

// // washburn
// console.log(instruments.banjo[2]);

// // weber
// console.log(instruments.mandolin[1]);


// // Loop through all the electric guitars and log them
// for (let i = 0; i < instruments.guitar.electric.length; i++){
//     console.log(instruments.guitar.electric[i]);
// }


// // Add vocal properties to object
// instruments.vocal = ['Ed Sheeran', "Lady Gaga", "Adele"];
// console.log(instruments.vocal);



// 6. Other Objects - Garmonbozia

// const garmonbozia = {
//     meltedFace: true,
//     wobblyArms: true,
//     mysteryMeats: [
//       'Schlimmbinooks',
//       'blangs',
//       { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
//       { type: 'Yuck-tops', deliverables: [
//         'Nevermind',
//         { zone: 'safety-zone' },
//         { zone: false, true: true },
//         () => {
//           return () => {
//             return () => {
//               return () => {
//                 return () => {
//                   return { website: 'Gossipcop.com', what: {
//                     offering: 'creamed corn', location: 'dark'
//                   }
//                   }
//                 }
//               }
//             }
//           }
//         }
//        ]
//       }
//     ]
// }

// console.log(garmonbozia.mysteryMeats[4]type);