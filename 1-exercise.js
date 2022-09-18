/*

    CLOSURE EXERCISE

*/


function getMathModule(x) {
    // private
    let y;
    function setValueY(val) {
        y = val
    }

    // public
    return {
        sum: function (y) {
            setValueY(y)
            return x + y
        },
        substract: function (y) {
            setValueY(y)
            return x - y
        },
        multiply: function (y) {
            setValueY(y)
            return x * y
        },
        devide: function (y) {
            setValueY(y)
            return x / y
        }
    }
}

const mathModule = getMathModule(10)
console.log(mathModule.sum(2)) // result -> 12
console.log(mathModule.substract(2)) // result -> 8
console.log(mathModule.multiply(2)) // result -> 20
console.log(mathModule.devide(2)) // result -> 5

