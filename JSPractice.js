const one = 1; // modern, use when value should not be changed
var top = "top"; // older, don't use
let ball = "ball"; // modern, use when value may need to change
console.log("Variables: ", ball, top, one);


try {
    one = 2; // will return error because const variables cannot be reassigned
} catch (err) {
    console.log(err);
}

ball = "not ball";
console.log("variables: ", ball, top, one);

class ConstError {
  // custom error
    constructor(message) {
        this.message = "cannot reassign variables declared with const";
        this.name = "ConstError";
    }
