let expenditure = [
    {
        title: "Lunch",
        amount: 200
    },
    {
        title: "Bus",
        amount: 50
    },
];
function addExpense(title, amount){
    let expense = {
        title: title,
        amount: amount
    };
    expenditure.push(expense);
}
addExpense("coffee", 120);
addExpense("movie", 350);
addExpense("groceris", 950);
addExpense("internet bill", 799);
console.log("expenditure list");

for(let i=0; i<expenditure.length; i++){
    console.log(
        expenditure[i].title+" -$ "+expenditure[i].amount
    );
}
let total = 0;

for (let i = 0; i < expenditure.length; i++) {
    total += expenditure[i].amount;
}

console.log("----------------");
console.log("Total = ₹" + total);