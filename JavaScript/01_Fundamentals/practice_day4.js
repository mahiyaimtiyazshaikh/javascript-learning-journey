// even odd code
function result(a){
    if(a % 2 ==0){
        return "even";
    }
    else{
        return "odd";
}
}
console.log(result(10));
console.log(result(13));

// largest number

function largeno(a,b,c){
    if(a>=b&&a>=c){
        console.log(a,"is the largest number");
    }
    else if(b>=a&&b>=c){
        console.log(b,"is the largest number");
    }
    else{
        console.log(c,"is the largest number");
    }
}
largeno(12,45,78)

// calculator

function calculate(a,b,sign){
    if(sign === "+"){
        console.log("ans =",a + b);
    }
    else if(sign === "-"){
        console.log("ans =",a - b);
    }
    else if(sign === "*"){
        console.log("ans =", a * b);
    }
    else if(sign === "/"){
        if(b !== 0){
            console.log("ans =",a / b);
        }
        else{
            console.log("division by 0 is not allowed");
        }
    }
    else{
        console.log("invalid sign");
    }
}
calculate(23,67,"+");
calculate(23,67,"-");
calculate(23,67,"*");
calculate(23,67,"/");
calculate(23,0,"/");
calculate(23,67,"%");
