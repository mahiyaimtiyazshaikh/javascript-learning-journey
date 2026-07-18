let no = [1,2,3,4,5];
let sum = no.reduce((total,num)=>total + num,0);
let avg = (sum/no.length);
console.log("average=",avg);