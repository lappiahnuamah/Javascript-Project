class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }

    lightsStatus(){
        console.log('Lights on?', this.lightsOn);
    }

    getSelf(){
        console.log(this)
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


var firstTrain = new Train('red', true);
var secondTrain = new Train('blue', false);

// firstTrain.getPrototype()
// firstTrain.getSelf()
// firstTrain.toggleLights()
// firstTrain.lightsStatus()
// firstTrain.toggleLights()
// firstTrain.lightsStatus()

// Inhertiance
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}


var firstHighSpeedTrain = new HighSpeedTrain(100, 10,'red', true);
firstHighSpeedTrain.toggleLights()
firstHighSpeedTrain



// New Class All Together - Looking at Classes into Details
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //