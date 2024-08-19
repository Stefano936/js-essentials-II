// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

function getTotal(articlesTotal){
    let total = 0;
    articlesTotal.forEach(article => {
        total += article.price * Number(article.quantity);
    });
    return "El total del pedido es de: " + total + " pesos" 
}

console.log(getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]))

// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

function countBanana(inventory){
    let count = 0;
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i] ==='🍌'){
            count++;
        }
    }
    return `Hay una en total ${count} bananas`
}

console.log(countBanana(['🥑','🍌','🥭', '🍌']))

// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers() {
    let evenNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumber.push(numbers[i]);
        }
    }
    return `Los numeros pares son: ${evenNumber}`;
}

console.log(evenNumbers());

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
const numbers1 = [1, 2, 3, 4, 5];

function squareNumbers(){
    let squareNumbers = [];
    numbers1.forEach(article => {
        article = Math.pow(article,2);
        squareNumbers.push(article);
    });
    return squareNumbers 
}

console.log(squareNumbers(numbers1));

// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5

const numbers2 = [1, 2, 3, 4, 5];

function findMax(numbers2){
    let maximo = numbers2[0];
    for(let i = 1; i < numbers2.length; i++){
        if(numbers2[i] > maximo){
            maximo = numbers2[i];
        }
    }
    return `El numero más grande es: ${maximo}`;
}

console.log(findMax(numbers2));

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 32.5

function calculateAverageAge(people){
    let age = 0;
    let amountOfPeople = people.length;

    people.forEach(person => {
        age += person.age;
    });

    return age/amountOfPeople
}

console.log(calculateAverageAge([{ name: "Juan", age: 25 },{ name: "Carla", age: 30 },{ name: "Lucia", age: 35 },{ name: "El Chengue", age: 49 }]));

// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons

// const persons = [
//     {
//       name: 'Paula',
//       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
//     },
//     {
//       name: 'Martin',
//       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
//     },
//     {
//       name: 'Juan',
//       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
//     },
//     {
//       name: 'Veronica',
//       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
//     }
//   ];

// combinedHobbies(persons)
// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]

function combinedHobbies(persons) {
    let combinedHobbies = [];
    persons.forEach(person => {
        person.hobbies.forEach(hobby => {
            combinedHobbies.push(hobby);
        });
    });
    return combinedHobbies;
}

