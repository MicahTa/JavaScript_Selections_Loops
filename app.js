// 1
for (let i = 1; i<=100; i++) {
    if (i%2==1) {
        console.log(i);
    }
}

// 2
for (let i = 0; i<=100; i++) {
    console.log(i);
    if ((i%3 == 0)&&((i%5 == 0))) {
        console.log("FizzBuzz");
        continue;
    }
    if (i%3 == 0) {
        console.log("fizz");
    }
    if (i%5 == 0) {
        console.log("buzz");
    }
}

// 3
let i = 0;
do {
    i++
    if (i%2==1) {
        console.log(i);
    }
} while (i<100)

i = 0;
do {
    i ++
    console.log(i);
    if ((i%3 == 0)&&((i%5 == 0))) {
        console.log("FizzBuzz");
        continue;
    }
    if (i%3 == 0) {
        console.log("fizz");
    }
    if (i%5 == 0) {
        console.log("buzz");
    }
} while (i<100)

// 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i<=n; i++) {
    if (value == i) {
        console.log("Found value");
        break;
    } else if (i == n) {
        console.log("Did not find value");
    }
}

// 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

console.log(`Fizz ${fizzDivisor}`);
console.log(`Buzz ${buzzDivisor}`);
console.log(`Start ${start}`);
console.log(`End ${end}`);

for (let i = start; i<=end; i++) {
    console.log(i);
    if ((i%fizzDivisor == 0)&&((i%buzzDivisor == 0))) {
        console.log("FizzBuzz");
        continue;
    }
    if (i%fizzDivisor == 0) {
        console.log("fizz");
    }
    if (i%buzzDivisor == 0) {
        console.log("buzz");
    }
}