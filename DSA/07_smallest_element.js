let numbers = [85,97,12,31,64,75];
let smallest = numbers[0];
for(i=1;i<numbers.length;i++){
    if(numbers[i]<smallest){
        smallest=numbers[i];
    }
}
console.log("smallest number is:",smallest);