console.log(combinedHobbies([
    { name: 'Paula', hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨'] },
    { name: 'Martin', hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾'] },
    { name: 'Juan', hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️'] },
    { name: 'Veronica', hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️'] }
]));

const chemicals = [{
    compoundId: 'CHEM001',
    name: 'Aspirin',
    formula: 'C9H8O4',
    description: 'Aspirin is a common medication used to reduce pain and inflammation.',
    molecularWeight: '180.16 g/mol',
    meltingPoint: '135°C',
    boilingPoint: '140°C',
    solubility: 'Slightly soluble in water'},
    {
    compoundId: 'CHEM002',
    name: 'Caffeine',
    formula: 'C8H10N4O2',
    description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
    molecularWeight: '194.19 g/mol',
    meltingPoint: '238°C',
    boilingPoint: '178°C',
    solubility: 'Freely soluble in water'},
    {
    compoundId: 'CHEM003',
    name: 'Ethanol',
    formula: 'C2H6O',
    description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
    molecularWeight: '46.07 g/mol',
    meltingPoint: '-114.1°C',
    boilingPoint: '78.37°C',
    solubility: 'Miscible with water'}
    ];

function printChemicalInfo(chemicals){
    chemicals.forEach(chemicals => {
        console.log("+-----------------------------------------------------------------------------------------+")
        console.log("|","CompoundID:",chemicals.compoundId,"|");
        console.log("|","Name:",chemicals.name,"|");
        console.log("|","Formula:",chemicals.formula,"|");
        console.log("|","Description:",chemicals.description,"|");
        console.log("|","molecularWeight:",chemicals.molecularWeight,"|");
        console.log("|","molecularWeight:",chemicals.meltingPoint,"|");
        console.log("|","boilingPoint:", chemicals.boilingPoint,"|");
        console.log("|","solubility:",chemicals.solubility,"|");
        console.log("+-----------------------------------------------------------------------------------------+")
        ;
    });
}

console.log(printChemicalInfo(chemicals));

// 08 - function printChemicalInfo(chemicals)
// const chemicals = [
//     {
//       compoundId: 'CHEM001',
//       name: 'Aspirin',
//       formula: 'C9H8O4',
//       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//       molecularWeight: '180.16 g/mol',
//       meltingPoint: '135°C',
//       boilingPoint: '140°C',
//       solubility: 'Slightly soluble in water'
//     },
//     {
//       compoundId: 'CHEM002',
//       name: 'Caffeine',
//       formula: 'C8H10N4O2',
//       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//       molecularWeight: '194.19 g/mol',
//       meltingPoint: '238°C',
//       boilingPoint: '178°C',
//       solubility: 'Freely soluble in water'
//     },
//     {
//       compoundId: 'CHEM003',
//       name: 'Ethanol',
//       formula: 'C2H6O',
//       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//       molecularWeight: '46.07 g/mol',
//       meltingPoint: '-114.1°C',
//       boilingPoint: '78.37°C',
//       solubility: 'Miscible with water'
//     }
//   ];

//printChemicalInfo(chemicals)
//Expected output

// +-------------------------------------------------------+
// | Compound ID: CHEM001                                 |
// | Name: Aspirin                                        |
// | Formula: C9H8O4                                      |
// | Description: Aspirin is a common medication used to  |
// | reduce pain and inflammation.                        |
// | Molecular Weight: 180.16 g/mol                       |
// | Melting Point: 135°C                                 |
// | Boiling Point: 140°C                                 |
// | Solubility: Slightly soluble in water                |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                 |
// | Name: Caffeine                                       |
// | Formula: C8H10N4O2                                   |
// | Description: Caffeine is a stimulant found in coffee,|
// | tea, and various energy drinks.                      |
// | Molecular Weight: 194.19 g/mol                       |
// | Melting Point: 238°C                                 |
// | Boiling Point: 178°C                                 |
// | Solubility: Freely soluble in water                  |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                 |
// | Name: Ethanol                                        |
// | Formula: C2H6O                                       |
// | Description: Ethanol, also known as alcohol, is      |
// | commonly used as a solvent and in alcoholic beverages|
// | Molecular Weight: 46.07 g/mol                        |
// | Melting Point: -114.1°C                              |
// | Boiling Point: 78.37°C                               |
// | Solubility: Miscible with water                      |
// +-------------------------------------------------------+

// 09 - function getGetUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];

// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']

const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];

function getGetUniqueGuestList(guestList){
    let newlist = []
    for(let x = 0; x < guestList.length; x++) {
        if (!newlist.includes(guestList[x])) {
            newlist.push(guestList[x])
        }
    }
    return newlist
}

console.log(getGetUniqueGuestList(guestList));

function getGetUniqueGuestList1(guestList){
    return [...new Set(guestList)]
} 

console.log(getGetUniqueGuestList1(guestList));

// 10 - function showUserProfiles(user)
// User data

// const user1 = {
//     id: 1,
//     name: 'Carol Smith',
//     profile: {
//       social: {
//          twitter: 'carol.smith',
//          facebook: 'carol.smith77'
//      }
//    }
//};

// const user2 = {
//     id: 2,
//     name: 'Jane Smith',
//     profile: {
//       email: 'jane.smith@example.com'
//     }
//};

//   showUserProfile(user1); // Expected output: 'carol.smith, carol.smith77'
//   showUserProfile(user2); // Expected output: 'jane.smith@example.com'

const user1 = {
    id: 1,
    name: 'Carol Smith',
    profile: {
        social: {
            twitter: 'carol.smith',
            facebook: 'carol.smith77'
        }
    }
};

const user2 = {
    id: 2,
    name: 'Jane Smith',
    profile: {
        email: 'jane.smith@example.com'
    }
};

function showUserProfile(users){
    users.forEach(user => {
        console.log("ID:",user.id);
        console.log("Name:",user.name);
        console.log("Profile",user.profile);
        console.log("Twitter:", user.profile?.social?.twitter || 'N/A');
        console.log("Facebook:", user.profile?.social?.facebook || 'N/A');
        console.log("Email:", user.profile?.email || 'N/A');
    });
}

console.log(showUserProfile([user1, user2]));


// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output

// const leaderBoard = [
//   { player: "John", score: 80 },
//   { player: "Charlie", score: 20 },
//   { player: "Julio", score: 50 },
//   { player: "Bob", score: 80 },
//   { player: "Bobby", score: 11 },
//   { player: "Tommy", score: 43 },
//   { player: "Eric", score: 99 },
//   { player: "Alice", score: 100 },
//   { player: "Alfred", score: 30 },
// ];

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]

const leaderBoard = [
    { player: "John", score: 80 },
    { player: "Charlie", score: 20 },
    { player: "Julio", score: 50 },
    { player: "Bob", score: 80 },
    { player: "Bobby", score: 11 },
    { player: "Tommy", score: 43 },
    { player: "Eric", score: 99 },
    { player: "Alice", score: 100 },
    { player: "Alfred", score: 30 },
];

function sortLeaderBoardByScoreDesc(leaderBoard){
    return leaderBoard.sort((a,b) => b.score - a.score); //b - a te ordena de mayor a menor, y a - b de menor a mayor
}

console.log(sortLeaderBoardByScoreDesc(leaderBoard));


// 12 - function

// function getTopFiveWorstPlayers(leaderBoard)

// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

function getTopFiveWorstPlayers(leaderBoard){
    return leaderBoard.sort((a,b) => a.score - b.score).slice(0, 5);
}

console.log(getTopFiveWorstPlayers(leaderBoard));

// 13 - function safeCopy()
// const companyHierarchy = {
//     name: 'Company',
//     departments: [
//       {
//         name: 'Engineering',
//         head: 'Alice',
//         subDepartments: [
//           {
//             name: 'Backend',
//             head: 'Bob',
//             employees: ['Charlie', 'David']
//           },
//           {
//             name: 'Frontend',
//             head: 'Eve',
//             employees: ['Frank', 'Grace']
//           }
//         ]
//       },
//       {
//         name: 'Sales',
//         head: 'Henry',
//         employees: ['Isaac', 'Jane']
//       }
//     ]
//   };

// Deep copy function
// function safeCopy(obj) {
//      ToDo (complete the function here...)
//  }

//   // Example usage
//   const copiedHierarchy = safeCopy(companyHierarchy);

//   // Modify the copied hierarchy
//   copiedHierarchy.departments.push({
//     name: 'Marketing',
//     head: 'Karen',
//     employees: ['Liam', 'Mia']
//   });

//   // Verify independence
//   console.log('Original Company Hierarchy:');
//   console.log(companyHierarchy);

//   console.log('Copied Company Hierarchy with Modifications:');
//   console.log(copiedHierarchy);

const companyHierarchy = {
    name: 'Company',
    departments: [{
        name: 'Engineering',
        head: 'Alice',
        subDepartments: [{
            name: 'Backend',
            head: 'Bob',
            employees: ['Charlie', 'David']
        },
            {
            name: 'Frontend',
            head: 'Eve',
            employees: ['Frank', 'Grace']
            }
        ]
        },
        {
            name: 'Sales',
            head: 'Henry',
            employees: ['Isaac', 'Jane']
        }
        ]
    };

function safeCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const copiedHierarchy = safeCopy(companyHierarchy);
    
copiedHierarchy.departments.push({
    name: 'Marketing',
    head: 'Karen',
    employees: ['Liam', 'Mia']
});

console.log('Original Company Hierarchy:');
console.log(companyHierarchy);

console.log('Copied Company Hierarchy with Modifications:');
console.log(copiedHierarchy);