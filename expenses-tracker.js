const account = {
    name : 'Dolly',
    expenses : [],
    addExpenses :  function (description, cost){
        this.expenses.push({
            description : description,
            cost : cost
        })
    }
}

account.addExpenses('Rent', 150);
account.addExpenses('Coffee', 2);
console.log(account);
