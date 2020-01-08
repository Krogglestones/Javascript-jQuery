//You have a bank account object as shown below

let myAccount = {
	name: 'Craig',
	expenses: 0,
	income: 0
}

// Complete the following functions


let addExpense = function (expense) {
	myAccount.expenses += expense;
}

let addIncome = function (amount) {
	myAccount.income += amount;
}

let resetAccount = function () {
	myAccount.income = 0;
	myAccount.expenses = 0;

	return `\nAccount for ${myAccount.name} has been reset.\nINCOME: ${myAccount.income}\nEXPENSES: ${myAccount.expenses}`
}


// read out account summary with template string

let getAccountSummary = function () {
	let balance = myAccount.income - myAccount.expenses;

	return `\nAccount for ${myAccount.name} has $${balance} with $${myAccount.income} in income and $${myAccount.expenses} in expenses.\n`

}


//Complete the following actions with your functions:

// add income of 2000

addIncome(2000);

// add expense of 259.50

addExpense(259.50);

// get account summary (log to console)

console.log(getAccountSummary());

// reset account (log result to console)

console.log(resetAccount());
