class Dog {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = Boolean("of course")
    }
    sit() {
        // sitting code goes here
    }
    fetch() {
        // fetching code goes here
    }
}
class GuardDog extends Dog {
    constructor(name, breed, isGoodBoy, attackWord) {
        super(name, breed, isGoodBoy)
        this.attackWord = attackWord
    }
    bark() {
        // barking code here
    }
}
// create an instance of the Dog parent class
const fluffy = new Dog("Fluffy", "Toy Poodle")
// create an instance of the GuardDog child class
const cujo = new GuardDog("Cujo", "St. Bernard", "Go")




class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }


    hunt() {
        this.food += 2
    }

    eat() {
        if (this.food > 0) {
            this.isHealthy = true
        }

        else {
            return this.isHealthy = false
        }

        this.food -= 1



    }

    
}

class Doctor extends Traveler {
    constructor(name, isHealthy) {
        super(name, isHealthy)
        this.isHealthy = true
        this.food = 1
    }

    heal(traveler) {
        traveler.isHealthy = true

    }


}

class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2

    }


    hunt() {
        this.food += 5
       

    }

    eat() {
        if (this.food > 1) {
            this.food -= 2
            this.isHealthy = true

        }
        else {
            this.isHealthy = false
            this.food -= 1

        }


    }




    giveFood(traveler, numOfFoodUnits) {
        if (this.food > numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits


        }


    }


}

const healme = new Doctor('Dr. Smith');
const riflechick = new Hunter('Sara');

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }


    join(traveler) {



        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }

    }


    shouldQuarantine() {
        const imsosick = this.passengers.some(traveler => traveler.isHealthy === false)
        return imsosick
    }


    totalFood() {
        let currentFood = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            currentFood += this.passengers[index].food
        }
        return currentFood
    }


}









// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);


