class Building {
    what = 'Building'
    floors = 0;

    constructor(floors) {
        this.floors = floors;
    }

    countFloors() {
        console.log(`I have ${this.floors}`);
    }
}

const myHouse = new Building(3);
myHouse.countFloors();