// Iron Man

const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

// Log Iron Man's third ability

console.log(ironMan.abilities[2])

// Log all of Iron Man's abilities by looping through the array

for (let i = 0; i < ironMan.abilities.length; i++) {
    console.log(ironMan.abilities[i])
}

// Log whether or not Iron Man appeared in spiderManHomecoming

console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)

// Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed

ironMan.marvelMovieAppearances.spiderManHomecoming = true

// Check if jarvis is there by calling on the jarvisAreYouThere function

ironMan.jarvisAreYouThere()


// Assembling other Avengers

// Create a data structure for createCaptain such that...

let createCaptain = () => {
    return {
        aliases: {
            superheroName: "Captain America"
        },
        abilities: ["handsome", "has muscle", "peak human strength"],
        sayPhrase: () => {
            console.log("i can do this all day")
        }
    }
}

// The following code logs Captain America
console.log(createCaptain().aliases.superheroName)

// The following code logs peak human strength
console.log(createCaptain().abilities[2])

// The following code logs i can do this all day
createCaptain().sayPhrase()

// Create a data structure for blackWidow such that...

let blackWidow = {
    aliases: {
        realName: "Natalia Alianovna Romanova",
        otherNotableAliases: ["Jon", "Natalie Rushman"]
    }
}

// The following code logs Natalia Alianovna Romanova
console.log(blackWidow.aliases.realName)

// The following code logs Natalie Rushman
console.log(blackWidow.aliases.otherNotableAliases[1])


// Avengers Nested

// Given the following array, loop through it and log just their name.
const theAvengers = [
  { name: 'Tony Stark', superheroName: 'Iron Man'},
  { name: 'Steve Rogers', superheroName: 'Captain America' },
  { name: 'Bruce Banner', superheroName: 'The Hulk'},
  { name: 'Thor' },
  { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
  { name: 'Clint Barton', superheroName: 'Hawkeye' }
]

for (let i = 0; i < theAvengers.length; i++) {
    let currentObj = theAvengers[i]
    console.log(currentObj.name)
}

// MCU Movies
// Given the following array of arrays,
// use two loops to loop over each inner array and list all the mcu movies.
const mcuMovies = [
  ['ant-man', 'ant-man and the wasp'],
  ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
  ['black panther'],
  ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
  ['doctor strange'],
  ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
  ['the hulk'],
  ['iron man', 'iron man 2', 'iron man 3'],
  ['spiderman: homecoming'],
  ['thor', 'thor: the dark world', 'thor: ragnarok']
]

for(let row = 0; row < mcuMovies.length; row++) {

    let currentInnerArr = mcuMovies[row]

    for (let col = 0; col < currentInnerArr.length; col++) {

        console.log(currentInnerArr[col])
        
    }

}


// Other Objects - Intstruments

const instruments = {
    banjo: ["1920 gibson", "deering", "washburn"],
    guitar: {
      acoustic: ["martin", "taylor", "santa cruz", "gibson"],
      electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
      nylon: ["baldwin", "cordoba"]
    },
    mandolin: ["eastman", "weber", "collings"]
}

// Log all of the following:
// telecaster
console.log(instruments.guitar.electric[1])

// santa cruz
console.log(instruments.guitar.acoustic[2])

// washburn
console.log(instruments.banjo[2])

// weber
console.log(instruments.mandolin[2])

// Loop through all the electric guitars and log them

for (let i = 0; i < instruments.guitar.electric.length; i++) {
    console.log(instruments.guitar.electric[i])
}

// Add a vocals property to the object that includes a list of your favorite singers
instruments.vocals = ["Min Shan"]


// Other Objects - Garmonbozia

// Your mission is to console.log 'creamed corn'
// from deep within the bizarre structure:
const garmonbozia = {
    meltedFace: true,
    wobblyArms: true,
    mysteryMeats: [
      'Schlimmbinooks',
      'blangs',
      { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
      { type: 'Yuck-tops', deliverables: [
        'Nevermind',
        { zone: 'safety-zone' },
        { zone: false, true: true },
        () => {
          return () => {
            return () => {
              return () => {
                return () => {
                  return { website: 'Gossipcop.com', what: {
                    offering: 'creamed corn', location: 'dark'
                  }
                  }
                }
              }
            }
          }
        }
       ]
      }
    ]
}

console.log(
    garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering
)
