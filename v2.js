let userInput = {
    selectedPet: "dog",
    name: "Spot",
    // add more data if you wish
}


class Animal {
    constructor (name) {
        this._name = name,
        this._health = 50,
        this._hunger = 50,
        this._thirst = 50,
        this._tiredness = 50,
        this._happiness = 50
    }

    increaseHealth () {
        this._health ++
    }
    reduceHealth () {
        this._health --
    }
    increaseHunger () {
        this._hunger ++
    }
    reduceHunger () {
        this._hunger --
    }
    increaseThirst () {
        this._thirst ++
    }
    reduceThirst () {
        this._thirst --
    }
    increaseTiredness () {
        this._tiredness ++
    }
    reduceTiredness () {
        this._tiredness --
    }
    increaseHappiness () {
        this._happiness ++
    }
    reduceHappiness () {
        this._happiness --
    }
   
    // function to reduce health
    // func to increase/decrease hunger
    // func to increase/decrease thirst
    // func to play
    // func to exercise
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
        this._type = "Dog"
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

// Define global variable to store class
let usersPet

const startGame = () => {
    if (userInput.selectedPet === "cat") {
        usersPet = new Cat(userInput.name)
    }
    else if (userInput.selectedPet == "dog") {
        usersPet = new Dog(userInput.name)
    }
    else if (userInput.selectedPet == "rabbit") {
        usersPet = new Rabbit(userInput.name)
    }


    console.log("the game has started, you chose:")
    console.log(usersPet)
}

startGame()

// setInterval(() => {
//     console.log(usersPet)
//     usersPet.reduceHealth();
//     usersPet.reduceHappiness();
//     usersPet.increaseHunger();
//     usersPet.increaseThirst();
//     usersPet.increaseTiredness();  
// }, 100`0);

// // instead of timeout make this an event listener
// setTimeout(() => {
//     usersPet.increaseHealth()
// }, 5000)



