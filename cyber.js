const inquirer = require("inquirer");
let startQuestions = [
    {
        name: 'pet',
        message: 'Choose Your Pet',
        type: "list",
        choices: ["Dog", "Cat", "Rabbit"]

    },
    {
        name: "name",
        message: "Great choice, what are you going to name them?",
        type: 'input'
    }
]

let gameQuestions = [
    {
        name: "activities",
        message: "What would you like to do with your pet",
        type: "list",
        choices: [
            "Feed" ,
            "Give a Drink",
            "Play",
            "Give Cuddles",
            "Let's Have a Sleep",
            "Give a Bath"
        ]
    }
]

class Animal {
    constructor (name) {
        this._name = name,
        this._health = 50,
        this._hunger = 50,
        this._thirst = 50,
        this._tiredness = 50,
        this._happiness = 50
    }

    increaseHealth() {
        this._health ++;
    }
    reduceHealth () {
        this._health --;
    }
    increaseHunger () {
        this._hunger ++;
    }
    reduceHunger () {
        this._hunger --;
    }
    increaseThirst () {
        this._thirst ++;
    }
    reduceThirst () {
        this._thirst --;
    }
    increaseTiredness () {
        this._tiredness ++;
    }
    reduceTiredness () {
        this._tiredness --;
    }
    increaseHappiness () {
        this._happiness ++;
    }
    reduceHappiness () {
        this._happiness --;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
        this._type = "Cat"
    }
    
    get type () {
        return this._type
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this._type = "Dog",
        this._barks = true
    }

    get type () {
        return this._type
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name)
        this._type = "Rabbit"
    }

    get type () {
        return this._type
    }
}

let userPet

const initGame = () => {
    inquirer.prompt(startQuestions)
    .then((answer) => {
        if (answer.pet == "Dog") {
            userPet = new Dog(answer.name)
        } else if (answer.pet == "Cat") {
            userPet = new Cat(answer.name)
        } else if (answer.pet == "Rabbit") {
            userPet = new Rabbit(answer.name)
        }
    })
    .then(() => game())
    .catch((err) => console.log(err))
    
}

const game = () => {
    inquirer.prompt(gameQuestions)
        .then((answer) => {
            if (userPet._health <= 0) {
                throw new Error("Game Over")
            }
            // sort this the options :)
            else if (answer.activities == "Feed") {
                console.log("Feeding your pet")
                userPet.reduceHunger();
                userPet.increaseThirst();
                userPet.increaseHealth();
                userPet.increaseHappiness(); 
            } else if (answer.activities == "Play") {
                userPet.increaseTiredness();
                userPet.increaseHappiness();
                userPet.increaseHealth();
                userPet.increaseHunger();
                userPet.increaseThirst();
            } else if (answer.activities == "Give a Drink"){
                userPet.reduceThirst();
                userPet.increaseHealth();
                userPet.increaseHappiness();
            } else if (answer.activities == "Give Cuddles"){
                userPet.increaseHappiness();
                userPet.increaseTiredness();
                userPet.increaseHunger();
                userPet.increaseThirst();
            } else if (answer.activities == "Give a Bath") {
                userPet.increaseHappiness();
                userPet.increaseTiredness();
                userPet.increaseHunger();
                userPet.increaseThirst();
            } else if (answer.activities == "Let's Have a Sleep") {
                userPet.increaseHunger();
                userPet.increaseThirst();
                userPet.increaseHappiness();
                userPet.reduceTiredness();
            }
            console.log(answer.activities)
        })
        .then(() => {
            console.table(userPet)
        })
        .then(() => {
            game()
        })
        .catch((err) => console.log(err))

}

initGame()
