/*input 
const transactions = [
    { type: 'income', amount: 1200 },
    { type: 'expense', amount: 200 },
    { type: 'income', amount: 150 },
    { type: 'expense', amount: 500 },
    { type: 'income', amount: 90 },
    { type: 'expense', amount: 120 }
];
output
//
{
    totalIncome: 1440,
    totalExpense: 820,
    balance: 620
} */

const transactions = [
    { type: 'income', amount: 1200 },
    { type: 'expense', amount: 200 },
    { type: 'income', amount: 150 },
    { type: 'expense', amount: 500 },
    { type: 'income', amount: 90 },
    { type: 'expense', amount: 120 }
];

const finalBalance = {};
let totalIncome = 0;
let totalExpense = 0;
let balance = 0;

for (let i = 0; i < transactions.length; i++) {
    for (key in transactions[i]) {
       if (transactions[i][key] === "income") {
        totalIncome += transactions[i].amount;
        console.log(totalIncome);
       } else if (transactions[i][key] === "expense") {
        totalExpense += transactions[i].amount;
        console.log(totalExpense);
       }
       finalBalance.balance = totalIncome - totalExpense;
    }
} 
finalBalance.totalIncome = totalIncome;
finalBalance.totalExpense = totalExpense;

console.log(finalBalance);
