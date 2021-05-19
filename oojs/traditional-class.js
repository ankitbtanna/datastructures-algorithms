// constructor
// properties - per instance
function Building(floors) {
    this.what = 'Building';
    this.floors = floors;
}

Building.prototype.countFloors = function () {
    console.log(`I have ${this.floors}`);
}

var myHouse = new Building(3);
myHouse.countFloors();
// { what: "building", floors: 3 };