/*

    IMITATE PROTOTYPE WITH CLASS HOMEWORK

*/

class Bird {
    constructor(type, color) {
        this.type = type
        this.color = color
        this.eggs = 0
    }

    laying_eggs() {
        this.eggs++
        return `${this.type} is laing eggs. Eggs laied: ${this.eggs}`
    }
}

class WalkBirds extends Bird {
    constructor(type, color) {
        super(type, color)
    }
    walk() {
        return `${this.type} is walking!`
    }
}

class FlyBirds extends Bird {
    constructor(type, color) {
        super(type, color)
    }
    fly() {
        return `${this.type} is flying!`
    }
}

const penguin = new WalkBirds('Penguin', 'white and black')
const parrot = new FlyBirds("Parrot", 'green')

console.log(penguin.walk())
console.log(parrot.fly())

console.log(penguin.laying_eggs())
console.log(parrot.laying_eggs())