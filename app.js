let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

console.log(`Fizz ${fizzDivisor}`);
console.log(`Buzz ${buzzDivisor}`);
console.log(`Start ${start}`);
console.log(`End ${end}`);

for (let i = start; i<=end; i++) {
    console.log(i);
    if (i%fizzDivisor == 0) {
        console.log("fizz");
    }
    if (i%buzzDivisor == 0) {
        console.log("buzz");
    }
}