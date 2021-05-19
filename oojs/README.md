# OOJS

## Cooking DS & A
- We are going to cook
![](./images/image-1.PNG)
- Its a cooking class
- I'll teach cooking
- You can ask question
- Its interactive
- Then you get to do it
- It needs practice
- Its complex and it takes time
- Beyond this class you'll need to continue to cook

## Agenda and Scope
- Recursion and OOJS
- Time Complexity and Sorting
- Trees and Searching Algorithms
- Graphs and Paths
- Hash Tables and Hashing
- Advanced applications and Optimizations

## What is this class about?
- A practical intro to DS & A
- Common technical questions
- Starting point to up your programming and interview game
- Dont make it intimidating
- Learning lab and not one way conversation

## Pseudoclassical JavaScript
- Lot of people are afraid of it
- What goes through your head when someone asks about DS & A
- JS did not have any formally way of writing classes hence pseudoclassical
- Data Structure
* How you organise the data
* A schema
* A structure to contain the data
* A container for data that fits different needs

## Defining a class
- We'll use a modern class keyword
- Function prototypical is a bit outdated
- Class
* What is it?
* What does it have?
* What does it do?

### Traditional JavaScript Class
```javascript
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
```

### Modern JavaScript Class
```javascript
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
```

