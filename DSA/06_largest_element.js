let numbers = [34,67,86,32,98];
let largest = numbers[0];
for(i=1;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}
console.log("largest number is:",largest);