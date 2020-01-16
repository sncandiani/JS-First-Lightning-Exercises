/* Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
 */

const car = {
    make: "Ford"
    model: "Mustang"
    year: 2015;
    color: "Red";
}

const animalNames = [
    "Kippers",
     "Jack",
     "Gypsy", 
     "Angus", 
     "Seymour Bouts",
     "Sharky"
]
    
const mary = {
    name: "Mary";
    age: 21;
}

const bobby = {
    name: "Bobby";
    age: 75;
}

const boris = {
    name: "Boris";
    age: 66;
}

const boonie = {
    name: "Boonie";
    age: 2;
}

const familyMembers = [mary,bobby,boris,boonie]

//Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
//Logs the value of the following keys within the object wardrobe to the console
console.log(height)
console.log(manufacturer)
console.log(contents)
console.log(depth)
console.log(width)

//Dot notation allows you to make key value pairs
wardrobe.shelveNumber = 2;
wardrobe.sectionName = ["Section 1", "Section 2", "Section 3"]
//Can also change the value afterward
wardrobe.depth = 28;

//Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
//Dot notation
empireStateBuilding.stories
//Square notation
empireStateBuilding["stories"]
//Creating variables with the key value pair
//The variable numberOfStories is equal to the value of the key stories in the object empireStateBuilding
numberOfStories = empireStateBuilding["stories"]


//Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool["instructors"]["partTime"])
console.log(nashvilleSoftwareSchool["instructors"]["fullTime"])
console.log(nashvilleSoftwareSchool["instructors"]["fullTime"][4])
console.log(nashvilleSoftwareSchool["instructors"]["partTime"][0])