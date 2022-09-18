/*

    PROTOTYPAL INHERITANCE HOMEWORK

*/

function Bird(type, color){
    this.type = type
    this.color = color
    this.eggs = 0
}

Bird.prototype.laying_eggs = function(){
    this.eggs++
    return `${this.type} is laing eggs. Eggs laied: ${this.eggs}`
}

function WalkBirds(type, color){
    Bird.call(this, type, color)
    this.walk = function (){
        return `${this.type} is walking!`
    }
}
Object.setPrototypeOf(WalkBirds.prototype, Bird.prototype)

function FlyBirds(type, color){
    Bird.call(this, type, color)
    this.fly = function(){
        return `${type} is flying!`
    }
}
Object.setPrototypeOf(FlyBirds.prototype, Bird.prototype)

const parrot = new FlyBirds('Parrot','green')
const penguin = new WalkBirds('Penguin', 'white and black')

console.log(parrot.fly())
console.log(penguin.walk())

console.log(parrot.laying_eggs())
console.log(penguin.laying_eggs()) 