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

const finalBalance = [];
let totalIncome = 0;
let totalExpense = 0;
let balance = 0;

for (let i = 0; i < transactions.length; i++) {
    for (let key in transactions[i]) {
       if (typeof transactions[i][key] === "number") {
            console.log(transactions[i][key]);
       }
    }
} //dont know what is next step