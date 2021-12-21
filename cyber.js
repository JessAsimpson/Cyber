const inquirer = require("inquirer");
const chalk = require('chalk');
const figlet = require("figlet");

figlet('Cyber Pet!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    } console.log(data);
});


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
            "Feed",
            "Give a Drink",
            "Play",
            "Give Cuddles",
            "Let's Have a Sleep",
            "Give a Bath"
        ]
    }
]

class Animal {
    constructor(name) {
        this._name = name,
            this._health = 50,
            this._hunger = 50,
            this._thirst = 50,
            this._tiredness = 50,
            this._happiness = 50
    }

    increaseHealth() {
        this._health += 10;
    }
    reduceHealth() {
        this._health -= 10;
    }
    increaseHunger() {
        this._hunger += 10;
    }
    reduceHunger() {
        this._hunger -= 10;
    }
    increaseThirst() {
        this._thirst += 10;
    }
    reduceThirst() {
        this._thirst -= 10;
    }
    increaseTiredness() {
        this._tiredness += 10;
    }
    reduceTiredness() {
        this._tiredness -= 10;
    }
    increaseHappiness() {
        this._happiness += 10;
    }
    reduceHappiness() {
        this._happiness -= 10;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
        this._type = "Cat"
    }

    get type() {
        return this._type
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this._type = "Dog"
    }

    get type() {
        return this._type
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name)
        this._type = "Rabbit"
    }

    get type() {
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
const warnings = () => {
    if (userPet._health <= 20) {
        console.log(chalk.yellow("Your pets health is low!"));
    } if (userPet._hunger >= 80) {
        console.log(chalk.yellow("You need to feed your pet!"));
    } if (userPet._thirst >= 80) {
        console.log(chalk.yellow("Your pet needs a drink!"));
    } if (userPet._tiredness >= 80) {
        console.log(chalk.yellow("Your pet needs a sleep!"));
    } if (userPet._happiness <= 20) {
        console.log(chalk.yellow("Your pet needs some attention!"));
    }
}
const hunger = () => {
    if (userPet._hunger >= 80)
        userPet._happiness -= 10;
}
const thirst = () => {
    if (userPet._thirst >= 80)
        userPet._happiness -= 10;
}
const tiredness = () => {
    if (userPet._tiredness >= 80)
        userPet._happiness -= 10;
}
const game = () => {
    inquirer.prompt(gameQuestions)
        .then((answer) => {
            if (userPet._health == 0) {
                throw new Error("Game Over!")
            } else if (userPet._hunger == 100) {
                console.log(chalk.redBright.bold("Your pet is too hungry!"));
                throw new Error("Game Over!")
            } else if (userPet._thirst == 100) {
                console.log(chalk.redBright.bold("Your pet is too thirsty!"));
                throw new Error("Game Over!")
            } else if (userPet._tiredness == 100) {
                console.log(chalk.redBright.bold("Your pet is too tired!"));
                throw new Error("Game Over!")
            } else if (userPet._happiness == 0) {
                console.log(chalk.redBright.bold("Your pet is too unhappy!"));
                throw new Error("Game Over!")
            }

            // sort this the options :)
            else if (answer.activities == "Feed") {
                console.log(chalk.blue("Feeding your pet"));
                userPet.reduceHunger();
                userPet.increaseThirst();
                userPet.increaseHealth();
                userPet.increaseHappiness();
                warnings();
                hunger();
                thirst();
                tiredness();
            } else if (answer.activities == "Play") {
                console.log(chalk.blue("Playing with your pet"));
                userPet.increaseTiredness();
                userPet.increaseHappiness();
                userPet.increaseHealth();
                userPet.increaseHunger();
                userPet.increaseThirst();
                warnings();
                hunger();
                thirst();
                tiredness();
            } else if (answer.activities == "Give a Drink") {
                console.log(chalk.blue("Giving your pet a drink"));
                userPet.reduceThirst();
                userPet.increaseHealth();
                userPet.increaseHappiness();
                warnings();
                hunger();
                thirst();
                tiredness();
            } else if (answer.activities == "Give Cuddles") {
                console.log(chalk.blue("Giving your pet cuddles"));
                userPet.increaseHappiness();
                userPet.increaseTiredness();
                userPet.increaseHunger();
                userPet.increaseThirst();
                warnings();
                hunger();
                thirst();
                tiredness();
            } else if (answer.activities == "Give a Bath") {
                console.log(chalk.blue("Giving your pet a bath"));
                userPet.reduceeHappiness();
                userPet.increaseTiredness();
                userPet.increaseHunger();
                userPet.increaseThirst();
                warnings();
                hunger();
                thirst();
                tiredness();
            } else if (answer.activities == "Let's Have a Sleep") {
                console.log(chalk.blue("Letting your pet have a nice sleep"));
                userPet.increaseHunger();
                userPet.increaseThirst();
                userPet.increaseHappiness();
                userPet.reduceTiredness();
                warnings();
                hunger();
                thirst();
                tiredness();
            }
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
