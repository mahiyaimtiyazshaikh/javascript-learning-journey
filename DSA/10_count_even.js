let numbers = [10, 15, 22, 33, 48, 51];

let count = 0;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        count++;
    }

}

console.log("Even Numbers =", count);
