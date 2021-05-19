class Building {
    type = '';
    floors = '';

    constructor(type, floors) {
        this.type = type;
        this.floors = floors;
    }
}

const office = new Building('office', 3);
const home = new Building('home', 10);