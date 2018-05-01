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
        let totalIncome = 0;
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.cost;
        })
        this.income.forEach(function(income){
            totalIncome = totalIncome + income;
        })
        let totalBalance = totalIncome - totalExpenses;
        return `${this.name} has a Balance of $${totalBalance}.$${totalIncome} in Income. $${totalExpenses} in expenses.`
    },
    income : [],
    addIncome : function(description, amount){
        this.income.push({
          description : description,
          amount : amount ,
        })
    },
    
}



account.addExpenses('Rent', 550);
account.addExpenses('Coffee', 2);
account.addIncome('job', 1000);
console.log(account);
console.log(account.getAccountSummary());