
class Animal {

    constructor(color='yellow', energy = 100){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()

        // if(this.energy != 0 ){
        //     this.energy -= 1;
        //     console.log("The value of the energy is",this.energy);
        // }else {
        //     this.sleep();
        // }

        if(this.energy > 0 ){
            this.energy -= 20;
            console.log("Energy is decreasing, currently at:",this.energy);
        }else if (this.energy == 0) {
            this.sleep();
        }
    }
    
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at: ', this.energy);
    }
    
    getColor() {
        console.log("The value of the color is",this.color);
    }
}


class Cat extends Animal {
    constructor(sound='purr', canJumpHigh=true, canClimbTrees = true, color, energy) {
        // super.color = this.color;  
        // super.energy = this.energy;  
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    
    makeSound(){
        console.log("The value of the energy is",this.sound);
    }
}


class Bird extends Animal {
    constructor(sound='chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound(){
        console.log(this.sound);
    }
}


class HouseCat extends Cat {
    constructor(houseCatSound='meow', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees,  color,energy);  
        this.houseCatSound = houseCatSound;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.houseCatSound);

    }
}


class Tiger extends Cat {
    constructor(tigerSound='Roar!', sound, canJumpHigh, canClimbTrees, color, energy) { 
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}


class Parrot extends Bird {
    constructor(canTalk=false, sound, canFly, color, energy) { 
        super(sound,canFly,color,  energy);
        this.canTalk = canTalk;
    }
    
    makeSound(option){
        if(option){
            super.makeSound();
        }

        if (this.canTalk){
            console.log("I'm a talking parrot!");
        }
    }

}


var polly = new Parrot(true);  //we're passing `true` to the constructor so that polly can talk.
var fiji = new Parrot(false);  //we're passing `false` to the constructor so that polly cannot talk.


polly.makeSound(); // 'chirp', "I'm a talking parrot!"
fiji.makeSound();   // 'chirp'

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird('shriek', false, 'black and white', 200); // setting all the custom properties
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();


var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}



const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('----- for-in is unreliable -----');
for (prop in sportsCar){
}
console.log('😄', "Iterating over object AND its prototype!");

console.log('------ for-of is reliable ----');
for (prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}
console.log('🔍', 'Iterating over object\'s OWN PROPERTIES only!');



const fruits = ['mango', 'pineapple', 'guava', 'banana']
function appendIndex(fruit, number){
    console.log(`${number} . ${fruit}`)
}

fruits.forEach(appendIndex)


// const veggies = ['carrot', 'cabbage', 'okro', 'tomato']
// veggies.forEach(function(veggie, index){
//     console.log(`${index}. ${veggie}`)
// })

// Arrow functions and forEach
const veggies = ['carrot', 'cabbage', 'okro', 'tomato']
veggies.forEach((veggie, index) => console.log(`${index}. ${veggie}`))


// filter  Similar to the forEach() method, the filter() 
// method also accepts a function and that function performs some work on each of the items in the array
const nums = [0, 10, 20, 30, 40, 50]
console.log(nums.filter((num)=> { return num > 20; }))  // nums.filter(fucntion(num){ return num>20; })


//Map Method
console.log([0, 10, 20, 30, 40, 50].map( function(num){
    return num / 10
}))

//Converting an object into an array
const result = [];

const drone = {
    speed: 100,
    color: 'blue',
}

const dronekeys = Object.keys(drone);
dronekeys.forEach((key)=> result.push(key, drone[key]))

console.log(result)


// the Map Method 
let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The third place');

console.log( bestBoxers);
console.log( bestBoxers.get(2));


// Working with Sets 
// new Set(); 
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'pea']
const uniqueFruit = new Set(repetitiveFruits);
console.log(uniqueFruit)

// The Spread and Rest Operator
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);


// The spread operator 
// using the spread operator to concatenate arrays 

const fruit = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitAndberries = [...fruit, ...berries]

console.log(fruitAndberries)


const flying =  {wings: 2}
const vehicle =  {wheels: 4}
const flyingVehicle = {...flying, ...vehicle}
console.log(flyingVehicle)

// Add new members to arrays without using the push() method 
let veg = ['onion', 'parsley']
veg = [...veg, 'carrot', 'beetroot'];
console.log(veg);

//Using the spread to convert string to an array
const greet = 'Hello';
const arrayofChars = [...greet];
console.log(arrayofChars)

//copy an object 
const car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1}
car2.speed = 205;
console.log(car2.speed, car1.color, car1.speed)
console.log(car2)
console.log(car1)


const meal = ["soup", "steak", "ice cream"]
let [starter, work, sup] = meal;
console.log(starter);
console.log(sup);
console.log(work);
