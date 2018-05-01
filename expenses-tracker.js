const account = {
    name : 'Dolly',
    expenses : [],
    addExpenses :  function (description, cost){
        this.expenses.push({
            description : description,
            cost : cost
        })
    },
    getAccountSummary : function () {
        let totalExpenses = 0;
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.cost;
        })
        return `${this.name} has $${totalExpenses} in expenses.`
    }
}



account.addExpenses('Rent', 150);
account.addExpenses('Coffee', 2);
console.log(account);
console.log(account.getAccountSummary());